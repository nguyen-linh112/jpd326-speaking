// ===== Ghi âm bằng MediaRecorder =====
// Ghi âm chỉ lưu tạm trong bộ nhớ (blob URL), KHÔNG upload đi đâu cả.
import { useCallback, useEffect, useRef, useState } from 'react';

export function useRecorder() {
  const [recording, setRecording] = useState(false);
  const [paused, setPaused] = useState(false);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState('');
  const [seconds, setSeconds] = useState(0);

  const recRef = useRef(null);
  const chunksRef = useRef([]);
  const streamRef = useRef(null);
  const timerRef = useRef(null);
  const urlRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const releaseStream = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  };
  const revoke = () => {
    if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    urlRef.current = null;
  };

  /** Bắt đầu ghi. Trả về true nếu thành công. */
  const start = useCallback(async () => {
    setError('');
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      setError('Trình duyệt không hỗ trợ ghi âm (cần HTTPS hoặc localhost).');
      return false;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const rec = new MediaRecorder(stream);
      chunksRef.current = [];
      rec.ondataavailable = (e) => e.data.size && chunksRef.current.push(e.data);
      rec.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: rec.mimeType || 'audio/webm' });
        revoke();
        urlRef.current = URL.createObjectURL(blob);
        setUrl(urlRef.current);
        releaseStream();
        clearTimer();
        setRecording(false);
        setPaused(false);
      };
      revoke();
      setUrl(null);
      setSeconds(0);
      rec.start();
      recRef.current = rec;
      setRecording(true);
      timerRef.current = setInterval(() => {
        if (recRef.current?.state === 'recording') setSeconds((s) => s + 1);
      }, 1000);
      return true;
    } catch (e) {
      setError(
        e && e.name === 'NotAllowedError'
          ? 'Bạn chưa cho phép dùng micro. Hãy bật quyền micro cho trang này.'
          : 'Không bật được micro: ' + (e?.message || 'lỗi không xác định'),
      );
      releaseStream();
      return false;
    }
  }, []);

  const stop = useCallback(() => {
    if (recRef.current && recRef.current.state !== 'inactive') recRef.current.stop();
  }, []);

  /** Tạm dừng / tiếp tục (dùng ở thi thử: chỉ ghi lúc đang nói). */
  const pause = useCallback(() => {
    if (recRef.current?.state === 'recording') {
      recRef.current.pause();
      setPaused(true);
    }
  }, []);
  const resume = useCallback(() => {
    if (recRef.current?.state === 'paused') {
      recRef.current.resume();
      setPaused(false);
    }
  }, []);

  const reset = useCallback(() => {
    if (recRef.current && recRef.current.state !== 'inactive') {
      recRef.current.onstop = null;
      recRef.current.stop();
    }
    releaseStream();
    clearTimer();
    revoke();
    setUrl(null);
    setRecording(false);
    setPaused(false);
    setSeconds(0);
    setError('');
  }, []);

  // Dọn dẹp khi rời trang
  useEffect(
    () => () => {
      if (recRef.current && recRef.current.state !== 'inactive') {
        recRef.current.onstop = null;
        recRef.current.stop();
      }
      releaseStream();
      clearTimer();
      revoke();
    },
    [],
  );

  return { recording, paused, url, error, seconds, start, stop, pause, resume, reset };
}
