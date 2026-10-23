// 東京駅発「どこかにビューーン！」対象 全47駅データ
// 通常期・おとな1名・指定席（運賃＋指定席特急料金）基準

const LINE_META = {
  "東北新幹線": {
    color: "#00894b",
    bgLight: "#e6f5ee",
    trains: "はやぶさ・やまびこ・なすの",
    desc: "栃木・福島・宮城・岩手・青森を縦断する大動脈。盛岡以北は往復3万円超の大当たりゾーン！"
  },
  "秋田新幹線": {
    color: "#d81b60",
    bgLight: "#fce8f0",
    trains: "こまち",
    desc: "盛岡から分岐し田沢湖・角館・秋田へ。全5駅すべてが往復3.2万円を超える最強のお得路線！"
  },
  "山形新幹線": {
    color: "#ef6c00",
    bgLight: "#fff2e5",
    trains: "つばさ",
    desc: "福島から分岐し米沢・山形・銀山温泉（大石田）・新庄へ。全駅往復2.1万円以上でハズレなし！"
  },
  "上越新幹線": {
    color: "#e53935",
    bgLight: "#fdeaea",
    trains: "とき・たにがわ",
    desc: "越後湯沢・長岡・新潟方面へ。グルメ・温泉・酒蔵巡りやウィンタースポーツに人気！"
  },
  "北陸新幹線": {
    color: "#1e88e5",
    bgLight: "#e8f3fd",
    trains: "かがやき・はくたか・あさま",
    desc: "軽井沢・長野・上越妙高まで（JR東日本管内）が対象。移動時間が短く週末旅にも最適！"
  }
};

