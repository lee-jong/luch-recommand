export const categoryList = ["전체", "한식", "중식", "일식", "아시안"];

export const distanceList = [
  { title: "전체", val: "all" },
  { title: "먼 곳 ( 500m 초과 )", val: "far" },
  { title: "가까운 곳 ( 500m 이하 )", val: "near" },
];

export const lunchList: item[] = [
  { category: "한식", name: "한우명가", distance: 405 },
  { category: "아시안", name: "인더비엣", distance: 329 },
  { category: "한식", name: "미정국수", distance: 387 },
  { category: "한식", name: "제주은희네해장국", distance: 322 },
  { category: "한식", name: "장찬기김밥", distance: 364 },
  { category: "한식", name: "장수본가해장국", distance: 440 },
  { category: "중식", name: "참진짜장짬뽕", distance: 449 },
  { category: "양식", name: "버거킹", distance: 436 },
  { category: "한식", name: "동래복국", distance: 443 },
  { category: "한식", name: "아미고백반", distance: 481 },
  { category: "일식", name: "코이라멘", distance: 541 },
  { category: "일식", name: "카레공방", distance: 511 },
  { category: "한식", name: "소공동뚝배기", distance: 408 },
  { category: "한식", name: "꿀꿀순대국", distance: 322 },
  { category: "한식", name: "별미잔치국수", distance: 576 },
  { category: "일식", name: "홍코코로스시", distance: 454 },
  { category: "한식", name: "현대옥", distance: 502 },
  { category: "한식", name: "용가리용대리황태국", distance: 408 },
  { category: "한식", name: "명인만두", distance: 483 },
  { category: "한식", name: "신미낙지", distance: 517 },
  { category: "양식", name: "롤링파스타", distance: 326 },
  { category: "한식", name: "남부", distance: 368 },
  { category: "한식", name: "두부공방", distance: 385 },
  { category: "한식", name: "송주불냉면", distance: 600 },
  { category: "한식", name: "부산아지매국밥", distance: 383 },
  { category: "일식", name: "이소정카츠", distance: 322 },
  { category: "중식", name: "린", distance: 371 },
];

export const teamList = [
  {
    name: "로봇응용개발팀",
    webhookUrl: import.meta.env.VITE_WEBHOOK_URL,
  },
];
