// ===== Phần bổ sung cho từng 場面 =====
//  - promptImages : ảnh đề bài thật (vai A / vai B) cắt từ PDF hướng dẫn ôn thi
//  - originalImage: ảnh hội thoại mẫu gốc của bài 6/7/8/10 (hiện ở đầu trang 場面; 場面1+2 dùng chung bài 6, 場面3+4 dùng chung bài 7)
//  - sat          : "Bản sát gốc" – bám sát cấu trúc & từ khóa của hội thoại mẫu, viết ngắn gọn dễ học thuộc
//  - followUps    : 3 câu hỏi cô có thể hỏi thêm + gợi ý trả lời đơn giản
// File ảnh nằm trong public/images/ (prompts/, samples/).
const l = (speaker, ja, vi) => ({ speaker, ja, vi });
const q = (ja, vi) => ({ ja, vi });
const fu = (qja, qvi, aja, avi) => ({ q: q(qja, qvi), a: q(aja, avi) });
const prompts = (n) => ({ A: `images/prompts/scene${n}-A.png`, B: `images/prompts/scene${n}-B.png` });

export default {
  // ------------------------------------------------------------------ 場面1 (bài 6)
  1: {
    originalImage: 'images/samples/lesson6.png',
    promptImages: prompts(1),
    sat: {
      note: 'Bám sát hội thoại mẫu bài 6, rút gọn cho dễ thuộc. Từ khóa cần nhớ: 調子が悪くて / 食欲もなくて / 体調を崩す / 〜のような / 〜として / 栄養がある / 〜に限る。',
      lines: [
        l('A', 'Bさん、どうしたの？ {元気|げんき}ないね。', 'B này, có chuyện gì vậy? Trông cậu không khỏe nhỉ.'),
        l('B', 'うん、なんだか{最近|さいきん}{体|からだ}の{調子|ちょうし}が{悪|わる}くて。', 'Ừ, không hiểu sao dạo này người mình không khỏe.'),
        l('A', 'ええ、{大丈夫|だいじょうぶ}？', 'Ơ, cậu có sao không?'),
        l('B', 'うーん。それに、{食欲|しょくよく}もなくて。', 'Ừm. Hơn nữa mình còn chán ăn nữa.'),
        l('A', '{季節|きせつ}が{変|か}わったから、{体調|たいちょう}を{崩|くず}したんだね。', 'Vì đổi mùa nên cậu bị ốm rồi nhỉ.'),
        l('B', 'そうかも。どうしたらいいかな。', 'Có lẽ vậy. Mình nên làm sao đây?'),
        l('A', 'スープのような{温|あたた}かい{物|もの}を{食|た}べるといいよ。{体|からだ}にいいんだよ。', 'Ăn đồ ấm như súp thì tốt đó. Tốt cho cơ thể mà.'),
        l('B', '{温|あたた}かい{物|もの}ね。ほかに{体|からだ}にいい{物|もの}はある？', 'Đồ ấm hả. Còn món nào khác tốt cho cơ thể không?'),
        l('A', 'そう。それに、{日本|にほん}では{朝|あさ}ごはんとして{納豆|なっとう}をよく{食|た}べるよ。{納豆|なっとう}は{栄養|えいよう}があるからね。', 'Đúng vậy. Với lại ở Nhật, người ta hay ăn natto làm bữa sáng. Natto có dinh dưỡng mà.'),
        l('B', 'へえ。', 'Ồ.'),
        l('A', '{体|からだ}にいい{食|た}べ{物|もの}は{納豆|なっとう}に{限|かぎ}るって{言|い}われてるんだよ。', 'Người ta nói món tốt cho cơ thể thì natto là nhất đó.'),
        l('B', 'へえ、{食|た}べてみるよ。ありがとう。', 'Ồ, mình sẽ thử ăn. Cảm ơn nhé.'),
      ],
    },
    followUps: [
      fu('{最近|さいきん}、{食欲|しょくよく}がないとき、あなたならどうしますか。', 'Nếu dạo này không thèm ăn, bạn sẽ làm gì?', '{私|わたし}なら、おかゆやスープを{食|た}べます。そして、{早|はや}く{寝|ね}ます。', 'Tôi thì sẽ ăn cháo hoặc súp, rồi đi ngủ sớm.'),
      fu('{体|からだ}にいい{食|た}べ{物|もの}は{何|なん}だと{思|おも}いますか。', 'Bạn nghĩ món ăn nào tốt cho cơ thể?', '{野菜|やさい}や{納豆|なっとう}が{体|からだ}にいいと{思|おも}います。', 'Tôi nghĩ rau và natto tốt cho cơ thể.'),
      fu('{季節|きせつ}が{変|か}わるとき、{体調|たいちょう}を{崩|くず}しやすいですか。', 'Khi đổi mùa, bạn có dễ bị ốm không?', 'はい、{崩|くず}しやすいです。{天気|てんき}が{変|か}わるからだと{思|おも}います。', 'Vâng, tôi dễ bị ốm. Tôi nghĩ vì thời tiết thay đổi.'),
    ],
  },

  // ------------------------------------------------------------------ 場面2 (bài 6)
  2: {
    originalImage: 'images/samples/lesson6.png',
    promptImages: prompts(2),
    sat: {
      note: 'Bám sát hội thoại mẫu bài 6 (đổi sang chủ đề mất ngủ), rút gọn cho dễ thuộc. Từ khóa: 調子が悪くて / 〜もなくて / 体調を崩す / 〜のような / 〜ことも大切 / 〜って言われてる。',
      lines: [
        l('A', 'Bさん、どうしたの？ {元気|げんき}ないね。', 'B này, có chuyện gì vậy? Trông cậu không khỏe nhỉ.'),
        l('B', 'うん、なんだか{最近|さいきん}{体|からだ}の{調子|ちょうし}が{悪|わる}くて。', 'Ừ, không hiểu sao dạo này người mình không khỏe.'),
        l('A', 'ええ、{大丈夫|だいじょうぶ}？', 'Ơ, cậu có sao không?'),
        l('B', 'うーん。それに、あまり{寝|ね}られなくて。', 'Ừm. Hơn nữa mình còn không ngủ được mấy.'),
        l('A', '{忙|いそが}しくて、{体調|たいちょう}を{崩|くず}したんだね。', 'Vì bận quá nên cậu bị ốm rồi nhỉ.'),
        l('B', 'そうかも。どうしたらいいかな。', 'Có lẽ vậy. Mình nên làm sao đây?'),
        l('A', '{寝|ね}る{前|まえ}に、{牛乳|ぎゅうにゅう}のような{温|あたた}かい{物|もの}を{飲|の}むといいよ。{寝|ね}やすくなるんだよ。', 'Trước khi ngủ, uống đồ ấm như sữa thì tốt đó. Sẽ dễ ngủ hơn.'),
        l('B', '{温|あたた}かい{物|もの}ね。ほかにいい{方法|ほうほう}はある？', 'Đồ ấm hả. Còn cách nào hay nữa không?'),
        l('A', 'そう。それに、{寝|ね}る{前|まえ}にスマホを{見|み}ないほうがいいよ。{眠|ねむ}くなりにくくなるからね。', 'Đúng vậy. Với lại trước khi ngủ đừng xem điện thoại thì hơn. Vì sẽ khó buồn ngủ hơn.'),
        l('B', 'へえ。', 'Ồ.'),
        l('A', '{毎日|まいにち}{同|おな}じ{時間|じかん}に{寝|ね}ることも{大切|たいせつ}だって{言|い}われてるんだよ。', 'Người ta nói ngủ cùng một giờ mỗi ngày cũng quan trọng đó.'),
        l('B', 'わかった。{今日|きょう}から{試|ため}してみるよ。ありがとう。', 'Mình hiểu rồi. Từ hôm nay mình sẽ thử. Cảm ơn nhé.'),
      ],
    },
    followUps: [
      fu('いつも{何時|なんじ}ごろ{寝|ね}ますか。', 'Bạn thường ngủ lúc mấy giờ?', '{夜|よる}の11{時|じ}ごろ{寝|ね}ます。', 'Tôi ngủ khoảng 11 giờ đêm.'),
      fu('{寝|ね}られないとき、どうしますか。', 'Khi không ngủ được, bạn làm gì?', '{温|あたた}かい{牛乳|ぎゅうにゅう}を{飲|の}みます。そして、スマホを{見|み}ないようにします。', 'Tôi uống sữa ấm. Và cố gắng không xem điện thoại.'),
      fu('1{日|にち}に{何時間|なんじかん}ぐらい{寝|ね}たらいいと{思|おも}いますか。', 'Bạn nghĩ một ngày nên ngủ khoảng mấy tiếng?', '7{時間|じかん}か8{時間|じかん}ぐらいがいいと{思|おも}います。', 'Tôi nghĩ khoảng 7 hoặc 8 tiếng là tốt.'),
    ],
  },

  // ------------------------------------------------------------------ 場面3 (bài 7)
  3: {
    originalImage: 'images/samples/lesson7.png',
    promptImages: prompts(3),
    sat: {
      note: 'Bám sát hội thoại mẫu bài 7, dùng đúng thông tin của đề, rút gọn cho dễ thuộc. Từ khóa: 興味がありますか / 参加しようと思って / 来てもらえるかなと思って / 〜の一部が寄付される / 〜ぐらい / 行ってみようかな。',
      lines: [
        l('A', 'こんにちは。', 'Xin chào.'),
        l('B', 'こんにちは。{今日|きょう}は{空|す}いてますね。', 'Xin chào. Hôm nay vắng nhỉ.'),
        l('A', 'あのう、Bさんはフリーマーケットって{興味|きょうみ}がありますか。', 'À, bạn B có hứng thú với chợ đồ cũ không?'),
        l('B', 'え？', 'Hả?'),
        l('A', '{実|じつ}は{来週|らいしゅう}の{土曜日|どようび}と{日曜日|にちようび}に、フリーマーケットがあるんです。それに{参加|さんか}しようと{思|おも}ってるんですけど。', 'Thật ra thứ Bảy và Chủ nhật tuần sau có chợ đồ cũ. Mình định tham gia.'),
        l('B', 'へえ。', 'Ồ.'),
        l('A', 'もしお{時間|じかん}があったら、Bさんにも{来|き}てもらえるかなと{思|おも}って……。', 'Nếu bạn có thời gian, mình nghĩ liệu bạn có thể đến không…'),
        l('B', 'ああ、そうなんですか。{何|なに}を{売|う}るんですか。', 'À, vậy à. Bạn bán gì vậy?'),
        l('A', '{古|ふる}い{服|ふく}や{本|ほん}です。{自分|じぶん}で{作|つく}った{料理|りょうり}を{出|だ}してもいいんですよ。', 'Quần áo cũ và sách. Còn được bán cả món ăn tự nấu nữa đó.'),
        l('B', 'へえ、おもしろそうですね。', 'Ồ, nghe thú vị đấy.'),
        l('A', 'しかも、{売|う}り{上|あ}げの{一部|いちぶ}がホームレスの{人|ひと}のために{寄付|きふ}されるんです。{値段|ねだん}の2{割|わり}です。', 'Hơn nữa, một phần doanh thu được quyên góp cho người vô gia cư. Là 20% giá bán.'),
        l('B', 'ああ、いいですね。{何時|なんじ}からですか。', 'À, hay đấy. Bắt đầu từ mấy giờ vậy?'),
        l('A', '{朝|あさ}8{時|じ}からです。', 'Từ 8 giờ sáng.'),
        l('B', 'そうなんだ。じゃ、{行|い}ってみようかな。', 'Vậy à. Thế thì mình thử đi xem sao.'),
        l('A', 'わあ、ありがとうございます！', 'Ôi, cảm ơn bạn nhiều!'),
      ],
    },
    followUps: [
      fu('フリーマーケットで{何|なに}を{売|う}りたいですか。', 'Bạn muốn bán gì ở chợ đồ cũ?', '{古|ふる}い{服|ふく}や{本|ほん}を{売|う}りたいです。', 'Tôi muốn bán quần áo cũ và sách.'),
      fu('フリーマーケットに{行|い}ったことがありますか。', 'Bạn đã từng đi chợ đồ cũ chưa?', 'はい、あります。{安|やす}い{物|もの}がたくさんあって、{楽|たの}しかったです。（いいえの{場合|ばあい}：いいえ、ありません。でも、{行|い}ってみたいです。）', 'Vâng, có. Có nhiều đồ rẻ và rất vui. (Nếu chưa: Chưa, nhưng tôi muốn thử đi.)'),
      fu('どうして{寄付|きふ}は{大切|たいせつ}だと{思|おも}いますか。', 'Tại sao bạn nghĩ quyên góp là quan trọng?', '{困|こま}っている{人|ひと}を{助|たす}けることができるからです。', 'Vì có thể giúp đỡ những người đang gặp khó khăn.'),
    ],
  },

  // ------------------------------------------------------------------ 場面4 (bài 7)
  4: {
    originalImage: 'images/samples/lesson7.png',
    promptImages: prompts(4),
    sat: {
      note: 'Bám sát hội thoại mẫu bài 7 (đổi sang tình nguyện), rút gọn cho dễ thuộc. Từ khóa: 興味がありますか / 参加しようと思って / 来てもらえるかなと思って / 〜ですから / しかも / 行ってみようかな。',
      lines: [
        l('A', 'こんにちは。', 'Xin chào.'),
        l('B', 'こんにちは。{今日|きょう}は{空|す}いてますね。', 'Xin chào. Hôm nay vắng nhỉ.'),
        l('A', 'あのう、Bさんはボランティアって{興味|きょうみ}がありますか。', 'À, bạn B có hứng thú với hoạt động tình nguyện không?'),
        l('B', 'え？', 'Hả?'),
        l('A', '{実|じつ}は{今度|こんど}、ボランティア{活動|かつどう}に{参加|さんか}しようと{思|おも}ってるんですけど。', 'Thật ra sắp tới mình định tham gia hoạt động tình nguyện.'),
        l('B', 'へえ。どんな{活動|かつどう}ですか。', 'Ồ. Hoạt động như thế nào vậy?'),
        l('A', '{地方|ちほう}の{孤児院|こじいん}で、{子|こ}どもたちに{初級|しょきゅう}レベルの{英語|えいご}を{教|おし}えるんです。', 'Dạy tiếng Anh sơ cấp cho các em nhỏ ở một cô nhi viện vùng quê.'),
        l('B', 'へえ、そうなんだ。いつですか。', 'Ồ, vậy à. Khi nào vậy?'),
        l('A', '{毎週|まいしゅう}{土曜日|どようび}の{朝|あさ}8{時|じ}から10{時|じ}までです。もしお{時間|じかん}があったら、Bさんにも{来|き}てもらえるかなと{思|おも}って……。', 'Mỗi thứ Bảy, từ 8 đến 10 giờ sáng. Nếu bạn có thời gian, mình nghĩ liệu bạn có thể đến không…'),
        l('B', 'ああ、いいですね。でも、{英語|えいご}を{教|おし}えるのは{難|むずか}しそうです。', 'À, hay đấy. Nhưng dạy tiếng Anh có vẻ khó.'),
        l('A', '{大丈夫|だいじょうぶ}ですよ。{初級|しょきゅう}レベルの{英語|えいご}ですから。', 'Không sao đâu. Vì chỉ là tiếng Anh sơ cấp thôi.'),
        l('B', 'そうなんだ。', 'Vậy à.'),
        l('A', 'しかも、{活動|かつどう}に{参加|さんか}した{人|ひと}は、{後|あと}で{英語|えいご}の{中級|ちゅうきゅう}コースに{無料|むりょう}で{参加|さんか}できるんです。', 'Hơn nữa, người tham gia sau này được học khóa tiếng Anh trung cấp miễn phí.'),
        l('B', 'ああ、いいね。じゃ、{行|い}ってみようかな。', 'À, hay đấy. Vậy mình thử đi xem sao.'),
        l('A', 'わあ、ありがとうございます！', 'Ôi, cảm ơn bạn nhiều!'),
      ],
    },
    followUps: [
      fu('ボランティアをしたことがありますか。', 'Bạn đã từng làm tình nguyện chưa?', 'はい、あります。{町|まち}のごみ{拾|ひろ}いに{参加|さんか}しました。（ない{場合|ばあい}：いいえ、ありません。でも、してみたいです。）', 'Vâng, có. Tôi đã tham gia nhặt rác ở thị trấn. (Nếu chưa: Chưa, nhưng tôi muốn thử.)'),
      fu('{子|こ}どもたちに{何|なに}を{教|おし}えたいですか。', 'Bạn muốn dạy các em nhỏ điều gì?', '{簡単|かんたん}な{英語|えいご}の{歌|うた}や{言葉|ことば}を{教|おし}えたいです。', 'Tôi muốn dạy những bài hát và từ tiếng Anh đơn giản.'),
      fu('ボランティアをすると、どんないいことがありますか。', 'Làm tình nguyện thì có điều gì tốt?', '{新|あたら}しい{友|とも}だちができて、いい{経験|けいけん}になります。', 'Có thêm bạn mới và là một trải nghiệm tốt.'),
    ],
  },

  // ------------------------------------------------------------------ 場面5 (bài 8)
  5: {
    originalImage: 'images/samples/lesson8.png',
    promptImages: prompts(5),
    sat: {
      note: 'Bám sát hội thoại mẫu (ロハン–店長), dùng đúng lý do của đề (bạn kết hôn), rút gọn cho dễ thuộc. Từ khóa: シフトのことなんですが / 休ませていただけませんか / 実は〜 / いつからいつまで / 〜ものですから / 〜の代わりに / ご迷惑をかけてすみません。',
      lines: [
        l('A', 'あのう、{店長|てんちょう}、{今|いま}よろしいですか。', 'Dạ, quản lý ơi, bây giờ anh có tiện không ạ?'),
        l('B', 'あ、Aさん、どうしたの？', 'À, A à, có chuyện gì vậy?'),
        l('A', '{来月|らいげつ}のシフトのことなんですが……。', 'Dạ, là chuyện ca làm tháng sau ạ…'),
        l('B', '{来月|らいげつ}のシフト？', 'Ca làm tháng sau à?'),
        l('A', 'はい。すみませんが、{来月|らいげつ}、1{週間|しゅうかん}、アルバイトを{休|やす}ませていただけませんか。{実|じつ}は、{友人|ゆうじん}が{結婚|けっこん}するんです。', 'Vâng. Xin lỗi anh, tháng sau cho em nghỉ làm thêm 1 tuần được không ạ? Thật ra bạn em kết hôn.'),
        l('B', 'ああ、そう。それで、いつからいつまで？', 'À, vậy à. Thế từ khi nào đến khi nào?'),
        l('A', '{月末|げつまつ}の1{週間|しゅうかん}なんですが。', 'Dạ, là một tuần cuối tháng ạ.'),
        l('B', 'えっ、{月末|げつまつ}？ うーん、{忙|いそが}しいときだね。', 'Hả, cuối tháng á? Ừm, đúng lúc bận nhỉ.'),
        l('A', 'はあ……、すみません。でも、{友人|ゆうじん}の{結婚式|けっこんしき}なものですから、{故郷|ふるさと}に{帰|かえ}りたくて……。その{間|あいだ}、{私|わたし}の{代|か}わりに、{山田|やまだ}さんが{入|はい}るって{言|い}ってくださるんですが。', 'Dạ… em xin lỗi. Nhưng vì là lễ cưới của bạn nên em muốn về quê… Trong thời gian đó, anh Yamada nói sẽ vào làm thay em ạ.'),
        l('B', 'あ、そうか。じゃ、{大丈夫|だいじょうぶ}だね。わかった。', 'À, vậy à. Thế thì được rồi. Anh hiểu rồi.'),
        l('A', 'ありがとうございます。ご{迷惑|めいわく}をかけてすみません。', 'Em cảm ơn anh. Em xin lỗi vì làm phiền anh ạ.'),
      ],
    },
    followUps: [
      fu('アルバイトで、どんなことをしていますか。', 'Ở chỗ làm thêm, bạn làm những việc gì?', '{店|みせ}でお{客|きゃく}さんの{注文|ちゅうもん}を{聞|き}いたり、{料理|りょうり}を{運|はこ}んだりしています。', 'Tôi nhận gọi món của khách và bưng món ăn ở cửa hàng.'),
      fu('{休|やす}みの{間|あいだ}、{代|か}わりに{入|はい}ってくれる{人|ひと}はいますか。', 'Trong thời gian nghỉ, có ai vào làm thay bạn không?', 'はい、{友|とも}だちの{山田|やまだ}さんが{入|はい}ってくれます。', 'Vâng, bạn tôi là anh Yamada sẽ vào làm thay.'),
      fu('{友人|ゆうじん}の{結婚式|けっこんしき}では、{何|なに}をするつもりですか。', 'Ở đám cưới của bạn, bạn định làm gì?', '{友人|ゆうじん}をお{祝|いわ}いして、{家族|かぞく}にも{会|あ}うつもりです。', 'Tôi định chúc mừng bạn và gặp cả gia đình.'),
    ],
  },

  // ------------------------------------------------------------------ 場面6 (bài 10)
  6: {
    originalImage: 'images/samples/lesson10.png',
    promptImages: prompts(6),
    sat: {
      note: 'Bám sát hội thoại mẫu (パク–店員), đổi sang ví ở quán cà phê, rút gọn cho dễ thuộc. Từ khóa: 〜者なんですが / 忘れてしまったようなんです / 入れたつもりだったんですが / どの辺りに座って / 〜ように思うんですが / もしかしたら〜かもしれません / 着払いの宅配便で。',
      lines: [
        l('B', 'はい、{喫茶店|きっさてん}さくらです。', 'Vâng, quán cà phê Sakura xin nghe.'),
        l('A', 'もしもし、{今日|きょう}のお{昼|ひる}にそちらでお{茶|ちゃ}を{飲|の}んだ{者|もの}なんですが。', 'A lô, tôi là người đã uống trà ở quán trưa nay.'),
        l('B', 'はい。', 'Vâng.'),
        l('A', 'そちらに{財布|さいふ}を{忘|わす}れてしまったようなんです。かばんに{入|い}れたつもりだったんですが、なかったもので……。', 'Hình như tôi để quên ví ở quán. Tôi định bỏ vào cặp nhưng lại không thấy…'),
        l('B', 'そうですか。どんな{財布|さいふ}ですか。', 'Vậy ạ. Ví như thế nào ạ?'),
        l('A', '{四角|しかく}くて、{色|いろ}はグレーで、{花模様|はなもよう}が{付|つ}いているんです。{名前|なまえ}もつけてあります。', 'Hình vuông, màu xám, có họa tiết hoa. Còn có ghi cả tên nữa.'),
        l('B', 'どの{辺|あた}りに{座|すわ}っていらっしゃいましたか。', 'Quý khách đã ngồi ở khu vực nào ạ?'),
        l('A', '{右|みぎ}の{窓側|まどがわ}の{席|せき}です。テーブルの{上|うえ}に{置|お}いたように{思|おも}うんですが、もしかしたら、{下|した}に{落|お}ちているかもしれません。', 'Ghế cạnh cửa sổ bên phải. Tôi nghĩ là đã để trên bàn, nhưng có thể nó rơi xuống dưới rồi.'),
        l('B', 'わかりました。{少々|しょうしょう}お{待|ま}ちください。……お{待|ま}たせいたしました。こちらにございます。', 'Tôi hiểu rồi. Xin chờ một chút ạ. …Xin lỗi đã để quý khách chờ. Nó ở đây ạ.'),
        l('A', 'ああ、よかったです。', 'Ôi, may quá.'),
        l('B', 'どうしましょうか。', 'Quý khách muốn xử lý thế nào ạ?'),
        l('A', 'すみませんが、{着払|ちゃくばら}いの{宅配便|たくはいびん}で{送|おく}ってもらってもいいですか。', 'Xin lỗi, nhờ quán gửi bằng chuyển phát tận nhà trả tiền khi nhận được không ạ?'),
        l('B', 'はい、わかりました。では、お{名前|なまえ}とご{住所|じゅうしょ}を……', 'Vâng, tôi hiểu rồi. Vậy xin cho tôi biết tên và địa chỉ của quý khách…'),
      ],
    },
    followUps: [
      fu('{財布|さいふ}の{中|なか}に、{何|なに}が{入|はい}っていましたか。', 'Trong ví có gì vậy ạ?', 'カードが2{枚|まい}と、{少|すこ}しお{金|かね}が{入|はい}っています。', 'Có hai cái thẻ và một ít tiền.'),
      fu('{最後|さいご}に{財布|さいふ}を{見|み}たのは、いつですか。', 'Lần cuối bạn nhìn thấy ví là khi nào?', '{昼|ひる}にお{茶|ちゃ}を{飲|の}んだとき、{財布|さいふ}を{出|だ}しました。', 'Lúc uống trà buổi trưa, tôi đã lấy ví ra.'),
      fu('もし{財布|さいふ}をなくしたら、どうしますか。', 'Nếu làm mất ví, bạn sẽ làm gì?', 'すぐに{警察|けいさつ}か、{店|みせ}に{電話|でんわ}します。', 'Tôi sẽ gọi điện ngay cho cảnh sát hoặc cửa hàng.'),
    ],
  },
};