const STATIONS = [
  // ① 東北新幹線（18駅）
  { id: "nasushiobara", line: "東北新幹線", order: 1, name: "那須塩原", pref: "栃木県", km: 157.8, mins: 66, oneWay: 6020, greenOneWay: 8290, tags: ["那須高原", "塩原温泉", "近距離注意"], tip: "宇都宮駅での途中下車（餃子・日光観光）も可能" },
  { id: "shinshirakawa", line: "東北新幹線", order: 2, name: "新白河", pref: "福島県", km: 185.4, mins: 75, oneWay: 6790, greenOneWay: 9060, tags: ["白河ラーメン", "南湖公園", "大内宿アクセス"], tip: "新白河駅周辺でレンタカーを借りると会津・那須方面も回れる" },
  { id: "koriyama", line: "東北新幹線", order: 3, name: "郡山", pref: "福島県", km: 226.7, mins: 77, oneWay: 8340, greenOneWay: 12000, tags: ["猪苗代湖", "会津若松乗換", "磐梯熱海温泉"], tip: "磐越西線に乗り換えて猪苗代・会津若松への拠点に最適" },
  { id: "fukushima", line: "東北新幹線", order: 4, name: "福島", pref: "福島県", km: 272.8, mins: 89, oneWay: 9110, greenOneWay: 12770, tags: ["飯坂温泉", "高湯温泉", "円盤餃子"], tip: "名湯（飯坂・土湯・高湯温泉）とフルーツラインが充実" },
  { id: "shiroishizao", line: "東北新幹線", order: 5, name: "白石蔵王", pref: "宮城県", km: 306.8, mins: 109, oneWay: 10540, greenOneWay: 14200, tags: ["キツネ村", "蔵王のお釜", "遠刈田温泉"], tip: "宮城蔵王キツネ村や白石城・温麺（うーめん）巡りに" },
  { id: "sendai", line: "東北新幹線", order: 6, name: "仙台", pref: "宮城県", km: 351.8, mins: 90, oneWay: 11410, greenOneWay: 15070, tags: ["牛たん", "松島", "秋保温泉", "市街地充実"], tip: "はやぶさ指定席往復22,820円（やまびこ22,180円）。車なしでも観光最強クラス" },
  { id: "furukawa", line: "東北新幹線", order: 7, name: "古川", pref: "宮城県", km: 395.0, mins: 109, oneWay: 11640, greenOneWay: 15300, tags: ["鳴子温泉峡", "陸羽東線"], tip: "陸羽東線で鳴子温泉へ、または手前の仙台駅で途中下車する裏技も人気" },
  { id: "kurikomakogen", line: "東北新幹線", order: 8, name: "くりこま高原", pref: "宮城県", km: 416.2, mins: 121, oneWay: 12510, greenOneWay: 17430, tags: ["栗駒山", "伊豆沼", "レンタカー推奨"], tip: "駅周辺は静かなためレンタカー推奨、または仙台駅で途中下車も可" },
  { id: "ichinoseki", line: "東北新幹線", order: 9, name: "一ノ関", pref: "岩手県", km: 445.1, mins: 117, oneWay: 13060, greenOneWay: 17980, tags: ["世界遺産・平泉", "厳美渓", "猊鼻渓"], tip: "中尊寺金色堂（平泉）や空飛ぶ団子の厳美渓へバス・在来線で好アクセス" },
  { id: "mizusawaesashi", line: "東北新幹線", order: 10, name: "水沢江刺", pref: "岩手県", km: 470.1, mins: 135, oneWay: 13280, greenOneWay: 18200, tags: ["奥州藤原氏", "南部鉄器", "前沢牛"], tip: "えさし藤原の郷や胆沢ダム、一ノ関・平泉方面への移動も便利" },
  { id: "kitakami", line: "東北新幹線", order: 11, name: "北上", pref: "岩手県", km: 487.5, mins: 132, oneWay: 13610, greenOneWay: 18530, tags: ["北上展勝地", "夏油高原温泉", "北上コロッケ"], tip: "桜の名所・展勝地や夏油高原スキー場＆温泉への玄関口" },
  { id: "shinhanamaki", line: "東北新幹線", order: 12, name: "新花巻", pref: "岩手県", km: 500.0, mins: 149, oneWay: 13610, greenOneWay: 18530, tags: ["花巻温泉郷", "宮沢賢治童話村", "遠野乗換"], tip: "宮沢賢治記念館が近く、名湯・花巻温泉郷の無料送迎バスも発着" },
  { id: "morioka", line: "東北新幹線", order: 13, name: "盛岡", pref: "岩手県", km: 535.3, mins: 131, oneWay: 15010, greenOneWay: 19930, tags: ["盛岡三大麺", "小岩井農場", "つなぎ温泉", "大当たり"], tip: "往復3万円突破！冷麺・じゃじゃ麺・わんこ蕎麦と街歩きだけでも大満足" },
  { id: "iwatenumakunai", line: "東北新幹線", order: 14, name: "いわて沼宮内", pref: "岩手県", km: 566.4, mins: 152, oneWay: 15560, greenOneWay: 20480, tags: ["秘境駅感", "久慈・三陸方面", "途中下車テク"], tip: "新幹線最小クラスの乗降客数。手前の盛岡駅で途中下車するのも定番テク" },
  { id: "ninohe", line: "東北新幹線", order: 15, name: "二戸", pref: "岩手県", km: 601.0, mins: 161, oneWay: 16220, greenOneWay: 22290, tags: ["金田一温泉", "南部せんべい", "浄法寺塗"], tip: "座敷わらし伝説の金田一温泉や馬仙峡、九戸城跡へ" },
  { id: "hachinohe", line: "東北新幹線", order: 16, name: "八戸", pref: "青森県", km: 631.9, mins: 166, oneWay: 16590, greenOneWay: 22660, tags: ["八食センター", "奥入瀬渓流", "館鼻岸壁朝市", "大当たり"], tip: "海鮮の宝庫・八食センターや十和田湖・奥入瀬渓流バスの起点！" },
  { id: "shichinohetowada", line: "東北新幹線", order: 17, name: "七戸十和田", pref: "青森県", km: 668.0, mins: 182, oneWay: 16810, greenOneWay: 22880, tags: ["十和田市現代美術館", "酸ヶ湯温泉", "大当たり"], tip: "十和田市現代美術館や八甲田・十和田湖エリアへのドライブ拠点に" },
  { id: "shinaomori", line: "東北新幹線", order: 18, name: "新青森", pref: "青森県", km: 713.7, mins: 179, oneWay: 17670, greenOneWay: 23740, tags: ["ねぶたの家ワ・ラッセ", "弘前・五能線", "酸ヶ湯", "超大当たり"], tip: "全47駅中第2位の超高額区間！青森市内・弘前・浅虫温泉まで自由自在" },

  // ② 秋田新幹線（5駅）
  { id: "shizukuishi", line: "秋田新幹線", order: 1, name: "雫石", pref: "岩手県", km: 551.3, mins: 148, oneWay: 16100, greenOneWay: 21550, tags: ["小岩井農場", "網張温泉", "鶯宿温泉"], tip: "小岩井農場や雫石温泉郷へ近く、手前の盛岡駅で途中下車も可能" },
  { id: "tazawako", line: "秋田新幹線", order: 2, name: "田沢湖", pref: "秋田県", km: 575.4, mins: 164, oneWay: 16320, greenOneWay: 21770, tags: ["乳頭温泉郷", "田沢湖", "玉川温泉", "大当たり"], tip: "憧れの秘湯「乳頭温泉郷」への路線バス発着駅！屈指の人気当たり枠" },
  { id: "kakunodate", line: "秋田新幹線", order: 3, name: "角館", pref: "秋田県", km: 594.1, mins: 179, oneWay: 17020, greenOneWay: 22470, tags: ["武家屋敷通り", "みちのく小京都", "秋田内陸縦貫鉄道", "超大当たり"], tip: "駅から徒歩圏内で武家屋敷の街並み散策が楽しめる大人気観光駅" },
  { id: "omagari", line: "秋田新幹線", order: 4, name: "大曲", pref: "秋田県", km: 610.9, mins: 191, oneWay: 17350, greenOneWay: 23950, tags: ["花火の街", "横手やきそば", "増田の内蔵", "超大当たり"], tip: "全47駅中第3位のお得度！奥羽本線で横手・湯沢方面へのアクセスも◎" },
  { id: "akita", line: "秋田新幹線", order: 5, name: "秋田", pref: "秋田県", km: 662.6, mins: 227, oneWay: 18020, greenOneWay: 24620, tags: ["男鹿半島・なまはげ", "きりたんぽ", "五能線", "全駅1位SSR"], tip: "堂々の全47駅お得度No.1（往復36,040円）！グルメも観光も文句なしのSSR枠" },

  // ③ 山形新幹線（10駅）
  { id: "yonezawa", line: "山形新幹線", order: 1, name: "米沢", pref: "山形県", km: 312.9, mins: 119, oneWay: 10530, greenOneWay: 14190, tags: ["米沢牛", "上杉神社", "小野川温泉"], tip: "絶品の米沢牛ランチや上杉神社、美肌の湯・小野川温泉へ好アクセス" },
  { id: "takahata", line: "山形新幹線", order: 2, name: "高畠", pref: "山形県", km: 322.7, mins: 127, oneWay: 10750, greenOneWay: 14410, tags: ["高畠ワイナリー", "駅舎に温泉併設", "浜田広介記念館"], tip: "全国的にも珍しい温泉付き駅舎（太陽館）と人気ワイナリーが徒歩圏内" },
  { id: "akayu", line: "山形新幹線", order: 3, name: "赤湯", pref: "山形県", km: 328.9, mins: 133, oneWay: 11120, greenOneWay: 14780, tags: ["赤湯温泉", "龍上海ラーメン", "フラワー長井線"], tip: "辛味噌ラーメンの名店「龍上海」本店や名湯・赤湯温泉街へ" },
  { id: "kaminoyamaonsen", line: "山形新幹線", order: 4, name: "かみのやま温泉", pref: "山形県", km: 347.8, mins: 146, oneWay: 11450, greenOneWay: 15110, tags: ["かみのやま温泉", "上山城", "蔵王エコーライン"], tip: "城下町の風情と温泉宿が集まり、のんびり温泉滞在にぴったり" },
  { id: "yamagata", line: "山形新幹線", order: 5, name: "山形", pref: "山形県", km: 359.9, mins: 142, oneWay: 11450, greenOneWay: 15110, tags: ["蔵王温泉", "山寺（立石寺）", "冷たい肉そば", "市街地充実"], tip: "蔵王温泉直通バスや仙山線で絶景「山寺」へすぐ行ける万能拠点" },
  { id: "tendo", line: "山形新幹線", order: 6, name: "天童", pref: "山形県", km: 373.2, mins: 164, oneWay: 12230, greenOneWay: 15890, tags: ["天童温泉", "将棋の街", "フルーツ狩り"], tip: "駅から徒歩圏内に天童温泉街が広がり、サウナ・温泉旅に大人気" },
  { id: "sakuranbohigashine", line: "山形新幹線", order: 7, name: "さくらんぼ東根", pref: "山形県", km: 380.9, mins: 171, oneWay: 12450, greenOneWay: 16110, tags: ["さくらんぼ東根温泉", "果樹園", "銀山温泉方面"], tip: "果樹王国・東根の温泉やカフェ巡り、山形空港近くでレンタカーも便利" },
  { id: "murayama", line: "山形新幹線", order: 8, name: "村山", pref: "山形県", km: 386.3, mins: 176, oneWay: 12450, greenOneWay: 16110, tags: ["東沢バラ公園", "最上川三難所そば街道"], tip: "そば街道巡りや手前の山形・天童で途中下車するプランもおすすめ" },
  { id: "oishida", line: "山形新幹線", order: 9, name: "大石田", pref: "山形県", km: 399.7, mins: 187, oneWay: 12450, greenOneWay: 16110, tags: ["銀山温泉バス発着", "大石田そば", "最上川千本だんご"], tip: "大人気「銀山温泉」への路線バス発着駅＆行列必至の千本だんご！" },
  { id: "shinjo", line: "山形新幹線", order: 10, name: "新庄", pref: "山形県", km: 421.4, mins: 202, oneWay: 13000, greenOneWay: 17920, tags: ["山形新幹線終点", "最上川舟下り", "肘折温泉", "大当たり"], tip: "往復26,000円！秘湯・肘折温泉や最上川舟下り、鳴子温泉方面へも接続" },

  // ④ 上越新幹線（7駅）
  { id: "jomokogen", line: "上越新幹線", order: 1, name: "上毛高原", pref: "群馬県", km: 160.2, mins: 66, oneWay: 6020, greenOneWay: 8290, tags: ["みなかみ温泉郷", "谷川岳", "猿ヶ京温泉", "近距離注意"], tip: "谷川岳ロープウェイや法師温泉・水上温泉へのバス拠点（約66分で到着）" },
  { id: "echigoyuzawa", line: "上越新幹線", order: 2, name: "越後湯沢", pref: "新潟県", km: 199.2, mins: 71, oneWay: 6790, greenOneWay: 9060, tags: ["ぽんしゅ館", "越後湯沢温泉", "清津峡", "スキー"], tip: "駅構内「ぽんしゅ館」の利き酒＆爆弾おにぎりだけで元が取れる満足度！" },
  { id: "galayuzawa", line: "上越新幹線", order: 3, name: "ガーラ湯沢", pref: "新潟県", km: 201.0, mins: 74, oneWay: 7220, greenOneWay: 10880, seasonal: "冬季限定", tags: ["改札直結スキー場", "冬季営業のみ"], tip: "冬季スキー営業期間のみ候補に出現。手前の越後湯沢駅での乗降も便利" },
  { id: "urasa", line: "上越新幹線", order: 4, name: "浦佐", pref: "新潟県", km: 228.9, mins: 88, oneWay: 8340, greenOneWay: 12000, tags: ["八海山ロープウェー", "魚沼産コシヒカリ", "魚沼の里"], tip: "銘酒「八海山」の魚沼の里や奥只見への観光拠点（越後湯沢で途中下車も可）" },
  { id: "nagaoka", line: "上越新幹線", order: 5, name: "長岡", pref: "新潟県", km: 270.6, mins: 91, oneWay: 9110, greenOneWay: 12770, tags: ["花火ミュージアム", "摂田屋醸造街", "生姜醤油ラーメン"], tip: "道の駅「ながおか花火館」や歴史ある酒蔵・味噌蔵が並ぶ摂田屋散策に" },
  { id: "tsubamesanjo", line: "上越新幹線", order: 6, name: "燕三条", pref: "新潟県", km: 293.8, mins: 102, oneWay: 9440, greenOneWay: 13100, tags: ["ものづくりの街", "背脂ラーメン", "弥彦神社・寺泊"], tip: "金属加工ショップ巡りや、弥彦線で行く彌彦神社・岩室温泉が人気" },
  { id: "niigata", line: "上越新幹線", order: 7, name: "新潟", pref: "新潟県", km: 333.9, mins: 89, oneWay: 10760, greenOneWay: 14420, tags: ["回転寿司・海鮮", "佐渡島アクセス", "ピアBandai", "市街地充実"], tip: "上越新幹線の終点・最大当たり枠！お寿司・日本酒・佐渡汽船まで完璧" },

  // ⑤ 北陸新幹線（7駅）
  { id: "annakaharuna", line: "北陸新幹線", order: 1, name: "安中榛名", pref: "群馬県", km: 123.5, mins: 58, oneWay: 5350, greenOneWay: 7620, tags: ["全47駅最安・最近", "磯部温泉", "榛名山", "近距離注意"], tip: "全47駅で最も東京に近い駅。レンタカーで伊香保・草津・富岡製糸場へ回るのが吉" },
  { id: "karuizawa", line: "北陸新幹線", order: 2, name: "軽井沢", pref: "長野県", km: 146.8, mins: 61, oneWay: 6020, greenOneWay: 8290, tags: ["アウトレット", "旧軽井沢", "星野エリア", "超人気リゾート"], tip: "距離は近いが観光満足度はSS級！駅前アウトレットや旧軽井沢で最高の休日" },
  { id: "sakudaira", line: "北陸新幹線", order: 3, name: "佐久平", pref: "長野県", km: 164.4, mins: 70, oneWay: 6460, greenOneWay: 8730, tags: ["小海線（八ヶ岳）", "小諸城址懐古園", "佐久鯉・ケーキ"], tip: "小海線で小淵沢・野辺山（JR最高地点）へ抜ける高原列車ルートも楽しい" },
  { id: "ueda", line: "北陸新幹線", order: 4, name: "上田", pref: "長野県", km: 189.2, mins: 76, oneWay: 6790, greenOneWay: 9060, tags: ["上田城跡", "別所温泉", "鹿教湯温泉", "美ヶ原"], tip: "真田氏ゆかりの上田城や、上田電鉄別所線で信州最古の「別所温泉」へ" },
  { id: "nagano", line: "北陸新幹線", order: 5, name: "長野", pref: "長野県", km: 222.4, mins: 79, oneWay: 8340, greenOneWay: 12000, tags: ["善光寺", "戸隠神社・そば", "小布施", "湯田中渋温泉"], tip: "善光寺参拝や戸隠そば、長野電鉄で小布施・スノーモンキー（渋温泉）へ！" },
  { id: "iiyama", line: "北陸新幹線", order: 6, name: "飯山", pref: "長野県", km: 252.3, mins: 98, oneWay: 8780, greenOneWay: 12440, tags: ["野沢温泉", "斑尾高原", "千曲川カヌー"], tip: "外湯巡りで有名な「野沢温泉」へ直通バスで約25分の好立地！" },
  { id: "joetsumyoko", line: "北陸新幹線", order: 7, name: "上越妙高", pref: "新潟県", km: 281.9, mins: 109, oneWay: 9440, greenOneWay: 13100, tags: ["JR東日本エリア終点", "赤倉温泉・妙高高原", "高田城址"], tip: "北陸新幹線（JR東日本区間）の最遠駅！妙高高原の温泉や上越・高田観光へ" }
];

