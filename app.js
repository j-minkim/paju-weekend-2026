const tripDays = {
  1: [
    {
      id: "macmuseum",
      time: "11:00",
      end: "11:50",
      name: "애플맥뮤지엄",
      short: "예약 관람",
      travelAfter: "다음 이동 35분",
      type: "뮤지엄",
      duration: "50분",
      phase: "morning",
      coords: [37.7792865, 126.7483291],
      address: "경기 파주시 평화로348번길 203-11",
      hours: "토요일 10:00-17:00, 예약제",
      note: "오래된 매킨토시와 애플 제품의 변화를 따라보는 여행의 첫 장면입니다. 8월 15일 11시 예약을 먼저 확보하세요.",
      image: "assets/macmuseum.jpg",
      review:
        "국내 최대 규모의 애플 제품 전시를 표방하며, 날짜를 지정한 무료 예약 관람을 안내하고 있습니다.",
      reviewSource: "애플맥뮤지엄 공식 예약 페이지",
      reviewUrl: "https://macmuseum.cafe24.com/reservation/detail.html?product_no=67",
    },
    {
      id: "ainos",
      time: "12:25",
      end: "13:40",
      name: "아이노스 출판단지점",
      short: "점심 겸 브런치",
      travelAfter: "다음 이동 20분",
      type: "브런치",
      duration: "1시간 15분",
      phase: "afternoon",
      coords: [37.7071641, 126.68637],
      address: "경기 파주시 문발로 142 1층",
      hours: "토요일 09:00-17:00, 일요일 휴무",
      note: "광복절 교통을 고려해 도착 완충시간을 두었습니다. 지하 주차장을 이용하면 점심 동선이 짧습니다.",
      image: "assets/ainos.jpg",
      review:
        "빠네 파스타와 파니니 후기가 많고, 지하 주차장이 있어 출판단지 점심 동선에 편하다는 평입니다.",
      reviewSource: "다이닝코드 방문 후기",
      reviewUrl: "https://www.diningcode.com/profile.php?rid=rjIo51wSpkzf",
    },
    {
      id: "sajeokin",
      time: "14:00",
      end: "15:00",
      name: "사적인서점",
      short: "서가와 큐레이션",
      travelAfter: "다음 이동 10분",
      type: "독립서점",
      duration: "1시간",
      phase: "afternoon",
      coords: [37.7138234, 126.6913284],
      address: "경기 파주시 돌곶이길 180-38 지층",
      hours: "하절기 12:00-19:00, 수요일과 목요일 휴무",
      note: "책을 많이 고르기보다 서점이 어떤 기준으로 책을 선택하고 배치했는지 천천히 살펴봅니다. 책처방 프로그램은 별도 예약 조건을 확인하세요.",
      image: "assets/sajeokin-bookshop.jpg",
      review:
        "한 사람을 위한 사적인서점이라는 방향 아래 큐레이션한 책을 소개하며, 구매한 책을 머물러 읽을 수 있는 공간도 안내합니다.",
      reviewSource: "사적인서점 공식 안내",
      reviewUrl: "https://sajeokin-bookshop.com/shopinfo/company.html",
    },
    {
      id: "cheoncheonhi",
      time: "15:10",
      end: "16:20",
      name: "천천히카페",
      short: "커피와 긴 휴식",
      travelAfter: "다음 이동 25분",
      type: "카페",
      duration: "1시간 10분",
      phase: "afternoon",
      coords: [37.71348, 126.6933121],
      address: "경기 파주시 돌곶이길 108-20",
      hours: "주말 11:00-20:00 안내",
      note: "사적인서점과 같은 돌곶이길 권역에서 쉬어갑니다. 첫날의 야외 일정 전에 체력을 회복하는 구간입니다.",
      image: "assets/cheoncheonhi.jpg",
      review:
        "햇살이 잘 들고 식물이 많은 공간이라 대화하며 쉬기 좋다는 후기가 있습니다.",
      reviewSource: "천천히카페 방문 후기",
      reviewUrl: "https://star77247.tistory.com/108",
    },
    {
      id: "dolmen",
      time: "16:45",
      end: "17:25",
      name: "교하고인돌 산림욕장",
      short: "숲길 일부 산책",
      travelAfter: "다음 이동 35분",
      type: "숲 산책",
      duration: "40분",
      phase: "afternoon",
      coords: [37.7291115, 126.7361413],
      address: "경기 파주시 당하동 일대",
      hours: "상시 개방형 야외 공간",
      note: "고인돌 주변과 그늘진 숲길만 35-40분 걷습니다. 폭염이 심하거나 비가 오면 과감히 생략합니다.",
      image: "assets/dolmen-forest.jpg",
      review:
        "교하 일대 구릉지에 100여 기가 넘는 고인돌이 모여 있는 산림 산책 공간으로 소개됩니다.",
      reviewSource: "국내 여행 정보 안내",
      reviewUrl:
        "https://koreatriptips.com/location.html?mapX=126.7361413314&mapY=37.7291115476&page=4",
    },
    {
      id: "chilbok",
      time: "18:00",
      end: "19:10",
      name: "칠복식당",
      short: "첫날 저녁",
      travelAfter: "숙소 이동 30분",
      type: "저녁",
      duration: "1시간 10분",
      phase: "evening",
      coords: [37.7368501, 126.7517592],
      address: "경기 파주시 가람로21번길 61-8 1층",
      hours: "11:00-21:00, 주문 마감 20:00, 화요일 휴무",
      note: "18시 예약을 권합니다. 따뜻한 솥밥으로 하루를 정리한 뒤 다른 장소를 추가하지 않고 숙소로 이동합니다.",
      image: "assets/chilbok.jpg",
      review:
        "전복과 솥밥 메뉴, 따뜻한 원목 인테리어가 좋은 평가를 받습니다. 식사 시간에는 대기가 생길 수 있습니다.",
      reviewSource: "다이닝코드 방문 후기",
      reviewUrl: "https://www.diningcode.com/profile.php?rid=LesRcN3srU91",
    },
    {
      id: "aank-day1",
      time: "19:40",
      end: "이후",
      name: "아늑료칸호텔 파주",
      short: "첫 체크인과 스파",
      type: "숙소",
      duration: "첫째 밤",
      phase: "night",
      coords: [37.7607302, 126.7760338],
      address: "경기 파주시 금정14길 41-13",
      hours: "예약 상품의 18시 체크인 조건 우선 확인",
      note: "첫날 일정은 여기서 끝냅니다. 객실, 다도와 스파를 충분히 이용하며 2박 3일 여행의 첫 밤을 쉽니다.",
      image: "assets/aank-hotel.jpg",
      review:
        "히노끼탕과 다도 체험이 색다르다는 평이 많습니다. 객실 크기와 주변 환경은 리뷰가 갈리니 예약 객실 정보를 확인하세요.",
      reviewSource: "NOL 및 프리비아 공개 후기",
      reviewUrl: "https://nol.yanolja.com/stay/domestic/10057282",
    },
  ],
  2: [
    {
      id: "mimesis",
      time: "10:00",
      end: "11:25",
      name: "미메시스 아트뮤지엄",
      short: "전시와 건축",
      travelAfter: "다음 이동 15분",
      type: "미술관",
      duration: "1시간 25분",
      phase: "morning",
      coords: [37.7166482, 126.6890986],
      address: "경기 파주시 문발로 253",
      hours: "매일 10:00-19:00 안내",
      note: "09시 30분에 숙소를 출발합니다. 내부의 곡선과 자연광, 외부 건축까지 함께 보기 위해 85분을 확보했습니다.",
      image: "assets/mimesis.jpg",
      review:
        "빛이 들어오는 방식과 건물 자체가 작품처럼 느껴진다는 방문 후기가 많습니다.",
      reviewSource: "미메시스 공식 및 방문자 후기",
      reviewUrl:
        "https://www.mimesisartmuseum.co.kr/%EC%9D%B4%EC%9A%A9-%EC%95%88%EB%82%B4-Visit",
    },
    {
      id: "wisdom",
      time: "11:40",
      end: "12:35",
      name: "지혜의숲",
      short: "서가와 공간 관람",
      travelAfter: "같은 권역에서 연결",
      type: "책과 건축",
      duration: "55분",
      phase: "morning",
      coords: [37.707688, 126.68679],
      address: "경기 파주시 회동길 145",
      hours: "지혜의숲 2관 10:00-20:00 안내",
      note: "책을 많이 읽기보다 높은 서가와 출판도시의 공간감을 천천히 봅니다. 관람 뒤 같은 건물 권역의 리파크로 이어갑니다.",
      image: "assets/wisdom-forest.jpg",
      review:
        "높은 서가가 만드는 스케일이 인상적이며, 출판사별로 다른 책의 결을 둘러보는 재미가 있다는 후기입니다.",
      reviewSource: "파주 지혜의숲 방문기",
      reviewUrl: "https://buyvie.co.kr/1",
    },
    {
      id: "leepark",
      time: "12:35",
      end: "13:20",
      name: "리파크",
      short: "커피와 짧은 휴식",
      travelAfter: "운정 이동 40분",
      type: "북카페",
      duration: "45분",
      phase: "afternoon",
      coords: [37.7083113, 126.686918],
      address: "경기 파주시 회동길 145 지지향 3관 1층",
      hours: "주말 09:00-22:00 안내",
      note: "미술관과 지혜의숲 관람 뒤 잠깐 앉아 쉬는 중간 구간입니다. 14시 늦은 점심을 위해 음료나 가벼운 간식만 권합니다.",
      image: "assets/leepark.jpg",
      review:
        "넓은 통창, 여유 있는 좌석 간격, 숲을 보는 조용한 분위기가 반복해서 언급됩니다.",
      reviewSource: "리파크 방문 후기",
      reviewUrl: "https://heeiin29.tistory.com/69?category=1163951",
    },
    {
      id: "barg",
      time: "14:00",
      end: "15:15",
      name: "바그 파주 본점",
      short: "늦은 점심",
      travelAfter: "다음 이동 25분",
      type: "수제버거",
      duration: "1시간 15분",
      phase: "afternoon",
      coords: [37.7246778, 126.7713971],
      address: "경기 파주시 운정로 39 102호",
      hours: "11:00-21:00, 화요일 휴무 안내",
      note: "출판단지에서 운정으로 넘어와 늦은 점심을 먹습니다. 주말 대기 방식과 예약 가능 여부를 방문 전에 확인하세요.",
      image: "assets/barg.jpg",
      review:
        "두툼한 한우 패티와 베이컨이 들어간 대표 버거, 통새우 패티 메뉴가 특히 많이 언급됩니다.",
      reviewSource: "다이닝코드 방문 후기",
      reviewUrl: "https://www.diningcode.com/profile.php?rid=kvo7BxgkkHgT",
    },
    {
      id: "quietlight",
      time: "15:40",
      end: "17:10",
      name: "콰이어트라이트",
      short: "LP와 커피",
      travelAfter: "숙소 이동 30분",
      type: "LP 카페",
      duration: "1시간 30분",
      phase: "afternoon",
      coords: [37.7366324, 126.7511943],
      address: "경기 파주시 가람로21번길 61-16 1층",
      hours: "11:00-22:00, 화요일 휴무 안내",
      note: "음료만 빠르게 마시는 곳이 아니라 음악과 공간을 충분히 즐기는 둘째 날의 긴 휴식입니다.",
      image: "assets/quietlight.jpg",
      review:
        "직접 고른 LP 음악, 다양한 원두와 차분한 분위기가 인상적이라는 평가입니다. 주말에는 좌석 대기가 있을 수 있습니다.",
      reviewSource: "다이닝코드 방문 후기",
      reviewUrl: "https://www.diningcode.com/profile.php?rid=yVpCeGUN49xb",
    },
    {
      id: "aank-day2",
      time: "17:40",
      end: "이후",
      name: "아늑료칸호텔 파주",
      short: "숙소 휴식과 자유 저녁",
      type: "숙소",
      duration: "둘째 밤",
      phase: "evening",
      coords: [37.7607302, 126.7760338],
      address: "경기 파주시 금정14길 41-13",
      hours: "2박 예약 조건과 연박 정비 시간 확인",
      note: "17시대에 숙소로 돌아옵니다. 저녁은 금촌에서 가볍게 먹거나 객실에서 간단히 해결하며 자유롭게 쉽니다.",
      image: "assets/aank-hotel.jpg",
      review:
        "히노끼탕과 다도 체험이 색다르다는 평이 많습니다. 연박 중 객실 정비 방식은 프런트에 확인하는 편이 좋습니다.",
      reviewSource: "NOL 및 프리비아 공개 후기",
      reviewUrl: "https://nol.yanolja.com/stay/domestic/10057282",
    },
  ],
  3: [
    {
      id: "dotori-garden",
      time: "13:00",
      end: "14:00",
      name: "도토리정원 파주헤이리점",
      short: "마지막 날 점심",
      travelAfter: "다음 이동 15분",
      type: "한식",
      duration: "1시간",
      phase: "afternoon",
      coords: [37.7896464, 126.6876908],
      address: "경기 파주시 탄현면 새오리로 50",
      hours: "매일 10:00-20:00 안내, 공휴일 대기 고려",
      note: "12시부터 짐을 정리해 12시 30분에 체크아웃하고 헤이리로 이동합니다. 도토리 요리로 마지막 날을 든든하게 시작합니다.",
      image: "assets/dotori-garden.jpg",
      review:
        "도토리들깨수제비와 해물전 등 도토리 요리를 함께 먹기 좋고, 넓은 좌석과 주차 공간 덕분에 가족 식사에 편하다는 후기입니다.",
      reviewSource: "여행다이어리 방문기",
      reviewUrl:
        "https://www.mytravelnotes.co.kr/travel/domestic-travel/%ED%8C%8C%EC%A3%BC-%ED%97%A4%EC%9D%B4%EB%A6%AC-%ED%95%9C%EC%A0%95%EC%8B%9D-%EB%A7%9B%EC%A7%91-%EB%8F%84%ED%86%A0%EB%A6%AC%EC%A0%95%EC%9B%90-%EB%B6%80%EB%AA%A8%EB%8B%98-%EB%AA%A8%EC%8B%9C%EA%B8%B0/",
    },
    {
      id: "nfm",
      time: "14:15",
      end: "15:45",
      name: "국립민속박물관 파주",
      short: "열린 수장고 관람",
      travelAfter: "다음 이동 30분",
      type: "국립박물관",
      duration: "1시간 30분",
      phase: "afternoon",
      coords: [37.7867317, 126.6939216],
      address: "경기 파주시 탄현면 헤이리로 30",
      hours: "공휴일인 월요일 개관, 다음 날 휴관, 10:00-18:00",
      note: "2026년 8월 17일은 광복절 대체공휴일입니다. 열린 수장고, 보이는 수장고, 민속아카이브 순서로 보고 관심 유물을 골라 관람합니다.",
      image: "assets/folk-museum.jpg",
      review:
        "열린 수장고와 미디어 정보 월을 직접 둘러볼 수 있어, 보관 공간 자체가 전시처럼 느껴진다는 후기입니다.",
      reviewSource: "국립민속박물관 파주 공식 안내",
      reviewUrl: "https://www.nfm.go.kr/paju/api/file/static/14",
    },
    {
      id: "vivamus",
      time: "16:15",
      end: "17:30",
      name: "비바무스",
      short: "커피와 베이커리",
      type: "숲뷰 카페",
      duration: "1시간 15분",
      phase: "afternoon",
      coords: [37.7249028, 126.7188981],
      address: "경기 파주시 책향기로 423 두손비채 2층 206호",
      hours: "08:00-22:00, 일요일 휴무, 공휴일 변동 확인",
      note: "숲을 바라보는 창가에서 커피와 베이커리로 여행을 마무리합니다. 8월 17일 대체공휴일 영업 여부는 출발 전에 다시 확인하세요.",
      image: "assets/vivamus.jpg",
      review:
        "큰 창 너머의 초록 숲과 차분한 좌석이 인상적이고, 책을 읽으며 쉬기 좋은 신상 카페라는 후기가 있습니다.",
      reviewSource: "비바무스 공개 방문 후기",
      reviewUrl: "https://www.instagram.com/p/DbDQgDwiXta/",
    },
  ],
};

