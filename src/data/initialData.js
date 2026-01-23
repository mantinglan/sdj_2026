// src/data/initialData.js

export const TRIP_YEAR = "2026";

export const initialItineraryData = [
  // --- Day 1: 2/3 (二) ---
  {
    date: `${TRIP_YEAR}-02-03`,
    time: "14:25",
    title: "第一組抵達仙台機場",
    note: "與司機會合。\n機場地圖：https://www.google.com/maps/search/?api=1&query=Sendai+Airport",
    lat: 38.1399,
    lng: 140.9168,
  },
  {
    date: `${TRIP_YEAR}-02-03`,
    time: "15:00",
    title: "🌊 閖上河岸商店街 (第一組)",
    note: "第一組先行逛逛商店街\n地圖：https://maps.app.goo.gl/oVgB9Vn4XpoR98Ub7",
    group: "A",
    details:
      "【閖上河岸商店街 (Kawamachi Terrazza Yuriage)】\n位於名取川河口，是一個充滿在地特色與美食的商店街。第一組可以在此品嚐新鮮海產、甜點，享受河岸風景，直到第二組抵達。",
    lat: 38.1738,
    lng: 140.9472,
  },
  {
    date: `${TRIP_YEAR}-02-03`,
    time: "16:00",
    title: "✈️ 第二組抵達仙台機場",
    note: "第一組返回機場接人，全員會合",
    lat: 38.1399,
    lng: 140.9168,
  },
  {
    date: `${TRIP_YEAR}-02-03`,
    time: "16:20",
    title: "🚗 前往天童 AEON",
    note: "全員上車，車程約 1.5 小時",
  },
  {
    date: `${TRIP_YEAR}-02-03`,
    time: "17:50",
    title: "🛍️ AEON Mall 天童 (超市補給)",
    note: "停留 70 分鐘 / 超市補給、零食採購\n地圖：https://maps.app.goo.gl/oRnye32CCH42XmHa7",
    details:
      "【天童 AEON Mall】\n這是山形縣內規模極大的購物中心。建議直接鎖定 1F 的超大型食品超市購買往後幾天的飲料、水果、泡麵與消夜。",
    lat: 38.3377,
    lng: 140.3662,
  },
  {
    date: `${TRIP_YEAR}-02-03`,
    time: "19:30",
    title: "🏨 抵達飯店 Check-in",
    note: "住宿：山形站前大和 ROYNET\n放行李、稍作休息\n導航：https://www.google.com/maps/search/?api=1&query=Daiwa+Roynet+Hotel+Yamagata+Station",
    lat: 38.2486,
    lng: 140.3273,
  },
  {
    date: `${TRIP_YEAR}-02-03`,
    time: "",
    title: "🍽️ 晚餐：平田牧場 (炸豬排)",
    note: "營業時間：11:00–21:00\n位於山形車站大樓內，金華豬非常有名！\n地圖：https://www.google.com/maps/search/?api=1&query=Hirata+Bokujo+Yamagata+Station\n食記參考：\nhttps://goflyting.com/hiratabokujo/\nhttps://jatravel.tw/hiraboku/",
    details:
      "【平田牧場 (Hirata Bokujo)】\n以極高品質的「金華豬」聞名，肉質細嫩且脂肪帶有甜味。預計 20:00 前往，由於營業至 21:00，請注意最後入店時間（通常為 20:30）。",
  },
  {
    date: `${TRIP_YEAR}-02-03`,
    time: "",
    title: "宵夜：山形肉問屋 (居酒屋)",
    note: "營業時間：17:00–00:00\n介紹影片：https://www.youtube.com/watch?v=D7ujRGryQ-4",
    details:
      "體驗日本道地的居酒屋文化！這裡提供各式各樣的山形牛內臟料理和串燒，氣氛熱鬧。如果你敢吃內臟類，絕對不能錯過。",
  },
  {
    date: `${TRIP_YEAR}-02-03`,
    time: "",
    title: "🏨 住宿：山形站前大和 ROYNET 酒店",
    note: "📍 地址：山形県山形市幸町2-9\n📞 電話：023-627-7255\n🗺️ 導航：https://www.google.com/maps/search/?api=1&query=Daiwa+Roynet+Hotel+Yamagata+Station",
    lat: 38.2486,
    lng: 140.3273,
  },

  // --- Day 2: 2/4 (三) ---
  {
    date: `${TRIP_YEAR}-02-04`,
    time: "07:20",
    title: "飯店出發前往藏王",
    note: "早餐：摩斯/松屋",
  },
  {
    date: `${TRIP_YEAR}-02-04`,
    time: "08:30",
    title: "🏔️ 藏王樹冰 (纜車山頂)",
    note: "❄️ 必備：墨鏡、防雪靴、手套、毛帽、口罩。\n⚠️ 警告：嚴禁靠近樹井，請走步道。",
    details:
      "【藏王樹冰 (Ice Monsters)】\n這是東北冬季限定的奇景！來自西伯利亞的寒風夾帶水氣，撞擊到藏王的針葉林，在樹上凝結成冰，層層堆疊後形成形狀各異的「雪怪」。\n\n⚠️ 安全須知：\n1. 樹井危險：樹幹周圍的雪是鬆軟的空洞，掉進去非常難自行爬出，甚至會窒息。請絕對不要為了拍照而踏入無人踩過的雪地！\n2. 極度寒冷：山頂溫度可達 -10 度以下，手機請貼暖暖包保溫。",
    lat: 38.1544,
    lng: 140.4042, // 藏王山頂
    image: "/images/zao.jpg",
  },
  {
    date: `${TRIP_YEAR}-02-04`,
    time: "11:00",
    title: "道の駅 やまがた蔵王 (彈性)",
    note: "視山上寒冷程度決定停留長短\n地圖：https://maps.app.goo.gl/UbnT2Zw3EKzQg1SAA",
    details:
      "這是一個較新的休息站，如果山上太冷可以提早下山來這裡取暖、逛農產品。來得及就去，不強求。",
    lat: 38.2125,
    lng: 140.3421,
    image: "/images/eatpudding.jpg",
  },
  {
    date: `${TRIP_YEAR}-02-04`,
    time: "11:30",
    title: "返回山形市區",
    note: "回飯店接人",
  },
  {
    date: `${TRIP_YEAR}-02-04`,
    time: "12:15",
    title: "🍽️ 午餐：燒肉名匠 山牛 (山形店)",
    note: "✅ 已預約 12:15\n訂位大名：Lin\n人數：10大1小(10個月)\n地圖：https://www.google.com/maps/search/?api=1&query=Yakiniku+Meisho+Yamagyu+Yamagata",
    details:
      "【山形牛專門店 - 山牛】\n使用自家牧場養育的山形牛。預約時間為 12:15，請準時抵達。",
    lat: 38.2515,
    lng: 140.3392,
    image: "/images/eatmeat.jpg",
  },
  {
    date: `${TRIP_YEAR}-02-04`,
    time: "12:50",
    title: "前往山寺立石寺",
    note: "車程約30分",
  },
  {
    date: `${TRIP_YEAR}-02-04`,
    time: "13:20",
    title: "🏔️ 山寺立石寺參拜",
    note: "必爬 1015 階梯看展望台！\n入山費用： 500元\n地圖：https://maps.app.goo.gl/YjT2NktpUSgnU6qm9\n攻略 1：https://travistotravel.com/2025/01/09/%E5%B1%B1%E5%BD%A2%E8%87%AA%E7%94%B1%E8%A1%8C%E5%B1%B1%E5%AF%BA%E7%AB%8B%E7%9F%B3%E5%AF%BA/\n攻略 2：https://tohoku.letsgojp.com/archives/21103/\n攻略 3：https://listentolu.com/2025/03/yamadera/",
    details:
      "【寶珠山 立石寺】\n由慈覺大師於西元 860 年開山，是東北代表性的靈場。詩人松尾芭蕉曾在此留下名句：「閑さや 岩にしみ入る 蝉の声」（寂靜啊，蟬聲滲入岩石中）。\n\n⚠️ 冬季登山警告：\n1. 絕對防滑：這 1015 階石梯在冬天會結成「冰溜滑梯」，非常滑！強烈建議在山下商店購買或自備「簡易冰爪 (雪抓)」，套在鞋子上再上山。\n2. 下山更危險：上山容易下山難，重心要放低，手抓扶手。\n3. 景色：雖然辛苦，但爬到「五大堂」看出去的雪景，彷彿水墨畫般美麗，非常值得！",
    lat: 38.3126,
    lng: 140.4357,
    image: "/images/Yamadera.jpg",
  },
  {
    date: `${TRIP_YEAR}-02-04`,
    time: "15:20",
    title: "前往腰掛庵",
    note: "車程約30分",
  },
  {
    date: `${TRIP_YEAR}-02-04`,
    time: "15:45",
    title: "腰掛庵",
    note: "招牌：蕨餅、草莓大福、蕎麥糰子(外帶晚上吃)\n地圖：https://www.google.com/maps/search/?api=1&query=Koshikakean+Yamagata",
    details:
      "【腰掛庵 (Koshikakean)】\n山形縣極具代表性的和菓子名店，經常入選 Tabelog 甜點百名店。店面位於一座古色古香的明治時代「藏」建築（倉庫）內。\n\n🍡 推薦商品：\n1. 蕨餅 (わらび餅)：店內人氣 No.1！口感極其軟嫩綿密，甚至有「入口即化」的驚人美譽，裹上香氣濃郁的黃豆粉，是必買清單。\n2. 草莓大福 (季節限定)：冬季與春季限定！與一般大福不同，腰掛庵是用招牌蕨餅皮包覆大顆多汁草莓與細緻紅豆沙，蕨餅的Q彈與草莓的酸甜完美結合，非常受歡迎。\n3. 蕎麥糰子：帶有淡雅蕎麥香氣的糰子，搭配甜而不膩的紅豆餡或沾醬，口感Q彈扎實。\n⚠️ 注意：由於人氣極高，商品（尤其是草莓大福）常在傍晚前就售罄。",
  },
  {
    date: `${TRIP_YEAR}-02-04`,
    time: "16:00",
    title: "前往銀山溫泉",
    note: "車程約60分",
  },
  {
    date: `${TRIP_YEAR}-02-04`,
    time: "17:00",
    title: "♨️ 銀山溫泉散策 & 住宿",
    note: "🏨 住宿：銀山溫泉傳統旅館 銀山莊\n📍 地址：山形県尾花沢市銀山新畑85\n📞 電話：0237-28-2322\n🗺️ 導航：https://www.google.com/maps/search/?api=1&query=Ginzan+Onsen+Ginzanso",
    details:
      "【神隱少女的舞台？】\n銀山溫泉以大正浪漫風格的建築聞名，木造的溫泉旅館沿著銀山川兩岸林立。傍晚時分，煤氣燈亮起，配上白雪覆蓋的屋頂，夢幻得像走進童話世界。這裡也被認為是動畫《神隱少女》湯屋的原型之一。",
    lat: 38.5705,
    lng: 140.5303, // 銀山溫泉
    image: "/images/ginsan.jpg",
  },

  // --- Day 3: 2/5 (四) ---
  {
    date: `${TRIP_YEAR}-02-05`,
    time: "09:15",
    title: "銀山溫泉退房出發",
    note: "",
    image: "/images/ginsan-day.jpg",
  },
  {
    date: `${TRIP_YEAR}-02-05`,
    time: "09:15",
    title: "前往最上川游船",
    note: "車程1.5小時",
  },
  {
    date: `${TRIP_YEAR}-02-05`,
    time: "10:50",
    title: "最上川芭蕉航線 (最上峡芭蕉ライン観光)",
    note: "【上車點：古口港（戶澤藩船番所）】\n地圖：https://maps.app.goo.gl/r5qhsh5fkaGv8aw69",
    details:
      "【最上川芭蕉航線 - 雪見舟體驗】\n最上川是山形縣的母親河，冬天的「雪見舟」可以坐在暖氣船內欣賞如山水畫般的銀白世界。\n\n📍 乘船資訊：\n1. 上車點（出發地）：古口港（戶澤藩船番所）。\n2. 下車點（目的地）：草薙港（最上川交匯處）。\n3. 船期：每小時約有一班，全程約 50 分鐘。\n\n🍡 船上筆記：\n- 船夫會一邊划船一邊唱著傳統的「最上川舟唄」，氣氛極佳。\n- 冬天船內有暖爐，非常舒適。\n- 推薦在船上享用現做的「暖心糰子」或預約特色便當。\n\n🔗 攻略參考：https://mimigo.tw/mogami-gorge/",
    lat: 38.7538,
    lng: 140.1345,
    image: "/images/boat.jpg",
  },
  {
    date: `${TRIP_YEAR}-02-05`,
    time: "12:00",
    title: "前往あ･ら･伊達な道の駅",
    note: "車程1.5小時",
  },
  {
    date: `${TRIP_YEAR}-02-05`,
    time: "13:30",
    title: "あ･ら･伊達な道の駅",
    note: "停留30分\n地圖：https://maps.app.goo.gl/7fodWLj7SAkXUqWe8",
    details:
      "這是一個非常受歡迎的休息站，每年都有數百萬人次造訪。裡面販賣非常多東北限定的伴手禮，還有知名的 ROYCE' 巧克力（因為姊妹市的關係）。",
    lat: 38.7302,
    lng: 140.7516,
    image: "/images/relax.jpg",
  },
  {
    date: `${TRIP_YEAR}-02-05`,
    time: "14:00",
    title: "前往一苺一笑 松森農場",
    note: "車程1小時",
  },
  {
    date: `${TRIP_YEAR}-02-05`,
    time: "15:00",
    title: "一苺一笑 松森農場",
    note: "採草莓停留60分\n地圖：https://maps.app.goo.gl/Q5JfJhQnRt5okKDq7",
    details:
      "這裡採用高架栽培，採草莓時不需要彎腰，非常輕鬆。農場內還有販賣自製的草莓甜點和果醬。",
    lat: 38.3183,
    lng: 140.9022,
  },
  {
    date: `${TRIP_YEAR}-02-05`,
    time: "16:00",
    title: "前往秋保溫泉",
    note: "車程40分鐘",
  },
  {
    date: `${TRIP_YEAR}-02-05`,
    time: "16:40",
    title: "♨️ 入住秋保溫泉 & 晚餐",
    note: "🏨 住宿：秋保溫泉 Hotel 瑞鳳\n📍 地址：宮城県仙台市太白区秋保町湯元字除26-1\n📞 電話：0570-550-397\n🗺️ 導航：https://www.google.com/maps/search/?api=1&query=Akiu+Onsen+Hotel+Zuiho",
    details:
      "瑞鳳是一間豪華的溫泉飯店，最有名的是它的自助晚餐，有帝王蟹、和牛、壽司吃到飽！大浴場也非常寬敞，有露天溫泉可以賞雪。",
    lat: 38.2239,
    lng: 140.7161, // 秋保溫泉
  },

  // --- Day 4: 2/6 (五) ---
  {
    date: `${TRIP_YEAR}-02-06`,
    time: "09:30",
    title: "秋保瑞鳳退房出發",
    note: "",
  },
  {
    date: `${TRIP_YEAR}-02-06`,
    time: "09:30",
    title: "前往藏王狐狸村",
    note: "車程1小時",
  },
  {
    date: `${TRIP_YEAR}-02-06`,
    time: "10:30",
    title: "藏王狐狸村",
    note: "停留1.5小時\n冬毛狐狸、餵食體驗\n地圖：https://www.google.com/maps/search/?api=1&query=Zao+Fox+Village",
    details:
      "這裡放養了超過 100 隻狐狸！冬天的狐狸毛最蓬鬆可愛。請注意：雖然牠們看起來很可愛，但仍有野性，請勿隨意觸摸，以免被咬。要在指定的高台區才能進行餵食。",
    lat: 38.0411,
    lng: 140.5313, // 狐狸村
    image: "/images/fox.jpg",
  },
  {
    date: `${TRIP_YEAR}-02-06`,
    time: "12:00",
    title: "前往 Noodle shop Arakawa",
    note: "車程1小時",
  },
  {
    date: `${TRIP_YEAR}-02-06`,
    time: "13:00",
    title: "午餐：Noodle shop Arakawa",
    note: "百名店拉麵\n地圖：https://maps.app.goo.gl/SqkQbTJbBJodrKmAA",
    details:
      "這是一間多次入選日本百名店的拉麵店，以鴨湯鴨肉拉麵聞名。湯頭清爽鮮甜，鴨肉軟嫩。",
    image: "/images/ramen.jpg",
  },
  {
    date: `${TRIP_YEAR}-02-06`,
    time: "12:00",
    title: "前往 金蛇水神社",
    note: "車程10分鐘",
  },
  {
    date: `${TRIP_YEAR}-02-06`,
    time: "14:10",
    title: "金蛇水神社",
    note: "財運神社、雪中參拜\n地圖：https://maps.app.goo.gl/2uSsmMuXBp3SRJne6",
    details:
      "以祈求財運和生意興隆聞名的神社，主祭神是水神。神社內有許多蛇形石頭，據說用錢包去擦拭可以增加財運。神社內的咖啡廳也非常時尚。",
    lat: 38.1098,
    lng: 140.8631,
  },
  {
    date: `${TRIP_YEAR}-02-06`,
    time: "14:50",
    title: "前往三井 Outlet 仙台港",
    note: "車程1小時",
  },
  {
    date: `${TRIP_YEAR}-02-06`,
    time: "15:50",
    title: "三井 Outlet 購物",
    note: "停留2小時\n地圖：https://www.google.com/maps/search/?api=1&query=Mitsui+Outlet+Park+Sendai+Port",
    details:
      "東北最大的 Outlet 之一，有摩天輪地標。品牌非常齊全，包括 GAP, Nike, Adidas, Coach 等等。美食街也有很多仙台在地美食。",
    lat: 38.2736,
    lng: 140.9934,
  },
  {
    date: `${TRIP_YEAR}-02-06`,
    time: "18:00",
    title: "前往仙台市區",
    note: "車程40分鐘",
  },
  {
    date: `${TRIP_YEAR}-02-06`,
    time: "19:30",
    title: "🍽️ 晚餐：伊達のいろり焼 蔵の庄 一番町本店",
    note: "✅ 已預約 19:30\n訂位大名：Lin\n人數：10大1小(10個月)\n地圖：https://maps.app.goo.gl/VVoJiRAZMJrhbEhw8",
    details:
      "【蔵の庄 (Kuranosho) - 仙台在地炉端燒】\n這是一家可以吃到宮城縣在地食材與爐端燒料理的名店。\n\n📍 地址：宮城県仙台市青葉区一番町3-8-14 鈴喜アバンティビル2F\n📞 電話：+81-22-224-3031\n🥩 推薦必點：\n1. 炭火燒烤魚：師傅現場用紅火炭烤，皮脆肉嫩。\n2. 地元野菜串燒：使用仙台當地的時令蔬菜。\n3. 名物厚揚：厚炸豆腐配上大量蔥花。\n\n⚠️ 提醒：預約 19:30，請準時抵達。餐廳位於 2 樓，推嬰兒車可能需注意樓梯或電梯位置。",
    lat: 38.2608,
    lng: 140.8718,
    image: "/images/dinner.jpg",
  },
  {
    date: `${TRIP_YEAR}-02-06`,
    time: "",
    title: "🏨 住宿：Hotel 京阪 仙台",
    note: "📍 地址：宮城県仙台市青葉区中央3丁目3-5\n📞 電話：022-263-0321\n🗺️ 導航：https://www.google.com/maps/search/?api=1&query=Hotel+Keihan+Sendai",
    lat: 38.2601,
    lng: 140.8824, // 仙台站
  },

  // --- Day 5: 2/7 (六) ---
  // Option A
  // --- Day 5: 2/7 (六) Option A 最佳化跑法 ---
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "08:30",
    title: "仙台朝市 (起點)",
    note: "從飯店步行約 5-10 分鐘\n地圖：https://www.google.com/maps/search/?api=1&query=Sendai+Morning+Market",
    group: "A",
    details:
      "【仙台的廚房】\n早餐就在這裡解決！\n1. 朝市海鮮丼：體驗自己選料的樂趣。\n2. 齋藤惣菜店：必買「炸馬鈴薯餅 (ころっけ)」。\n3. 採買水果：2月是草莓季，可以在這買兩盒帶回飯店吃。",
    lat: 38.2588,
    lng: 140.8804,
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "10:00",
    title: "搭乘 Loople 仙台 或 計程車",
    note: "前往瑞鳳殿",
    group: "A",
    image: "/images/loople.jpg",
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "10:30",
    title: "瑞鳳殿",
    note: "伊達政宗靈廟 / 需爬段階梯\n地圖：https://www.google.com/maps/search/?api=1&query=Zuihoden",
    group: "A",
    details:
      "桃山文化的華麗建築。冬天的雪景配上紅、金色的建築非常壯觀。入內需購買門票，若有 Loople 巴士一日券可享折扣。",
    lat: 38.2524,
    lng: 140.8655,
    image: "/images/sendai.jpg",
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "12:00",
    title: "市區午餐",
    note: "位於車站附近或廣瀨通\n地圖：http://googleusercontent.com/maps.google.com/仔虎",
    group: "A",
    details: "如果晚餐是牛舌，中午推薦吃山形米澤牛燒肉「仔虎」。",
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "13:30",
    title: "青葉城跡 (仙台城跡)",
    note: "俯瞰仙台全景、與政宗公合照\n地圖：https://www.google.com/maps/search/?api=1&query=Aoba+Castle+Ruins",
    group: "A",
    details:
      "搭巴士直達山頂。這裡雖然沒有天守閣，但伊達政宗的騎馬像與俯瞰仙台市的視野是絕對必看的風景。",
    lat: 38.2526,
    lng: 140.8561,
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "15:30",
    title: "定禪寺通散步 & 勾當台公園",
    note: "森林之都縮影\n地圖：https://www.google.com/maps/search/?api=1&query=Jozenji+dori",
    group: "A",
    details:
      "從青葉城搭車回來，在「定禪寺通市役所前」下車。走在櫸木大道中間的步道，兩旁有許多雕塑，非常適合在這邊找間咖啡廳（如：Blue Leaf Cafe）休息，準備晚上與 B 組會合。",
    lat: 38.2657,
    lng: 140.8669,
  },

  // Option B
  // --- Day 5: 2/7 (六) Option B ---
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "08:00",
    title: "DATE CAFE O'RDER",
    note: "車站內早餐 (07:15-22:00)\n地圖：https://www.google.com/maps/search/?api=1&query=DATE+CAFE+ORDER+Sendai",
    group: "B",
    lat: 38.2601,
    lng: 140.8824,
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "09:00",
    title: "前往松島",
    note: "搭乘 JR 仙石線快速 (約25分)\n請於「松島海岸站」下車",
    group: "B",
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "09:30",
    title: "松島散策：五大堂 & 福浦橋",
    note: "日本三景、結緣紅橋\n地圖：https://www.google.com/maps/search/?api=1&query=Matsushima+Godaido",
    group: "B",
    details:
      "【五大堂】松島的地標。進去前會經過木製紅橋，腳下可見海面，很有趣。\n【福浦橋】需付費(200円)的長紅橋，走到底可以到福浦島，是拍照絕佳地點。",
    lat: 38.3697,
    lng: 141.0617,
    image: "/images/Matsushima.jpg",
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "10:30",
    title: "寺院參觀：円通院",
    note: "枯山水庭園、數珠DIY體驗\n地圖：https://www.google.com/maps/search/?api=1&query=Entsuin+Matsushima\n",
    group: "B",
    details: "円通院的氣氛非常靜謐，即使冬天也能感受其禪意。",
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "11:00",
    title: "午餐：松島美食三選一",
    note: "海鮮丼 / 牡蠣料理 / 魚市場巡禮\n營業時間與位置請見詳情",
    group: "B",
    details:
      "【松島必吃美食名單】\n\n1. 漁師的海鮮丼 (漁師の海鮮丼)\n📍 地圖：https://maps.google.com/?cid=3495304063340860191&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ\n✨ 特色：最浮誇的海鮮丼名店，料多到看不見飯。位子極少，建議 11:00 一開店就衝這家。\n\n2. かきと海鮮料理 旬海 (Shunkai)\n📍 地圖：https://maps.google.com/?cid=4399604388868478897&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ\n✨ 特色：不僅有生食，更有專業的炸牡蠣與烤牡蠣定食。用餐環境相對舒適、寬敞。\n\n3. 松島魚市場 (松島さかな市場)\n📍 地圖：https://maps.google.com/?cid=668050928688449145&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ\n✨ 特色：一樓有新鮮魚貨、現烤牡蠣與乾貨伴手禮；二樓有快速供餐區（鮪魚丼、牡蠣漢堡）。即使不在這吃正餐，也非常推薦來逛逛掃貨！",
    lat: 38.371,
    lng: 141.062,
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "13:00",
    title: "🛳️ 松島遊船 (可選) 或 伴手禮購物",
    note: "天氣好再搭船，或逛松島大街",
    group: "B",
    details: "松島大街有很多現烤仙貝、魚板，可以邊逛邊吃。",
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "14:30",
    title: "鹽竈神社參拜 (可選) ",
    note: "陸奧國一宮、安產與交通守護\n地圖：https://maps.google.com/?cid=3541436828985905067&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    group: "B",
    details:
      "【鹽竈神社 (Shiogama Jinja)】\n擁有超過1200年歷史，是東北地位最高的神社之一。\n\n✨ 亮點：\n1. 表參道石階：挑戰著名的 202 級階梯（男坂），爬完可展現誠意。\n2. 建築美學：指定為國家重要文化財，呈現豪華的桃山建築風格。\n3. 海景：神社位於山頂，可以俯瞰鹽釜港的船隻進出。",
    lat: 38.3191,
    lng: 141.0205,
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "15:30",
    title: "🍶 鹽竈名酒造巡禮：浦霞 & 阿部勘 (可選) ",
    note: "地酒試飲、限定品購入\n地圖：https://maps.google.com/?cid=15357578696656197639&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    group: "B",
    details:
      "【鹽竈地酒體驗】\n這兩間酒造都在神社山腳下，走路即可抵達：\n\n1. **浦霞醸造元 (佐浦酒造)**：\n   - 代表名酒：浦霞 (Urakasumi)\n   - 體驗：本店提供付費試飲（Kikizake），約 300–500 日圓可品嚐當季限定酒，通常會附贈一個紀念酒杯。\n\n2. **阿部勘酒造 (Abekan)**：\n   - 代表名酒：阿部勘\n   - 特色：主打「為配海鮮而生」的酒，口感純淨乾爽，是搭配剛才午餐海鮮丼的最佳夥伴。",
    lat: 38.3146,
    lng: 141.0242,
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "16:30",
    title: "返回仙台市區",
    note: "準備與 A 組會合晚餐",
    group: "B",
  },
  // Shared
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "18:30",
    title: "晚餐：牛たん料理 閣 (電力ビル店)",
    note: "✅ 已預約 18:30\n必點：たんタタキ、牛舌刺身、トマトサラダ\n地圖：https://maps.app.goo.gl/65BsZEzYPerZHbUPA",
    details:
      "【牛たん料理 閣 (Kaku) - 內行點餐攻略】\n這家店被譽為仙台牛舌界的天花板，以下是你的專屬必點清單：\n\n🥩 推薦必點：\n1. たんタタキ (炙燒牛舌塔塔基) - ¥3,200：閣的招牌作！牛舌外層微炙後切片，搭配大量蔥花與特製醬汁，口感爽脆鮮甜。\n2. 牛舌刺身 - ¥3,200：極致新鮮的牛舌刺身，油脂分布均勻，入口即化，是少數名店才有的極品。\n3. トマトサラダ (番茄沙拉) - ¥900：別看它只是番茄，這是用特製醬汁醃漬的去皮番茄，酸甜度完美比例，是搭配厚切牛舌最強的解膩神器。\n\n📍 地點：電力ビル (Electric Building) B1F\n⚠️ 提醒：預約 18:30 請準時抵達。店內座位較擠但氣氛很好，盡情享受吧！",
    lat: 38.2618,
    lng: 140.8732,
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "",
    title: "宵夜選項：仙台在地關東煮",
    note: "1. おでん 三吉 (老店) / 2. 呼炉凪來 (吃到飽)\n地圖與詳情請見內容",
    group: "B",
    details:
      "【宵夜口袋名單：溫暖你的仙台之夜】\n\n🍢 おでん 三吉 (Oden Miyoshi)\n📍 地圖：https://maps.app.goo.gl/uaMVKP95hr3g8YCM9\n仙台最具代表性的關東煮老店，創業於昭和 24 年。其湯頭是使用「陸奧灣干貝」與「利尻昆布」熬煮，味道清甜優雅，是體驗仙台傳統氛圍的首選。\n✨ 必點：吸飽湯汁的大根、魚干丸子、豆腐揚。\n⏰ 營業時間：18:00–22:20 (週日、週一可能公休，建議再次確認)\n\n🍻 炉端とおでん 呼炉凪來 (Coronagi)\n📍 地圖：https://maps.app.goo.gl/eLqnni6aA3Sz1yaL8\n這是在日本社群媒體爆紅的居酒屋！主打「關東煮吃到飽」。入座後支付約 500 日圓的「お通し」費，吧檯上的關東煮即可無限次取用，CP 值極高。\n✨ 必點：關東煮吃到飽、爐端燒烤魚、飲酒放題。\n⏰ 營業時間：16:00–00:00 (適合晚歸的宵夜時段)",
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "",
    title: "🏨 住宿：Hotel 京阪 仙台",
    note: "📍 地址：宮城県仙台市青葉区中央3丁目3-5\n📞 電話：022-263-0321\n🗺️ 導航：https://www.google.com/maps/search/?api=1&query=Hotel+Keihan+Sendai",
    lat: 38.2601,
    lng: 140.8824,
  },

  // --- Day 6: 2/8 (日) ---
  {
    date: `${TRIP_YEAR}-02-08`,
    time: "08:00",
    title: "🥐 早餐（彈性選擇）",
    note: "仙台朝市 / 麥當勞 / 青山文庫 / Eggs 'n Things",
    details:
      "最後一天早餐建議：\n1. 仙台朝市 (走路5-8分)：體驗海鮮丼、定食、現炸物與熱湯。\n2. 麥當勞：簡單快速，位於車站周邊。\n3. Cafe 青山文庫 (07:30–23:00)：極具氛圍的書本主題咖啡廳，提供美味的厚吐司與咖啡。\n4. Eggs 'n Things (09:00–20:00)：來自夏威夷的人氣鬆餅，奶油堆得像山一樣高，是甜點控首選。",
    lat: 38.2588,
    lng: 140.8804,
  },
  {
    date: `${TRIP_YEAR}-02-08`,
    time: "09:30",
    title: "🛍️ 最後購物與伴手禮掃貨",
    note: "必買：毛豆麻糬 (ずんだ餅)、豆沙屋鯛魚燒\n地點：S-PAL 2F 綜合伴手禮、Anko(豆沙)屋、鯛吉",
    details:
      "【最後衝刺：購物重點清單】\n\n" +
      "1. 🎁 S-PAL 2F 綜合伴手禮區\n" +
      "集合了所有仙台名產，推薦購買「ずんだ餅(毛豆餅)」和「萩之月」。此區可跨店累積退稅，記得帶護照。\n\n" +
      "2. 🐟 Anko(豆沙)屋 站前店\n" +
      "這家鯛魚燒皮薄餡多，紅豆泥非常綿密，強烈建議買了現吃！\n" +
      "📍 地圖：https://www.google.com/maps/search/?api=1&query=Yonezawa+Beef+Tokiwa+Yamagata\n\n" +
      "3. 🥐 鯛吉 仙台驛前店\n" +
      "除了經典紅豆，還有黑芝麻或季節限定口味，適合帶上飛機當點心。\n" +
      "📍 地圖：https://www.google.com/maps/search/?api=1&query=Yonezawa+Beef+Tokiwa+Yamagata\n\n" +
      "4. 💄 Loft 仙台店\n" +
      "文具、生活雜貨、美妝最後補貨首選，就在車站旁邊。\n\n" +
      "💡 提醒：S-PAL 退稅櫃台通常在 2 樓或 3 樓，請認明 Tax-Free 標誌。",
    lat: 38.2603,
    lng: 140.8821,
  },
  {
    date: `${TRIP_YEAR}-02-08`,
    time: "11:45",
    title: "🍽️ 午餐：米澤牛燒肉 仔虎 (仙台站前店)",
    note: "預約/抵達時間 11:45\n必吃：米澤牛午間套餐\n地圖：https://www.google.com/maps/search/?api=1&query=Yonezawa+Beef+Tokiwa+Yamagata\n或2",
    details:
      "【燒肉仔虎 (Toratora) - 米澤牛專門店】\n既然來到東北，絕對不能錯過三大和牛之一的「米澤牛」。仙台站前店位於 Herb 仙台大樓 8 樓，窗外視野極佳。\n\n🥩 推薦點餐：\n1. 上質米澤牛午間套餐：約 ¥3,000 - ¥5,000 就能吃到極高等級的和牛燒肉，附沙拉、小菜、米飯及湯。\n2. 仔虎招牌冷麵：吃完燒肉後非常解膩的必點單品。\n\n📍 地點：宮城県仙台市青葉区中央1-6-1 Herb SENDAI 8F\n🔗 攻略參考：https://kaikk.tw/toranomon/\n⚠️ 提醒：11:45 請準時抵達。若有預約請出示預約畫面。",
    lat: 38.2616,
    lng: 140.8797,
  },
  {
    date: `${TRIP_YEAR}-02-08`,
    time: "12:45",
    title: "A組：前往機場",
    note: "回飯店拿行李，13:10空港快線",
  },
  {
    date: `${TRIP_YEAR}-02-08`,
    time: "14:50",
    title: "B組：前往機場 (17:25 航班)",
    note: "回飯店拿行李，搭乘空港快線前往機場",
    details:
      "預計搭乘 15:00 左右的空港快線，約 15:15 抵達機場辦理登機。\n交通攻略：https://nicklee.tw/2343/to-sendai-airport/\n交通攻略：https://pp761211.pixnet.net/blog/posts/14223058077",
  },
  {
    date: `${TRIP_YEAR}-02-08`,
    time: "16:15",
    title: "🛫 A 組起飛返台",
    note: "預計抵達台灣：19:15",
    image: "/images/back2tpe.jpg",
  },
  {
    date: `${TRIP_YEAR}-02-08`,
    time: "17:25",
    title: "🛫 B 組起飛返台",
    note: "預計抵達台灣：20:25",
    image: "/images/back2tpe.jpg",
  },
];

