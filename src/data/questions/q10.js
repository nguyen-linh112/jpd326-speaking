// 質問10 (第10課) – Giới thiệu việc thú vị làm được trong 1 ngày ở Hà Nội
const t = (ja, vi) => ({ ja, vi });

export default {
  id: 10,
  lesson: 10,
  question: t('【ハノイ】に{行|い}く{友達|ともだち}がいます。{泊|と}まる{時間|じかん}は1{日|にち}だけです。その1{日|にち}にできる{面白|おもしろ}いことを{紹介|しょうかい}してください。', 'Có người bạn sắp đến 【Hà Nội】. Bạn ấy chỉ ở lại 1 ngày. Hãy giới thiệu những việc thú vị có thể làm trong 1 ngày đó.'),
  guide: [
    t('【ハノイ】で1{日|にち}にできる{面白|おもしろ}いことは？', 'Ở 【Hà Nội】, trong 1 ngày có thể làm việc thú vị nào?'),
    t('どうすれば{体験|たいけん}できますか。', 'Làm thế nào để trải nghiệm được?'),
  ],
  expressions: [
    {
      pattern: '〜といえば〜がおもしろい',
      meaning: 'nhắc đến … thì … thú vị',
      examples: [t('ハノイといえば、{旧市街|きゅうしがい}の{散歩|さんぽ}がおもしろいです。', 'Nhắc đến Hà Nội thì đi dạo khu phố cổ rất thú vị.')],
    },
    {
      pattern: '〜で{知|し}られている',
      meaning: 'được biết đến nhờ …',
      examples: [t('ハノイは、フォーで{知|し}られています。', 'Hà Nội nổi tiếng với món phở.')],
    },
    {
      pattern: '〜と{言|い}われている',
      meaning: 'người ta nói rằng …',
      examples: [t('ホアンキエム{湖|こ}は、{朝|あさ}の{散歩|さんぽ}が{気持|きも}ちいいと{言|い}われています。', 'Người ta nói đi dạo buổi sáng ở hồ Hoàn Kiếm rất dễ chịu.')],
    },
  ],
  sampleAnswers: [
    {
      title: 'Mẫu 1 – Đi dạo và ăn phở',
      lines: [
        t('ハノイといえば、{旧市街|きゅうしがい}の{散歩|さんぽ}がおもしろいです。', 'Nhắc đến Hà Nội thì đi dạo khu phố cổ rất thú vị.'),
        t('{朝|あさ}はホアンキエム{湖|こ}を{歩|ある}いて、{昼|ひる}はフォーを{食|た}べてください。', 'Buổi sáng hãy đi dạo quanh hồ Hoàn Kiếm, buổi trưa hãy ăn phở.'),
        t('{夕方|ゆうがた}は{旧市街|きゅうしがい}で、{食|た}べ{歩|ある}きができます。', 'Buổi chiều có thể vừa đi vừa ăn ở khu phố cổ.'),
      ],
    },
    {
      title: 'Mẫu 2 – Ẩm thực đường phố',
      lines: [
        t('ハノイは、おいしい{食|た}べ{物|もの}で{知|し}られています。', 'Hà Nội nổi tiếng với những món ăn ngon.'),
        t('{屋台|やたい}で、ブンチャーやコーヒーを{味|あじ}わってください。', 'Hãy thưởng thức bún chả và cà phê ở các quầy hàng rong.'),
        t('{夜|よる}は、にぎやかなナイトマーケットを{歩|ある}くのも{楽|たの}しいです。', 'Buổi tối đi dạo ở chợ đêm náo nhiệt cũng rất vui.'),
      ],
    },
  ],
  vocab: [
    { word: '名所', reading: 'めいしょ', meaning: 'danh lam thắng cảnh' },
    { word: '景色', reading: 'けしき', meaning: 'phong cảnh' },
    { word: '風景', reading: 'ふうけい', meaning: 'phong cảnh, cảnh vật' },
    { word: '素晴らしさ', reading: 'すばらしさ', meaning: 'sự tuyệt vời' },
    { word: '美しさ', reading: 'うつくしさ', meaning: 'vẻ đẹp' },
    { word: '豊かさ', reading: 'ゆたかさ', meaning: 'sự phong phú' },
    { word: '見どころ', reading: 'みどころ', meaning: 'điểm đáng xem' },
    { word: '観光する', reading: 'かんこうする', meaning: 'tham quan, du lịch' },
    { word: '立ち寄る', reading: 'たちよる', meaning: 'ghé qua' },
    { word: '足を伸ばす', reading: 'あしをのばす', meaning: 'đi xa hơn một chút' },
    { word: '薦める', reading: 'すすめる', meaning: 'giới thiệu, khuyên dùng' },
    { word: '日帰りする', reading: 'ひがえりする', meaning: 'đi về trong ngày' },
    { word: '味わう', reading: 'あじわう', meaning: 'thưởng thức' },
    { word: '言い表す', reading: 'いいあらわす', meaning: 'diễn tả' },
    { word: '代表する', reading: 'だいひょうする', meaning: 'đại diện' },
    { word: '食べ歩く', reading: 'たべあるく', meaning: 'vừa đi vừa ăn nhiều nơi' },
    { word: '旧市街', reading: 'きゅうしがい', meaning: 'khu phố cổ' },
    { word: '散歩', reading: 'さんぽ', meaning: 'đi dạo' },
  ],
};
