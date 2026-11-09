// 質問5 (第8課) – Xin lỗi trực tiếp hay bằng tin nhắn?
const t = (ja, vi) => ({ ja, vi });

export default {
  id: 5,
  lesson: 8,
  question: t('あなたは{人|ひと}に「ごめんなさい」という{時|とき}、{直接|ちょくせつ}{言|い}いますか、それともメッセージですか。どうしてですか。', 'Khi nói “xin lỗi” ai đó, bạn nói trực tiếp hay bằng tin nhắn? Tại sao?'),
  guide: [
    t('どうやって「ごめんなさい」という{言葉|ことば}を{伝|つた}えますか。', 'Bạn truyền đạt lời “xin lỗi” bằng cách nào?'),
    t('どうしてですか。', 'Tại sao vậy?'),
  ],
  expressions: [
    {
      pattern: '〜たびに',
      meaning: 'mỗi lần …',
      examples: [t('{私|わたし}は、{失敗|しっぱい}するたびに、すぐ{謝|あやま}ります。', 'Mỗi lần mắc lỗi, tôi xin lỗi ngay.')],
    },
    {
      pattern: '{当然|とうぜん}',
      meaning: 'đương nhiên',
      examples: [t('{悪|わる}いことをしたら、{謝|あやま}るのは{当然|とうぜん}です。', 'Nếu làm điều sai thì xin lỗi là đương nhiên.')],
    },
    {
      pattern: '{意外|いがい}(な)',
      meaning: 'bất ngờ, không ngờ',
      examples: [t('{意外|いがい}に{思|おも}うかもしれませんが、{私|わたし}はメッセージで{謝|あやま}ります。', 'Có thể bạn sẽ thấy bất ngờ, nhưng tôi xin lỗi bằng tin nhắn.')],
    },
    {
      pattern: 'ただ',
      meaning: 'tuy nhiên, chỉ có điều',
      examples: [t('ただ、{大|おお}きい{失敗|しっぱい}のときは、{会|あ}って{謝|あやま}ります。', 'Tuy nhiên, khi mắc lỗi lớn thì tôi gặp để xin lỗi.')],
    },
    {
      pattern: '〜ば',
      meaning: 'nếu … thì',
      examples: [t('{会|あ}えば、{気持|きも}ちが{伝|つた}わります。', 'Nếu gặp nhau thì tình cảm sẽ được truyền đến.')],
    },
    {
      pattern: '〜なら(ば)',
      meaning: 'nếu là … thì',
      examples: [t('{近|ちか}くに{住|す}んでいるなら、{会|あ}って{言|い}います。', 'Nếu sống gần thì tôi gặp rồi nói.')],
    },
    {
      pattern: '〜たら、〜たのに',
      meaning: 'giá mà … thì đã … (tiếc nuối)',
      examples: [t('{早|はや}く{謝|あやま}ったらよかったのに、{言|い}えませんでした。', 'Giá mà xin lỗi sớm thì tốt, nhưng tôi đã không nói được.')],
    },
    {
      pattern: '〜(さ)せる',
      meaning: 'làm cho (ai) …',
      examples: [t('{友|とも}だちを{心配|しんぱい}させてしまいました。', 'Tôi đã làm bạn lo lắng mất rồi.')],
    },
    {
      pattern: '〜てしまう',
      meaning: 'lỡ … mất rồi',
      examples: [t('{約束|やくそく}を{忘|わす}れてしまいました。', 'Tôi đã lỡ quên mất cuộc hẹn.')],
    },
    {
      pattern: '{実感|じっかん}する',
      meaning: 'cảm nhận thật sự',
      examples: [t('{直接|ちょくせつ}{言|い}うほうが{気持|きも}ちが{伝|つた}わると{実感|じっかん}しました。', 'Tôi cảm nhận rõ rằng nói trực tiếp thì tình cảm được truyền đạt tốt hơn.')],
    },
    {
      pattern: '{緊張|きんちょう}する',
      meaning: 'căng thẳng, hồi hộp',
      examples: [t('{直接|ちょくせつ}{言|い}うときは、{緊張|きんちょう}します。', 'Khi nói trực tiếp, tôi thấy hồi hộp.')],
    },
    {
      pattern: '{判断|はんだん}する',
      meaning: 'phán đoán, quyết định',
      examples: [t('{状況|じょうきょう}を{見|み}て、どちらがいいか{判断|はんだん}します。', 'Tôi nhìn tình hình rồi quyết định cách nào tốt hơn.')],
    },
    {
      pattern: '{思|おも}い{切|き}って',
      meaning: 'quyết tâm, mạnh dạn làm',
      examples: [t('{思|おも}い{切|き}って、{直接|ちょくせつ}{言|い}ってみました。', 'Tôi đã mạnh dạn thử nói trực tiếp.')],
    },
  ],
  sampleAnswers: [
    {
      title: 'Mẫu 1 – Nói trực tiếp',
      lines: [
        t('{私|わたし}は、{直接|ちょくせつ}{会|あ}って「ごめんなさい」と{言|い}います。', 'Tôi gặp trực tiếp rồi nói “xin lỗi”.'),
        t('{顔|かお}を{見|み}て{言|い}うと、{気持|きも}ちが{伝|つた}わるからです。', 'Vì nói khi nhìn mặt thì tình cảm được truyền đạt.'),
        t('{緊張|きんちょう}しますが、{思|おも}い{切|き}って{言|い}うようにしています。', 'Tôi hồi hộp nhưng cố gắng mạnh dạn nói.'),
      ],
    },
    {
      title: 'Mẫu 2 – Nhắn tin trước',
      lines: [
        t('{私|わたし}は、まずメッセージで{謝|あやま}ることが{多|おお}いです。', 'Tôi thường xin lỗi bằng tin nhắn trước.'),
        t('{直接|ちょくせつ}{言|い}うのは{緊張|きんちょう}するし、{友|とも}だちも{考|かんが}える{時間|じかん}がほしいと{思|おも}うからです。', 'Vì nói trực tiếp thì căng thẳng, và tôi nghĩ bạn cũng cần thời gian suy nghĩ.'),
        t('ただ、{大|おお}きい{失敗|しっぱい}のときは、{会|あ}って{謝|あやま}ります。', 'Tuy nhiên, khi mắc lỗi lớn thì tôi gặp để xin lỗi.'),
      ],
    },
    {
      title: 'Mẫu theo ý bạn – Hay nhắn tin vì khó mở lời khi gặp',
      lines: [
        t('{私|わたし}は、{直接|ちょくせつ}{会|あ}うより、メッセージで「ごめんなさい」と{言|い}うことが{多|おお}いです。', 'Tôi thường nói “xin lỗi” bằng tin nhắn hơn là gặp trực tiếp.'),
        t('{会|あ}って{言|い}うときは、{緊張|きんちょう}して、なかなか{話|はな}し{始|はじ}められないからです。', 'Vì khi gặp trực tiếp, tôi căng thẳng và mãi không mở lời được.'),
        t('メッセージなら、{考|かんが}えながら、{気持|きも}ちに{合|あ}う{言葉|ことば}を{選|えら}べます。', 'Nếu nhắn tin thì tôi có thể vừa suy nghĩ vừa chọn từ ngữ phù hợp với cảm xúc.'),
        t('だから、{落|お}ち{着|つ}いて{謝|あやま}れるメッセージのほうが{好|す}きです。', 'Vì vậy tôi thích nhắn tin hơn, vì có thể bình tĩnh xin lỗi.'),
      ],
    },
  ],
  vocab: [
    { word: '話し始める', reading: 'はなしはじめる', meaning: 'bắt đầu nói, mở lời' },
    { word: '選ぶ', reading: 'えらぶ', meaning: 'chọn' },
    { word: '落ち着く', reading: 'おちつく', meaning: 'bình tĩnh' },
    { word: '直接', reading: 'ちょくせつ', meaning: 'trực tiếp' },
    { word: '謝る', reading: 'あやまる', meaning: 'xin lỗi' },
    { word: '失敗', reading: 'しっぱい', meaning: 'thất bại, lỗi lầm' },
    { word: '伝わる', reading: 'つたわる', meaning: 'được truyền đạt' },
    { word: '伝える', reading: 'つたえる', meaning: 'truyền đạt' },
    { word: '約束', reading: 'やくそく', meaning: 'lời hứa, cuộc hẹn' },
    { word: '状況', reading: 'じょうきょう', meaning: 'tình hình' },
    { word: '心配する', reading: 'しんぱいする', meaning: 'lo lắng' },
  ],
};