// 状態管理
const state = {
  plan: "standard", // "standard" (6000pt), "jrebank" (4000pt), "green" (10000pt)
  view: "by-line",  // "by-line", "ranking", "map"
  lineFilter: "all",
  searchQuery: "",
  sortBy: "route",  // "route", "fare-desc", "fare-asc", "km-desc", "time-asc"
  selectedIds: [],  // 最大4駅
  winnerId: null,   // 4駅から1駅抽選された決定駅ID
  showAllMapLabels: false
};

// 新幹線路線ごとの駅IDチェイン（地理座標接続用）
const ROUTE_CHAINS = {
  "東北新幹線": [
    "tokyo", "omiya", "nasushiobara", "shinshirakawa", "koriyama", "fukushima",
    "shiroishizao", "sendai", "furukawa", "kurikomakogen", "ichinoseki",
    "mizusawaesashi", "kitakami", "shinhanamaki", "morioka", "iwatenumakunai",
    "ninohe", "hachinohe", "shichinohetowada", "shinaomori"
  ],
  "秋田新幹線": [
    "morioka", "shizukuishi", "tazawako", "kakunodate", "omagari", "akita"
  ],
  "山形新幹線": [
    "fukushima", "yonezawa", "takahata", "akayu", "kaminoyamaonsen",
    "yamagata", "tendo", "sakuranbohigashine", "murayama", "oishida", "shinjo"
  ],
  "上越新幹線": [
    "tokyo", "omiya", "takasaki", "jomokogen", "echigoyuzawa", "galayuzawa",
    "urasa", "nagaoka", "tsubamesanjo", "niigata"
  ],
  "北陸新幹線": [
    "takasaki", "annakaharuna", "karuizawa", "sakudaira", "ueda",
    "nagano", "iiyama", "joetsumyoko"
  ]
};

// 東京駅から指定駅までの地理的ルート座標列を取得
function getRoutePathFromTokyo(station) {
  const line = station.line;
  let ids = [];
  if (line === "東北新幹線") {
    const ch = ROUTE_CHAINS["東北新幹線"];
    ids = ch.slice(0, ch.indexOf(station.id) + 1);
  } else if (line === "秋田新幹線") {
    const tCh = ROUTE_CHAINS["東北新幹線"];
    const aCh = ROUTE_CHAINS["秋田新幹線"];
    ids = tCh.slice(0, tCh.indexOf("morioka")).concat(aCh.slice(0, aCh.indexOf(station.id) + 1));
  } else if (line === "山形新幹線") {
    const tCh = ROUTE_CHAINS["東北新幹線"];
    const yCh = ROUTE_CHAINS["山形新幹線"];
    ids = tCh.slice(0, tCh.indexOf("fukushima")).concat(yCh.slice(0, yCh.indexOf(station.id) + 1));
  } else if (line === "上越新幹線") {
    const jCh = ROUTE_CHAINS["上越新幹線"];
    ids = jCh.slice(0, jCh.indexOf(station.id) + 1);
  } else if (line === "北陸新幹線") {
    const hCh = ROUTE_CHAINS["北陸新幹線"];
    ids = ["tokyo", "omiya"].concat(hCh.slice(0, hCh.indexOf(station.id) + 1));
  }
  return ids.map(id => STATION_GEO[id]).filter(Boolean);
}

// 座標配列をSVGパス文字列に変換
function pointsToSvgPath(pts) {
  if (!pts || pts.length === 0) return "";
  return pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
}

const PLAN_CONFIG = {
  standard: {
    name: "通常申込（6,000 pt）",
    points: 6000,
    seatLabel: "普通車指定席",
    isGreen: false
  },
  jrebank: {
    name: "JRE BANK特典（4,000 pt）",
    points: 4000,
    seatLabel: "普通車指定席（2,000pt割引）",
    isGreen: false
  },
  green: {
    name: "どこかにビューーン！グリーーン！（10,000 pt）",
    points: 10000,
    seatLabel: "グリーン車指定席",
    isGreen: true
  }
};

// 駅ごとの計算値を取得
function computeStationMetrics(st, planKey = state.plan) {
  const plan = PLAN_CONFIG[planKey];
  const oneWay = plan.isGreen ? st.greenOneWay : st.oneWay;
  const roundTrip = oneWay * 2;
  const savings = roundTrip - plan.points;
  const discountRate = ((savings / roundTrip) * 100);
  const ptValue = (roundTrip / plan.points);

  // お得度ランク判定（通常往復料金または割引率ベース）
  let rank = "B";
  let rankLabel = "B 安定お得";
  if (st.oneWay * 2 >= 33000) {
    rank = "SS";
    rankLabel = "SS 超大当たり";
  } else if (st.oneWay * 2 >= 26000) {
    rank = "S";
    rankLabel = "S 大当たり";
  } else if (st.oneWay * 2 >= 18000) {
    rank = "A";
    rankLabel = "A 当たり";
  } else if (st.oneWay * 2 >= 13000) {
    rank = "B";
    rankLabel = "B 中距離";
  } else {
    rank = "C";
    rankLabel = "C 近距離";
  }

  return {
    ...st,
    activeOneWay: oneWay,
    activeRoundTrip: roundTrip,
    savings,
    discountRate,
    ptValue,
    rank,
    rankLabel
  };
}

// 数値フォーマット
function fmtYen(n) {
  return n.toLocaleString("ja-JP") + "円";
}

function fmtMins(mins) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return h > 0 ? `約${h}時間${m > 0 ? m + "分" : ""}` : `約${m}分`;
}

