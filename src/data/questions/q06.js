// 質問6 (第8課) – Được người khác chia sẻ nỗi lo / phiền muộn
const t = (ja, vi) => ({ ja, vi });

export default {
  id: 6,
  lesson: 8,
  question: t('{人|ひと}から{悩|なや}みをシェアしてもらったことがありますか。そのとき、あなたの{気持|きも}ちはどうでしたか。', 'Bạn đã từng được ai đó chia sẻ nỗi phiền muộn chưa? Lúc đó cảm xúc của bạn thế nào?'),
  guide: [
    t('{悩|なや}みをシェアしてもらったことがありますか。', 'Bạn đã từng được chia sẻ nỗi phiền muộn chưa?'),
    t('なぜだと{思|おも}いますか。', 'Bạn nghĩ vì sao (người đó chia sẻ với bạn)?'),
  ],
  expressions: [
    {
      pattern: '{違和感|いわかん}',
      meaning: 'cảm giác lạ, không quen',
      examples: [t('ふだん{元気|げんき}な{友|とも}だちが{悩|なや}みを{話|はな}したので、{違和感|いわかん}がありました。', 'Người bạn bình thường vui vẻ lại nói về nỗi phiền muộn nên tôi thấy hơi lạ.')],
    },
    {
      pattern: '{緊張|きんちょう}する',
      meaning: 'căng thẳng, hồi hộp',
      examples: [t('どう{答|こた}えたらいいか、{緊張|きんちょう}しました。', 'Tôi hồi hộp vì không biết nên trả lời thế nào.')],
    },
    {
      pattern: '{嬉|うれ}しい',
      meaning: 'vui',
      examples: [t('{話|はな}してくれて、{嬉|うれ}しかったです。', 'Bạn chịu nói với tôi, tôi thấy vui.')],
    },
    {
      pattern: '{心配|しんぱい}する',
      meaning: 'lo lắng',
      examples: [t('とても{心配|しんぱい}しました。', 'Tôi đã rất lo lắng.')],
    },
    {
      pattern: '{困|こま}る',
      meaning: 'khó xử, bối rối',
      examples: [t('どんなアドバイスをしたらいいか、{困|こま}りました。', 'Tôi bối rối không biết nên khuyên thế nào.')],
    },
    {
      pattern: '{感謝|かんしゃ}する',
      meaning: 'biết ơn, cảm ơn',
      examples: [t('{友|とも}だちは「ありがとう」と{感謝|かんしゃ}してくれました。', 'Bạn đã nói “cảm ơn” với tôi.')],
    },
    {
      pattern: '{驚|おどろ}く',
      meaning: 'ngạc nhiên',
      examples: [t('{友|とも}だちの{悩|なや}みを{聞|き}いて、{驚|おどろ}きました。', 'Nghe nỗi phiền muộn của bạn, tôi đã ngạc nhiên.')],
    },
    {
      pattern: '{実感|じっかん}する',
      meaning: 'cảm nhận thật sự',
      examples: [t('{友|とも}だちに{頼|たよ}られていると{実感|じっかん}しました。', 'Tôi cảm nhận rõ rằng mình được bạn tin cậy.')],
    },
    {
      pattern: '〜かどうか',
      meaning: 'liệu có … hay không',
      examples: [t('{私|わたし}の{答|こた}えがよかったかどうか、{心配|しんぱい}です。', 'Tôi lo không biết câu trả lời của mình có tốt không.')],
    },
    {
      pattern: '〜{気|き}がする',
      meaning: 'có cảm giác …',
      examples: [t('{友|とも}だちを{助|たす}けられた{気|き}がしました。', 'Tôi có cảm giác đã giúp được bạn.')],
    },
    {
      pattern: '〜くせに',
      meaning: 'dù … vậy mà … (chê trách nhẹ)',
      examples: [t('{友|とも}だちは「{大丈夫|だいじょうぶ}」と{言|い}ったくせに、{本当|ほんとう}は{悩|なや}んでいました。', 'Bạn nói là “không sao” vậy mà thật ra đang rất phiền muộn.')],
    },
    {
      pattern: '〜せいで',
      meaning: 'vì … (nguyên nhân xấu)',
      examples: [t('{試験|しけん}のせいで、{友|とも}だちは{悩|なや}んでいました。', 'Vì kỳ thi nên bạn tôi đã phiền muộn.')],
    },
    {
      pattern: '〜おかげで',
      meaning: 'nhờ … (nguyên nhân tốt)',
      examples: [t('{話|はな}したおかげで、{友|とも}だちは{元気|げんき}になりました。', 'Nhờ đã nói chuyện nên bạn tôi khỏe khoắn lên.')],
    },
    {
      pattern: '〜(さ)せる',
      meaning: 'làm cho (ai) …',
      examples: [t('{友|とも}だちを{安心|あんしん}させたいと{思|おも}いました。', 'Tôi muốn làm cho bạn yên tâm.')],
    },
  ],
  sampleAnswers: [
    {
      title: 'Mẫu 1 – Bạn chia sẻ chuyện công việc',
      lines: [
        t('はい、{友|とも}だちが{仕事|しごと}の{悩|なや}みを{話|はな}してくれたことがあります。', 'Vâng, có lần bạn tôi đã chia sẻ nỗi phiền muộn về công việc.'),
        t('{驚|おどろ}きましたが、{話|はな}してくれて{嬉|うれ}しかったです。', 'Tôi ngạc nhiên nhưng thấy vui vì bạn đã nói với mình.'),
        t('{私|わたし}を{信|しん}じているからだと{思|おも}います。', 'Tôi nghĩ vì bạn tin tưởng tôi.'),
        t('{話|はな}した{後|あと}、{友|とも}だちは{元気|げんき}になって、よかったです。', 'Sau khi nói chuyện, bạn tôi khỏe khoắn lên, thật tốt.'),
      ],
    },
    {
      title: 'Mẫu 2 – Anh chị khóa trên chia sẻ',
      lines: [
        t('はい、{先輩|せんぱい}が{悩|なや}みを{話|はな}してくれました。', 'Vâng, một anh khóa trên đã chia sẻ nỗi phiền muộn với tôi.'),
        t('{最初|さいしょ}は{緊張|きんちょう}して、どう{答|こた}えたらいいか{困|こま}りました。', 'Lúc đầu tôi hồi hộp và bối rối không biết trả lời thế nào.'),
        t('でも、{頼|たよ}ってくれたことが{嬉|うれ}しかったです。', 'Nhưng tôi thấy vui vì anh ấy đã dựa vào tôi.'),
        t('{私|わたし}が{聞|き}き{上手|じょうず}だからだと{思|おも}います。', 'Tôi nghĩ vì tôi là người biết lắng nghe.'),
      ],
    },
    {
      title: 'Mẫu theo ý bạn – Bạn thân chia sẻ chuyện buồn',
      lines: [
        t('はい、{親|した}しい{友|とも}だちが、{悲|かな}しいことを{話|はな}してくれたことがあります。', 'Vâng, có lần một người bạn thân đã chia sẻ với tôi chuyện buồn.'),
        t('{聞|き}いたとき、{驚|おどろ}きましたが、{私|わたし}を{信|しん}じてくれていると{実感|じっかん}して、{嬉|うれ}しかったです。', 'Khi nghe, tôi ngạc nhiên nhưng cảm nhận được mình đang được bạn tin tưởng nên tôi thấy vui.'),
        t('だから、{私|わたし}も{自分|じぶん}の{悩|なや}みを{話|はな}しました。', 'Vì vậy tôi cũng chia sẻ lại nỗi phiền muộn của mình.'),
        t('{話|はな}したおかげで、お{互|たが}いにもっと{仲|なか}よくなれました。', 'Nhờ đã nói chuyện, chúng tôi trở nên thân nhau hơn.'),
      ],
    },
  ],
  vocab: [
    { word: '親しい', reading: 'したしい', meaning: 'thân thiết' },
    { word: '仲がいい', reading: 'なかがいい', meaning: 'thân nhau, hòa thuận' },
    { word: 'お互い', reading: 'おたがい', meaning: 'lẫn nhau' },
    { word: '悩み', reading: 'なやみ', meaning: 'nỗi phiền muộn' },
    { word: 'シェアする', reading: 'シェアする', meaning: 'chia sẻ' },
    { word: '頼る', reading: 'たよる', meaning: 'dựa vào, tin cậy' },
    { word: '信じる', reading: 'しんじる', meaning: 'tin' },
    { word: '聞き上手', reading: 'ききじょうず', meaning: 'người biết lắng nghe' },
    { word: '安心する', reading: 'あんしんする', meaning: 'yên tâm' },
    { word: 'アドバイス', reading: 'アドバイス', meaning: 'lời khuyên' },
  ],
};