const dayMeta = {
  1: "첫날 7개 정류장",
  2: "둘째 날 6개 정류장",
  3: "마지막 날 3개 정류장",
};

const sourceEntries = [
  ["애플맥뮤지엄 공식 예약", "https://macmuseum.cafe24.com/reservation/detail.html?product_no=67"],
  ["아이노스 방문 후기", "https://www.diningcode.com/profile.php?rid=rjIo51wSpkzf"],
  ["사적인서점 공식 안내", "https://sajeokin-bookshop.com/shopinfo/company.html"],
  ["사적인서점 장소 사진", "https://www.bookshopmap.com/map/sajeokin_bookshop"],
  ["천천히카페 방문 후기", "https://star77247.tistory.com/108"],
  [
    "교하고인돌 산림욕장 안내",
    "https://koreatriptips.com/location.html?mapX=126.7361413314&mapY=37.7291115476&page=4",
  ],
  [
    "교하고인돌 산림욕장 장소 사진",
    "https://www.google.com/maps/search/?api=1&query=%EA%B5%90%ED%95%98%EA%B3%A0%EC%9D%B8%EB%8F%8C+%EC%82%B0%EB%A6%BC%EC%9A%95%EC%9E%A5",
  ],
  ["칠복식당 방문 후기", "https://www.diningcode.com/profile.php?rid=LesRcN3srU91"],
  ["아늑료칸호텔 정보", "https://nol.yanolja.com/stay/domestic/10057282"],
  [
    "미메시스 공식 안내",
    "https://www.mimesisartmuseum.co.kr/%EC%9D%B4%EC%9A%A9-%EC%95%88%EB%82%B4-Visit",
  ],
  ["지혜의숲 방문기", "https://buyvie.co.kr/1"],
  ["리파크 방문 후기", "https://heeiin29.tistory.com/69?category=1163951"],
  ["바그 방문 후기", "https://www.diningcode.com/profile.php?rid=kvo7BxgkkHgT"],
  ["콰이어트라이트 방문 후기", "https://www.diningcode.com/profile.php?rid=yVpCeGUN49xb"],
  [
    "도토리정원 방문기",
    "https://www.mytravelnotes.co.kr/travel/domestic-travel/%ED%8C%8C%EC%A3%BC-%ED%97%A4%EC%9D%B4%EB%A6%AC-%ED%95%9C%EC%A0%95%EC%8B%9D-%EB%A7%9B%EC%A7%91-%EB%8F%84%ED%86%A0%EB%A6%AC%EC%A0%95%EC%9B%90-%EB%B6%80%EB%AA%A8%EB%8B%98-%EB%AA%A8%EC%8B%9C%EA%B8%B0/",
  ],
  ["국립민속박물관 파주 공식 안내", "https://www.nfm.go.kr/paju/api/file/static/14"],
  [
    "2026년 대체공휴일 공식 월력요항",
    "https://www.kasa.go.kr/prog/bbsArticle/BBSMSTR_000000000010/view.do?bbsId=BBSMSTR_000000000010&nttId=B000000001860Pe2zT3",
  ],
  ["비바무스 공개 방문 후기", "https://www.instagram.com/p/DbDQgDwiXta/"],
  [
    "비바무스 장소 사진",
    "https://www.google.com/maps/search/?api=1&query=%EB%B9%84%EB%B0%94%EB%AC%B4%EC%8A%A4+%ED%8C%8C%EC%A3%BC",
  ],
];

