// 質問1 (第6課) – Địa hình nơi bạn sống
const t = (ja, vi) => ({ ja, vi });

export default {
  id: 1,
  lesson: 6,
  question: t('あなたが{住|す}んでいるところの{地形|ちけい}について{話|はな}してください。', 'Hãy nói về địa hình của nơi bạn đang sống.'),
  guide: [
    t('あなたはどこに{住|す}んでいますか。', 'Bạn sống ở đâu?'),
    t('{住|す}むところの{面積|めんせき}、{地形|ちけい}の{特徴|とくちょう}({平野|へいや}か{山地|さんち}か)などを{述|の}べなさい。', 'Hãy nói về diện tích, đặc điểm địa hình (đồng bằng hay vùng núi) của nơi bạn sống.'),
  ],
  expressions: [
    {
      pattern: '〜{分|ぶん}の〜',
      meaning: '… phần của … (phân số)',
      examples: [
        t('{町|まち}の3{分|ぶん}の1は{山|やま}です。', 'Một phần ba thị trấn là núi.'),
        t('{町|まち}の2{分|ぶん}の1は{畑|はたけ}です。', 'Một nửa thị trấn là ruộng.'),
      ],
    },
    {
      pattern: '{南北|なんぼく}・{北西|ほくせい}など',
      meaning: 'các hướng: bắc-nam, tây bắc…',
      examples: [
        t('{私|わたし}の{町|まち}は{南北|なんぼく}に{長|なが}いです。', 'Thị trấn của tôi dài theo hướng bắc – nam.'),
        t('{町|まち}の{北西|ほくせい}に{山|やま}があります。', 'Ở phía tây bắc thị trấn có núi.'),
      ],
    },
    {
      pattern: '{山林|さんりん}・{島|しま}・{湖|みずうみ}・{山|やま}・{港|みなと}・{浜|はま}',
      meaning: 'rừng núi, đảo, hồ, núi, cảng, bãi biển',
      examples: [
        t('{町|まち}の{西|にし}に{大|おお}きい{湖|みずうみ}があります。', 'Ở phía tây thị trấn có một cái hồ lớn.'),
        t('{港|みなと}があって、{船|ふね}がたくさんあります。', 'Có cảng và rất nhiều thuyền.'),
      ],
    },
    {
      pattern: '〜が{広|ひろ}がっています',
      meaning: '… trải rộng ra',
      examples: [
        t('{町|まち}の{東|ひがし}に{広|ひろ}い{平野|へいや}が{広|ひろ}がっています。', 'Ở phía đông thị trấn có đồng bằng rộng trải dài.'),
        t('{田|た}んぼが{広|ひろ}がっています。', 'Những cánh đồng lúa trải rộng.'),
      ],
    },
    {
      pattern: '〜に{山|やま}が{連|つら}なっています',
      meaning: 'núi nối tiếp nhau ở …',
      examples: [t('{北|きた}に{高|たか}い{山|やま}が{連|つら}なっています。', 'Ở phía bắc có những ngọn núi cao nối tiếp nhau.')],
    },
    {
      pattern: '〜を{川|かわ}が{流|なが}れています',
      meaning: 'sông chảy qua …',
      examples: [t('{町|まち}の{真|ま}ん{中|なか}を{川|かわ}が{流|なが}れています。', 'Có một con sông chảy ngang giữa thị trấn.')],
    },
    {
      pattern: '{町|まち}の{中心|ちゅうしん}に〜があります',
      meaning: 'ở trung tâm thị trấn có …',
      examples: [t('{町|まち}の{中心|ちゅうしん}に{大|おお}きい{駅|えき}があります。', 'Ở trung tâm thị trấn có một nhà ga lớn.')],
    },
    {
      pattern: '〜は〜に{接|せっ}しています',
      meaning: '… tiếp giáp với …',
      examples: [t('{私|わたし}の{町|まち}は{海|うみ}に{接|せっ}しています。', 'Thị trấn của tôi tiếp giáp với biển.')],
    },
    {
      pattern: '〜は〜に{面|めん}しています',
      meaning: '… hướng ra / nhìn ra …',
      examples: [t('{町|まち}は{南|みなみ}の{海|うみ}に{面|めん}しています。', 'Thị trấn hướng ra biển ở phía nam.')],
    },
    {
      pattern: '〜は〜に{位置|いち}しています',
      meaning: '… nằm ở …',
      examples: [t('{私|わたし}の{町|まち}は{海|うみ}の{近|ちか}くに{位置|いち}しています。', 'Thị trấn của tôi nằm gần biển.')],
    },
    {
      pattern: '〜に{恵|めぐ}まれています',
      meaning: 'được thiên nhiên ưu đãi, có đầy đủ …',
      examples: [t('{私|わたし}の{町|まち}は{自然|しぜん}に{恵|めぐ}まれています。', 'Thị trấn của tôi được thiên nhiên ưu đãi.')],
    },
  ],
  sampleAnswers: [
    {
      title: 'Mẫu 1 – Thị trấn gần biển',
      lines: [
        t('{私|わたし}は{海|うみ}の{近|ちか}くの{町|まち}に{住|す}んでいます。', 'Tôi sống ở một thị trấn gần biển.'),
        t('{町|まち}の{東|ひがし}は{海|うみ}に{面|めん}していて、{小|ちい}さい{港|みなと}があります。', 'Phía đông thị trấn hướng ra biển, có một cảng nhỏ.'),
        t('{町|まち}の{西|にし}には{山|やま}が{連|つら}なっています。', 'Phía tây có những ngọn núi nối tiếp nhau.'),
        t('{海|うみ}と{山|やま}があって、{自然|しぜん}に{恵|めぐ}まれた{町|まち}です。', 'Có cả biển và núi, là một thị trấn được thiên nhiên ưu đãi.'),
      ],
    },
    {
      title: 'Mẫu 2 – Thị trấn ở đồng bằng',
      lines: [
        t('{私|わたし}は{平野|へいや}の{町|まち}に{住|す}んでいます。', 'Tôi sống ở một thị trấn đồng bằng.'),
        t('{町|まち}の{周|まわ}りには{田|た}んぼが{広|ひろ}がっています。', 'Xung quanh thị trấn có những cánh đồng lúa trải rộng.'),
        t('{町|まち}の{真|ま}ん{中|なか}を{川|かわ}が{流|なが}れています。', 'Có một con sông chảy ngang giữa thị trấn.'),
        t('{山|やま}は{少|すく}ないですが、{景色|けしき}がきれいです。', 'Tuy ít núi nhưng phong cảnh rất đẹp.'),
      ],
    },
    {
      title: 'Mẫu theo ý bạn – Vũng Tàu (ブンタウ)',
      lines: [
        t('{私|わたし}は{海|うみ}の{町|まち}、ブンタウに{住|す}んでいます。', 'Tôi sống ở Vũng Tàu, một thị trấn biển.'),
        t('ホーチミン{市|し}から{車|くるま}で2{時間|じかん}ぐらいのところに{位置|いち}していて、{町|まち}の{東|ひがし}と{南|みなみ}は{海|うみ}に{面|めん}しています。', 'Nằm cách TP.HCM khoảng 2 tiếng đi xe, phía đông và phía nam thị trấn hướng ra biển.'),
        t('{町|まち}には{小|ちい}さい{山|やま}が2つあって、{高|たか}いところから{海|うみ}が{見|み}えます。', 'Trong thành phố có hai ngọn núi nhỏ, từ trên cao có thể nhìn thấy biển.'),
        t('{海|うみ}と{山|やま}があって、{自然|しぜん}に{恵|めぐ}まれた{町|まち}です。', 'Có cả biển và núi, là một thị trấn được thiên nhiên ưu đãi.'),
      ],
    },
  ],
  vocab: [
    { word: 'ブンタウ', reading: 'ブンタウ', meaning: 'Vũng Tàu' },
    { word: '地形', reading: 'ちけい', meaning: 'địa hình' },
    { word: '面積', reading: 'めんせき', meaning: 'diện tích' },
    { word: '特徴', reading: 'とくちょう', meaning: 'đặc điểm' },
    { word: '平野', reading: 'へいや', meaning: 'đồng bằng' },
    { word: '山地', reading: 'さんち', meaning: 'vùng núi' },
    { word: '湖', reading: 'みずうみ', meaning: 'hồ' },
    { word: '港', reading: 'みなと', meaning: 'cảng' },
    { word: '浜', reading: 'はま', meaning: 'bãi biển' },
    { word: '島', reading: 'しま', meaning: 'đảo' },
    { word: '田んぼ', reading: 'たんぼ', meaning: 'ruộng lúa' },
    { word: '周り', reading: 'まわり', meaning: 'xung quanh' },
  ],
};
