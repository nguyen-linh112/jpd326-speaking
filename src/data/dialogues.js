// ===== 6 hội thoại role-play (場面) =====
// Cú pháp furigana: {漢字|かんじ}.  Mỗi 場面 có nhiều phiên bản (versions):
//   - "Mẫu gốc"       : hội thoại mẫu trong tài liệu của giáo viên (chép lại nguyên văn).
//                       Nếu chưa có mẫu thì để lines: [] -> web hiện "chờ cập nhật".
//   - "Bản luyện thêm": hội thoại do app soạn theo đúng bối cảnh đề, ngôn từ đơn giản (N5–N3).
// Muốn thêm/sửa mẫu: sửa mảng `lines` của version tương ứng (xem README).

import extras from './dialogueExtras.js';

const l = (speaker, ja, vi) => ({ speaker, ja, vi });

const dialogues = [
  // ------------------------------------------------------------------ 場面1
  {
    id: 1,
    lesson: 6,
    title: '場面1',
    titleVi: 'Khuyên bạn bị chán ăn',
    roleA: {
      ja: '{友達|ともだち}のBさんは{体|からだ}の{調子|ちょうし}が{良|よ}くないようです。{話|はなし}を{聞|き}いて、どうしたらいいか、アドバイスしてください。よく{言|い}われている{体|からだ}にいい{食|た}べ{物|もの}についても{話|はな}してください。',
      vi: 'Bạn B của bạn có vẻ không khỏe. Hãy nghe chuyện và cho lời khuyên nên làm gì. Hãy nói cả về những món ăn thường được cho là tốt cho cơ thể.',
    },
    roleB: {
      ja: 'あなたは、{最近|さいきん}、あまり{食欲|しょくよく}がありません。{季節|きせつ}が{変|か}わったために、{体調|たいちょう}を{崩|くず}してしまったようです。{友達|ともだち}のAさんにアドバイスをもらってください。',
      vi: 'Dạo này bạn không thèm ăn lắm. Có vẻ do đổi mùa nên bạn bị ốm. Hãy xin bạn A lời khuyên.',
    },
    info: [],
    vocab: [
      { word: '食欲', reading: 'しょくよく', meaning: 'cảm giác thèm ăn' },
      { word: '体調を崩す', reading: 'たいちょうをくずす', meaning: 'bị mất sức khỏe, ốm' },
      { word: '調子が悪い', reading: 'ちょうしがわるい', meaning: 'trong người không khỏe' },
      { word: '冷たい物', reading: 'つめたいもの', meaning: 'đồ lạnh' },
      { word: '温かい物', reading: 'あたたかいもの', meaning: 'đồ ấm' },
      { word: '夏バテ', reading: 'なつバテ', meaning: 'kiệt sức vì nóng mùa hè' },
      { word: '栄養', reading: 'えいよう', meaning: 'dinh dưỡng' },
      { word: 'ウナギ', reading: 'ウナギ', meaning: 'lươn' },
      { word: '〜のような', reading: '', meaning: 'như là, giống như (ví dụ: スープのような温かい物)' },
      { word: '〜として', reading: '', meaning: 'với tư cách là, như là (món ăn mùa hè)' },
      { word: '〜に限る', reading: 'にかぎる', meaning: '… là nhất, chỉ có … là tốt' },
      { word: 'おかゆ', reading: 'おかゆ', meaning: 'cháo' },
      { word: '納豆', reading: 'なっとう', meaning: 'natto (đậu tương lên men)' },
      { word: '味噌汁', reading: 'みそしる', meaning: 'súp miso' },
    ],
    versions: [
      {
        id: 'goc',
        label: 'Mẫu gốc',
        draft: false,
        note: 'Hội thoại mẫu trong tài liệu của giáo viên (山口 = vai A, メアリー = vai B).',
        lines: [
          l('A', 'メアリーさん、どうしたの？ {元気|げんき}ないね。', 'Mary, có chuyện gì vậy? Trông cậu không khỏe nhỉ.'),
          l('B', 'うん、なんだか{最近|さいきん}{体|からだ}の{調子|ちょうし}が{悪|わる}くて。', 'Ừ, không hiểu sao dạo này người mình không khỏe.'),
          l('A', 'ええ、{大丈夫|だいじょうぶ}？', 'Ơ, cậu có sao không?'),
          l('B', 'うーん。それに、{食欲|しょくよく}もなくて。', 'Ừm. Hơn nữa mình còn chán ăn nữa.'),
          l('A', '{冷|つめ}たい{物|もの}ばかり{飲|の}んでいるんじゃない？', 'Có phải cậu toàn uống đồ lạnh không?'),
          l('B', 'うん。{暑|あつ}いから。', 'Ừ. Vì trời nóng mà.'),
          l('A', 'それじゃ、{体調|たいちょう}を{崩|くず}すよ。きっと{夏|なつ}バテだね。{暑|あつ}いときこそスープのような{温|あたた}かい{物|もの}が{体|からだ}にいいんだよ。', 'Thế thì sức khỏe giảm sút đó. Chắc chắn là kiệt sức vì nóng rồi. Chính lúc nóng, đồ ấm như súp mới tốt cho cơ thể.'),
          l('B', '{温|あたた}かい{物|もの}ね。', 'Đồ ấm hả.'),
          l('A', 'そう。それに、{日本|にほん}では{夏|なつ}の{食|た}べ{物|もの}としてウナギをよく{食|た}べるよ。ウナギは{栄養|えいよう}があるからね。{夏|なつ}はウナギに{限|かぎ}るって{言|い}われてるんだよ。', 'Đúng vậy. Với lại ở Nhật, người ta hay ăn lươn như món ăn mùa hè. Lươn có nhiều dinh dưỡng mà. Người ta nói mùa hè thì ăn lươn là nhất đó.'),
          l('B', 'へえ。', 'Ồ, vậy à.'),
        ],
      },
      {
        id: 'luyen',
        label: 'Bản luyện thêm',
        draft: true,
        note: 'Do app soạn theo mẫu gốc, đổi sang tình huống “đổi mùa nên chán ăn”. Dùng câu đơn giản, dễ nói.',
        lines: [
          l('A', 'Bさん、どうしたの？ {元気|げんき}がないね。', 'B này, có chuyện gì vậy? Trông cậu không khỏe nhỉ.'),
          l('B', 'うん。{最近|さいきん}、あまり{食欲|しょくよく}がないんだ。', 'Ừ. Dạo này mình không thèm ăn lắm.'),
          l('A', 'ええ、{大丈夫|だいじょうぶ}？', 'Ơ, cậu có sao không?'),
          l('B', '{季節|きせつ}が{変|か}わったから、{体調|たいちょう}を{崩|くず}したみたい。', 'Có lẽ vì đổi mùa nên mình bị ốm rồi.'),
          l('A', 'そうか。{朝|あさ}ごはんは{食|た}べてる？', 'Vậy à. Cậu có ăn sáng không?'),
          l('B', 'ううん、{朝|あさ}は{何|なに}も{食|た}べてないんだ。', 'Không, buổi sáng mình không ăn gì cả.'),
          l('A', 'それはよくないよ。{食欲|しょくよく}がないときは、おかゆのような{温|あたた}かい{物|もの}がいいよ。', 'Thế không tốt đâu. Lúc không thèm ăn thì đồ ấm như cháo là tốt.'),
          l('B', 'おかゆか。ほかに{体|からだ}にいい{物|もの}はある？', 'Cháo hả. Còn món nào khác tốt cho cơ thể không?'),
          l('A', '{納豆|なっとう}や{味噌汁|みそしる}は{体|からだ}にいいって{言|い}われているよ。バナナも{食|た}べやすいよ。', 'Người ta nói natto và súp miso tốt cho cơ thể đó. Chuối cũng dễ ăn nữa.'),
          l('B', 'なるほど。{食|た}べてみるよ。', 'Ra vậy. Mình sẽ thử ăn.'),
          l('A', '{早|はや}く{寝|ね}ることも{大切|たいせつ}だよ。{無理|むり}しないでね。', 'Đi ngủ sớm cũng quan trọng đó. Đừng cố quá nhé.'),
          l('B', 'ありがとう。{少|すこ}し{元気|げんき}になったよ。', 'Cảm ơn nhé. Mình thấy khỏe hơn một chút rồi.'),
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 場面2
  {
    id: 2,
    lesson: 6,
    title: '場面2',
    titleVi: 'Khuyên bạn bị mất ngủ',
    roleA: {
      ja: '{友達|ともだち}のBさんは{具合|ぐあい}が{良|よ}くないようです。{話|はなし}を{聞|き}いて、どうしたらいいか、アドバイスしてください。{寝|ね}られるようにいい{方法|ほうほう}についても{話|はな}してください。',
      vi: 'Bạn B của bạn có vẻ không khỏe. Hãy nghe chuyện và cho lời khuyên nên làm gì. Hãy nói cả về cách tốt để có thể ngủ được.',
    },
    roleB: {
      ja: 'あなたは、{最近|さいきん}、あまり{寝|ね}られません。{忙|いそが}しくて、{体調|たいちょう}を{崩|くず}してしまったようです。{友達|ともだち}のAさんにアドバイスをもらってください。',
      vi: 'Dạo này bạn không ngủ được mấy. Có vẻ do bận rộn nên bạn bị ốm. Hãy xin bạn A lời khuyên.',
    },
    info: [],
    vocab: [
      { word: '具合', reading: 'ぐあい', meaning: 'tình trạng (sức khỏe)' },
      { word: '寝られる', reading: 'ねられる', meaning: 'ngủ được' },
      { word: '眠い', reading: 'ねむい', meaning: 'buồn ngủ' },
      { word: '布団', reading: 'ふとん', meaning: 'chăn đệm' },
      { word: 'お風呂', reading: 'おふろ', meaning: 'bồn tắm, tắm bồn' },
      { word: '牛乳', reading: 'ぎゅうにゅう', meaning: 'sữa bò' },
      { word: '方法', reading: 'ほうほう', meaning: 'cách, phương pháp' },
      { word: '試す', reading: 'ためす', meaning: 'thử' },
      { word: '体調を崩す', reading: 'たいちょうをくずす', meaning: 'bị mất sức khỏe, ốm' },
      { word: '夏バテ', reading: 'なつバテ', meaning: 'kiệt sức vì nóng mùa hè' },
      { word: '冷たい物', reading: 'つめたいもの', meaning: 'đồ lạnh' },
      { word: '温かい物', reading: 'あたたかいもの', meaning: 'đồ ấm' },
      { word: '〜のような', reading: '', meaning: 'như là, giống như (mẫu gốc: スープのような温かい物)' },
      { word: '〜として', reading: '', meaning: 'với tư cách là, như là' },
      { word: '〜に限る', reading: 'にかぎる', meaning: '… là nhất, chỉ có … là tốt' },
    ],
    versions: [
      { id: 'goc', label: 'Mẫu gốc', draft: false, note: '', lines: [] },
      {
        id: 'luyen',
        label: 'Bản luyện thêm',
        draft: true,
        note: 'Do app soạn theo bối cảnh đề. Dùng câu đơn giản, dễ nói.',
        lines: [
          l('A', 'Bさん、どうしたの？ {元気|げんき}がないね。', 'B này, có chuyện gì vậy? Trông cậu không khỏe nhỉ.'),
          l('B', 'うん。{最近|さいきん}、あまり{寝|ね}られないんだ。', 'Ừ. Dạo này mình không ngủ được mấy.'),
          l('A', 'ええ、{大丈夫|だいじょうぶ}？', 'Ơ, cậu có sao không?'),
          l('B', '{忙|いそが}しくて、{体調|たいちょう}を{崩|くず}したみたい。', 'Có lẽ vì bận quá nên mình bị ốm rồi.'),
          l('A', '{何時|なんじ}ごろ{寝|ね}てるの？', 'Cậu thường ngủ lúc mấy giờ?'),
          l('B', '{夜|よる}の1{時|じ}か2{時|じ}ごろ。{布団|ふとん}に{入|はい}っても、すぐ{寝|ね}られないんだ。', 'Khoảng 1–2 giờ đêm. Dù đã nằm xuống chăn, mình cũng không ngủ ngay được.'),
          l('A', '{寝|ね}る{前|まえ}にスマホを{見|み}てない？', 'Trước khi ngủ cậu có xem điện thoại không?'),
          l('B', '{見|み}てるかも。', 'Chắc là có xem.'),
          l('A', '{寝|ね}る1{時間|じかん}{前|まえ}にやめたほうがいいよ。それから、{温|あたた}かいお{風呂|ふろ}に{入|はい}ると、{寝|ね}やすくなるよ。', 'Nên ngừng xem trước khi ngủ 1 tiếng đó. Với lại, tắm nước ấm thì sẽ dễ ngủ hơn.'),
          l('B', 'なるほど。ほかにいい{方法|ほうほう}はある？', 'Ra vậy. Còn cách nào hay nữa không?'),
          l('A', '{温|あたた}かい{牛乳|ぎゅうにゅう}を{飲|の}むのもいいよ。{毎日|まいにち}{同|おな}じ{時間|じかん}に{寝|ね}ることも{大切|たいせつ}だよ。', 'Uống sữa ấm cũng tốt. Ngủ cùng một giờ mỗi ngày cũng quan trọng đó.'),
          l('B', 'わかった。{今日|きょう}から{試|ため}してみるよ。ありがとう。', 'Mình hiểu rồi. Từ hôm nay mình sẽ thử. Cảm ơn nhé.'),
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 場面3
  {
    id: 3,
    lesson: 7,
    title: '場面3',
    titleVi: 'Mời bạn đi chợ đồ cũ (フリーマーケット)',
    roleA: {
      ja: 'あなたは{友達|ともだち}とフリーマーケットに{出店|しゅってん}することにしました。{同|おな}じ{英語|えいご}のクラスに{通|かよ}っているBさんにも{来|き}てもらいたいです。Bさんとは{時々|ときどき}{挨拶|あいさつ}するくらいです。クラスで{会|あ}ったとき、フリーマーケットについて{説明|せつめい}し、{都合|つごう}を{聞|き}いて、{誘|さそ}ってください。',
      vi: 'Bạn quyết định cùng bạn bè mở gian hàng ở chợ đồ cũ. Bạn muốn B, người học cùng lớp tiếng Anh, cũng đến. Với B bạn chỉ thỉnh thoảng chào hỏi. Khi gặp ở lớp, hãy giải thích về chợ, hỏi lịch của B và mời B.',
    },
    roleB: {
      ja: 'あなたはAさんと{同|おな}じ{英語|えいご}のクラスに{通|かよ}っています。Aさんとは{時々|ときどき}クラスで{挨拶|あいさつ}するくらいです。Aさんが{話|はな}しかけてきました。{話|はなし}をよく{聞|き}いて、Aさんの{誘|さそ}いを{受|う}けてください。',
      vi: 'Bạn học cùng lớp tiếng Anh với A, chỉ thỉnh thoảng chào nhau ở lớp. A bắt chuyện với bạn. Hãy nghe kỹ và nhận lời mời của A.',
    },
    info: [
      { ja: '{日時|にちじ}:{来週|らいしゅう}の{土曜日|どようび}と{日曜日|にちようび} {午前|ごぜん}8{時|じ}から', vi: 'Thời gian: thứ Bảy và Chủ nhật tuần sau, từ 8 giờ sáng' },
      { ja: 'このフリーマーケットには{自分|じぶん}が{作|つく}った{料理|りょうり}を{出|だ}してもいいです。', vi: 'Ở chợ này có thể bán cả món ăn do mình tự nấu.' },
      { ja: '{商品|しょうひん}の{値段|ねだん}の2{割|わり}がホームレスの{寄付金|きふきん}になります。', vi: '20% giá bán hàng sẽ được quyên góp cho người vô gia cư.' },
    ],
    vocab: [
      { word: 'フリーマーケット', reading: 'フリーマーケット', meaning: 'chợ đồ cũ' },
      { word: '出店する', reading: 'しゅってんする', meaning: 'mở gian hàng' },
      { word: '興味', reading: 'きょうみ', meaning: 'hứng thú, quan tâm' },
      { word: '参加する', reading: 'さんかする', meaning: 'tham gia' },
      { word: '都合', reading: 'つごう', meaning: 'lịch, hoàn cảnh thuận tiện' },
      { word: '寄付', reading: 'きふ', meaning: 'quyên góp' },
      { word: '売り上げ', reading: 'うりあげ', meaning: 'doanh thu' },
      { word: '中古品', reading: 'ちゅうこひん', meaning: 'đồ cũ (đã qua sử dụng)' },
      { word: '評判', reading: 'ひょうばん', meaning: 'danh tiếng, lời đồn tốt' },
      { word: '延期', reading: 'えんき', meaning: 'hoãn lại' },
      { word: '〜かなと思って', reading: 'かなとおもって', meaning: 'tôi nghĩ liệu có thể … không (cách mời nhẹ nhàng)' },
      { word: '〜にしては', reading: '', meaning: 'so với (là đồ cũ) thì … (khá tốt)' },
      { word: 'ホームレス', reading: 'ホームレス', meaning: 'người vô gia cư' },
    ],
    versions: [
      {
        id: 'goc',
        label: 'Mẫu gốc',
        draft: false,
        note: 'Hội thoại mẫu trong tài liệu của giáo viên (アンナ = vai A, 鈴木 = vai B). Trong mẫu gốc, chợ ở công viên Sakura và quyên góp cho chó trợ giúp người khuyết tật; đề thi dùng chợ khác nên có chi tiết khác.',
        lines: [
          l('A', 'こんにちは。', 'Xin chào.'),
          l('B', 'こんにちは。{今日|きょう}は{空|す}いてますね。', 'Xin chào. Hôm nay vắng nhỉ.'),
          l('A', 'あのう、{鈴木|すずき}さんはフリーマーケットって{興味|きょうみ}がありますか。', 'À, anh Suzuki có hứng thú với chợ đồ cũ không?'),
          l('B', 'え？', 'Hả?'),
          l('A', '{実|じつ}は{今度|こんど}さくら{公園|こうえん}でフリーマーケットがあるんです。それに{参加|さんか}しようと{思|おも}ってるんですけど。', 'Thật ra sắp tới có chợ đồ cũ ở công viên Sakura. Em định tham gia.'),
          l('B', 'へえ。', 'Ồ.'),
          l('A', '{来週|らいしゅう}の{日曜日|にちようび}なんですけど、もしお{時間|じかん}があったら{鈴木|すずき}さんにも{来|き}てもらえるかなと{思|おも}って……。', 'Là chủ nhật tuần sau, nếu anh có thời gian thì em nghĩ liệu anh có thể đến không ạ…'),
          l('B', 'ああ、チラシをもらったかも。', 'À, hình như mình có nhận tờ rơi.'),
          l('A', 'このフリーマーケット、100ぐらいのお{店|みせ}が{出|で}るんですよ。{中古品|ちゅうこひん}にしてはいい{物|もの}があると{評判|ひょうばん}なんです。', 'Chợ này có khoảng 100 gian hàng đó ạ. Nghe nói so với đồ cũ thì có nhiều món tốt.'),
          l('B', 'へえ、そうなんだ。', 'Ồ, vậy à.'),
          l('A', 'しかも、{売|う}り{上|あ}げの{一部|いちぶ}が{介助犬|かいじょけん}の{育成|いくせい}のために{寄付|きふ}されるんです。{例|たと}えば、300{円|えん}のTシャツなら1{枚|まい}につき30{円|えん}の{寄付|きふ}ができるんです。', 'Hơn nữa, một phần doanh thu được quyên góp để nuôi dạy chó trợ giúp. Ví dụ, áo thun 300 yên thì mỗi chiếc có thể quyên góp được 30 yên.'),
          l('B', 'ああ、いいね。あ、でも、{雨|あめ}だったらどうなるの？', 'À, hay đấy. Mà nếu trời mưa thì sao?'),
          l('A', 'あ、そのときは、{朝|あさ}7{時|じ}にホームページで{延期|えんき}のお{知|し}らせがあります。', 'À, khi đó 7 giờ sáng sẽ có thông báo hoãn trên trang web.'),
          l('B', 'そうなんだ。じゃ、{行|い}ってみようかな。', 'Vậy à. Thế thì mình thử đi xem sao.'),
          l('A', 'わあ、ありがとうございます！', 'Ôi, cảm ơn anh nhiều ạ!'),
        ],
      },
      {
        id: 'luyen',
        label: 'Bản luyện thêm',
        draft: true,
        note: 'Do app soạn theo mẫu gốc, đúng thông tin của đề (thứ Bảy–Chủ nhật, 8 giờ, bán đồ ăn tự nấu, 20% quyên góp).',
        lines: [
          l('A', 'こんにちは。', 'Xin chào.'),
          l('B', 'こんにちは。{今日|きょう}は{天気|てんき}がいいですね。', 'Xin chào. Hôm nay trời đẹp nhỉ.'),
          l('A', 'そうですね。あのう、Bさんはフリーマーケットに{興味|きょうみ}がありますか。', 'Đúng vậy. À, bạn B có hứng thú với chợ đồ cũ không?'),
          l('B', 'え？ フリーマーケット？', 'Hả? Chợ đồ cũ à?'),
          l('A', '{実|じつ}は、{来週|らいしゅう}の{土曜日|どようび}と{日曜日|にちようび}に、フリーマーケットで{店|みせ}を{出|だ}すんです。{朝|あさ}8{時|じ}からです。', 'Thật ra tuần sau, thứ Bảy và Chủ nhật, mình sẽ mở gian hàng ở chợ đồ cũ. Từ 8 giờ sáng.'),
          l('B', 'へえ、そうなんですか。', 'Ồ, vậy à.'),
          l('A', 'もしお{時間|じかん}があったら、Bさんにも{来|き}てもらえるかなと{思|おも}って……。', 'Nếu bạn có thời gian, mình nghĩ liệu bạn có thể đến không…'),
          l('B', '{何|なに}を{売|う}るんですか。', 'Bạn bán gì vậy?'),
          l('A', '{古|ふる}い{服|ふく}や{本|ほん}です。このフリーマーケットは、{自分|じぶん}で{作|つく}った{料理|りょうり}も{売|う}ってもいいんですよ。', 'Quần áo cũ và sách. Chợ này còn được bán cả món ăn tự nấu nữa đó.'),
          l('B', 'へえ、おもしろそうですね。', 'Ồ, nghe thú vị đấy.'),
          l('A', 'しかも、{商品|しょうひん}の{値段|ねだん}の2{割|わり}が、ホームレスの{人|ひと}のための{寄付金|きふきん}になるんです。', 'Hơn nữa, 20% giá hàng sẽ thành tiền quyên góp cho người vô gia cư.'),
          l('B', 'ああ、それはいいですね。{土曜日|どようび}と{日曜日|にちようび}ですよね。', 'À, thế thì tốt quá. Là thứ Bảy và Chủ nhật đúng không?'),
          l('A', 'はい。Bさんは、{都合|つごう}はどうですか。', 'Vâng. Lịch của bạn B thì sao?'),
          l('B', '{土曜日|どようび}なら{大丈夫|だいじょうぶ}です。{行|い}ってみようかな。', 'Thứ Bảy thì được. Mình thử đi xem sao.'),
          l('A', 'わあ、ありがとうございます！', 'Ôi, cảm ơn bạn nhiều!'),
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 場面4
  {
    id: 4,
    lesson: 7,
    title: '場面4',
    titleVi: 'Mời bạn tham gia hoạt động tình nguyện',
    roleA: {
      ja: 'あなたはボランティア{活動|かつどう}に{参加|さんか}することにしました。{同|おな}じ{英語|えいご}の{中級|ちゅうきゅう}クラスに{通|かよ}っているBさんにも{来|き}てもらいたいです。Bさんとは{時々|ときどき}{挨拶|あいさつ}するくらいです。クラスで{会|あ}ったとき、ボランティア{活動|かつどう}について{説明|せつめい}し、{都合|つごう}を{聞|き}いて、{誘|さそ}ってください。',
      vi: 'Bạn quyết định tham gia hoạt động tình nguyện. Bạn muốn B, người học cùng lớp tiếng Anh trung cấp, cũng đến. Với B bạn chỉ thỉnh thoảng chào hỏi. Khi gặp ở lớp, hãy giải thích về hoạt động, hỏi lịch của B và mời B.',
    },
    roleB: {
      ja: 'あなたはAさんと{同|おな}じ{英語|えいご}の{中級|ちゅうきゅう}クラスに{通|かよ}っています。Aさんとは{時々|ときどき}クラスで{挨拶|あいさつ}するくらいです。Aさんが{話|はな}しかけてきました。{話|はなし}をよく{聞|き}いて、Aさんの{誘|さそ}いを{受|う}けてください。',
      vi: 'Bạn học cùng lớp tiếng Anh trung cấp với A, chỉ thỉnh thoảng chào nhau. A bắt chuyện với bạn. Hãy nghe kỹ và nhận lời mời của A.',
    },
    info: [
      { ja: '{日時|にちじ}:{毎週|まいしゅう}の{土曜日|どようび} {午前|ごぜん}8{時|じ}から10{時|じ}まで', vi: 'Thời gian: mỗi thứ Bảy, từ 8 đến 10 giờ sáng' },
      { ja: '{地方|ちほう}の{孤児院|こじいん}で{子|こ}どもたちに{初級|しょきゅう}レベルの{英語|えいご}を{教|おし}える。', vi: 'Dạy tiếng Anh sơ cấp cho các em nhỏ ở một cô nhi viện (孤児院 こじいん) ở vùng quê.' },
      { ja: '{活動|かつどう}に{参加|さんか}する{人|ひと}は{後|あと}で{英語|えいご}の{中級|ちゅうきゅう}コースに{無料|むりょう}で{参加|さんか}できる。', vi: 'Người tham gia hoạt động sau này được học miễn phí khóa tiếng Anh trung cấp.' },
    ],
    vocab: [
      { word: 'ボランティア', reading: 'ボランティア', meaning: 'tình nguyện' },
      { word: '活動', reading: 'かつどう', meaning: 'hoạt động' },
      { word: '孤児院', reading: 'こじいん', meaning: 'cô nhi viện' },
      { word: '地方', reading: 'ちほう', meaning: 'vùng quê, địa phương' },
      { word: '初級', reading: 'しょきゅう', meaning: 'sơ cấp' },
      { word: '中級', reading: 'ちゅうきゅう', meaning: 'trung cấp' },
      { word: '無料', reading: 'むりょう', meaning: 'miễn phí' },
      { word: '都合', reading: 'つごう', meaning: 'lịch, hoàn cảnh thuận tiện' },
      { word: '教える', reading: 'おしえる', meaning: 'dạy' },
      { word: '興味', reading: 'きょうみ', meaning: 'hứng thú, quan tâm' },
      { word: '参加する', reading: 'さんかする', meaning: 'tham gia' },
      { word: '寄付', reading: 'きふ', meaning: 'quyên góp' },
      { word: '評判', reading: 'ひょうばん', meaning: 'danh tiếng, lời đồn tốt' },
      { word: '延期', reading: 'えんき', meaning: 'hoãn lại' },
      { word: '〜かなと思って', reading: 'かなとおもって', meaning: 'tôi nghĩ liệu có thể … không (cách mời nhẹ nhàng)' },
      { word: '〜にしては', reading: '', meaning: 'so với (là …) thì … (khá tốt)' },
    ],
    versions: [
      { id: 'goc', label: 'Mẫu gốc', draft: false, note: '', lines: [] },
      {
        id: 'luyen',
        label: 'Bản luyện thêm',
        draft: true,
        note: 'Do app soạn theo cấu trúc của mẫu 場面3. Dùng câu đơn giản, dễ nói.',
        lines: [
          l('A', 'こんにちは。', 'Xin chào.'),
          l('B', 'こんにちは。', 'Xin chào.'),
          l('A', 'あのう、Bさんはボランティアに{興味|きょうみ}がありますか。', 'À, bạn B có hứng thú với hoạt động tình nguyện không?'),
          l('B', 'ボランティア？', 'Tình nguyện à?'),
          l('A', '{実|じつ}は、{私|わたし}、ボランティア{活動|かつどう}に{参加|さんか}しようと{思|おも}ってるんです。', 'Thật ra mình định tham gia hoạt động tình nguyện.'),
          l('B', 'へえ、どんな{活動|かつどう}ですか。', 'Ồ, hoạt động như thế nào vậy?'),
          l('A', '{地方|ちほう}の{孤児院|こじいん}で、{子|こ}どもたちに{初級|しょきゅう}の{英語|えいご}を{教|おし}えるんです。', 'Dạy tiếng Anh sơ cấp cho các em nhỏ ở một cô nhi viện vùng quê.'),
          l('B', 'おもしろそうですね。いつですか。', 'Nghe thú vị đấy. Khi nào vậy?'),
          l('A', '{毎週|まいしゅう}{土曜日|どようび}の{朝|あさ}8{時|じ}から10{時|じ}までです。もしよかったら、Bさんにも{来|き}てもらえるかなと{思|おも}って……。', 'Mỗi thứ Bảy, từ 8 đến 10 giờ sáng. Nếu được, mình nghĩ liệu bạn B cũng có thể đến không…'),
          l('B', '{英語|えいご}を{教|おし}えるのは、ちょっと{難|むずか}しそうですね。', 'Dạy tiếng Anh thì có vẻ hơi khó nhỉ.'),
          l('A', '{大丈夫|だいじょうぶ}ですよ。{初級|しょきゅう}の{英語|えいご}ですから。それに、{活動|かつどう}に{参加|さんか}した{人|ひと}は、{後|あと}で{中級|ちゅうきゅう}コースに{無料|むりょう}で{参加|さんか}できるんです。', 'Không sao đâu. Vì chỉ là tiếng Anh sơ cấp thôi. Hơn nữa, người tham gia sau này được học khóa trung cấp miễn phí.'),
          l('B', 'ええ、{無料|むりょう}で？ それはいいですね。', 'Ơ, miễn phí á? Thế thì tốt quá.'),
          l('A', 'Bさんは、{土曜日|どようび}の{朝|あさ}、{都合|つごう}はどうですか。', 'Sáng thứ Bảy, lịch của bạn B thế nào?'),
          l('B', '{大丈夫|だいじょうぶ}です。{行|い}ってみようかな。', 'Được ạ. Mình thử đi xem sao.'),
          l('A', 'わあ、ありがとうございます！', 'Ôi, cảm ơn bạn nhiều!'),
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 場面5
  {
    id: 5,
    lesson: 8,
    title: '場面5',
    titleVi: 'Xin nghỉ làm thêm một tuần',
    roleA: {
      ja: 'あなたはアルバイトをしています。{来月末|らいげつまつ}の1{週間|しゅうかん}、{友人|ゆうじん}が{結婚|けっこん}するので、ふるさとへ{帰|かえ}りたいです。{休|やす}みをもらえるように、{店長|てんちょう}に{丁寧|ていねい}に{頼|たの}んでください。',
      vi: 'Bạn đang làm thêm. Cuối tháng sau, trong 1 tuần, vì bạn bè kết hôn nên bạn muốn về quê. Hãy lịch sự nhờ quản lý cửa hàng cho nghỉ.',
    },
    roleB: {
      ja: 'あなたは{店長|てんちょう}です。{店|みせ}は{月末|げつまつ}とても{忙|いそが}しいです。Aさんの{話|はなし}をよく{聞|き}いて、Aさんの{代|か}わりにアルバイトをやってもらう{人|ひと}がいるか{確認|かくにん}してから、{休|やす}む{許可|きょか}を{出|だ}してください。',
      vi: 'Bạn là quản lý cửa hàng. Cuối tháng cửa hàng rất bận. Hãy nghe kỹ A nói, xác nhận có người làm thay A không rồi mới cho phép nghỉ.',
    },
    info: [],
    vocab: [
      { word: '店長', reading: 'てんちょう', meaning: 'quản lý cửa hàng' },
      { word: 'シフト', reading: 'シフト', meaning: 'ca làm việc' },
      { word: 'アルバイトを休む', reading: 'アルバイトをやすむ', meaning: 'nghỉ làm thêm' },
      { word: '〜(さ)せていただけませんか', reading: '', meaning: 'cho phép tôi … được không ạ (xin phép lịch sự)' },
      { word: '月末', reading: 'げつまつ', meaning: 'cuối tháng' },
      { word: '案内する', reading: 'あんないする', meaning: 'hướng dẫn, dẫn đường' },
      { word: '代わりに', reading: 'かわりに', meaning: 'thay cho' },
      { word: '迷惑をかける', reading: 'めいわくをかける', meaning: 'làm phiền' },
      { word: '結婚式', reading: 'けっこんしき', meaning: 'lễ cưới' },
      { word: '故郷', reading: 'ふるさと', meaning: 'quê hương' },
    ],
    versions: [
      {
        id: 'goc',
        label: 'Mẫu gốc',
        draft: false,
        note: 'Hội thoại mẫu trong tài liệu của giáo viên (ロハン = vai A, 店長 = vai B). Trong mẫu gốc lý do nghỉ là “gia đình từ nước ngoài sang”.',
        lines: [
          l('A', 'あのう、{店長|てんちょう}、{今|いま}よろしいですか。', 'Dạ, quản lý ơi, bây giờ anh có tiện không ạ?'),
          l('B', 'あ、ロハンさん、どうしたの？', 'À, Rohan, có chuyện gì vậy?'),
          l('A', '{来月|らいげつ}のシフトのことなんですが……。', 'Dạ, là chuyện ca làm tháng sau ạ…'),
          l('B', '{来月|らいげつ}のシフト？', 'Ca làm tháng sau à?'),
          l('A', 'はい。すみませんが、{来月|らいげつ}、1{週間|しゅうかん}、アルバイトを{休|やす}ませていただけませんか。{実|じつ}は、{国|くに}から{家族|かぞく}が{来|く}るんです。', 'Vâng. Xin lỗi anh, tháng sau cho em nghỉ làm thêm 1 tuần được không ạ? Thật ra gia đình em từ nước em sang.'),
          l('B', 'ああ、そう。それで、いつからいつまで？', 'À, vậy à. Thế từ khi nào đến khi nào?'),
          l('A', '23{日|にち}から30{日|にち}までなんですが。', 'Dạ, từ ngày 23 đến ngày 30 ạ.'),
          l('B', 'えっ、{月末|げつまつ}？ うーん、{忙|いそが}しいときだね。', 'Hả, cuối tháng á? Ừm, đúng lúc bận nhỉ.'),
          l('A', 'はあ……、すみません。でも、みんな{日本語|にほんご}がわからないものですから、{私|わたし}が{案内|あんない}しなければならなくて……。その{間|あいだ}、{私|わたし}の{代|か}わりに、{田中|たなか}さんが{入|はい}るって{言|い}ってくださるんですが。', 'Dạ… em xin lỗi. Nhưng vì mọi người đều không biết tiếng Nhật nên em phải đi hướng dẫn… Trong thời gian đó, anh Tanaka nói sẽ vào làm thay em ạ.'),
          l('B', 'あ、そうか。じゃ、{大丈夫|だいじょうぶ}だね。わかった。', 'À, vậy à. Thế thì được rồi. Anh hiểu rồi.'),
          l('A', 'ありがとうございます。ご{迷惑|めいわく}をかけてすみません。', 'Em cảm ơn anh. Em xin lỗi vì làm phiền anh ạ.'),
        ],
      },
      {
        id: 'luyen',
        label: 'Bản luyện thêm',
        draft: true,
        note: 'Do app soạn theo mẫu gốc, đúng lý do của đề (bạn kết hôn, về quê một tuần cuối tháng sau).',
        lines: [
          l('A', 'あのう、{店長|てんちょう}、{今|いま}よろしいですか。', 'Dạ, quản lý ơi, bây giờ anh có tiện không ạ?'),
          l('B', 'あ、Aさん、どうしたの？', 'À, A à, có chuyện gì vậy?'),
          l('A', '{来月|らいげつ}のシフトのことなんですが……。', 'Dạ, là chuyện ca làm tháng sau ạ…'),
          l('B', '{来月|らいげつ}のシフト？', 'Ca làm tháng sau à?'),
          l('A', 'はい。すみませんが、{来月|らいげつ}の{終|お}わりに、1{週間|しゅうかん}、アルバイトを{休|やす}ませていただけませんか。{実|じつ}は、{友|とも}だちが{結婚|けっこん}するので、{故郷|ふるさと}に{帰|かえ}りたいんです。', 'Vâng. Xin lỗi anh, cuối tháng sau cho em nghỉ làm thêm 1 tuần được không ạ? Thật ra bạn em kết hôn nên em muốn về quê.'),
          l('B', 'ああ、そう。それで、いつからいつまで？', 'À, vậy à. Thế từ khi nào đến khi nào?'),
          l('A', '{月末|げつまつ}の1{週間|しゅうかん}です。', 'Dạ, một tuần cuối tháng ạ.'),
          l('B', 'えっ、{月末|げつまつ}？ うーん、{店|みせ}がとても{忙|いそが}しいときだね。', 'Hả, cuối tháng á? Ừm, đúng lúc cửa hàng rất bận nhỉ.'),
          l('A', 'はあ……、すみません。でも、{大切|たいせつ}な{友|とも}だちの{結婚式|けっこんしき}なので、どうしても{行|い}きたいんです。', 'Dạ… em xin lỗi. Nhưng vì là lễ cưới của người bạn quan trọng nên em rất muốn đi.'),
          l('B', 'そうか。Aさんの{代|か}わりに{入|はい}ってくれる{人|ひと}はいる？', 'Vậy à. Có ai vào làm thay A không?'),
          l('A', 'はい。{友|とも}だちの{山田|やまだ}さんが{入|はい}ってくれると{言|い}っています。', 'Dạ có. Bạn em là anh Yamada nói sẽ vào làm thay ạ.'),
          l('B', 'あ、そうか。じゃ、{大丈夫|だいじょうぶ}だね。わかった。{休|やす}んでいいよ。', 'À, vậy à. Thế thì được rồi. Anh hiểu rồi. Em nghỉ đi.'),
          l('A', 'ありがとうございます。ご{迷惑|めいわく}をかけてすみません。', 'Em cảm ơn anh. Em xin lỗi vì làm phiền anh ạ.'),
          l('B', 'いいよ、いいよ。{結婚式|けっこんしき}、{楽|たの}しんできてね。', 'Không sao, không sao. Đi dự đám cưới vui vẻ nhé.'),
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 場面6
  {
    id: 6,
    lesson: 10,
    title: '場面6',
    titleVi: 'Gọi điện hỏi đồ bỏ quên ở quán cà phê',
    roleA: {
      ja: 'あなたは{喫茶店|きっさてん}に{財布|さいふ}を{忘|わす}れました。{帰|かえ}りのバスの{中|なか}で、そのことに{気|き}がつきました。{喫茶店|きっさてん}に{電話|でんわ}をしてください。あなたは{右|みぎ}の{窓側|まどがわ}の{席|せき}に{座|すわ}りました。{財布|さいふ}はテーブルの{上|うえ}に{置|お}いたと{思|おも}いますが、はっきり{覚|おぼ}えていません。{見|み}つかったら、{着払|ちゃくばら}いの{宅配便|たくはいびん}で{送|おく}ってもらえるようにお{願|ねが}いしてください。',
      vi: 'Bạn để quên ví ở quán cà phê. Bạn nhận ra điều đó trên xe buýt về nhà. Hãy gọi điện cho quán. Bạn ngồi ở ghế cạnh cửa sổ bên phải. Bạn nghĩ đã để ví trên bàn nhưng không nhớ rõ. Nếu tìm thấy, hãy nhờ gửi bằng chuyển phát nhanh trả tiền khi nhận.',
    },
    roleB: {
      ja: 'あなたは{喫茶店|きっさてん}の{店員|てんいん}です。{忘|わす}れ{物|もの}の{問|と}い{合|あ}わせがあります。お{客|きゃく}さんに、{座|すわ}った{場所|ばしょ}、{忘|わす}れたものの{特徴|とくちょう}({色|いろ}や{形|かたち}など)を{聞|き}いてください。{聞|き}いた{場所|ばしょ}を{見|み}たら、{忘|わす}れ{物|もの}がありました。お{客|きゃく}さんにどうするか、{聞|き}いてください。',
      vi: 'Bạn là nhân viên quán cà phê. Có người gọi hỏi về đồ bỏ quên. Hãy hỏi khách chỗ đã ngồi và đặc điểm của món đồ (màu, hình dạng…). Khi xem chỗ đó thì thấy có đồ bỏ quên. Hãy hỏi khách muốn xử lý thế nào.',
    },
    info: [
      { ja: '{財布|さいふ}の{情報|じょうほう}:{四角|しかく}い・グレー・{花模様|はなもよう}がある・{名前|なまえ}もつけてあります。', vi: 'Thông tin về ví: hình vuông, màu xám, có họa tiết hoa (花模様 はなもよう), có ghi tên.' },
    ],
    vocab: [
      { word: '忘れ物', reading: 'わすれもの', meaning: 'đồ bỏ quên' },
      { word: '窓側', reading: 'まどがわ', meaning: 'phía cửa sổ' },
      { word: '特徴', reading: 'とくちょう', meaning: 'đặc điểm' },
      { word: '花模様', reading: 'はなもよう', meaning: 'họa tiết hoa' },
      { word: '四角い', reading: 'しかくい', meaning: 'hình vuông/chữ nhật' },
      { word: '着払い', reading: 'ちゃくばらい', meaning: 'trả tiền khi nhận hàng' },
      { word: '宅配便', reading: 'たくはいびん', meaning: 'chuyển phát tận nhà' },
      { word: '住所', reading: 'じゅうしょ', meaning: 'địa chỉ' },
      { word: '〜つもりだった', reading: '', meaning: 'định … (nhưng thực tế không như vậy)' },
      { word: '〜ように思う', reading: 'ようにおもう', meaning: 'tôi thấy hình như …' },
      { word: '少々お待ちください', reading: 'しょうしょうおまちください', meaning: 'xin vui lòng chờ một chút' },
    ],
    versions: [
      {
        id: 'goc',
        label: 'Mẫu gốc',
        draft: false,
        note: 'Hội thoại mẫu trong tài liệu của giáo viên (パク = vai A, 店員 = vai B). Trong mẫu gốc đồ bỏ quên là áo cardigan ở nhà hàng; đề thi dùng ví ở quán cà phê.',
        lines: [
          l('B', 'はい、レストランみやびです。', 'Vâng, nhà hàng Miyabi xin nghe.'),
          l('A', 'もしもし、{今日|きょう}のお{昼|ひる}にそちらで{食事|しょくじ}をした{者|もの}なんですが。', 'A lô, tôi là người đã ăn trưa ở chỗ quý nhà hôm nay.'),
          l('B', 'はい。', 'Vâng.'),
          l('A', 'そちらにカーディガンを{忘|わす}れてしまったようなんです。かばんに{入|い}れたつもりだったんですが、なかったもので……。', 'Hình như tôi đã để quên áo cardigan ở chỗ quý nhà. Tôi định bỏ vào cặp nhưng lại không thấy…'),
          l('B', 'そうですか。どんなカーディガンですか。', 'Vậy ạ. Áo cardigan như thế nào ạ?'),
          l('A', '{色|いろ}はグレーで、{胸|むね}の{所|ところ}にペンギンのマークが{付|つ}いてるんです。', 'Màu xám, ở ngực có hình chim cánh cụt ạ.'),
          l('B', 'どの{辺|あた}りに{座|すわ}っていらっしゃいましたか。', 'Quý khách đã ngồi ở khu vực nào ạ?'),
          l('A', '{窓側|まどがわ}の{奥|おく}の{席|せき}です。いすにかけたように{思|おも}うんですが、もしかしたら、{下|した}に{落|お}ちているかもしれません。', 'Ghế phía trong cạnh cửa sổ. Tôi nghĩ là đã treo lên ghế, nhưng có thể nó rơi xuống dưới rồi.'),
          l('B', 'わかりました。{少々|しょうしょう}お{待|ま}ちください。……お{待|ま}たせいたしました。こちらにございます。', 'Tôi hiểu rồi. Xin chờ một chút ạ. …Xin lỗi đã để quý khách chờ. Nó ở đây ạ.'),
          l('A', 'ああ、よかったです。', 'Ôi, may quá.'),
          l('B', 'どうしましょうか。', 'Quý khách muốn xử lý thế nào ạ?'),
          l('A', 'あ、{実|じつ}はそちらには{旅行|りょこう}で{行|い}って、{今|いま}は{帰|かえ}りの{新幹線|しんかんせん}の{中|なか}なんです。', 'À, thật ra tôi đến chỗ quý nhà khi đi du lịch, bây giờ tôi đang trên tàu Shinkansen về.'),
          l('B', 'あー、そうなんですか。', 'À, vậy ạ.'),
          l('A', 'すみませんが、{着払|ちゃくばら}いの{宅配便|たくはいびん}で{送|おく}ってもらってもいいですか。', 'Xin lỗi, nhờ quý nhà gửi bằng chuyển phát tận nhà trả tiền khi nhận được không ạ?'),
          l('B', 'はい、わかりました。では、お{名前|なまえ}とご{住所|じゅうしょ}を……', 'Vâng, tôi hiểu rồi. Vậy xin cho tôi biết tên và địa chỉ của quý khách…'),
        ],
      },
      {
        id: 'luyen',
        label: 'Bản luyện thêm',
        draft: true,
        note: 'Do app soạn theo mẫu gốc, đúng tình huống của đề (ví hình vuông màu xám có họa tiết hoa, ghế cửa sổ bên phải).',
        lines: [
          l('B', 'はい、{喫茶店|きっさてん}さくらです。', 'Vâng, quán cà phê Sakura xin nghe.'),
          l('A', 'もしもし、{今日|きょう}のお{昼|ひる}にそちらに{行|い}った{者|もの}なんですが。', 'A lô, tôi là người đã đến quán trưa nay.'),
          l('B', 'はい。', 'Vâng.'),
          l('A', 'そちらに{財布|さいふ}を{忘|わす}れてしまったようなんです。かばんに{入|い}れたつもりだったんですが、なかったもので……。', 'Hình như tôi để quên ví ở quán. Tôi định bỏ vào cặp nhưng lại không thấy…'),
          l('B', 'そうですか。どの{辺|あた}りに{座|すわ}っていらっしゃいましたか。', 'Vậy ạ. Quý khách đã ngồi ở khu vực nào ạ?'),
          l('A', '{右|みぎ}の{窓側|まどがわ}の{席|せき}です。テーブルの{上|うえ}に{置|お}いたように{思|おも}うんですが、はっきり{覚|おぼ}えていなくて……。', 'Ghế cạnh cửa sổ bên phải. Tôi nghĩ là đã để trên bàn nhưng không nhớ rõ.'),
          l('B', 'どんな{財布|さいふ}ですか。', 'Ví như thế nào ạ?'),
          l('A', '{四角|しかく}くて、{色|いろ}はグレーです。{花模様|はなもよう}が{付|つ}いています。{名前|なまえ}もつけてあります。', 'Hình vuông, màu xám. Có họa tiết hoa. Còn có ghi cả tên nữa.'),
          l('B', 'わかりました。{少々|しょうしょう}お{待|ま}ちください。……お{待|ま}たせいたしました。こちらにございます。', 'Tôi hiểu rồi. Xin chờ một chút ạ. …Xin lỗi đã để quý khách chờ. Nó ở đây ạ.'),
          l('A', 'ああ、よかったです。ありがとうございます。', 'Ôi, may quá. Cảm ơn quán nhiều.'),
          l('B', 'どうしましょうか。', 'Quý khách muốn xử lý thế nào ạ?'),
          l('A', 'すみませんが、{着払|ちゃくばら}いの{宅配便|たくはいびん}で{送|おく}ってもらってもいいですか。', 'Xin lỗi, nhờ quán gửi bằng chuyển phát tận nhà trả tiền khi nhận được không ạ?'),
          l('B', 'はい、わかりました。では、お{名前|なまえ}とご{住所|じゅうしょ}をお{願|ねが}いします。', 'Vâng, tôi hiểu rồi. Vậy xin cho tôi biết tên và địa chỉ của quý khách.'),
          l('A', 'はい。{住所|じゅうしょ}は……', 'Vâng. Địa chỉ là…'),
        ],
      },
    ],
  },
];

// ===== Mẫu gốc dùng chung theo bài =====
// Tài liệu chỉ có 1 hội thoại mẫu cho mỗi bài (6, 7, 8, 10), dùng chung cho mọi 場面 của bài đó:
//   - Bài 6: 場面1 và 場面2 dùng mẫu メアリー–山口
//   - Bài 7: 場面3 và 場面4 dùng mẫu アンナ–鈴木
// Muốn đổi mẫu, chỉ cần sửa `lines` ở 場面1 / 場面3 (場面2 / 場面4 sẽ lấy theo).
const shareSample = (fromIdx, toIdx, note) => {
  dialogues[toIdx].versions[0] = { ...dialogues[fromIdx].versions[0], note };
};
shareSample(
  0,
  1,
  'Hội thoại mẫu của bài 6 trong tài liệu của giáo viên (山口 = vai A, メアリー = vai B). Mẫu này dùng chung cho 場面1 và 場面2: hãy học cách diễn đạt rồi áp dụng vào tình huống mất ngủ.',
);
shareSample(
  2,
  3,
  'Hội thoại mẫu của bài 7 trong tài liệu của giáo viên (アンナ = vai A, 鈴木 = vai B). Mẫu này dùng chung cho 場面3 và 場面4: hãy học cách mời rồi áp dụng vào việc mời tham gia tình nguyện.',
);

// ===== Gắn phần bổ sung (ảnh đề, ảnh mẫu, bản sát gốc, câu hỏi thêm) – xem dialogueExtras.js =====
// Thứ tự phiên bản: Mẫu gốc -> Bản sát gốc -> Bản luyện thêm
dialogues.forEach((d) => {
  const x = extras[d.id];
  if (!x) return;
  d.promptImages = x.promptImages;
  if (x.originalImage) d.originalImage = x.originalImage;
  d.followUps = x.followUps;
  d.versions.splice(1, 0, {
    id: 'sat',
    label: 'Bản sát gốc',
    draft: true,
    note: x.sat.note,
    lines: x.sat.lines,
  });
});

export default dialogues;