const ROUTE_SEGMENT_DURATION_MS = 3200;
const REDUCED_MOTION_STOP_DELAY_MS = 1200;

const state = {
  day: 1,
  selectedIndex: 0,
  isPlaying: false,
  animationFrame: null,
  routeLine: null,
  traveledLine: null,
  vehicleMarker: null,
};

const timeline = document.querySelector("#timeline");
const placeImage = document.querySelector("#place-image");
const placeVisual = document.querySelector(".place-visual");
const imageState = document.querySelector(".image-state");
const routeButton = document.querySelector(".route-button");
const heroPlayButton = document.querySelector(".hero-play");

const map = L.map("map", {
  center: [37.742, 126.723],
  zoom: 12,
  zoomControl: false,
});

L.control.zoom({ position: "bottomright" }).addTo(map);
const mapStatus = document.querySelector("#map-status");
let loadedTileCount = 0;

function showMapError() {
  mapStatus.hidden = false;
  mapStatus.classList.add("is-error");
  mapStatus.innerHTML =
    '<i class="ph ph-warning-circle" aria-hidden="true"></i><span>지도를 불러오지 못했습니다. 장소 목록과 외부 지도 링크를 이용해 주세요.</span>';
}

const tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap contributors",
})
  .on("tileload", () => {
    loadedTileCount += 1;
    mapStatus.hidden = true;
    mapStatus.classList.remove("is-error");
  })
  .on("load", () => {
    if (loadedTileCount > 0) {
      mapStatus.hidden = true;
    } else {
      showMapError();
    }
  })
  .on("tileerror", () => {
    if (loadedTileCount === 0) showMapError();
  })
  .addTo(map);