// フィルタ＆ソート済み駅リスト取得
function getFilteredStations() {
  let list = STATIONS.map(s => computeStationMetrics(s, state.plan));

  if (state.lineFilter !== "all") {
    list = list.filter(s => s.line === state.lineFilter);
  }

  if (state.searchQuery.trim() !== "") {
    const q = state.searchQuery.trim().toLowerCase();
    list = list.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.pref.toLowerCase().includes(q) ||
      s.line.toLowerCase().includes(q) ||
      s.tags.some(t => t.toLowerCase().includes(q)) ||
      s.tip.toLowerCase().includes(q)
    );
  }

  // ソート
  list.sort((a, b) => {
    switch (state.sortBy) {
      case "fare-desc":
        return b.activeRoundTrip - a.activeRoundTrip || b.km - a.km;
      case "fare-asc":
        return a.activeRoundTrip - b.activeRoundTrip || a.km - b.km;
      case "km-desc":
        return b.km - a.km;
      case "time-asc":
        return a.mins - b.mins;
      case "route":
      default:
        const lineOrder = ["東北新幹線", "秋田新幹線", "山形新幹線", "上越新幹線", "北陸新幹線"];
        const la = lineOrder.indexOf(a.line);
        const lb = lineOrder.indexOf(b.line);
        if (la !== lb) return la - lb;
        return a.order - b.order;
    }
  });

  return list;
}

// 全47駅中の料金順位マップを計算
function getFareRankMap() {
  const sorted = [...STATIONS]
    .map(s => computeStationMetrics(s, state.plan))
    .sort((a, b) => b.activeRoundTrip - a.activeRoundTrip);
  const rankMap = {};
  let currentRank = 1;
  sorted.forEach((s, idx) => {
    if (idx > 0 && s.activeRoundTrip < sorted[idx - 1].activeRoundTrip) {
      currentRank = idx + 1;
    }
    rankMap[s.id] = currentRank;
  });
  return rankMap;
}

// 4駅シミュレーターへの追加/解除
function toggleSelectStation(id) {
  const idx = state.selectedIds.indexOf(id);
  if (idx >= 0) {
    state.selectedIds.splice(idx, 1);
  } else {
    if (state.selectedIds.length >= 4) {
      state.selectedIds.shift();
    }
    state.selectedIds.push(id);
  }
  state.winnerId = null;
  renderAll();
}

// ランダム4駅ガチャを引く
function drawRandomGacha() {
  const pool = [...STATIONS];
  const picked = [];
  while (picked.length < 4 && pool.length > 0) {
    const r = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(r, 1)[0].id);
  }
  state.selectedIds = picked;
  state.winnerId = null;
  renderAll();
}

// 4駅から1駅を最終抽選する
function drawFinalWinner() {
  if (state.selectedIds.length === 0) return;
  const r = Math.floor(Math.random() * state.selectedIds.length);
  state.winnerId = state.selectedIds[r];
  renderAll();
}

// 4駅クリア
function clearSimulator() {
  state.selectedIds = [];
  state.winnerId = null;
  renderAll();
}

// 北日本・東日本（東北・甲信越・関東）SVG地理マップ＋色分け新幹線路線図を生成
function buildGeoMapSvg({ isLarge = false, showAllNames = false } = {}) {
  const selectedStations = state.selectedIds
    .map(id => STATIONS.find(s => s.id === id))
    .filter(Boolean)
    .map(s => computeStationMetrics(s, state.plan));

  const activePrefNames = new Set(selectedStations.map(s => s.pref));
  const hasSelection = selectedStations.length > 0;

  // 1. 都道府県ポリゴン＆県名ラベル
  const prefsPolys = JAPAN_MAP_PREFS.map(p => {
    const isSelectedPref = activePrefNames.has(p.name);
    const cls = [
      "pref-land",
      p.isTarget ? "target-pref" : "",
      isSelectedPref ? "active-pref" : ""
    ].filter(Boolean).join(" ");
    return `<path d="${p.d}" class="${cls}" />`;
  }).join("");

  const prefsLabels = JAPAN_MAP_PREFS.map(p => {
    const shortName = p.name.replace(/[都県]$/, "");
    return `<text x="${p.lx}" y="${p.ly}" class="pref-label ${p.isTarget ? "target-label" : ""}">${shortName}</text>`;
  }).join("");

  // 2. 5つの新幹線路線（白縁＋路線カラー）
  const linesOrder = ["東北新幹線", "上越新幹線", "北陸新幹線", "山形新幹線", "秋田新幹線"];
  const routeBgPaths = linesOrder.map(lineName => {
    const pts = ROUTE_CHAINS[lineName].map(id => STATION_GEO[id]).filter(Boolean);
    return `<path d="${pointsToSvgPath(pts)}" class="shinkansen-route-bg" />`;
  }).join("");

  const routeColorPaths = linesOrder.map(lineName => {
    const pts = ROUTE_CHAINS[lineName].map(id => STATION_GEO[id]).filter(Boolean);
    const color = LINE_META[lineName].color;
    const isLineSelected = selectedStations.some(s => s.line === lineName);
    const dimClass = hasSelection && !isLineSelected ? "dimmed" : "";
    return `<path d="${pointsToSvgPath(pts)}" class="shinkansen-route ${dimClass}" stroke="${color}" />`;
  }).join("");

  // 3. 選択された4駅への東京駅からのハイライトルート（アニメーション破線）
  const activeRoutePaths = selectedStations.map(st => {
    const pts = getRoutePathFromTokyo(st);
    const color = state.winnerId === st.id ? "#f59e0b" : LINE_META[st.line].color;
    return `<path d="${pointsToSvgPath(pts)}" class="shinkansen-route-highlight" stroke="${color}" />`;
  }).join("");

  // 4. 全47駅のドット＆常時表示の主要駅ラベル
  const majorLandmarks = new Set(["shinaomori", "akita", "morioka", "sendai", "shinjo", "yamagata", "niigata", "nagano", "joetsumyoko", "karuizawa"]);
  const allMetrics = STATIONS.map(s => computeStationMetrics(s, state.plan));

  const stationDots = allMetrics.map(st => {
    const geo = STATION_GEO[st.id];
    if (!geo) return "";
    const color = LINE_META[st.line].color;
    const isSel = state.selectedIds.includes(st.id);
    const r = isSel ? 6.5 : 4.2;
    const showName = showAllNames || (!hasSelection && majorLandmarks.has(st.id));

    // 主要駅ラベルの向き調整
    let dx = 7, dy = 3, anchor = "start";
    if (["akita", "niigata", "joetsumyoko", "nagano", "shinjo", "yamagata"].includes(st.id)) {
      dx = -7;
      anchor = "end";
    }

    return `
      <g onclick="toggleSelectStation('${st.id}')" style="cursor:pointer;">
        <title>${st.name}駅（${st.line}・${st.pref}）&#10;往復指定席：${fmtYen(st.activeRoundTrip)}（${st.discountRate.toFixed(1)}%OFF）&#10;クリックで4駅候補に追加/解除</title>
        <circle cx="${geo.x}" cy="${geo.y}" r="${r}" fill="#ffffff" stroke="${color}" stroke-width="${isSel ? 3 : 2.2}" class="map-st-dot" />
        ${showName && !isSel ? `
          <text x="${geo.x + dx}" y="${geo.y + dy}" text-anchor="${anchor}" font-size="10.5" font-weight="800" fill="#1e293b" stroke="#ffffff" stroke-width="3" paint-order="stroke">${st.name}</text>
        ` : ""}
      </g>
    `;
  }).join("");

  // 5. 出発地：東京駅マーカー（＋大宮・高崎ジャンクション小ドット）
  const tokyoGeo = STATION_GEO["tokyo"];
  const omiyaGeo = STATION_GEO["omiya"];
  const takasakiGeo = STATION_GEO["takasaki"];
  const originMarker = `
    <circle cx="${omiyaGeo.x}" cy="${omiyaGeo.y}" r="3" fill="#64748b" />
    <circle cx="${takasakiGeo.x}" cy="${takasakiGeo.y}" r="3" fill="#64748b" />
    <g>
      <circle cx="${tokyoGeo.x}" cy="${tokyoGeo.y}" r="9" fill="#182232" stroke="#ffffff" stroke-width="2.5" />
      <circle cx="${tokyoGeo.x}" cy="${tokyoGeo.y}" r="3.5" fill="#facc15" />
      <rect x="${tokyoGeo.x + 11}" y="${tokyoGeo.y - 10}" width="64" height="20" rx="5" fill="#182232" />
      <text x="${tokyoGeo.x + 43}" y="${tokyoGeo.y + 4}" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ffffff">🚄 東京発</text>
    </g>
  `;

  // 6. 選択された候補駅（最大4駅）の強調ピン＆スマート吹き出しラベル（重なり防止付き）
  const calloutBoxes = [];
  const selectedOverlays = selectedStations.map((st, idx) => {
    const geo = STATION_GEO[st.id];
    if (!geo) return "";
    const color = LINE_META[st.line].color;
    const isWinner = state.winnerId === st.id;
    const badgeColor = isWinner ? "#d97706" : color;
    const numStr = idx + 1;

    // 吹き出しを左右どちらに出すか（日本海側・内陸西側は左、太平洋側・東北本線側は右）
    const placeLeft = ["秋田新幹線", "上越新幹線", "北陸新幹線", "山形新幹線"].includes(st.line) && geo.x < 330;
    const boxW = isWinner ? 158 : 144;
    const boxH = 38;
    let bx = placeLeft ? Math.max(8, geo.x - boxW - 18) : Math.min(640 - boxW - 8, geo.x + 18);
    let by = Math.max(12, Math.min(820 - boxH - 12, geo.y - boxH / 2));

    // 既存の吹き出しとの上下重なりを回避
    for (let iter = 0; iter < 8; iter++) {
      let collided = false;
      for (const prev of calloutBoxes) {
        const horizOverlap = Math.abs(bx - prev.bx) < boxW - 10;
        const vertOverlap = Math.abs(by - prev.by) < boxH + 6;
        if (horizOverlap && vertOverlap) {
          by = by >= prev.by ? prev.by + boxH + 7 : prev.by - boxH - 7;
          by = Math.max(10, Math.min(820 - boxH - 10, by));
          collided = true;
        }
      }
      if (!collided) break;
    }
    calloutBoxes.push({ bx, by });

    const anchorX = placeLeft ? bx + boxW : bx;
    const anchorY = by + boxH / 2;

    return `
      <g onclick="toggleSelectStation('${st.id}')" style="cursor:pointer;">
        <!-- パルスリング -->
        <circle cx="${geo.x}" cy="${geo.y}" r="${isWinner ? 15 : 12}" stroke="${badgeColor}" class="pulse-ring" />
        <!-- 引き出し線 -->
        <line x1="${geo.x}" y1="${geo.y}" x2="${anchorX}" y2="${anchorY}" stroke="${badgeColor}" stroke-width="2" stroke-dasharray="3 2" />
        <!-- 駅上の番号ピン -->
        <circle cx="${geo.x}" cy="${geo.y}" r="${isWinner ? 11 : 9.5}" fill="${badgeColor}" stroke="#ffffff" stroke-width="2.2" />
        <text x="${geo.x}" y="${geo.y + 3.8}" text-anchor="middle" font-size="11" font-weight="900" fill="#ffffff">${isWinner ? "★" : numStr}</text>

        <!-- 吹き出しカード -->
        <g transform="translate(${bx}, ${by})">
          <rect x="0" y="0" width="${boxW}" height="${boxH}" rx="7" fill="${isWinner ? "#fffbeb" : "#ffffff"}" stroke="${badgeColor}" stroke-width="${isWinner ? 2.8 : 2}" filter="drop-shadow(0 3px 6px rgba(15,23,42,0.16))" />
          <rect x="0" y="0" width="22" height="${boxH}" rx="6" fill="${badgeColor}" />
          <text x="11" y="${boxH / 2 + 4}" text-anchor="middle" font-size="11.5" font-weight="900" fill="#ffffff">${isWinner ? "当" : numStr}</text>
          <text x="28" y="15" font-size="12" font-weight="900" fill="#182232">${st.name}${isWinner ? " 🏆" : ""}</text>
          <text x="28" y="30" font-size="10.2" font-weight="700" fill="#059669">往復${fmtYen(st.activeRoundTrip)} (${st.discountRate.toFixed(0)}%OFF)</text>
        </g>
      </g>
    `;
  }).join("");

  // 海・方位・タイトル装飾
  return `
    <svg viewBox="0 0 640 820" class="geo-svg ${isLarge ? "large-map" : ""}" role="img" aria-label="北日本・東日本 新幹線路線図と行き先候補マップ">
      <!-- 海域ラベル -->
      <text x="105" y="290" font-size="13" font-weight="800" fill="#93c5fd" letter-spacing="0.2em">日本海</text>
      <text x="545" y="520" font-size="13" font-weight="800" fill="#93c5fd" letter-spacing="0.2em">太平洋</text>

      <!-- 都道府県ポリゴン -->
      <g>${prefsPolys}</g>
      <!-- 県名ラベル -->
      <g>${prefsLabels}</g>

      <!-- 新幹線5路線（白縁＋路線カラー） -->
      <g>${routeBgPaths}</g>
      <g>${routeColorPaths}</g>

      <!-- 選択中の駅へのアクティブ経路 -->
      <g>${activeRoutePaths}</g>

      <!-- 全47駅ドット -->
      <g>${stationDots}</g>

      <!-- 東京駅（出発地） -->
      ${originMarker}

      <!-- 選択された4駅の強調ピン＆吹き出し -->
      <g>${selectedOverlays}</g>
    </svg>
  `;
}

