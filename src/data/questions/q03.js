// 質問3 (第7課) – Tìm hiểu thông tin về câu lạc bộ trước khi tham gia
const t = (ja, vi) => ({ ja, vi });

export default {
  id: 3,
  lesson: 7,
  question: t('{大学|だいがく}のあるクラブに{参加|さんか}する{前|まえ}に、どうやってそのクラブの{情報|じょうほう}を{調|しら}べましたか。あなたは{自分|じぶん}の{経験|けいけん}を{話|はな}してください。', 'Trước khi tham gia một câu lạc bộ ở trường đại học, bạn đã tìm hiểu thông tin về câu lạc bộ đó bằng cách nào? Hãy kể kinh nghiệm của bạn.'),
  guide: [
    t('あなたはどのクラブに{入|はい}りましたか。', 'Bạn đã vào câu lạc bộ nào?'),
    t('そのクラブに{参加|さんか}する{前|まえ}にどこから{情報|じょうほう}を{調|しら}べたか{詳|くわ}しく{話|はな}してください。', 'Hãy nói chi tiết trước khi tham gia, bạn đã tìm thông tin từ đâu.'),
  ],
  expressions: [
    {
      pattern: '{友|とも}だち、{大学|だいがく}のサイトなどから〜わかりました／{知|し}りました',
      meaning: 'từ bạn bè, trang web trường… tôi đã biết / hiểu được …',
      examples: [
        t('{友|とも}だちから、サッカークラブのことを{知|し}りました。', 'Tôi biết về câu lạc bộ bóng đá qua bạn bè.'),
        t('{大学|だいがく}のサイトで、{活動|かつどう}の{時間|じかん}がわかりました。', 'Tôi biết thời gian hoạt động qua trang web của trường.'),
      ],
    },
    {
      pattern: '〜に{入|はい}りました',
      meaning: 'tôi đã vào (tham gia) …',
      examples: [t('{私|わたし}は{日本語|にほんご}クラブに{入|はい}りました。', 'Tôi đã vào câu lạc bộ tiếng Nhật.')],
    },
    {
      pattern: '〜を{聞|き}きました',
      meaning: 'tôi đã nghe (kể) về …',
      examples: [t('{先輩|せんぱい}から{話|はなし}を{聞|き}きました。', 'Tôi đã nghe anh chị khóa trên kể chuyện.')],
    },
    {
      pattern: 'レビュー',
      meaning: 'bài đánh giá',
      examples: [t('インターネットで、クラブのレビューを{読|よ}みました。', 'Tôi đã đọc đánh giá về câu lạc bộ trên mạng.')],
    },
    {
      pattern: '{感想|かんそう}',
      meaning: 'cảm tưởng, ý kiến của người đã tham gia',
      examples: [t('{先輩|せんぱい}の{感想|かんそう}を{聞|き}いて、{安心|あんしん}しました。', 'Nghe cảm tưởng của anh chị khóa trên, tôi thấy yên tâm.')],
    },
  ],
  sampleAnswers: [
    {
      title: 'Mẫu 1 – Câu lạc bộ tiếng Nhật',
      lines: [
        t('{私|わたし}は{日本語|にほんご}クラブに{入|はい}りました。', 'Tôi đã vào câu lạc bộ tiếng Nhật.'),
        t('{入|はい}る{前|まえ}に、{大学|だいがく}のサイトで{活動|かつどう}の{時間|じかん}や{場所|ばしょ}を{調|しら}べました。', 'Trước khi vào, tôi đã tìm hiểu thời gian và địa điểm hoạt động trên trang web của trường.'),
        t('それから、{先輩|せんぱい}から「{楽|たの}しい」と{聞|き}きました。', 'Sau đó, tôi nghe anh chị khóa trên nói là “vui”.'),
        t('みんなの{感想|かんそう}がよかったので、{入|はい}ることにしました。', 'Vì ý kiến của mọi người đều tốt nên tôi quyết định vào.'),
      ],
    },
    {
      title: 'Mẫu 2 – Câu lạc bộ nhảy',
      lines: [
        t('{私|わたし}はダンスクラブに{入|はい}りました。', 'Tôi đã vào câu lạc bộ nhảy.'),
        t('インターネットで、クラブのレビューを{読|よ}みました。', 'Tôi đã đọc đánh giá về câu lạc bộ trên mạng.'),
        t('{大学|だいがく}のサイトで、{練習|れんしゅう}の{日|ひ}もわかりました。', 'Qua trang web của trường, tôi cũng biết ngày luyện tập.'),
        t('{友|とも}だちが{入|はい}っていて、いい{話|はなし}をたくさん{聞|き}いたので、{入|はい}りました。', 'Vì bạn tôi đã vào và tôi nghe nhiều điều tốt nên tôi đã tham gia.'),
      ],
    },
    {
      title: 'Mẫu theo ý bạn – Câu lạc bộ anime (phỏng vấn không đậu)',
      lines: [
        t('{私|わたし}はアニメクラブに{入|はい}りたくて、{情報|じょうほう}を{調|しら}べました。', 'Tôi muốn vào câu lạc bộ anime nên đã tìm hiểu thông tin.'),
        t('{大学|だいがく}のサイトで{活動|かつどう}の{内容|ないよう}がわかって、{先輩|せんぱい}の{感想|かんそう}も{聞|き}きました。', 'Tôi biết nội dung hoạt động qua trang web của trường, và cũng nghe cảm tưởng của anh chị khóa trên.'),
        t('それから、{思|おも}い{切|き}って{面接|めんせつ}を{受|う}けましたが、{残念|ざんねん}ながら{入|はい}れませんでした。', 'Sau đó, tôi mạnh dạn thử phỏng vấn, nhưng tiếc là không vào được.'),
        t('でも、いい{経験|けいけん}になったので、また{別|べつ}のクラブに{挑戦|ちょうせん}したいです。', 'Tuy vậy, đó là một trải nghiệm tốt nên tôi muốn thử sức với một câu lạc bộ khác.'),
      ],
    },
  ],
  vocab: [
    { word: '面接', reading: 'めんせつ', meaning: 'phỏng vấn' },
    { word: '挑戦する', reading: 'ちょうせんする', meaning: 'thử sức, thử thách' },
    { word: '残念', reading: 'ざんねん', meaning: 'đáng tiếc' },
    { word: '内容', reading: 'ないよう', meaning: 'nội dung' },
    { word: 'クラブ', reading: 'クラブ', meaning: 'câu lạc bộ' },
    { word: '情報', reading: 'じょうほう', meaning: 'thông tin' },
    { word: '調べる', reading: 'しらべる', meaning: 'tìm hiểu, tra cứu' },
    { word: '活動', reading: 'かつどう', meaning: 'hoạt động' },
    { word: '先輩', reading: 'せんぱい', meaning: 'đàn anh, đàn chị' },
    { word: '感想', reading: 'かんそう', meaning: 'cảm tưởng' },
    { word: '練習', reading: 'れんしゅう', meaning: 'luyện tập' },
    { word: '安心する', reading: 'あんしんする', meaning: 'yên tâm' },
  ],
};
