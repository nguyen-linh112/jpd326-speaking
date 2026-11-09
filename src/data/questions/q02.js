// 質問2 (第6課) – Sự kiện / lễ hội ở thị trấn
const t = (ja, vi) => ({ ja, vi });

export default {
  id: 2,
  lesson: 6,
  question: t('あなたの{町|まち}にどんな{行事|ぎょうじ}がありますか。その{行事|ぎょうじ}を{紹介|しょうかい}してください。', 'Thị trấn của bạn có những sự kiện nào? Hãy giới thiệu sự kiện đó.'),
  guide: [
    t('あなたの{町|まち}にどんな{行事|ぎょうじ}がありますか。', 'Thị trấn của bạn có sự kiện gì?'),
    t('その{行事|ぎょうじ}の{行|おこな}う{時点|じてん}、{活動|かつどう}、{目的|もくてき}など、1つか2つの{具体的|ぐたいてき}な{情報|じょうほう}を{話|はな}してください。', 'Hãy nói 1–2 thông tin cụ thể như thời điểm tổ chức, hoạt động, mục đích của sự kiện.'),
  ],
  expressions: [
    {
      pattern: '〜と{言|い}えば／〜というと、〜が{有名|ゆうめい}です',
      meaning: 'nhắc đến … thì … nổi tiếng',
      examples: [
        t('{私|わたし}の{町|まち}で{行事|ぎょうじ}と{言|い}えば、{夏祭|なつまつ}りが{有名|ゆうめい}です。', 'Nhắc đến sự kiện ở thị trấn tôi thì lễ hội mùa hè nổi tiếng.'),
        t('{秋|あき}というと、{月|つき}を{見|み}る{行事|ぎょうじ}が{有名|ゆうめい}です。', 'Nhắc đến mùa thu thì sự kiện ngắm trăng nổi tiếng.'),
      ],
    },
    {
      pattern: '〜が{盛|さか}んです',
      meaning: '… rất sôi nổi, phát triển',
      examples: [t('{私|わたし}の{町|まち}では、お{祭|まつ}りが{盛|さか}んです。', 'Ở thị trấn tôi, các lễ hội rất sôi nổi.')],
    },
    {
      pattern: '〜が{知|し}られています',
      meaning: '… được nhiều người biết đến',
      examples: [t('この{祭|まつ}りは、{国|くに}の{中|なか}でよく{知|し}られています。', 'Lễ hội này được biết đến nhiều trong cả nước.')],
    },
    {
      pattern: '{毎年|まいとし}〜{月|がつ}になると／{近年|きんねん}',
      meaning: 'mỗi năm cứ đến tháng … / những năm gần đây',
      examples: [
        t('{毎年|まいとし}8{月|がつ}になると、{町|まち}は{賑|にぎ}やかになります。', 'Mỗi năm cứ đến tháng 8, thị trấn trở nên náo nhiệt.'),
        t('{近年|きんねん}、{外国|がいこく}から{来|く}る{人|ひと}も{増|ふ}えています。', 'Những năm gần đây, người từ nước ngoài đến cũng tăng lên.'),
      ],
    },
    {
      pattern: '〜が{行|おこな}われています／{開催|かいさい}される',
      meaning: '… được tổ chức',
      examples: [
        t('{広場|ひろば}で{大|おお}きい{祭|まつ}りが{行|おこな}われています。', 'Một lễ hội lớn được tổ chức ở quảng trường.'),
        t('{毎年|まいとし}{春|はる}に、{花|はな}のイベントが{開催|かいさい}されます。', 'Mỗi năm vào mùa xuân có tổ chức sự kiện hoa.'),
      ],
    },
    {
      pattern: '〜が{見|み}られます',
      meaning: 'có thể xem / thấy …',
      examples: [t('{夜|よる}は、きれいな{花火|はなび}が{見|み}られます。', 'Buổi tối có thể xem pháo hoa đẹp.')],
    },
    {
      pattern: '〜が{味|あじ}わえます',
      meaning: 'có thể thưởng thức (hương vị) …',
      examples: [t('{屋台|やたい}で、おいしい{料理|りょうり}が{味|あじ}わえます。', 'Ở các quầy hàng rong có thể thưởng thức món ăn ngon.')],
    },
    {
      pattern: '〜が{楽|たの}しめます',
      meaning: 'có thể tận hưởng, vui chơi với …',
      examples: [t('{踊|おど}りや{音楽|おんがく}が{楽|たの}しめます。', 'Có thể thưởng thức múa và âm nhạc.')],
    },
  ],
  sampleAnswers: [
    {
      title: 'Mẫu 1 – Lễ hội mùa hè',
      lines: [
        t('{私|わたし}の{町|まち}で{行事|ぎょうじ}と{言|い}えば、{夏祭|なつまつ}りが{有名|ゆうめい}です。', 'Nhắc đến sự kiện ở thị trấn tôi thì lễ hội mùa hè nổi tiếng.'),
        t('{毎年|まいとし}8{月|がつ}になると、{町|まち}の{広場|ひろば}で{行|おこな}われています。', 'Mỗi năm cứ đến tháng 8, lễ hội được tổ chức ở quảng trường thị trấn.'),
        t('{踊|おど}りや{音楽|おんがく}が{楽|たの}しめます。', 'Có thể thưởng thức múa và âm nhạc.'),
        t('{屋台|やたい}では、おいしい{料理|りょうり}も{味|あじ}わえます。', 'Ở các quầy hàng rong còn có thể thưởng thức món ăn ngon.'),
      ],
    },
    {
      title: 'Mẫu 2 – Tết Nguyên Đán (旧正月)',
      lines: [
        t('{私|わたし}の{国|くに}では、{旧正月|きゅうしょうがつ}の{行事|ぎょうじ}が{盛|さか}んです。', 'Ở nước tôi, các hoạt động dịp Tết Nguyên Đán rất sôi nổi.'),
        t('{毎年|まいとし}2{月|がつ}ごろになると、{家族|かぞく}みんなで{集|あつ}まります。', 'Mỗi năm cứ khoảng tháng 2, cả gia đình đều quây quần.'),
        t('{町|まち}では、きれいな{花|はな}が{見|み}られます。', 'Ở thị trấn có thể ngắm những loài hoa đẹp.'),
        t('この{行事|ぎょうじ}は、{新|あたら}しい{年|とし}をお{祝|いわ}いするためのものです。', 'Sự kiện này là để chúc mừng năm mới.'),
      ],
    },
    {
      title: 'Mẫu theo ý bạn – Hội chợ ẩm thực ở Vũng Tàu',
      lines: [
        t('{私|わたし}の{町|まち}ブンタウで{行事|ぎょうじ}と{言|い}えば、フードフェスティバルが{有名|ゆうめい}です。', 'Nhắc đến sự kiện ở Vũng Tàu quê tôi thì lễ hội ẩm thực (food festival) nổi tiếng.'),
        t('{毎年|まいとし}、お{正月|しょうがつ}などの{大|おお}きい{休|やす}みになると、{海|うみ}の{近|ちか}くで{行|おこな}われています。', 'Mỗi năm cứ đến những kỳ nghỉ lớn như Tết, lễ hội được tổ chức gần biển.'),
        t('{海|うみ}の{幸|さち}を{使|つか}った{料理|りょうり}や、いろいろな{屋台|やたい}の{料理|りょうり}が{味|あじ}わえます。', 'Có thể thưởng thức các món làm từ hải sản và món ăn ở nhiều quầy hàng rong.'),
        t('{旅行|りょこう}に{来|き}た{人|ひと}もたくさんいて、とてもにぎやかです。', 'Cũng có rất nhiều khách du lịch đến nên rất náo nhiệt.'),
      ],
    },
  ],
  vocab: [
    { word: 'フードフェスティバル', reading: 'フードフェスティバル', meaning: 'lễ hội ẩm thực' },
    { word: 'お正月', reading: 'おしょうがつ', meaning: 'Tết' },
    { word: '海の幸', reading: 'うみのさち', meaning: 'hải sản' },
    { word: '行事', reading: 'ぎょうじ', meaning: 'sự kiện, lễ hội' },
    { word: '祭り', reading: 'まつり', meaning: 'lễ hội' },
    { word: '夏祭り', reading: 'なつまつり', meaning: 'lễ hội mùa hè' },
    { word: '花火', reading: 'はなび', meaning: 'pháo hoa' },
    { word: '屋台', reading: 'やたい', meaning: 'quầy hàng rong' },
    { word: '広場', reading: 'ひろば', meaning: 'quảng trường' },
    { word: '賑やか', reading: 'にぎやか', meaning: 'náo nhiệt' },
    { word: '旧正月', reading: 'きゅうしょうがつ', meaning: 'Tết Nguyên Đán (âm lịch)' },
    { word: '目的', reading: 'もくてき', meaning: 'mục đích' },
  ],
};
