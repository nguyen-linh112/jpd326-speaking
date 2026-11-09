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
    {
      title: 'Mẫu theo ý bạn 1 – 「かわいそう」(câu chuyện ở lớp học)',
      lines: [
        t('{私|わたし}が{一番|いちばん}{好|す}きな{日本語|にほんご}は「かわいそう」です。', 'Từ tiếng Nhật tôi thích nhất là “kawaisou”.'),
        t('{日本|にほん}で{勉強|べんきょう}していたとき、「〜そう」の{文法|ぶんぽう}の{授業|じゅぎょう}で、{先生|せんせい}が「となりの{人|ひと}について{文|ぶん}を{作|つく}ってください」と{言|い}いました。', 'Hồi học ở Nhật, trong giờ học ngữ pháp “〜そう”, cô giáo bảo: “Hãy đặt câu về người ngồi bên cạnh.”'),
        t('{後|うし}ろの{男|おとこ}の{子|こ}が、となりの{女|おんな}の{子|こ}に「かわいそう」と{言|い}ったので、{先生|せんせい}はとても{驚|おどろ}いて、{意味|いみ}を{聞|き}きました。', 'Bạn nam ngồi phía sau nói bạn nữ bên cạnh là “kawaisou”, cô giáo rất hoang mang và hỏi lại ý nghĩa.'),
        t('みんなは「かわいい」の{意味|いみ}だと{思|おも}っていましたが、{先生|せんせい}は「{困|こま}っている{人|ひと}を{見|み}て、{助|たす}けたいと{思|おも}う{気持|きも}ちの{言葉|ことば}です」と{教|おし}えてくれました。', 'Cả lớp đều nghĩ là “kawaii”, nhưng cô giải thích: “Đây là từ nói lên cảm giác thương và muốn giúp khi thấy người đang gặp khó khăn (tội nghiệp).”'),
        t('それから、この{言葉|ことば}はクラスではやって、{私|わたし}は{今|いま}もよく{使|つか}っています。', 'Từ đó, từ này thành từ thịnh hành trong lớp, và đến giờ tôi vẫn hay dùng.'),
      ],
    },
    {
      title: 'Mẫu theo ý bạn 2 – 「大吉」(quẻ xăm may mắn)',
      lines: [
        t('{私|わたし}が{好|す}きな{日本語|にほんご}は「{大吉|だいきち}」です。', 'Từ tiếng Nhật tôi thích là “daikichi” (đại cát).'),
        t('{日本|にほん}のお{寺|てら}や{神社|じんじゃ}で、おみくじを{引|ひ}くと、{紙|かみ}に「{大吉|だいきち}」と{書|か}いてあることがあります。', 'Ở chùa hay đền thần đạo ở Nhật, khi rút quẻ xăm (omikuji), đôi khi trên giấy có ghi “đại cát”.'),
        t('「{大吉|だいきち}」は、{一番|いちばん}いい{運|うん}という{意味|いみ}で、これからいいことがあると{言|い}われています。', '“Daikichi” nghĩa là vận may tốt nhất, người ta nói sau này sẽ có điều tốt đẹp.'),
        t('{引|ひ}いたときは、とても{嬉|うれ}しくて、{一日中|いちにちじゅう}{元気|げんき}でした。', 'Lúc rút được, tôi rất vui và suốt cả ngày đều khỏe khoắn.'),
        t('だから、この{言葉|ことば}を{見|み}ると、いつも{元気|げんき}な{気持|きも}ちになります。', 'Vì vậy mỗi khi thấy từ này, tôi luôn thấy tinh thần phấn chấn.'),
      ],
    },
  ],
  vocab: [
    { word: 'かわいそう', reading: 'かわいそう', meaning: 'tội nghiệp, đáng thương' },
    { word: '大吉', reading: 'だいきち', meaning: 'đại cát (quẻ xăm tốt nhất)' },
    { word: 'おみくじ', reading: 'おみくじ', meaning: 'quẻ xăm ở chùa/đền' },
    { word: '運', reading: 'うん', meaning: 'vận may' },
    { word: '文法', reading: 'ぶんぽう', meaning: 'ngữ pháp' },
    { word: '授業', reading: 'じゅぎょう', meaning: 'giờ học' },
    { word: '流行る', reading: 'はやる', meaning: 'thịnh hành, thành mốt' },
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
