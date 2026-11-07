// ===== Khung chung: header, điều hướng, thanh cài đặt =====
import { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import SettingsBar from './SettingsBar.jsx';
import { VoiceNotice } from './AudioControls.jsx';
import { stop } from '../utils/speech.js';

const NAV = [
  ['/', 'Trang chủ', '🏠'],
  ['/dialogues', 'Hội thoại', '🎭'],
  ['/questions', 'Hỏi đáp', '💬'],
  ['/exam', 'Thi thử', '⏱'],
  ['/backup', 'Sao lưu', '💾'],
];

export default function Layout() {
  const { pathname } = useLocation();

  // Rời trang thì dừng giọng đọc (speechSynthesis.cancel) và cuộn lên đầu
  useEffect(() => {
    stop();
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-inner">
          <NavLink to="/" className="brand">
            🌸 JPD326 <span>Speaking</span>
          </NavLink>
          <nav className="nav">
            {NAV.map(([to, label, icon]) => (
              <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'on' : ''}`}>
                <span className="nav-icon">{icon}</span>
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="container">
        <SettingsBar />
        <VoiceNotice />
        <Outlet />
      </main>
      <footer className="footer">JPD326 Speaking · luyện tập mỗi ngày một chút 🌸</footer>
    </div>
  );
}