// JR東日本 公式時刻表URL定義（timetables.jreast.co.jp）
const TOKYO_TIMETABLE_URL = "https://timetables.jreast.co.jp/timetable/list1039.html";

const STATION_TIMETABLE_CODES = {
  // 東北新幹線（18駅）
  nasushiobara: "1118",
  shinshirakawa: "0869",
  koriyama: "0675",
  fukushima: "1352",
  shiroishizao: "0851",
  sendai: "0913",
  furukawa: "1388",
  kurikomakogen: "0632",
  ichinoseki: "0140",
  mizusawaesashi: "1462",
  kitakami: "0564",
  shinhanamaki: "0878",
  morioka: "1565",
  iwatenumakunai: "1193",
  ninohe: "1185",
  hachinohe: "1230",
  shichinohetowada: "1725",
  shinaomori: "0854",
  // 秋田新幹線（5駅）
  shizukuishi: "0782",
  tazawako: "0955",
  kakunodate: "0421",
  omagari: "0346",
  akita: "0039",
  // 山形新幹線（10駅）
  yonezawa: "1648",
  takahata: "0942",
  akayu: "0036",
  kaminoyamaonsen: "0496",
  yamagata: "1600",
  tendo: "1032",
  sakuranbohigashine: "0466",
  murayama: "0964",
  oishida: "0305",
  shinjo: "0867",
  // 上越新幹線（7駅）
  jomokogen: "0844",
  echigoyuzawa: "0285",
  galayuzawa: "0408",
  urasa: "0257",
  nagaoka: "1085",
  tsubamesanjo: "1018",
  niigata: "1137",
  // 北陸新幹線（7駅）
  annakaharuna: "0096",
  karuizawa: "0518",
  sakudaira: "0736",
  ueda: "0203",
  nagano: "1105",
  iiyama: "0102",
  joetsumyoko: "1732"
};

function getStationTimetableUrl(stationId) {
  const code = STATION_TIMETABLE_CODES[stationId];
  return code
    ? `https://timetables.jreast.co.jp/timetable/list${code}.html`
    : "https://timetables.jreast.co.jp/";
}

// ヘッダー統計の更新
function renderHeaderStats() {
  const allMetrics = STATIONS.map(s => computeStationMetrics(s, state.plan));
  const maxSt = allMetrics.reduce((m, s) => s.activeRoundTrip > m.activeRoundTrip ? s : m, allMetrics[0]);
  const minSt = allMetrics.reduce((m, s) => s.activeRoundTrip < m.activeRoundTrip ? s : m, allMetrics[0]);
  const avgRound = Math.round(allMetrics.reduce((acc, s) => acc + s.activeRoundTrip, 0) / allMetrics.length);
  const plan = PLAN_CONFIG[state.plan];

  const el = document.getElementById("header-stats");
  el.innerHTML = `
    <div class="stat-pill">
      <span class="stat-pill-label">必要ポイント（往復）</span>
      <span class="stat-pill-value">${plan.points.toLocaleString()} pt</span>
    </div>
    <div class="stat-pill">
      <span class="stat-pill-label">全47駅 平均通常往復</span>
      <span class="stat-pill-value">${fmtYen(avgRound)}</span>
    </div>
    <div class="stat-pill">
      <span class="stat-pill-label">最高額（${maxSt.name}）</span>
      <span class="stat-pill-value">${fmtYen(maxSt.activeRoundTrip)} <small style="font-size:0.75rem;">(${maxSt.discountRate.toFixed(1)}%OFF)</small></span>
    </div>
    <div class="stat-pill">
      <span class="stat-pill-label">最安額（${minSt.name}）</span>
      <span class="stat-pill-value">${fmtYen(minSt.activeRoundTrip)} <small style="font-size:0.75rem;">(${minSt.discountRate.toFixed(1)}%OFF)</small></span>
    </div>
  `;
}

