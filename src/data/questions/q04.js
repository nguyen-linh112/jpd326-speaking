// 質問4 (第7課) – Trải nghiệm tình nguyện / hoạt động đã tham gia
const t = (ja, vi) => ({ ja, vi });

export default {
  id: 4,
  lesson: 7,
  question: t('{今|いま}までどんなボランティアや{活動|かつどう}に{参加|さんか}しましたか。{参加|さんか}して{感|かん}じたこと、{考|かんが}えたことを{話|はな}してください。', 'Từ trước đến nay bạn đã tham gia hoạt động tình nguyện hay hoạt động nào? Hãy nói về cảm nhận và suy nghĩ của bạn sau khi tham gia.'),
  guide: [
    t('どんな{活動|かつどう}に{参加|さんか}したのか。', 'Bạn đã tham gia hoạt động nào?'),
    t('{感想|かんそう}についての{表現|ひょうげん}・{言葉|ことば}を{使|つか}うかどうか。', 'Có sử dụng các cách diễn đạt / từ ngữ nói về cảm tưởng hay không.'),
  ],
  expressions: [
    {
      pattern: '〜たところ〜ました／でした',
      meaning: 'sau khi làm thử … thì thấy …',
      examples: [t('ボランティアに{参加|さんか}したところ、たくさんの{友|とも}だちができました。', 'Sau khi tham gia tình nguyện, tôi có thêm nhiều bạn.')],
    },
    {
      pattern: '〜ました／でした。ところが、〜ました',
      meaning: '… Thế nhưng (trái với dự đoán) …',
      examples: [t('{簡単|かんたん}だと{思|おも}っていました。ところが、とても{大変|たいへん}でした。', 'Tôi tưởng là dễ. Thế nhưng thực tế rất vất vả.')],
    },
    {
      pattern: '{思|おも}ったより〜',
      meaning: 'hơn tôi nghĩ',
      examples: [t('{思|おも}ったより{楽|たの}しかったです。', 'Vui hơn tôi nghĩ.')],
    },
    {
      pattern: '{意外|いがい}と〜',
      meaning: 'không ngờ lại …',
      examples: [t('{意外|いがい}と{難|むずか}しかったです。', 'Không ngờ lại khó.')],
    },
    {
      pattern: '{予想|よそう}と{違|ちが}って〜',
      meaning: 'khác với dự đoán …',
      examples: [t('{予想|よそう}と{違|ちが}って、{子|こ}どもたちはとても{元気|げんき}でした。', 'Khác với dự đoán, các em nhỏ rất khỏe khoắn, hoạt bát.')],
    },
    {
      pattern: '{予想通|よそうどお}り〜',
      meaning: 'đúng như dự đoán',
      examples: [t('{予想通|よそうどお}り、{大変|たいへん}でした。', 'Đúng như dự đoán, rất vất vả.')],
    },
    {
      pattern: '{期待通|きたいどお}り〜',
      meaning: 'đúng như mong đợi',
      examples: [t('{期待通|きたいどお}り、いい{経験|けいけん}になりました。', 'Đúng như mong đợi, đó là một trải nghiệm tốt.')],
    },
    {
      pattern: '{実際|じっさい}は〜',
      meaning: 'thực tế thì …',
      examples: [t('{実際|じっさい}は、{思|おも}っていたより{簡単|かんたん}でした。', 'Thực tế thì dễ hơn tôi nghĩ.')],
    },
  ],
  sampleAnswers: [
    {
      title: 'Mẫu 1 – Nhặt rác ở biển',
      lines: [
        t('{私|わたし}は{海|うみ}のごみ{拾|ひろ}いのボランティアに{参加|さんか}しました。', 'Tôi đã tham gia hoạt động tình nguyện nhặt rác ở biển.'),
        t('{大変|たいへん}だと{思|おも}っていましたが、{思|おも}ったより{楽|たの}しかったです。', 'Tôi nghĩ sẽ vất vả, nhưng vui hơn tôi nghĩ.'),
        t('いろいろな{人|ひと}と{知|し}り{合|あ}えて、{新鮮|しんせん}でした。', 'Tôi quen được nhiều người khác nhau, thấy rất mới mẻ.'),
        t('また{参加|さんか}したいと{思|おも}いました。', 'Tôi muốn tham gia lần nữa.'),
      ],
    },
    {
      title: 'Mẫu 2 – Chơi với trẻ em',
      lines: [
        t('{私|わたし}は{小学校|しょうがっこう}で{子|こ}どもたちと{遊|あそ}ぶボランティアに{参加|さんか}しました。', 'Tôi đã tham gia tình nguyện chơi với các em nhỏ ở trường tiểu học.'),
        t('{最初|さいしょ}は{緊張|きんちょう}しましたが、{子|こ}どもたちが{話|はな}しかけてくれました。', 'Lúc đầu tôi căng thẳng, nhưng các em đã bắt chuyện với tôi.'),
        t('{予想|よそう}と{違|ちが}って、みんなとても{元気|げんき}でした。', 'Khác với dự đoán, các em ai cũng rất khỏe khoắn.'),
        t('{貴重|きちょう}な{体験|たいけん}ができて、よかったです。', 'Tôi có được một trải nghiệm quý giá, thật tốt.'),
      ],
    },
  ],
  vocab: [
    { word: '出会う', reading: 'であう', meaning: 'gặp gỡ' },
    { word: '知り合う', reading: 'しりあう', meaning: 'quen biết' },
    { word: '緊張する', reading: 'きんちょうする', meaning: 'căng thẳng, hồi hộp' },
    { word: '体験する', reading: 'たいけんする', meaning: 'trải nghiệm' },
    { word: '話しかける', reading: 'はなしかける', meaning: 'bắt chuyện' },
    { word: '触れる', reading: 'ふれる', meaning: 'chạm vào, tiếp xúc' },
    { word: '驚く', reading: 'おどろく', meaning: 'ngạc nhiên' },
    { word: '実感する', reading: 'じっかんする', meaning: 'cảm nhận thật sự' },
    { word: '見つめ直す', reading: 'みつめなおす', meaning: 'nhìn lại (bản thân)' },
    { word: '視野が広がる', reading: 'しやがひろがる', meaning: 'tầm nhìn được mở rộng' },
    { word: '努力する', reading: 'どりょくする', meaning: 'nỗ lực' },
    { word: '寄付する', reading: 'きふする', meaning: 'quyên góp' },
    { word: '期待する', reading: 'きたいする', meaning: 'kỳ vọng, mong đợi' },
    { word: '感動する', reading: 'かんどうする', meaning: 'xúc động' },
    { word: '共通する', reading: 'きょうつうする', meaning: 'có điểm chung' },
    { word: '気がする', reading: 'きがする', meaning: 'có cảm giác' },
    { word: '育成する', reading: 'いくせいする', meaning: 'nuôi dưỡng, đào tạo' },
    { word: '貴重(な)', reading: 'きちょう(な)', meaning: 'quý giá' },
    { word: '新鮮(な)', reading: 'しんせん(な)', meaning: 'mới mẻ, tươi mới' },
    { word: '充実した', reading: 'じゅうじつした', meaning: 'đầy đủ, trọn vẹn, bổ ích' },
    { word: '違和感', reading: 'いわかん', meaning: 'cảm giác lạ lẫm, không quen' },
    { word: '体験談', reading: 'たいけんだん', meaning: 'câu chuyện trải nghiệm' },
    { word: '友人', reading: 'ゆうじん', meaning: 'bạn bè' },
    { word: 'お互い', reading: 'おたがい', meaning: 'lẫn nhau' },
    { word: '寄付金', reading: 'きふきん', meaning: 'tiền quyên góp' },
    { word: '〜同士', reading: 'どうし', meaning: 'cùng là … với nhau' },
    { word: '素晴らしい', reading: 'すばらしい', meaning: 'tuyệt vời' },
    { word: 'うらやましい', reading: 'うらやましい', meaning: 'ghen tị, ước ao' },
  ],
};