let markers = [];

function createMarkerIcon(index, isActive = false) {
  return L.divIcon({
    className: "trip-marker",
    html: `<span class="marker-pin${isActive ? " is-active" : ""}">${index + 1}</span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });
}

function getCurrentStops() {
  return tripDays[state.day];
}

function createTimeline() {
  timeline.innerHTML = "";
  const stops = getCurrentStops();
  stops.forEach((stop, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `timeline-item${index === state.selectedIndex ? " is-active" : ""}`;
    button.dataset.index = index;
    button.setAttribute("aria-pressed", index === state.selectedIndex ? "true" : "false");
    button.innerHTML = `
      <span class="timeline-time">
        ${stop.time}
        <small>${stop.end}</small>
      </span>
      <span class="timeline-dot" aria-hidden="true"></span>
      <span class="timeline-copy">
        <strong>${stop.name}</strong>
        <span>${stop.short}</span>
        ${stop.travelAfter ? `<small>${stop.travelAfter}</small>` : ""}
      </span>
    `;
    button.addEventListener("click", () => selectStop(index, { focusMap: true }));
    timeline.appendChild(button);
  });
}

function updateMap() {
  stopRouteAnimation();
  markers.forEach((marker) => marker.remove());
  markers = [];

  if (state.routeLine) state.routeLine.remove();
  if (state.traveledLine) state.traveledLine.remove();
  if (state.vehicleMarker) state.vehicleMarker.remove();

  const stops = getCurrentStops();
  const coords = stops.map((stop) => stop.coords);

  state.routeLine = L.polyline(coords, {
    color: getComputedStyle(document.documentElement).getPropertyValue("--accent-strong").trim(),
    weight: 4,
    opacity: 0.72,
    dashArray: "2 9",
    lineCap: "round",
  }).addTo(map);

  stops.forEach((stop, index) => {
    const marker = L.marker(stop.coords, {
      icon: createMarkerIcon(index, index === state.selectedIndex),
      title: stop.name,
    })
      .addTo(map)
      .on("click", () => selectStop(index, { focusMap: true }));
    markers.push(marker);
  });

  map.fitBounds(L.latLngBounds(coords).pad(0.2), { animate: false });
}

function updatePlacePanel(stop) {
  const isMoodImage = stop.image.includes("paju-day-to-night");
  placeVisual.classList.add("is-loading");
  imageState.hidden = true;
  placeImage.alt = isMoodImage
    ? "파주 여행의 시간대 변화를 표현한 생성 이미지"
    : `${stop.name} 관련 공개 사진`;
  placeImage.src = stop.image;

  document.querySelector("#current-time").textContent = stop.time;
  document.querySelector("#current-place").textContent = stop.name;
  document.querySelector("#place-type").textContent = stop.type;
  document.querySelector("#place-duration").textContent = stop.duration;
  document.querySelector("#place-name").textContent = stop.name;
  document.querySelector("#place-note").textContent = stop.note;
  document.querySelector("#place-address").textContent = stop.address;
  document.querySelector("#place-hours").textContent = stop.hours;
  document.querySelector("#review-text").textContent = stop.review;
  document.querySelector("#review-source").textContent = stop.reviewSource;
  document.querySelector("#review-link").href = stop.reviewUrl;
  document.querySelector("#media-disclaimer").textContent = isMoodImage
    ? "이 장소의 사진은 분위기 연출용 생성 이미지입니다. 장소 정보는 연결된 공개 페이지에서 확인하세요."
    : "사진과 후기 요약은 연결된 공개 페이지를 바탕으로 표시합니다. 최신 운영 여부는 방문 직전 공식 채널에서 다시 확인하세요.";
  document.querySelector("#naver-link").href = `https://map.naver.com/p/search/${encodeURIComponent(stop.name)}`;
  document.querySelector("#google-link").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${stop.name} ${stop.address}`,
  )}`;

  document.body.classList.remove("phase-morning", "phase-afternoon", "phase-evening", "phase-night");
  document.body.classList.add(`phase-${stop.phase}`);
}

function updateTimelineState() {
  const items = [...document.querySelectorAll(".timeline-item")];
  items.forEach((item, index) => {
    const isActive = index === state.selectedIndex;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  const progress =
    getCurrentStops().length > 1 ? (state.selectedIndex / (getCurrentStops().length - 1)) * 100 : 100;
  document.querySelector(".timeline-panel").style.setProperty("--timeline-progress", `${progress}%`);

  markers.forEach((marker, index) => {
    marker.setIcon(createMarkerIcon(index, index === state.selectedIndex));
  });
}

function selectStop(index, options = {}) {
  state.selectedIndex = index;
  const stop = getCurrentStops()[index];
  updateTimelineState();
  updatePlacePanel(stop);

  if (options.focusMap) {
    map.flyTo(stop.coords, 14, { duration: 0.8 });
  }

  const activeTimelineItem = timeline.querySelector(`[data-index="${index}"]`);
  activeTimelineItem?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "nearest",
    inline: "center",
  });
}

function setDay(day) {
  state.day = Number(day);
  state.selectedIndex = 0;
  document.querySelectorAll(".day-tab").forEach((tab) => {
    const isActive = Number(tab.dataset.day) === state.day;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  document.querySelector("#route-summary").textContent = dayMeta[state.day];
  createTimeline();
  updateMap();
  selectStop(0);
}

function interpolateRoute(stops, progress) {
  const segmentCount = stops.length - 1;
  const scaled = Math.min(progress, 0.999999) * segmentCount;
  const segmentIndex = Math.floor(scaled);
  const localProgress = scaled - segmentIndex;
  const start = stops[segmentIndex].coords;
  const end = stops[segmentIndex + 1].coords;
  return [
    start[0] + (end[0] - start[0]) * localProgress,
    start[1] + (end[1] - start[1]) * localProgress,
  ];
}

function buildTraveledCoordinates(stops, progress) {
  const segmentCount = stops.length - 1;
  const scaled = Math.min(progress, 0.999999) * segmentCount;
  const segmentIndex = Math.floor(scaled);
  const coords = stops.slice(0, segmentIndex + 1).map((stop) => stop.coords);
  coords.push(interpolateRoute(stops, progress));
  return coords;
}

function updatePlayButtons(isPlaying) {
  [routeButton, heroPlayButton].forEach((button) => {
    const icon = button.querySelector("i");
    icon.className = isPlaying ? "ph ph-pause" : "ph ph-play";
    button.querySelector("span").textContent = isPlaying ? "경로 멈춤" : "경로 재생";
  });
}

function playRoute() {
  if (state.isPlaying) {
    stopRouteAnimation();
    return;
  }

  const stops = getCurrentStops();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    stops.forEach((_, index) => {
      window.setTimeout(
        () => selectStop(index, { focusMap: true }),
        index * REDUCED_MOTION_STOP_DELAY_MS,
      );
    });
    return;
  }

  state.isPlaying = true;
  updatePlayButtons(true);
  map.fitBounds(L.latLngBounds(stops.map((stop) => stop.coords)).pad(0.2), { animate: true });

  if (state.vehicleMarker) state.vehicleMarker.remove();
  if (state.traveledLine) state.traveledLine.remove();

  state.vehicleMarker = L.marker(stops[0].coords, {
    icon: L.divIcon({
      className: "trip-marker",
      html: '<span class="vehicle-marker"><i class="ph ph-car-profile"></i></span>',
      iconSize: [38, 38],
      iconAnchor: [19, 19],
    }),
    zIndexOffset: 1000,
  }).addTo(map);

  state.traveledLine = L.polyline([stops[0].coords], {
    color: getComputedStyle(document.documentElement).getPropertyValue("--accent-strong").trim(),
    weight: 5,
    opacity: 0.95,
    lineCap: "round",
  }).addTo(map);

  const segmentCount = stops.length - 1;
  const duration = segmentCount * ROUTE_SEGMENT_DURATION_MS;
  const startTime = performance.now();
  let previousIndex = -1;

  function frame(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const currentCoords =
      progress === 1 ? stops[stops.length - 1].coords : interpolateRoute(stops, progress);
    state.vehicleMarker.setLatLng(currentCoords);
    state.traveledLine.setLatLngs(
      progress === 1 ? stops.map((stop) => stop.coords) : buildTraveledCoordinates(stops, progress),
    );

    const selectedIndex =
      progress === 1 ? stops.length - 1 : Math.floor(progress * segmentCount);
    if (selectedIndex !== previousIndex) {
      previousIndex = selectedIndex;
      selectStop(selectedIndex);
    }

    if (progress < 1 && state.isPlaying) {
      state.animationFrame = requestAnimationFrame(frame);
    } else {
      state.isPlaying = false;
      state.animationFrame = null;
      updatePlayButtons(false);
    }
  }

  state.animationFrame = requestAnimationFrame(frame);
}

function stopRouteAnimation() {
  if (state.animationFrame) cancelAnimationFrame(state.animationFrame);
  state.animationFrame = null;
  state.isPlaying = false;
  updatePlayButtons(false);
}

function initializeTheme() {
  const saved = localStorage.getItem("paju-trip-theme");
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = saved || (preferredDark ? "dark" : "light");
  document.documentElement.dataset.theme = initialTheme;
  updateThemeIcon(initialTheme);
}

function updateThemeIcon(theme) {
  const icon = document.querySelector(".theme-toggle i");
  icon.className = theme === "dark" ? "ph ph-sun" : "ph ph-moon";
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme;
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("paju-trip-theme", next);
  updateThemeIcon(next);
  updateMap();
  selectStop(state.selectedIndex);
}

function renderSources() {
  const list = document.querySelector("#source-list");
  sourceEntries.forEach(([label, url]) => {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    anchor.innerHTML = `<span>${label}</span><i class="ph ph-arrow-up-right" aria-hidden="true"></i>`;
    list.appendChild(anchor);
  });
}

placeImage.addEventListener("load", () => {
  placeVisual.classList.remove("is-loading");
  imageState.hidden = true;
});

placeImage.addEventListener("error", () => {
  placeVisual.classList.remove("is-loading");
  imageState.hidden = false;
});

document.querySelectorAll(".day-tab").forEach((tab) => {
  tab.addEventListener("click", () => setDay(tab.dataset.day));
});

document.querySelector(".theme-toggle").addEventListener("click", toggleTheme);
routeButton.addEventListener("click", playRoute);
heroPlayButton.addEventListener("click", () => {
  document.querySelector("#trip-planner").scrollIntoView({ behavior: "smooth" });
  window.setTimeout(playRoute, 500);
});

initializeTheme();
renderSources();
createTimeline();
updateMap();
selectStop(0);