// 4駅ガチャ期待値シミュレーター＋日本地図の描画
function renderSimulator() {
  const simSec = document.getElementById("simulator-section");
  const slotsContainer = document.getElementById("sim-slots");
  const winnerContainer = document.getElementById("sim-winner-area");
  const resultContainer = document.getElementById("sim-result-area");
  const countBadge = document.getElementById("sim-count-badge");
  const finalDrawBtn = document.getElementById("btn-final-draw");
  const mapContainer = document.getElementById("sim-geo-map-container");

  const selectedStations = state.selectedIds
    .map(id => STATIONS.find(s => s.id === id))
    .filter(Boolean)
    .map(s => computeStationMetrics(s, state.plan));

  simSec.classList.toggle("has-selection", selectedStations.length > 0);
  countBadge.textContent = `${selectedStations.length} / 4 駅選択中`;
  finalDrawBtn.style.display = selectedStations.length >= 2 ? "inline-flex" : "none";

  // 日本地図（北日本・東日本）のSVG描画
  mapContainer.innerHTML = buildGeoMapSvg({ isLarge: false, showAllNames: false });

  // 4つのスロット描画
  let slotsHtml = "";
  for (let i = 0; i < 4; i++) {
    const st = selectedStations[i];
    if (st) {
      const lineColor = LINE_META[st.line].color;
      const isWinner = state.winnerId === st.id;
      const ttUrl = getStationTimetableUrl(st.id);
      slotsHtml += `
        <div class="sim-slot filled ${isWinner ? "winner-slot" : ""}" style="border-color: ${isWinner ? "#d97706" : lineColor};">
          <button class="sim-slot-remove" onclick="toggleSelectStation('${st.id}')" title="候補から外す">✕</button>
          <div style="font-size: 0.72rem; font-weight: 700; color: ${lineColor}; display:flex; align-items:center;">
            <span class="slot-num-badge" style="background:${isWinner ? "#d97706" : lineColor};">${i + 1}</span>
            ${st.line}（${st.pref}）
          </div>
          <div style="font-size: 1.08rem; font-weight: 800; margin: 3px 0 2px;">
            ${st.name}駅 ${isWinner ? "🏆" : ""}
          </div>
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-sub);">
            往復 ${fmtYen(st.activeRoundTrip)}
            <span style="color: #059669; margin-left: 4px;">(-${fmtYen(st.savings)})</span>
          </div>
          <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 2px;">
            🚄 ${st.km}km / 最速 ${fmtMins(st.mins)}
          </div>
          <a href="${ttUrl}" target="_blank" rel="noopener noreferrer" class="slot-timetable-link" title="${st.name}駅のJR東日本時刻表を別タブで開く">
            🕒 ${st.name}駅 JR時刻表 ↗
          </a>
        </div>
      `;
    } else {
      slotsHtml += `
        <div class="sim-slot">
          <div class="sim-slot-empty">
            候補駅 ${i + 1}<br>
            <span style="font-size: 0.72rem; font-weight: 400;">地図またはカードをクリック</span>
          </div>
        </div>
      `;
    }
  }
  slotsContainer.innerHTML = slotsHtml;

  // 1駅抽選結果バナー描画
  if (state.winnerId) {
    const winSt = selectedStations.find(s => s.id === state.winnerId);
    if (winSt) {
      winnerContainer.innerHTML = `
        <div class="winner-banner">
          <div>
            🎉 <strong>行き先決定シミュレーション結果：「${winSt.name}駅」（${winSt.line}・${winSt.pref}）</strong> に決まりました！
            <div style="font-size: 0.78rem; font-weight: 500; opacity: 0.95; margin-top: 2px;">
              通常往復 ${fmtYen(winSt.activeRoundTrip)} → <strong>${fmtYen(winSt.savings)} お得（${winSt.discountRate.toFixed(1)}%OFF）</strong> ／ 💡 ${winSt.tip}
            </div>
          </div>
          <div style="display:flex; gap:6px; align-items:center;">
            <a href="${getStationTimetableUrl(winSt.id)}" target="_blank" rel="noopener noreferrer" class="btn-action" style="background:#fff; color:#b45309; padding:5px 10px; font-size:0.76rem; text-decoration:none;">🕒 ${winSt.name}駅時刻表 ↗</a>
            <button type="button" class="btn-action" style="background:rgba(255,255,255,0.22); color:#fff; padding:5px 10px; font-size:0.76rem;" onclick="drawFinalWinner()">🔄 もう1回抽選</button>
          </div>
        </div>
      `;
    } else {
      winnerContainer.innerHTML = "";
    }
  } else {
    winnerContainer.innerHTML = "";
  }

  if (selectedStations.length === 0) {
    resultContainer.innerHTML = `
      <div style="background: var(--bg-subtle); border-radius: 12px; padding: 16px; color: var(--text-sub); font-size: 0.86rem; line-height: 1.6;">
        💡 <strong>使い方：</strong><br>
        1. 右上の「<strong>🎲 ランダムに4駅ガチャを引く</strong>」ボタンを押すか、<strong>右の日本地図の駅ドット</strong>・下の駅カードをクリックして4駅を選びます。<br>
        2. 選ばれた4駅が<strong>北日本・東日本マップ（色分け新幹線路線図）</strong>上に番号付きでピン留めされ、どの地方・路線が候補になっているか一目で把握できます！
      </div>
    `;
    return;
  }

  // 期待値計算
  const plan = PLAN_CONFIG[state.plan];
  const avgRound = Math.round(selectedStations.reduce((a, s) => a + s.activeRoundTrip, 0) / selectedStations.length);
  const avgSavings = Math.round(selectedStations.reduce((a, s) => a + s.savings, 0) / selectedStations.length);
  const avgDiscount = ((avgSavings / avgRound) * 100).toFixed(1);
  const avgPtVal = (avgRound / plan.points).toFixed(2);

  const minSt = selectedStations.reduce((m, s) => s.activeRoundTrip < m.activeRoundTrip ? s : m, selectedStations[0]);
  const maxSt = selectedStations.reduce((m, s) => s.activeRoundTrip > m.activeRoundTrip ? s : m, selectedStations[0]);

  // 総合判定
  const avgBaseRound = selectedStations.reduce((a, s) => a + s.oneWay * 2, 0) / selectedStations.length;
  let verdictTitle = "Aランク：好条件セット";
  let verdictSub = "十分お得！気に入った行き先があれば申込推奨";
  let verdictBg = "var(--rank-a)";

  if (avgBaseRound >= 28500) {
    verdictTitle = "SSR：神引き確定セット！";
    verdictSub = "驚異の期待値！迷わず即申し込み推奨レベル";
    verdictBg = "var(--rank-ss)";
  } else if (avgBaseRound >= 24000) {
    verdictTitle = "Sランク：大当たりセット！";
    verdictSub = "全47駅平均を大きく上回る優秀な組み合わせ";
    verdictBg = "var(--rank-s)";
  } else if (avgBaseRound < 17500) {
    verdictTitle = "Cランク：近距離多め（再検索検討）";
    verdictSub = "移動はラクですが、お得度重視なら再検索もアリ";
    verdictBg = "var(--rank-c)";
  }

  // 近距離駅チェック（安中榛名・那須塩原・上毛高原）
  const closeStations = selectedStations.filter(s => ["annakaharuna", "nasushiobara", "jomokogen"].includes(s.id));
  let adviceText = "";
  if (closeStations.length > 0) {
    const names = closeStations.map(s => `<strong>${s.name}駅</strong>（往復${fmtYen(s.activeRoundTrip)}）`).join("・");
    adviceText = `⚠️ 候補に近距離駅の ${names} が含まれています。「近すぎる駅は避けたい」場合は条件や時間帯を変えて再検索するのがおすすめです。`;
  } else {
    adviceText = `✅ 近距離下位3駅（安中榛名・那須塩原・上毛高原）が含まれていない安心の組み合わせです！最低でも<strong>${minSt.name}駅（往復${fmtYen(minSt.activeRoundTrip)} / ${minSt.discountRate.toFixed(1)}%OFF）</strong>が確定します。`;
  }

  resultContainer.innerHTML = `
    <div class="sim-result-panel">
      <div class="sim-verdict" style="background: ${verdictBg};">
        <div style="font-size: 0.75rem; opacity: 0.9;">候補${selectedStations.length}駅の総合期待値判定</div>
        <div style="font-size: 1.05rem; margin-top: 2px;">${verdictTitle}</div>
        <div style="font-size: 0.72rem; font-weight: 500; opacity: 0.92; margin-top: 3px;">${verdictSub}</div>
      </div>
      <div class="sim-metric">
        <div class="sim-metric-label">期待値（平均往復通常運賃）</div>
        <div class="sim-metric-val">${fmtYen(avgRound)}</div>
        <div class="sim-metric-sub">最小 ${fmtYen(minSt.activeRoundTrip)} 〜 最大 ${fmtYen(maxSt.activeRoundTrip)}</div>
      </div>
      <div class="sim-metric">
        <div class="sim-metric-label">平均お得額（平均割引率）</div>
        <div class="sim-metric-val" style="color: #059669;">+${fmtYen(avgSavings)}</div>
        <div class="sim-metric-sub">平均 <strong>${avgDiscount}% OFF</strong></div>
      </div>
      <div class="sim-metric">
        <div class="sim-metric-label">1ポイントあたりの期待価値</div>
        <div class="sim-metric-val" style="color: #d97706;">${avgPtVal} 円/pt</div>
        <div class="sim-metric-sub">${plan.points.toLocaleString()}pt利用時（通常1pt=1円）</div>
      </div>
    </div>
    <div class="sim-advice">${adviceText}</div>
  `;
}

