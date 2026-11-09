// 質問8 (第9課) – Cuốn sách bạn thích nhất
const t = (ja, vi) => ({ ja, vi });

export default {
  id: 8,
  lesson: 9,
  question: t('{一番|いちばん}{好|す}きな{本|ほん}を{教|おし}えてください。{理由|りゆう}も{説明|せつめい}してください。', 'Hãy cho biết cuốn sách bạn thích nhất. Hãy giải thích cả lý do.'),
  guide: [
    t('{好|す}きな{本|ほん}を{教|おし}えてください。', 'Hãy cho biết cuốn sách bạn thích.'),
    t('{理由|りゆう}を{教|おし}えてください。', 'Hãy cho biết lý do.'),
  ],
  expressions: [
    {
      pattern: '〜ほど／ぐらい／くらい',
      meaning: 'đến mức …',
      examples: [
        t('{泣|な}いてしまうほど、{感動|かんどう}しました。', 'Tôi xúc động đến mức bật khóc.'),
        t('{一晩|ひとばん}で{読|よ}んだぐらい、おもしろかったです。', 'Hay đến mức tôi đọc xong trong một đêm.'),
      ],
    },
    {
      pattern: '〜が{印象的|いんしょうてき}でした／{印象|いんしょう}に{残|のこ}っています',
      meaning: '… gây ấn tượng / còn đọng lại',
      examples: [
        t('{最後|さいご}の{場面|ばめん}が{印象的|いんしょうてき}でした。', 'Cảnh cuối cùng đã gây ấn tượng với tôi.'),
        t('{悲|かな}しい{場面|ばめん}が{印象|いんしょう}に{残|のこ}っています。', 'Cảnh buồn còn đọng lại trong ấn tượng của tôi.'),
      ],
    },
    {
      pattern: '〜が{心|こころ}に{残|のこ}っています',
      meaning: '… còn đọng lại trong lòng',
      examples: [t('{主人公|しゅじんこう}の{言葉|ことば}が{心|こころ}に{残|のこ}っています。', 'Lời của nhân vật chính còn đọng lại trong lòng tôi.')],
    },
    {
      pattern: '〜を{基|もと}にして',
      meaning: 'dựa trên …',
      examples: [t('この{本|ほん}は{本当|ほんとう}の{話|はなし}を{基|もと}にして{書|か}かれています。', 'Cuốn sách này được viết dựa trên một câu chuyện có thật.')],
    },
    {
      pattern: '〜とともに',
      meaning: 'cùng với …',
      examples: [t('{大人|おとな}になるとともに、{本|ほん}の{意味|いみ}がわかってきました。', 'Cùng với việc trưởng thành, tôi dần hiểu ý nghĩa của cuốn sách.')],
    },
    {
      pattern: '〜ように',
      meaning: 'giống như …',
      examples: [t('{主人公|しゅじんこう}のように{頑張|がんば}りたいです。', 'Tôi muốn cố gắng giống như nhân vật chính.')],
    },
    {
      pattern: '〜に{感動|かんどう}しました',
      meaning: 'tôi xúc động vì …',
      examples: [t('{最後|さいご}の{手紙|てがみ}に{感動|かんどう}しました。', 'Tôi xúc động vì bức thư cuối cùng.')],
    },
    {
      pattern: '〜に{励|はげ}まされました',
      meaning: 'tôi được động viên bởi …',
      examples: [t('{本|ほん}の{言葉|ことば}に{励|はげ}まされました。', 'Tôi được động viên bởi những lời trong sách.')],
    },
    {
      pattern: '〜に{驚|おどろ}きました',
      meaning: 'tôi ngạc nhiên vì …',
      examples: [t('{最後|さいご}の{話|はなし}に{驚|おどろ}きました。', 'Tôi ngạc nhiên vì câu chuyện ở cuối.')],
    },
    {
      pattern: '〜ショックを{受|う}けました',
      meaning: 'tôi bị sốc',
      examples: [t('{主人公|しゅじんこう}が{死|し}んだ{場面|ばめん}で、ショックを{受|う}けました。', 'Ở cảnh nhân vật chính qua đời, tôi đã bị sốc.')],
    },
    {
      pattern: '{忘|わす}れがたいものです',
      meaning: 'là điều khó quên',
      examples: [t('この{本|ほん}は{私|わたし}にとって{忘|わす}れがたいものです。', 'Cuốn sách này đối với tôi là điều khó quên.')],
    },
    {
      pattern: '〜ように{感|かん}じました／{思|おも}いました',
      meaning: 'tôi cảm thấy / nghĩ rằng hình như …',
      examples: [t('{自分|じぶん}の{話|はなし}のように{感|かん}じました。', 'Tôi cảm thấy như đó là câu chuyện của chính mình.')],
    },
  ],
  sampleAnswers: [
    {
      title: 'Mẫu 1 – 「星の王子さま」',
      lines: [
        t('{私|わたし}が{一番|いちばん}{好|す}きな{本|ほん}は「{星|ほし}の{王子|おうじ}さま」です。', 'Cuốn sách tôi thích nhất là “Hoàng tử bé”.'),
        t('{子|こ}どものときに{読|よ}んで、{大人|おとな}になってからもう{一度|いちど}{読|よ}みました。', 'Tôi đã đọc khi còn nhỏ, và sau khi lớn lên lại đọc thêm một lần nữa.'),
        t('「{大切|たいせつ}なものは{目|め}に{見|み}えない」という{言葉|ことば}が{心|こころ}に{残|のこ}っています。', 'Câu “điều quan trọng thì không nhìn thấy bằng mắt” còn đọng lại trong lòng tôi.'),
        t('{忘|わす}れがたい{本|ほん}です。', 'Đó là cuốn sách khó quên.'),
      ],
    },
    {
      title: 'Mẫu 2 – Một câu chuyện về tình bạn',
      lines: [
        t('{私|わたし}の{好|す}きな{本|ほん}は、{友情|ゆうじょう}の{話|はなし}です。', 'Cuốn sách tôi thích là một câu chuyện về tình bạn.'),
        t('{主人公|しゅじんこう}が{友|とも}だちを{助|たす}ける{場面|ばめん}が{印象的|いんしょうてき}でした。', 'Cảnh nhân vật chính giúp bạn đã gây ấn tượng với tôi.'),
        t('{読|よ}んでいるとき、{泣|な}いてしまうほど{感動|かんどう}しました。', 'Khi đọc, tôi xúc động đến mức bật khóc.'),
        t('{自分|じぶん}も{友|とも}だちを{大切|たいせつ}にしようと{思|おも}いました。', 'Tôi nghĩ mình cũng sẽ trân trọng bạn bè.'),
      ],
    },
    {
      title: 'Mẫu theo ý bạn – 「Tắt đèn」của Ngô Tất Tố',
      lines: [
        t('{私|わたし}が{最近|さいきん}{読|よ}んでいる{本|ほん}は、ゴー・タット・トの「タット・デン」という{小説|しょうせつ}です。', 'Cuốn sách tôi đang đọc gần đây là tiểu thuyết “Tắt đèn” (Tat Den) của Ngô Tất Tố.'),
        t('{昔|むかし}のベトナムの{貧|まず}しい{村|むら}の{話|はなし}で、{主人公|しゅじんこう}のチ・ザウは、{病気|びょうき}の{夫|おっと}と{子|こ}どもを{守|まも}るために、{一人|ひとり}で{戦|たたか}います。', 'Đó là câu chuyện về một ngôi làng nghèo ngày xưa ở Việt Nam, nhân vật chính chị Dậu một mình chiến đấu để bảo vệ người chồng ốm và con.'),
        t('どんなに{厳|きび}しい{状況|じょうきょう}でもあきらめない、{女性|じょせい}の{強|つよ}さが{印象的|いんしょうてき}でした。', 'Sức mạnh của người phụ nữ không bỏ cuộc dù hoàn cảnh khắc nghiệt đã gây ấn tượng với tôi.'),
        t('{読|よ}んでいるとき、{泣|な}いてしまうほど{感動|かんどう}して、{私|わたし}も{強|つよ}くなりたいと{思|おも}いました。', 'Khi đọc, tôi xúc động đến mức bật khóc và nghĩ rằng mình cũng muốn mạnh mẽ hơn.'),
      ],
    },
  ],
  vocab: [
    { word: '小説', reading: 'しょうせつ', meaning: 'tiểu thuyết' },
    { word: '貧しい', reading: 'まずしい', meaning: 'nghèo' },
    { word: '村', reading: 'むら', meaning: 'làng' },
    { word: '戦う', reading: 'たたかう', meaning: 'chiến đấu' },
    { word: '厳しい', reading: 'きびしい', meaning: 'khắc nghiệt, nghiêm khắc' },
    { word: '状況', reading: 'じょうきょう', meaning: 'tình hình, hoàn cảnh' },
    { word: '女性', reading: 'じょせい', meaning: 'phụ nữ' },
    { word: '本', reading: 'ほん', meaning: 'sách' },
    { word: '主人公', reading: 'しゅじんこう', meaning: 'nhân vật chính' },
    { word: '場面', reading: 'ばめん', meaning: 'cảnh, tình huống' },
    { word: '最後', reading: 'さいご', meaning: 'cuối cùng' },
    { word: '友情', reading: 'ゆうじょう', meaning: 'tình bạn' },
    { word: '手紙', reading: 'てがみ', meaning: 'thư' },
    { word: '泣く', reading: 'なく', meaning: 'khóc' },
    { word: '一晩', reading: 'ひとばん', meaning: 'một đêm' },
  ],
};