export const defaultTodoList = [
  { text: "機場接送", completed: false },
  { text: "旅遊不便險", completed: false },
  { text: "VJW (Visit Japan Web)", completed: false },
  { text: "網路 (eSIM / 漫遊)", completed: false },
  { text: "日幣 / 信用卡", completed: false },
  { text: "防水鞋 / 雪地鞋 / 雪抓", completed: false },
  { text: "手套、圍巾、帽子", completed: false },
  { text: "常備藥 (感冒/腸胃/止痛)", completed: false },
];

// src/data/initialData.js

export const couponData = [
  {
    id: 1,
    title: "AEON Style",
    desc: "95折",
    link: "https://www.welcome-aeon.com/coupon/web_coupon.php?cv=1&id=82&cid=cp1731645219&lang=zh-CHT",
    category: "百貨/超市",
  },
  {
    id: 2,
    title: "大國藥妝 (Daikoku Drug)",
    desc: "最高免稅10% + 7% 折扣 (需滿額)",
    link: "https://d1grca2t3zpuug.cloudfront.net/2023/08/daikokucoupon-1751874722.webp",
    category: "藥妝",
  },
  {
    id: 3,
    title: "松本清 (Matsumotokiyoshi)",
    desc: "免稅10% + 最高7% 折扣",
    link: "https://d1grca2t3zpuug.cloudfront.net/2025/01/20250131matsucoupontw-1631x2475.webp",
    category: "藥妝",
  },
  {
    id: 4,
    title: "SUNDRUG (尚都樂客)",
    desc: "免稅10% + 最高7% 折扣",
    link: "https://www.taxfreeshops.jp/zhtw/tieup/4?gad_source=1&gad_campaignid=20951175797&gbraid=0AAAAADydLMqsmOjgOyleCKIP6GINC6AB0&gclid=EAIaIQobChMIuYTf2rCckgMVeJmmAx10mgnkEAAYASAAEgLI-vD_BwE",
    category: "藥妝",
  },
  {
    id: 5,
    title: "Bic Camera 優惠券",
    desc: "電器免稅10% + 7% 折扣 / 藥妝 5% / 酒類 3%",
    link: "https://www.taxfreeshops.jp/zhtw/tieup/2",
    category: "電器/百貨",
  },
  {
    id: 6,
    title: "EDION 優惠券",
    desc: "電器免稅10% + 7% 折扣 / 藥妝 5% / 酒類 3%",
    link: "https://www.taxfreeshops.jp/zhtw/tieup/6",
    category: "電器/百貨",
  },
  {
    id: 7,
    title: "唐吉訶德 (Don Quijote)",
    desc: "滿10,000日圓以上免稅10% + 5% 折扣",
    link: "https://www.taxfreeshops.jp/zhtw/tieup/1",
    category: "百貨/雜貨",
  },
  {
    id: 8,
    title: "三井 Outlet 仙台港",
    desc: "出示護照領取特別優惠券 (折扣率依各店而異)",
    link: "https://mitsui-shopping-park.com/mop/sendai/tw/",
    category: "購物中心",
  },
  {
    id: 9,
    title: "Golf 5 / Alpen",
    desc: "5% off",
    link: "https://www.taxfreeshops.jp/zhtw/tieup/11",
    category: "運動用品",
  },
  {
    id: 9,
    title: "Victoria Golf",
    desc: "5% off",
    link: "https://www.taxfreeshops.jp/zhtw/tieup/14",
    category: "運動用品",
  },
];