// 単一駅カードのHTML生成（JR駅時刻表リンクボタン付き）
function renderStationCardHtml(st, rankMap) {
  const lineMeta = LINE_META[st.line];
  const selIdx = state.selectedIds.indexOf(st.id);
  const isSelected = selIdx >= 0;
  const fareRank = rankMap[st.id];
  const plan = PLAN_CONFIG[state.plan];
  const timetableUrl = getStationTimetableUrl(st.id);

  return `
    <div class="station-card ${isSelected ? "selected-in-sim" : ""}" onclick="toggleSelectStation('${st.id}')">
      <div>
        <div class="card-top">
          <div class="station-name-group">
            <div class="station-pref-line">
              <span class="line-dot" style="background:${lineMeta.color};"></span>
              <span>${st.line}</span>
              <span>・${st.pref}</span>
              <span>（お得度 ${fareRank}位/47駅）</span>
            </div>
            <div class="station-name">
              ${isSelected ? `<span class="slot-num-badge" style="background:${lineMeta.color};">${selIdx + 1}</span>` : ""}
              ${st.name}
              ${st.seasonal ? `<span class="seasonal-badge">${st.seasonal}</span>` : ""}
            </div>
          </div>
          <span class="rank-badge rank-${st.rank}">${st.rankLabel}</span>
        </div>

        <div class="price-box">
          <div class="price-row-main">
            <span class="price-label">東京発 往復指定席</span>
            <span class="price-value">${fmtYen(st.activeRoundTrip)}</span>
          </div>
          <div class="price-row-sub">
            <span>片道通常: <strong>${fmtYen(st.activeOneWay)}</strong></span>
            <span>利用: <strong>${plan.points.toLocaleString()} pt</strong></span>
          </div>
        </div>

        <div class="savings-highlight">
          <span>💰 <strong>${fmtYen(st.savings)}</strong> お得！</span>
          <span><strong>${st.discountRate.toFixed(1)}% OFF</strong> (${st.ptValue.toFixed(2)}円/pt)</span>
        </div>

        <div class="discount-bar-wrap" title="割引率 ${st.discountRate.toFixed(1)}%">
          <div class="discount-bar-fill" style="width: ${Math.min(100, st.discountRate)}%; background: ${lineMeta.color};"></div>
        </div>

        <div class="station-meta">
          <span>🚄 東京から ${st.km} km</span>
          <span>⏱ 最速 ${fmtMins(st.mins)}</span>
        </div>

        <div class="station-tags">
          ${st.tags.map(t => `<span class="tag-chip">${t}</span>`).join("")}
        </div>

        <div style="font-size: 0.74rem; color: var(--text-sub); margin-bottom: 12px; line-height: 1.4;">
          💡 ${st.tip}
        </div>
      </div>

      <div class="card-actions-row">
        <button type="button" class="card-select-btn" onclick="event.stopPropagation(); toggleSelectStation('${st.id}')">
          ${isSelected ? `✓ 候補駅 ${selIdx + 1}（解除）` : "＋ 4駅候補に選ぶ"}
        </button>
        <a href="${timetableUrl}" target="_blank" rel="noopener noreferrer" class="timetable-btn" onclick="event.stopPropagation();" title="JR東日本「${st.name}駅」の公式時刻表を開く">
          🕒 JR駅時刻表 ↗
        </a>
      </div>
    </div>
  `;
}

// ① 路線別ビューの描画（各新幹線枠に東京駅の時刻表リンク付き）
function renderByLineView(stations, rankMap) {
  const container = document.getElementById("main-view-content");
  const linesOrder = ["東北新幹線", "秋田新幹線", "山形新幹線", "上越新幹線", "北陸新幹線"];

  let html = "";
  linesOrder.forEach(lineName => {
    const lineStations = stations.filter(s => s.line === lineName);
    if (lineStations.length === 0) return;

    const meta = LINE_META[lineName];
    const avgRound = Math.round(lineStations.reduce((a, s) => a + s.activeRoundTrip, 0) / lineStations.length);
    const maxSt = lineStations.reduce((m, s) => s.activeRoundTrip > m.activeRoundTrip ? s : m, lineStations[0]);
    const minSt = lineStations.reduce((m, s) => s.activeRoundTrip < m.activeRoundTrip ? s : m, lineStations[0]);

    html += `
      <section class="line-section">
        <div class="line-header" style="background: ${meta.color};">
          <div>
            <div class="line-header-left">
              <h2 class="line-title">${lineName}（${lineStations.length}駅）</h2>
              <span class="line-train-tag">主な列車：${meta.trains}</span>
              <a href="${TOKYO_TIMETABLE_URL}" target="_blank" rel="noopener noreferrer" class="line-tokyo-timetable-btn" title="JR東日本「東京駅」の新幹線公式時刻表を開く">
                🕒 東京駅 時刻表（${lineName}）↗
              </a>
            </div>
            <div style="font-size: 0.82rem; opacity: 0.92; margin-top: 6px;">${meta.desc}</div>
          </div>
          <div class="line-summary-stats">
            <span>路線平均往復：<strong>${fmtYen(avgRound)}</strong></span>
            <span>最高：${maxSt.name}（${fmtYen(maxSt.activeRoundTrip)}）</span>
            <span>最安：${minSt.name}（${fmtYen(minSt.activeRoundTrip)}）</span>
          </div>
        </div>
        <div class="stations-grid">
          ${lineStations.map(st => renderStationCardHtml(st, rankMap)).join("")}
        </div>
      </section>
    `;
  });

  if (!html) {
    html = `<div style="background:#fff; padding:40px; text-align:center; border-radius:16px; color:var(--text-sub);">該当する駅が見つかりませんでした。検索条件を変更してください。</div>`;
  }

  container.innerHTML = html;
}

