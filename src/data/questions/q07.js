// 質問7 (第9課) – Từ tiếng Nhật bạn thích nhất
const t = (ja, vi) => ({ ja, vi });

export default {
  id: 7,
  lesson: 9,
  question: t('{一番|いちばん}{好|す}きな{日本語|にほんご}の{言葉|ことば}を{教|おし}えてください。{理由|りゆう}も{説明|せつめい}してください。', 'Hãy cho biết từ tiếng Nhật bạn thích nhất. Hãy giải thích cả lý do.'),
  guide: [
    t('{日本語|にほんご}の{言葉|ことば}を{教|おし}えてください。', 'Hãy cho biết một từ tiếng Nhật.'),
    t('{理由|りゆう}を{教|おし}えてください。', 'Hãy cho biết lý do.'),
  ],
  expressions: [
    {
      pattern: '〜ほど／ぐらい／くらい',
      meaning: 'đến mức …, khoảng …',
      examples: [
        t('{言葉|ことば}では{言|い}えないほど、{嬉|うれ}しかったです。', 'Vui đến mức không nói nên lời.'),
        t('{忘|わす}れられないぐらい、いい{言葉|ことば}です。', 'Là từ hay đến mức không thể quên.'),
      ],
    },
    {
      pattern: '〜がたい',
      meaning: 'khó mà … (khó quên, khó tin…)',
      examples: [t('「ありがとう」は、{忘|わす}れがたい{言葉|ことば}です。', '“Arigatou” là từ khó quên.')],
    },
    {
      pattern: '〜が{印象的|いんしょうてき}でした／{印象|いんしょう}に{残|のこ}っています',
      meaning: '… gây ấn tượng / còn đọng lại trong ấn tượng',
      examples: [
        t('「お{疲|つか}れ{様|さま}」という{言葉|ことば}が{印象的|いんしょうてき}でした。', 'Từ “Otsukaresama” đã gây ấn tượng với tôi.'),
        t('「いただきます」が{印象|いんしょう}に{残|のこ}っています。', 'Từ “Itadakimasu” còn đọng lại trong ấn tượng của tôi.'),
      ],
    },
    {
      pattern: '〜が{心|こころ}に{残|のこ}っています',
      meaning: '… còn đọng lại trong lòng',
      examples: [t('「もったいない」という{言葉|ことば}が{心|こころ}に{残|のこ}っています。', 'Từ “mottainai” còn đọng lại trong lòng tôi.')],
    },
    {
      pattern: '〜を{基|もと}にして',
      meaning: 'dựa trên …',
      examples: [t('{自分|じぶん}の{経験|けいけん}を{基|もと}にして、{話|はな}します。', 'Tôi sẽ nói dựa trên kinh nghiệm của bản thân.')],
    },
    {
      pattern: '〜とともに',
      meaning: 'cùng với …',
      examples: [t('{日本語|にほんご}の{勉強|べんきょう}とともに、この{言葉|ことば}を{知|し}りました。', 'Cùng với việc học tiếng Nhật, tôi đã biết đến từ này.')],
    },
    {
      pattern: '〜ように',
      meaning: 'để / như là …',
      examples: [t('みんなが{元気|げんき}になるように、この{言葉|ことば}を{使|つか}います。', 'Tôi dùng từ này để mọi người khỏe khoắn lên.')],
    },
    {
      pattern: '〜に{感動|かんどう}しました',
      meaning: 'tôi xúc động vì …',
      examples: [t('{言葉|ことば}の{意味|いみ}に{感動|かんどう}しました。', 'Tôi xúc động vì ý nghĩa của từ.')],
    },
    {
      pattern: '〜に{励|はげ}まされました',
      meaning: 'tôi được động viên bởi …',
      examples: [t('{先生|せんせい}の「{頑張|がんば}って」に{励|はげ}まされました。', 'Tôi được động viên bởi câu “Cố lên” của thầy cô.')],
    },
    {
      pattern: '〜に{驚|おどろ}きました',
      meaning: 'tôi ngạc nhiên vì …',
      examples: [t('{意味|いみ}の{深|ふか}さに{驚|おどろ}きました。', 'Tôi ngạc nhiên vì ý nghĩa sâu sắc của nó.')],
    },
    {
      pattern: '〜ショックを{受|う}けました',
      meaning: 'tôi bị sốc',
      examples: [t('{知|し}らなかった{意味|いみ}に、ショックを{受|う}けました。', 'Tôi bị sốc vì ý nghĩa mà trước đây tôi không biết.')],
    },
    {
      pattern: '〜ように{感|かん}じました／{思|おも}いました',
      meaning: 'tôi cảm thấy / nghĩ rằng hình như …',
      examples: [
        t('{言葉|ことば}が{温|あたた}かいように{感|かん}じました。', 'Tôi cảm thấy từ này thật ấm áp.'),
        t('いい{言葉|ことば}だと{思|おも}いました。', 'Tôi nghĩ đây là một từ hay.'),
      ],
    },
  ],
  sampleAnswers: [
    {
      title: 'Mẫu 1 – 「ありがとう」',
      lines: [
        t('{私|わたし}が{一番|いちばん}{好|す}きな{日本語|にほんご}は「ありがとう」です。', 'Từ tiếng Nhật tôi thích nhất là “arigatou”.'),
        t('{日本|にほん}に{来|き}たとき、みんなが{何度|なんど}も「ありがとう」と{言|い}っていて、{印象的|いんしょうてき}でした。', 'Khi đến Nhật, mọi người nói “arigatou” rất nhiều lần, điều đó gây ấn tượng với tôi.'),
        t('{聞|き}くと、{心|こころ}が{温|あたた}かくなるように{感|かん}じます。', 'Mỗi khi nghe, tôi cảm thấy lòng ấm áp hẳn lên.'),
        t('だから、{私|わたし}もよく{使|つか}っています。', 'Vì vậy tôi cũng hay dùng từ này.'),
      ],
    },
    {
      title: 'Mẫu 2 – 「頑張って」',
      lines: [
        t('{私|わたし}は「{頑張|がんば}って」という{言葉|ことば}が{好|す}きです。', 'Tôi thích từ “ganbatte” (cố lên).'),
        t('{試験|しけん}の{前|まえ}に、{先生|せんせい}が「{頑張|がんば}って」と{言|い}ってくれて、{励|はげ}まされました。', 'Trước kỳ thi, thầy cô nói “cố lên” với tôi và tôi được động viên.'),
        t('この{言葉|ことば}は、{今|いま}も{心|こころ}に{残|のこ}っています。', 'Từ này đến bây giờ vẫn còn đọng lại trong lòng tôi.'),
      ],
    },
  ],
  vocab: [
    { word: '言葉', reading: 'ことば', meaning: 'từ, lời nói' },
    { word: '理由', reading: 'りゆう', meaning: 'lý do' },
    { word: '印象', reading: 'いんしょう', meaning: 'ấn tượng' },
    { word: '意味', reading: 'いみ', meaning: 'ý nghĩa' },
    { word: '励ます', reading: 'はげます', meaning: 'động viên' },
    { word: '感動する', reading: 'かんどうする', meaning: 'xúc động' },
    { word: '残る', reading: 'のこる', meaning: 'còn lại' },
    { word: '温かい', reading: 'あたたかい', meaning: 'ấm áp' },
    { word: 'もったいない', reading: 'もったいない', meaning: 'lãng phí, tiếc' },
  ],
};
