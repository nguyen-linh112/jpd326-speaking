// 質問9 (第10課) – Giới thiệu quê hương cho bạn muốn đến du lịch
// Chỗ trống 【______】 là tên quê của bạn: bấm "Chỉnh sửa" để điền (sẽ lưu thành bản nháp riêng của bạn).
const t = (ja, vi) => ({ ja, vi });

export default {
  id: 9,
  lesson: 10,
  note: 'Chỗ trống 【______】 là tên quê hương / địa danh của bạn. Hãy bấm “Chỉnh sửa” để điền vào cho đúng với quê bạn; bản sửa sẽ được lưu thành “Bản nháp của tôi”.',
  question: t('あなたの{故郷|ふるさと}に{旅行|りょこう}に{行|い}きたい{友達|ともだち}がいます。いいところを{紹介|しょうかい}してください。', 'Có người bạn muốn đi du lịch đến quê bạn. Hãy giới thiệu những nơi hay.'),
  guide: [
    t('あなたの{故郷|ふるさと}で、どこが{有名|ゆうめい}ですか。', 'Ở quê bạn, nơi nào nổi tiếng?'),
    t('そこで{何|なに}ができますか。', 'Ở đó có thể làm gì?'),
  ],
  expressions: [
    {
      pattern: '〜といえば〜が{有名|ゆうめい}だ',
      meaning: 'nhắc đến … thì … nổi tiếng',
      examples: [t('【______】といえば、{海|うみ}が{有名|ゆうめい}です。', 'Nhắc đến 【______】 thì biển nổi tiếng.')],
    },
    {
      pattern: '〜で{知|し}られている',
      meaning: 'được biết đến nhờ …',
      examples: [t('【______】は、おいしい{料理|りょうり}で{知|し}られています。', '【______】 được biết đến nhờ những món ăn ngon.')],
    },
    {
      pattern: '〜を{誇|ほこ}っている',
      meaning: 'tự hào có …',
      examples: [t('【______】は、きれいな{海|うみ}を{誇|ほこ}っています。', '【______】 tự hào có biển đẹp.')],
    },
    {
      pattern: '〜として{登録|とうろく}されている',
      meaning: 'được công nhận / đăng ký là …',
      examples: [t('この{古|ふる}い{町|まち}は、{世界遺産|せかいいさん}として{登録|とうろく}されています。', 'Khu phố cổ này được công nhận là di sản thế giới.')],
    },
    {
      pattern: '〜として{指定|してい}されている',
      meaning: 'được chỉ định là …',
      examples: [t('この{山|やま}は、{国立公園|こくりつこうえん}として{指定|してい}されています。', 'Ngọn núi này được chỉ định là công viên quốc gia.')],
    },
    {
      pattern: '{年間|ねんかん}〜{人|にん}の{人|ひと}が〜から{訪|おとず}れている',
      meaning: 'mỗi năm có … người từ … đến thăm',
      examples: [t('{年間|ねんかん}100{万|まん}{人|にん}の{人|ひと}が、{世界|せかい}から{訪|おとず}れています。', 'Mỗi năm có một triệu người từ khắp thế giới đến thăm.')],
    },
    {
      pattern: '〜と{言|い}われている',
      meaning: 'người ta nói rằng …',
      examples: [t('ここのコーヒーは、{世界|せかい}で{一番|いちばん}おいしいと{言|い}われています。', 'Người ta nói cà phê ở đây là ngon nhất thế giới.')],
    },
    {
      pattern: '〜と{伝|つた}えられている',
      meaning: 'theo truyền thuyết / được truyền lại rằng …',
      examples: [t('この{寺|てら}は、500{年|ねん}{前|まえ}に{建|た}てられたと{伝|つた}えられています。', 'Theo truyền lại, ngôi chùa này được xây cách đây 500 năm.')],
    },
  ],
  sampleAnswers: [
    {
      title: 'Mẫu 1 – Món ăn và cảnh đẹp',
      lines: [
        t('【______】といえば、おいしい{食|た}べ{物|もの}で{知|し}られています。', 'Nhắc đến 【______】 thì nổi tiếng với những món ăn ngon.'),
        t('{名物|めいぶつ}は【______】で、とてもおいしいです。', 'Đặc sản là 【______】, rất ngon.'),
        t('{町|まち}では、きれいな{景色|けしき}も{楽|たの}しめます。', 'Ở thị trấn còn có thể ngắm cảnh đẹp.'),
        t('{友|とも}だちにぜひ{薦|すす}めたいです。', 'Tôi rất muốn giới thiệu cho bạn.'),
      ],
    },
    {
      title: 'Mẫu 2 – Điểm tham quan',
      lines: [
        t('{私|わたし}の{故郷|ふるさと}は【______】です。', 'Quê tôi là 【______】.'),
        t('【______】には、{見|み}どころがたくさんあります。', 'Ở 【______】 có rất nhiều điểm đáng xem.'),
        t('{特|とく}に【______】は{有名|ゆうめい}で、{年間|ねんかん}たくさんの{人|ひと}が{訪|おとず}れています。', 'Đặc biệt 【______】 nổi tiếng, mỗi năm có rất nhiều người đến thăm.'),
        t('{日帰|ひがえ}りでも{楽|たの}しめるので、ぜひ{来|き}てください。', 'Dù đi về trong ngày cũng có thể vui chơi, nên hãy đến nhé.'),
      ],
    },
    {
      title: 'Mẫu theo ý bạn – Quê là Sài Gòn (TP.HCM)',
      lines: [
        t('{私|わたし}の{故郷|ふるさと}はホーチミン{市|し}です。ホーチミンといえば、ブイビエン{通|どお}りで{知|し}られています。', 'Quê tôi là TP. Hồ Chí Minh. Nhắc đến TP.HCM thì nổi tiếng với phố đi bộ Bùi Viện.'),
        t('{夜|よる}も{遅|おそ}くまでにぎやかで、{世界|せかい}から{多|おお}くの{人|ひと}が{訪|おとず}れています。', 'Ban đêm cũng náo nhiệt đến khuya, và có nhiều người từ khắp thế giới đến thăm.'),
        t('{車|くるま}で{行|い}ける{海|うみ}があるので、{一緒|いっしょ}に{海|うみ}で{泳|およ}ぐこともできます。', 'Vì có biển có thể đi bằng xe, nên cũng có thể cùng nhau tắm biển.'),
        t('それから、おいしいベトナム{料理|りょうり}を{味|あじ}わってほしいです。ぜひ{来|き}てください。', 'Ngoài ra, tôi muốn bạn thưởng thức món ăn Việt Nam ngon. Hãy nhất định đến nhé.'),
      ],
    },
  ],
  vocab: [
    { word: 'ブイビエン通り', reading: 'ブイビエンどおり', meaning: 'phố Bùi Viện' },
    { word: '泳ぐ', reading: 'およぐ', meaning: 'bơi, tắm biển' },
    { word: '訪れる', reading: 'おとずれる', meaning: 'đến thăm' },
    { word: '名所', reading: 'めいしょ', meaning: 'danh lam thắng cảnh' },
    { word: '景色', reading: 'けしき', meaning: 'phong cảnh' },
    { word: '風景', reading: 'ふうけい', meaning: 'phong cảnh, cảnh vật' },
    { word: '観光マップ', reading: 'かんこうマップ', meaning: 'bản đồ du lịch' },
    { word: '素晴らしさ', reading: 'すばらしさ', meaning: 'sự tuyệt vời' },
    { word: '美しさ', reading: 'うつくしさ', meaning: 'vẻ đẹp' },
    { word: '豊かさ', reading: 'ゆたかさ', meaning: 'sự phong phú' },
    { word: '豪華さ', reading: 'ごうかさ', meaning: 'sự sang trọng, lộng lẫy' },
    { word: '見どころ', reading: 'みどころ', meaning: 'điểm đáng xem' },
    { word: '迫力満点', reading: 'はくりょくまんてん', meaning: 'cực kỳ ấn tượng, hoành tráng' },
    { word: '海の幸', reading: 'うみのさち', meaning: 'hải sản' },
    { word: '山の幸', reading: 'やまのさち', meaning: 'sản vật núi rừng' },
    { word: '食材', reading: 'しょくざい', meaning: 'nguyên liệu nấu ăn' },
    { word: '名物', reading: 'めいぶつ', meaning: 'đặc sản' },
    { word: '誇り', reading: 'ほこり', meaning: 'niềm tự hào' },
    { word: '観光する', reading: 'かんこうする', meaning: 'tham quan, du lịch' },
    { word: '立ち寄る', reading: 'たちよる', meaning: 'ghé qua' },
    { word: '足を伸ばす', reading: 'あしをのばす', meaning: 'đi xa hơn một chút' },
    { word: '薦める', reading: 'すすめる', meaning: 'giới thiệu, khuyên dùng' },
    { word: '日帰りする', reading: 'ひがえりする', meaning: 'đi về trong ngày' },
    { word: '味わう', reading: 'あじわう', meaning: 'thưởng thức' },
    { word: '言い表す', reading: 'いいあらわす', meaning: 'diễn tả' },
    { word: '代表する', reading: 'だいひょうする', meaning: 'đại diện' },
  ],
};