// ② ランキング・一覧テーブルビューの描画
function renderRankingTableView(stations, rankMap) {
  const container = document.getElementById("main-view-content");
  const plan = PLAN_CONFIG[state.plan];

  const rowsHtml = stations.map(st => {
    const meta = LINE_META[st.line];
    const selIdx = state.selectedIds.indexOf(st.id);
    const isSelected = selIdx >= 0;
    const rankNum = rankMap[st.id];
    const timetableUrl = getStationTimetableUrl(st.id);

    return `
      <tr class="${isSelected ? "selected-row" : ""}" onclick="toggleSelectStation('${st.id}')" style="cursor:pointer;">
        <td style="font-weight:800; color:var(--text-sub);">${rankNum}位</td>
        <td><span class="rank-badge rank-${st.rank}">${st.rank}</span></td>
        <td>
          <div style="font-weight:800; font-size:0.98rem;">
            ${isSelected ? `<span class="slot-num-badge" style="background:${meta.color};">${selIdx + 1}</span>` : ""}
            ${st.name}
            ${st.seasonal ? `<span class="seasonal-badge">${st.seasonal}</span>` : ""}
          </div>
          <div style="font-size:0.73rem; color:var(--text-muted);">${st.pref}</div>
        </td>
        <td>
          <span class="line-badge-sm" style="background:${meta.color};">${st.line}</span>
        </td>
        <td style="font-weight:700;">${fmtYen(st.activeOneWay)}</td>
        <td style="font-weight:800; font-size:1rem;">${fmtYen(st.activeRoundTrip)}</td>
        <td style="font-weight:800; color:#059669;">+${fmtYen(st.savings)}</td>
        <td>
          <span style="font-weight:800; color:#059669;">${st.discountRate.toFixed(1)}% OFF</span>
          <div style="font-size:0.72rem; color:#d97706; font-weight:700;">1pt = ${st.ptValue.toFixed(2)}円</div>
        </td>
        <td style="font-size:0.8rem; color:var(--text-sub);">
          ${st.km} km<br>
          <span style="color:var(--text-muted);">最速 ${fmtMins(st.mins)}</span>
        </td>
        <td>
          <div style="display:flex; gap:6px; align-items:center;">
            <button type="button" class="card-select-btn" style="padding:5px 8px; font-size:0.74rem;" onclick="event.stopPropagation(); toggleSelectStation('${st.id}')">
              ${isSelected ? `✓ 候補${selIdx + 1}` : "＋ 候補選択"}
            </button>
            <a href="${timetableUrl}" target="_blank" rel="noopener noreferrer" class="timetable-btn" style="padding:5px 8px; font-size:0.74rem;" onclick="event.stopPropagation();" title="${st.name}駅のJR時刻表">
              🕒 時刻表 ↗
            </a>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  container.innerHTML = `
    <div class="ranking-table-wrap">
      <div style="padding: 12px 16px; background: var(--bg-subtle); border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        <span style="font-size: 0.84rem; font-weight: 700; color: var(--text-sub);">🏆 全47駅 お得度・運賃比較一覧</span>
        <a href="${TOKYO_TIMETABLE_URL}" target="_blank" rel="noopener noreferrer" class="line-tokyo-timetable-btn" style="font-size: 0.78rem; padding: 5px 12px;">
          🕒 出発地：東京駅 JR新幹線時刻表一覧 ↗
        </a>
      </div>
      <table class="ranking-table">
        <thead>
          <tr>
            <th>お得順位</th>
            <th>判定</th>
            <th>駅名（都道府県）</th>
            <th>新幹線路線</th>
            <th>片道通常（${plan.seatLabel}）</th>
            <th>往復通常料金</th>
            <th>お得になる金額</th>
            <th>割引率 / pt単価</th>
            <th>営業キロ / 最速時間</th>
            <th>操作・時刻表</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  `;
}

// ③ 路線図マップビューの描画（大型日本地図＋5路線ダイアグラム）
function renderRouteMapView(stations, rankMap) {
  const container = document.getElementById("main-view-content");
  const linesOrder = ["東北新幹線", "秋田新幹線", "山形新幹線", "上越新幹線", "北陸新幹線"];

  const colsHtml = linesOrder.map(lineName => {
    const meta = LINE_META[lineName];
    const lineStations = STATIONS
      .filter(s => s.line === lineName)
      .map(s => computeStationMetrics(s, state.plan))
      .sort((a, b) => b.order - a.order);

    const nodesHtml = lineStations.map(st => {
      const selIdx = state.selectedIds.indexOf(st.id);
      const isSelected = selIdx >= 0;
      const isFilteredOut = !stations.some(fs => fs.id === st.id);
      const ttUrl = getStationTimetableUrl(st.id);
      return `
        <div class="map-node ${isSelected ? "selected-in-sim" : ""}"
             style="--track-color: ${meta.color}; ${isFilteredOut ? "opacity: 0.35;" : ""}"
             onclick="toggleSelectStation('${st.id}')">
          <div class="map-node-top">
            <span>${isSelected ? `<span class="slot-num-badge" style="background:${meta.color};">${selIdx + 1}</span>` : ""}${st.name}</span>
            <span class="rank-badge rank-${st.rank}" style="font-size:0.65rem; padding:2px 6px;">${st.rank}</span>
          </div>
          <div class="map-node-bottom">
            <span>往復 <strong>${fmtYen(st.activeRoundTrip)}</strong></span>
            <span style="color:#059669; font-weight:700;">${st.discountRate.toFixed(0)}%OFF</span>
          </div>
          <div style="font-size:0.68rem; color:var(--text-muted); margin-top:3px; display:flex; justify-content:space-between; align-items:center;">
            <span>片道 ${fmtYen(st.activeOneWay)}</span>
            <a href="${ttUrl}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" style="color:var(--jr-green-dark); font-weight:700; text-decoration:none;">🕒時刻表↗</a>
          </div>
        </div>
      `;
    }).join("");

    let branchNote = "⬆ 終点側（遠距離・高割引）";
    if (lineName === "秋田新幹線") branchNote = "⬆ 秋田（盛岡駅から分岐）";
    if (lineName === "山形新幹線") branchNote = "⬆ 新庄（福島駅から分岐）";

    return `
      <div class="map-line-col">
        <div class="map-col-header" style="background: ${meta.color};">
          ${lineName}
          <div style="font-size:0.7rem; font-weight:500; opacity:0.9; margin-bottom:6px;">${branchNote}</div>
          <a href="${TOKYO_TIMETABLE_URL}" target="_blank" rel="noopener noreferrer" class="line-tokyo-timetable-btn" style="font-size:0.72rem; padding:3px 9px;">
            🕒 東京駅時刻表 ↗
          </a>
        </div>
        <div class="map-track" style="--track-color: ${meta.color};">
          ${nodesHtml}
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div class="map-view-container">
      <div class="map-legend">
        <div>
          <strong>🗾 北日本・東日本 新幹線地理マップ ＆ 5路線別ダイアグラム</strong>
          <div style="font-size:0.78rem; color:var(--text-muted); margin-top:2px;">
            地図上の駅ドットまたは下の路線リストをクリックすると、4駅ガチャ候補として選択・比較できます。
          </div>
        </div>
        <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
          <label style="font-size:0.8rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:5px;">
            <input type="checkbox" ${state.showAllMapLabels ? "checked" : ""} onchange="state.showAllMapLabels = this.checked; renderAll();" />
            地図上に全47駅名を表示
          </label>
        </div>
      </div>

      <div style="max-width: 680px; margin: 0 auto 28px; border: 1.5px solid var(--border-color); border-radius: 16px; overflow: hidden;">
        <div class="geo-svg-wrap">
          ${buildGeoMapSvg({ isLarge: true, showAllNames: state.showAllMapLabels })}
        </div>
      </div>

      <div class="map-columns">
        ${colsHtml}
      </div>
      <div class="map-origin-banner" style="display:flex; justify-content:center; align-items:center; gap:14px; flex-wrap:wrap;">
        <span>🚄 出発地：東京駅（上野駅・大宮駅も対象エリア同一）</span>
        <a href="${TOKYO_TIMETABLE_URL}" target="_blank" rel="noopener noreferrer" class="line-tokyo-timetable-btn" style="font-size:0.8rem; padding:5px 12px;">
          🕒 東京駅 JR公式時刻表を開く ↗
        </a>
      </div>
    </div>
  `;
}

// 全体再描画
function renderAll() {
  renderHeaderStats();
  renderSimulator();

  const filtered = getFilteredStations();
  const rankMap = getFareRankMap();

  document.getElementById("result-count-label").textContent = `表示中：${filtered.length} 駅 / 全47駅`;

  if (state.view === "by-line") {
    renderByLineView(filtered, rankMap);
  } else if (state.view === "ranking") {
    renderRankingTableView(filtered, rankMap);
  } else if (state.view === "map") {
    renderRouteMapView(filtered, rankMap);
  }
}

// イベントリスナー初期化
document.addEventListener("DOMContentLoaded", () => {
  // プラン切替ボタン
  document.querySelectorAll("[data-plan]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-plan]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.plan = btn.getAttribute("data-plan");
      renderAll();
    });
  });

  // 表示ビュー切替ボタン
  document.querySelectorAll("[data-view]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-view]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.view = btn.getAttribute("data-view");
      if (state.view === "ranking" && state.sortBy === "route") {
        state.sortBy = "fare-desc";
        document.getElementById("sort-select").value = "fare-desc";
      }
      renderAll();
    });
  });

  // 路線フィルタピル
  document.querySelectorAll("[data-line]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-line]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.lineFilter = btn.getAttribute("data-line");
      renderAll();
    });
  });

  // 検索ボックス
  document.getElementById("search-input").addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderAll();
  });

  // ソートセレクト
  document.getElementById("sort-select").addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderAll();
  });

  // ガチャボタン・1駅抽選ボタン・クリアボタン
  document.getElementById("btn-random-gacha").addEventListener("click", drawRandomGacha);
  document.getElementById("btn-final-draw").addEventListener("click", drawFinalWinner);
  document.getElementById("btn-clear-sim").addEventListener("click", clearSimulator);

  // 初回表示時にランダム4駅ガチャを1回引いた状態で表示（すぐ地図の良さが分かるように！）
  drawRandomGacha();
});

