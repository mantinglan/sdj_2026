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
    title: "AEON Mall 名取店 (第一組)",
    note: "第一組先行開逛 / 超市補給\n地圖：https://maps.app.goo.gl/3q8YwXvP8Xp8Xp8Xp",
    details:
      "AEON Mall 名取店是仙台機場附近最大的購物中心，擁有非常大型的超市與各式品牌。第一組可以在此購買往後幾天需要的零食、飲料或保暖衣物。",
    lat: 38.1636,
    lng: 140.893,
  },
  {
    date: `${TRIP_YEAR}-02-03`,
    time: "16:00",
    title: "第二組抵達仙台機場",
    note: "第一組返回機場接人，全員會合",
  },
  {
    date: `${TRIP_YEAR}-02-03`,
    time: "16:20",
    title: "前往山形市區",
    note: "車程約 1 小時",
  },
  {
    date: `${TRIP_YEAR}-02-03`,
    time: "",
    title: "飯店 Check-in & 超市補給",
    note: "住宿：山形站前大和 ROYNET\n可以先去 S-PAL 超市買消夜/零食 (19:30關門)\n飯店導航：https://www.google.com/maps/search/?api=1&query=Daiwa+Roynet+Hotel+Yamagata+Station",
    lat: 38.2486,
    lng: 140.3273,
  },
  {
    date: `${TRIP_YEAR}-02-03`,
    time: "",
    title: "晚餐：平田牧場 (炸豬排)",
    note: "位於山形車站大樓內，金華豬非常有名！\n地圖：https://www.google.com/maps/search/?api=1&query=Hirata+Bokujo+Yamagata+Station\n食記參考：\nhttps://goflyting.com/hiratabokujo/\nhttps://jatravel.tw/hiraboku/",
    details:
      "平田牧場以「金華豬」聞名，這種豬肉肉質細膩、脂肪鮮甜，被譽為日本頂級豬肉之一。推薦點厚切炸豬排定食，搭配特製的芝麻醬汁。",
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
  },
  {
    date: `${TRIP_YEAR}-02-04`,
    time: "11:30",
    title: "返回山形市區",
    note: "回飯店接人",
  },
  {
    date: `${TRIP_YEAR}-02-04`,
    time: "12:00",
    title: "午餐：米澤牛",
    note: "登起波：https://www.google.com/maps/search/?api=1&query=Yonezawa+Beef+Tokiwa+Yamagata\n或 燒肉名匠山牛：https://www.google.com/maps/search/?api=1&query=Yakiniku+Meisho+Yamagyu+Yamagata",
    details:
      "米澤牛是日本三大和牛之一（與神戶牛、松阪牛齊名），特點是脂肪熔點低，入口即化。午餐時段通常有比較划算的套餐。",
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
    note: "必爬 1015 階梯看展望台！\n入山費用： 500元\n攻略 1：https://travistotravel.com/2025/01/09/%E5%B1%B1%E5%BD%A2%E8%87%AA%E7%94%B1%E8%A1%8C%E5%B1%B1%E5%AF%BA%E7%AB%8B%E7%9F%B3%E5%AF%BA/\n攻略 2：https://tohoku.letsgojp.com/archives/21103/\n攻略 3：https://listentolu.com/2025/03/yamadera/",
    details:
      "【寶珠山 立石寺】\n由慈覺大師於西元 860 年開山，是東北代表性的靈場。詩人松尾芭蕉曾在此留下名句：「閑さや 岩にしみ入る 蝉の声」（寂靜啊，蟬聲滲入岩石中）。\n\n⚠️ 冬季登山警告：\n1. 絕對防滑：這 1015 階石梯在冬天會結成「冰溜滑梯」，非常滑！強烈建議在山下商店購買或自備「簡易冰爪 (雪抓)」，套在鞋子上再上山。\n2. 下山更危險：上山容易下山難，重心要放低，手抓扶手。\n3. 景色：雖然辛苦，但爬到「五大堂」看出去的雪景，彷彿水墨畫般美麗，非常值得！",
    lat: 38.3126,
    lng: 140.4357, // 山寺
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
  },

  // --- Day 3: 2/5 (四) ---
  {
    date: `${TRIP_YEAR}-02-05`,
    time: "09:15",
    title: "銀山溫泉退房出發",
    note: "",
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
    title: "最上川游船",
    note: "船內午餐，10:50船班\n乘船處：https://www.google.com/maps/search/?api=1&query=Mogami+River+Basho+Line+Descent",
    details:
      "搭乘暖氣船順流而下，一邊欣賞兩岸壯麗的雪景，一邊享用船上便當。船夫還會吟唱當地的船歌，非常有氣氛。這也是當年《阿信》拍攝的場景之一。",
    lat: 38.7423,
    lng: 140.1661, // 最上川
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
    note: "停留30分\n地圖：https://www.google.com/maps/search/?api=1&query=Ala+Datena+Michi+no+Eki",
    details:
      "這是一個非常受歡迎的休息站，每年都有數百萬人次造訪。裡面販賣非常多東北限定的伴手禮，還有知名的 ROYCE' 巧克力（因為姊妹市的關係）。",
    lat: 38.7302,
    lng: 140.7516,
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
    note: "採草莓停留60分\n地圖：https://www.google.com/maps/search/?api=1&query=Ichi-Ichigo-Ichie+Matsumori+Farm",
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
    note: "百名店拉麵\n地圖：https://www.google.com/maps/search/?api=1&query=Noodle+shop+Arakawa+Sendai",
    details:
      "這是一間多次入選日本百名店的拉麵店，以鴨湯鴨肉拉麵聞名。湯頭清爽鮮甜，鴨肉軟嫩。",
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
    note: "財運神社、雪中參拜\n地圖：https://www.google.com/maps/search/?api=1&query=Kanahebisui+Shrine",
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
    title: "晚餐：仙台市區",
    note: "牛舌閣：https://www.google.com/maps/search/?api=1&query=Gyutan+Kaku+Sendai\n司：https://www.google.com/maps/search/?api=1&query=Gyutan+Tsukasa+Sendai\n仔虎：https://www.google.com/maps/search/?api=1&query=Yakiniku+Toranoko+Sendai",
  },
  {
    date: `${TRIP_YEAR}-02-06`,
    time: "21:00",
    title: "🏨 住宿：Hotel 京阪 仙台",
    note: "📍 地址：宮城県仙台市青葉区中央3丁目3-5\n📞 電話：022-263-0321\n🗺️ 導航：https://www.google.com/maps/search/?api=1&query=Hotel+Keihan+Sendai",
    lat: 38.2601,
    lng: 140.8824, // 仙台站
  },

  // --- Day 5: 2/7 (六) ---
  // Option A
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "08:00",
    title: "仙台朝市",
    note: "海鮮丼、牛舌飯糰、炸魚餅\n地圖：https://www.google.com/maps/search/?api=1&query=Sendai+Morning+Market",
    group: "A",
    details:
      "被稱為「仙台的廚房」，距離車站很近。這裡可以買到新鮮便宜的水果（草莓、蘋果），還有人氣排隊美食「炸魚餅」和新鮮的「朝市海鮮丼」。",
    lat: 38.2588,
    lng: 140.8804,
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "10:00",
    title: "瑞鳳殿",
    note: "伊達政宗靈廟、雪景清幽\n地圖：https://www.google.com/maps/search/?api=1&query=Zuihoden",
    group: "A",
    lat: 38.2524,
    lng: 140.8655,
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "11:30",
    title: "市區午餐",
    note: "",
    group: "A",
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "13:15",
    title: "青葉城跡",
    note: "伊達政宗騎馬像、市區展望\n地圖：https://www.google.com/maps/search/?api=1&query=Aoba+Castle+Ruins",
    group: "A",
    details:
      "這裡是過去仙台城的遺址，雖然城堡已經不在，但伊達政宗帥氣的騎馬銅像依然守護著這座城市。這裡也是俯瞰仙台市區夜景的絕佳地點。",
    lat: 38.2526,
    lng: 140.8561,
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "15:00",
    title: "定禪寺通散步",
    note: "櫸木大道、咖啡休息\n地圖：https://www.google.com/maps/search/?api=1&query=Jozenji+dori",
    group: "A",
    details:
      "仙台被稱為「杜之都（森林之都）」，定禪寺通就是最好的代表。道路兩旁種滿了巨大的櫸木，景色非常優美。這裡有很多特色咖啡廳，很適合散步休息。",
    lat: 38.2657,
    lng: 140.8669,
  },

  // Option B
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
    note: "從仙台車站搭乘JR仙石線快速列車（車程約25分鐘）",
    group: "B",
    details:
      "JR 仙石線是連結仙台與石卷的鐵路，沿著海岸線行駛。請搭乘「快速」或「普通」列車至「松島海岸站」下車（非松島站）。沿途景色會從市區轉變為海景，非常漂亮。",
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "09:30",
    title: "松島灣＋五大堂",
    note: "海景拍照、輕鬆走\n地圖：https://www.google.com/maps/search/?api=1&query=Matsushima+Godaido",
    group: "B",
    details:
      "松島是「日本三景」之一。五大堂是松島的象徵，連結小島的紅橋被稱為「結緣橋」。",
    lat: 38.3697,
    lng: 141.0617, // 松島
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "10:10",
    title: "寺院參觀 (擇一)",
    note: "【円通院】庭園靜謐：https://www.google.com/maps/search/?api=1&query=Entsuin+Matsushima\n或 【瑞巌寺】東北名剎：https://www.google.com/maps/search/?api=1&query=Zuiganji+Temple",
    group: "B",
    details:
      "円通院以結緣和美麗的枯山水庭園聞名，秋天是賞楓名所。瑞巌寺則是伊達家的菩提寺，國寶級的建築非常壯觀。",
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "11:30",
    title: "午餐：牡蠣料理",
    note: "準時吃才不用排隊",
    group: "B",
    details:
      "松島的牡蠣非常有名！可以選擇去「牡蠣小屋」吃現烤吃到飽，或是去餐廳吃炸牡蠣定食、牡蠣丼。",
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "13:00",
    title: "松島遊船 (可選)",
    note: "天氣好再搭，風大可跳過",
    group: "B",
    details:
      "搭船出海可以近距離欣賞松島灣內大大小小的奇岩怪石。記得要坐在窗邊或去甲板餵海鷗（如果有開放）。",
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "14:00",
    title: "松島咖啡／伴手禮",
    note: "散步逛街",
    group: "B",
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "15:00",
    title: "返回仙台市區",
    note: "搭乘 JR",
    group: "B",
  },

  // Shared
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "18:30",
    title: "🍽️ 晚餐：牛たん料理 閣 (電力ビル店)",
    note: "✅ 已預約 18:30\n必點：たんタタキ、牛舌刺身、トマトサラダ",
    details:
      "【牛たん料理 閣 (Kaku) - 內行點餐攻略】\n這家店被譽為仙台牛舌界的天花板，以下是你的專屬必點清單：\n\n🥩 推薦必點：\n1. たんタタキ (炙燒牛舌塔塔基) - ¥3,200：閣的招牌作！牛舌外層微炙後切片，搭配大量蔥花與特製醬汁，口感爽脆鮮甜。\n2. 牛舌刺身 - ¥3,200：極致新鮮的牛舌刺身，油脂分布均勻，入口即化，是少數名店才有的極品。\n3. トマトサラダ (番茄沙拉) - ¥900：別看它只是番茄，這是用特製醬汁醃漬的去皮番茄，酸甜度完美比例，是搭配厚切牛舌最強的解膩神器。\n\n📍 地點：電力ビル (Electric Building) B1F\n⚠️ 提醒：預約 18:30 請準時抵達。店內座位較擠但氣氛很好，盡情享受吧！",
    lat: 38.2618,
    lng: 140.8732,
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "17:00",
    title: "晚餐：牛舌/燒肉",
    note: "推薦：牛舌「閣」／炭火燒肉仔虎\n參考食記：https://mrsyuny.com/日本東北｜仙台｜仙台必吃！推薦美食！牛舌、小/",
    details:
      "仙台是牛舌的發源地，特色是切得厚厚的，口感Q彈脆口。每家店的調味（鹽味、味噌）都略有不同，附餐通常會有麥飯和牛尾湯。",
  },
  {
    date: `${TRIP_YEAR}-02-07`,
    time: "20:00",
    title: "🏨 住宿：Hotel 京阪 仙台",
    note: "📍 地址：宮城県仙台市青葉区中央3丁目3-5\n📞 電話：022-263-0321\n🗺️ 導航：https://www.google.com/maps/search/?api=1&query=Hotel+Keihan+Sendai",
    lat: 38.2601,
    lng: 140.8824,
  },

  // --- Day 6: 2/8 (日) ---
  {
    date: `${TRIP_YEAR}-02-08`,
    time: "08:30",
    title: "🛍️ 仙台車站最後衝刺 (二樓伴手禮區)",
    note: "必買：毛豆麻糬 (ずんだ餅)\n地點：S-PAL 仙台 2F 伴手禮處\n地圖 1：https://maps.app.goo.gl/rY7CXdzGmbYL2Km18?g_st=ipc\n地圖 2：https://maps.app.goo.gl/sTHdamaPHaTJLrrz8?g_st=ipc",
    details:
      "【仙台車站 2F 購物攻略】\n這裡集合了多家綜合伴手禮店，是離開前掃貨的最佳地點。\n\n🍡 必買推薦：\n1. 毛豆麻糬 (ずんだ餅)：仙台最具代表性的甜點，鮮綠色的毛豆泥配上 Q 彈麻糬，味道鹹甜適中。除了現吃的，也有冷凍包裝可以帶回飯店或機場享用。\n2. 萩之月、喜久福大福：都在這區可以一站式買齊。\n\n⚠️ 退稅重要提醒：\n在仙台車站 2F（S-PAL 仙台）的多家綜合伴手禮店購買，通常可以「跨店累積退稅」。請在結帳時確認是否有 Tax-Free 標示，並統一前往 2F 或 3F 的退稅櫃台辦理（需出示護照）。",
    lat: 38.2603,
    lng: 140.8821,
  },
  {
    date: `${TRIP_YEAR}-02-08`,
    time: "11:30",
    title: "午餐：牛舌「閣」",
    note: "套餐推薦\n地圖：https://www.google.com/maps/search/?api=1&query=Gyutan+Kaku+Sendai",
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
    title: "B組：前往機場",
    note: "17:25起飛",
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
    title: "AEON Mall 專屬優惠券",
    desc: "免稅10% + 500日圓現金折扣券 (或是領取精美小禮物)",
    link: "https://www.aeon-natori.jp/static/detail/translation-service",
    category: "百貨/超市",
  },
  {
    id: 2,
    title: "大國藥妝 (Daikoku Drug)",
    desc: "最高免稅10% + 7% 折扣 (需滿額)",
    link: "https://www.daikokudrug.com/customer/coupon/",
    category: "藥妝",
  },
  {
    id: 3,
    title: "松本清 (Matsumotokiyoshi)",
    desc: "免稅10% + 最高7% 折扣",
    link: "https://www.matsukiyococokara-online.com/game?redirect=https%3A%2F%2Fwww.matsukiyococokara-online.com%2F",
    category: "藥妝",
  },
  {
    id: 4,
    title: "SUNDRUG (尚都樂客)",
    desc: "免稅10% + 最高7% 折扣",
    link: "https://cs.sundrug.co.jp/cs/column/Coupon_EN/",
    category: "藥妝",
  },
  {
    id: 5,
    title: "Bic Camera 優惠券",
    desc: "電器免稅10% + 7% 折扣 / 藥妝 5% / 酒類 3%",
    link: "https://www.biccamera.com.target.lp/coupon/",
    category: "電器/百貨",
  },
  {
    id: 6,
    title: "唐吉訶德 (Don Quijote)",
    desc: "滿10,000日圓以上免稅10% + 5% 折扣",
    link: "https://www.djapanpass.com/coupon/0004000103",
    category: "百貨/雜貨",
  },
  {
    id: 7,
    title: "三井 Outlet 仙台港",
    desc: "出示護照領取特別優惠券 (折扣率依各店而異)",
    link: "https://mitsui-shopping-park.com/mop/sendai/tw/",
    category: "購物中心",
  },
];
