// ============================================================================
// 세림로보틱스 (SERIM ROBOTICS) 통합 인터랙션 스크립트
// ============================================================================

const ROBOT_KEYS = ["dusti", "dusti-pro", "sweepi", "sweepi-pro", "washi", "kargo"];

// 6대 주력 로봇 상세 데이터 (docs/*.pdf 기준)
const ROBOTS_DATA = {
  dusti: {
    id: "dusti",
    category: "dry",
    badge: "대규모 건식 AI 청소",
    name: "더스티",
    enName: "DUSTI",
    tagline: "세계 최초 대규모 공간(100,000㎡) AI 스마트 건식 청소 로봇",
    image: "./images/dusti-render.png",
    pdf: encodeURI("./docs/더스티 제품소개서.pdf"),
    pdfTitle: "더스티 (DUSTI) AI 스마트 청소로봇 제품소개서",
    highlightMetric: "최대 6,000㎡/h 스팟 청소",
    hourlyRate: 4200,
    summary:
      "운전식 청소 장비에 필적하는 청소 효과와 업계 최고 수준의 멀티 센서·AI 비전 인식 시스템을 융합하여 최대 100,000㎡(약 3만평) 이상의 초대형 공간을 24시간 무인으로 관리합니다.",
    quickMetrics: [
      { value: "6,000㎡/h", label: "최대 청소능력" },
      { value: "35L", label: "대용량 쓰레기통" },
      { value: "70cm", label: "넓은 청소폭" },
    ],
    features: [
      "AI 시각적 쓰레기 인식 (미세먼지부터 페트병 크기 대형 쓰레기까지 자동 식별)",
      "LiDAR SLAM + VSLAM 통합 포지셔닝 및 3D 멀티 센서 장애물 회피",
      "최대 8시간 연속 작동 & 3시간 급속 충전 (하루 3회 사이클로 24/7 가동)",
      "접이식 제어 핸들 탑재로 자동/수동 모드 즉시 전환 및 모듈식 간편 분리",
    ],
    specs: {
      "크기 (L×W×H)": "840 × 600 × 490 mm",
      무게: "65 kg",
      청소능력: "최대 1,800㎡/h (표준) / 최대 6,000㎡/h (스팟 청소 모드)",
      "쓰레기통 용량": "35 L (모듈식 분리형)",
      "배터리 용량 / 사용시간": "45Ah / 4 ~ 8시간 (3시간 이내 급속 완충)",
      "청소 폭 / 최소 이동폭": "70 cm / 최소 75 cm",
      "이동 속도": "0.2 m/s ~ 1.2 m/s (조정 가능)",
      "핵심 센서 & IoT": "RGBD, AI RGB 카메라, 라인 레이저, VSLAM, LiDAR, 엘리베이터·게이트 연동",
    },
    applications: ["제조공장", "대형 물류창고", "공사현장", "실내외 대형 주차장"],
  },
  "dusti-pro": {
    id: "dusti-pro",
    category: "dry",
    badge: "3-in-1 진공·스위핑·걸레",
    isPro: true,
    name: "더스티 프로",
    enName: "DUSTI PRO",
    tagline: "듀얼 팬 진공 200% 흡입력 & 핸드 배큠 확장팩 탑재 프로 모델",
    image: "./images/main-section3-3_new.png",
    pdf: encodeURI("./docs/더스티 프로 제품소개서.pdf"),
    pdfTitle: "더스티 프로 (DUSTI PRO) AI 스마트 청소로봇 제품소개서",
    highlightMetric: "흡입 효율 200% · HEPA 13",
    hourlyRate: 1400,
    summary:
      "대용량 고효율 듀얼 팬 진공 청소기를 갖춘 3-in-1(진공+스위핑+먼지걸레) AI 스마트 로봇입니다. 바닥 재질을 AI로 실시간 식별해 흡입력과 브러시 속도를 자동 제어하며 핸드형 진공 확장팩으로 모서리와 선반까지 완벽히 커버합니다.",
    quickMetrics: [
      { value: "200%", label: "듀얼팬 흡입효율" },
      { value: "14L+6L", label: "더스트백+쓰레기통" },
      { value: "99.97%", label: "HEPA 13 여과" },
    ],
    features: [
      "3-in-1 다용도 클리닝 (진공청소 + 스위핑 + 탈부착 먼지걸레 7종 모드)",
      "쓰레기통 6L + 더스트백 14L(7L×2) 분리 구조로 최대 10일간 비움 없이 사용",
      "HEPA 등급 기본 탑재 및 최대 99.97% 초미세 여과 HEPA 13 필터 옵션",
      "핸드형 진공청소기(확장팩) 지원으로 선반·벽·유리·모서리 수직 청소 가능",
    ],
    specs: {
      "크기 (L×W×H)": "840 × 600 × 490 mm",
      무게: "75 kg",
      청소효율: "최대 1,400㎡/h (진공 집중 클리닝)",
      "더스트백 / 쓰레기통": "더스트백 14L (7L×2개) + 쓰레기통 6L",
      "배터리 용량 / 사용시간": "45Ah / 3 ~ 6.5시간 (자동 충전 도킹)",
      "진공청소 폭 / 일반청소 폭": "최대 55 cm / 최대 70 cm",
      "주행 통로 폭 / 통과 높이": "최소 통로 75 cm / 최소 통과 높이 52 cm (저상 선반 하부 진입)",
      "핵심 센서 & 기술": "AI 바닥표면 인식, 비전 쓰레기 감지, LiDAR + VSLAM 통합 내비게이션",
    },
    applications: ["대형 호텔 카펫 구역", "정밀 제조공장", "복합 물류센터", "공항·대형 터미널"],
  },
  sweepi: {
    id: "sweepi",
    category: "allinone",
    badge: "4-in-1 습식·건식 올인원",
    name: "스위피",
    enName: "SWEEPI",
    tagline: "쓸기·진공·닦기·물걸레를 하나로 결합한 상업용 베스트셀러",
    image: "./images/main-section3-2.png",
    pdf: encodeURI("./docs/스위피 제품소개서.pdf"),
    pdfTitle: "스위피 (SWEEPI) 지능형 상업용 청소로봇 제품소개서",
    highlightMetric: "17,000Pa · 4-in-1 올인원",
    hourlyRate: 1000,
    summary:
      "쓸기, 진공 청소, 닦기(스크러빙), 물걸레 기능을 단일 장비에 통합한 지능형 상업용 청소 로봇입니다. 워크스테이션을 통한 자동 충전·급수·배수와 엣지마스터 근접 청소로 완벽한 무인 위생 관리를 실현합니다.",
    quickMetrics: [
      { value: "17,000Pa", label: "강력 진공 흡입력" },
      { value: "1,000㎡/h", label: "최대 청소효율" },
      { value: "< 70dB", label: "저소음 작동" },
    ],
    features: [
      "4-in-1 통합 클리닝 (쓸기 + 17,000Pa 진공 + 습식 스크러빙 + 물기 제거)",
      "확장형 측면 브러시 '엣지마스터' 기술로 벽면·모서리 센티미터 단위 밀착 청소",
      "전용 워크스테이션 연동 자동 충전 및 15L 정수 자동 보충 / 15L 오수 자동 배수",
      "10.1인치 대형 터치스크린 및 확장형 조종 핸들로 직관적 맵핑·제어",
    ],
    specs: {
      "크기 및 무게": "552 × 625 × 690 mm / 75 kg",
      "사용 시간": "문지르기·복합청소 5시간 / 조용히 닦기 최대 9시간",
      "배터리 용량": "25.6V / 50Ah 리튬 이온 배터리 (3시간 이내 고속 충전)",
      "정수 / 오수 탱크": "정수 15L / 오수 15L (이동식 30L×2 급수대 옵션 지원)",
      "청소 폭 / 최소 이동폭": "500 mm / 70 cm (권장 75 cm)",
      "최대 등판능력 / 속도": "8° / 최대 0.8 m/s",
      "작동 소음": "70 dB 미만 저소음 설계",
      "지원 기능": "다중 층 스케줄링, 중단 지점 청소 재개, 모바일 앱 실시간 리포트",
    },
    applications: ["오피스 빌딩", "병원 및 호텔", "학교·교육시설", "마트·복합 쇼핑몰"],
  },
  "sweepi-pro": {
    id: "sweepi-pro",
    category: "allinone",
    badge: "전·후면 AI 자율 청소",
    isPro: true,
    name: "스위피 프로",
    enName: "SWEEPI PRO",
    tagline: "세계 최초 후면 AI 카메라 모니터링 & AI 스팟 스크러빙 탑재",
    image: "./images/sweepi-pro-render.png",
    pdf: encodeURI("./docs/스위피 프로 제품소개서.pdf"),
    pdfTitle: "스위피 프로 (SWEEPI PRO) AI 기반 자율 청소로봇 제품소개서",
    highlightMetric: "3,000㎡/h · 전후면 AI 비전",
    hourlyRate: 2500,
    summary:
      "전면 AI 카메라로 오염물을 감지해 집중 청소하고, 세계 최초 후면 AI 카메라로 남은 얼룩과 브러시·스퀴지 이상 여부를 실시간 검증하여 재청소 및 청소 히트맵 리포트를 생성하는 차세대 완전 자율 청소 로봇입니다.",
    quickMetrics: [
      { value: "3,000㎡/h", label: "AI 집중 청소효율" },
      { value: "8,000㎡", label: "1회 충전 커버면적" },
      { value: "IEC 63327", label: "국제 인증 획득" },
    ],
    features: [
      "비전 기반 AI 스팟 청소로 젖은 얼룩·오염 구역 실시간 감지 및 효율 최대 3배 향상",
      "세계 최초 후면 AI 카메라 탑재: 남은 얼룩 재청소 및 스퀴지·브러시 2차 오염 방지",
      "쓰레기 핫스팟 지도 & 청소 효과 히트맵 대시보드로 데이터 기반 시설 관리",
      "바닥 청결도 및 카펫/단단한 바닥 유형 자동 감지로 청소 출력·모드 자동 전환",
    ],
    specs: {
      "크기 및 무게": "552 × 629 × 695 mm / 75 kg",
      "청소 효율": "700~1,000 ㎡/h (전체 청소) / 1,500~3,000 ㎡/h (AI 집중 청소)",
      "사용 시간": "바닥 청소 5시간 / 카펫 진공 4시간 / 저소음 물걸레질 9시간",
      "배터리 및 충전": "23V~29.2V / 50Ah 리튬이온 / 약 3시간 완충",
      "물탱크 / 먼지통": "정수 15L · 오수 15L / 먼지통 2.5L · 먼지봉투 6L",
      "주행 폭 / 청소 폭": "최소 주행폭 70 cm / 청소폭 500 mm (최대 등판 8°)",
      디스플레이: "10.1인치 LCD 터치 스크린",
      "핵심 AI 센서": "전면·후면 AI RGB 카메라, VSLAM, 초음파/메인 LiDAR, 듀얼 RGBD",
    },
    applications: ["대형 마트·백화점", "공항·지하철 역사", "대형 종합병원", "첨단 스마트팩토리"],
  },
  washi: {
    id: "washi",
    category: "scrubber",
    badge: "직립형 고압 스크러버",
    name: "워시",
    enName: "WASHI",
    tagline: "27kg 하방 압력 & 350RPM으로 기름때·미끄러운 바닥 즉시 복원",
    image: "./images/main-section3-1_new.png",
    pdf: encodeURI("./docs/워시 제품소개서.pdf"),
    pdfTitle: "워시 (WASHI) 스마트 직립형 스크러버 드라이어 제품소개서",
    highlightMetric: "27kg 압력 · 20,000Pa 건조",
    hourlyRate: 1350,
    summary:
      "기름지고 미끄러운 환경의 찌든 오염을 해결하기 위해 설계된 스마트 직립형 스크러버 드라이어입니다. 27kg 압력과 20,000Pa 흡입력으로 세척과 동시에 물기를 완벽 건조하며, 공기-고체-액체 3중 분리로 배수구 막힘을 원천 방지합니다.",
    quickMetrics: [
      { value: "27kg / 350RPM", label: "브러시 압력·속도" },
      { value: "20,000Pa", label: "초강력 즉각 건조" },
      { value: "80% 절감", label: "물·세정제 절약" },
    ],
    features: [
      "기존 걸레질 대비 청소 시간 70% 단축 및 물·세정제 사용량 80% 대폭 절감",
      "업계 최초 공기-고체-액체 3중 분리 폐수 탱크로 젖은/마른 쓰레기 분리 및 배수구 막힘 제거",
      "다차원 확장 청소: 수직 유리·타일 벽면, 테이블 상단, 25° 저상 공간, 360° 회전 헤드",
      "7+2 스마트 청소모드 & LCD 터치스크린 내장 설치 매뉴얼·교육 비디오 지원",
    ],
    specs: {
      "크기 (L×W×H)": "490 × 530 × 1200 mm",
      무게: "27 kg",
      청소능력: "최대 1,100 ~ 1,600 ㎡/h",
      "청소 폭 / 스퀴지 폭": "44 cm / 49 cm",
      "정수 / 오수 탱크": "정수 4L / 오수 4L (공기·고체·액체 분리 시스템)",
      "배터리 / 사용시간": "18Ah 탈부착 배터리 / 표준 70분 · 에코 100분 (충전 2.5시간)",
      "청소 모드": "7+2 모드 (강력, 에코, 기본, 흡입, 섬세, 불림, 액세서리 등)",
      "유지보수 설계": "퀵 릴리즈 디자인 (브러시·스퀴지·물탱크·배터리 원터치 탈부착)",
    },
    applications: ["대형 식당·조리실", "카페·프랜차이즈", "호텔 로비·피트니스", "유리창·다차원 상업공간"],
  },
  kargo: {
    id: "kargo",
    category: "logistics",
    badge: "300kg 산업용 AMR 물류",
    name: "카고",
    enName: "KARGO",
    tagline: "최대 300kg 고하중 적재 & 마커리스 VSLAM+ 산업용 물류 로봇",
    image: "./images/main-section3-2_new.png",
    pdf: encodeURI("./docs/카고 제품소개서.pdf"),
    pdfTitle: "카고 (KARGO) 산업용 물류 로봇 제품소개서",
    highlightMetric: "300kg 적재 · 60cm 협소주행",
    hourlyRate: 3200,
    summary:
      "산업 현장의 자재 운송과 상업 환경의 고하중 배송을 위해 설계된 다용도 자율주행 물류 로봇(AMR)입니다. 물리적 마커 없이 최대 30m 천장·200,000㎡ 공간을 즉시 맵핑하며 기존 AGV 대비 구축 시간을 70% 단축합니다.",
    quickMetrics: [
      { value: "300kg", label: "최대 적재하중" },
      { value: "200,000㎡", label: "초대형 VSLAM+ 매핑" },
      { value: "60cm", label: "협소 통로 주행" },
    ],
    features: [
      "VSLAM+ 마커리스 내비게이션: 최대 30m 고천장 대응, 라인 변경 시 리모델링 없이 즉시 적응",
      "3가지 주행 모드(자동 배송 / 비전 팔로우 추종 / 전동 파워 어시스트 수동대차) 지원",
      "4가지 적재 확장(표준 박스 / 다단 선반 / 자동 리프팅 / 바퀴 캐리어 견인 모드)",
      "ISO 3691-4 산업안전 표준 준수, 360° LiDAR + 3D 심도 카메라, 최대 20대 동시 군집 제어",
    ],
    specs: {
      "크기 (본체)": "835 × 500 × 135 mm (개방형 고강도 섀시)",
      "자체 중량 / 최대 적재하중": "65 kg / 최대 300 kg",
      "사용 시간": "비적재 시 12시간 / 최대 적재 시 6시간 (2시간 급속충전 & 배터리 교체 지원)",
      "주행 속도 / 최소 주행폭": "최대 1.2 m/s / 최소 60 cm 협소 공간 주행",
      "단차 / 홈 극복 능력": "언덕(턱) 극복 최대 20 mm / 홈 극복 최대 35 mm (차량급 서스펜션)",
      "배터리 용량": "30Ah 교체 가능 리튬이온 배터리 + 자동 충전 도킹",
      "안전 및 인터랙션": "ISO 3691-4, 고휘도 위치 표시등, 교통 신호등, 10.1인치 터치스크린",
      "IoT 및 확장성": "엘리베이터·e-게이트·호출기 연동, API 인터페이스, 외부 전원/USB 포트",
    },
    applications: ["자동차·전자 제조공장", "대형 3PL 물류센터", "생산공정 간 반제품 이송", "품질·검사 라인 물류"],
  },
};

// 10대 산업별 맞춤 솔루션 데이터
const INDUSTRIES_DATA = [
  {
    id: "1",
    name: "호텔 · 리조트",
    robotKeys: ["sweepi-pro", "dusti-pro", "washi"],
    image: "./images/sweepi-pro-render.png",
    desc: "24시간 로비·복도 카펫 및 대리석 자동 청소로 최고급 호텔의 위생 품격을 유지하고 야간 미화 인력 부담을 줄입니다.",
    benefits: [
      { title: "업무 강도 감소", text: "직원의 피로도 감소, 이직률 감소, 고객 대면 서비스 품질 향상" },
      { title: "운영 효율성 향상", text: "24시간 청소·소독 자동화, 카펫 및 대리석 바닥 맞춤 케어" },
      { title: "비용 절감", text: "야간/상주 인력 수요 감소, 운영비 절감, 에너지 효율 최적화" },
    ],
  },
  {
    id: "2",
    name: "음식업 · 프랜차이즈",
    robotKeys: ["washi", "sweepi"],
    image: "./images/main-section3-1_new.png",
    desc: "주방과 홀의 기름지고 미끄러운 바닥을 27kg 압력과 20,000Pa 흡입 건조로 즉시 복원해 미끄럼 사고를 예방합니다.",
    benefits: [
      { title: "업무강도 감소", text: "마감 청소 부담 해소로 직원의 행복감 향상 및 이직률 감소" },
      { title: "효율성 및 위생 향상", text: "찌든 기름때 완벽 세척 및 즉각 건조로 쾌적한 매장 환경 제공" },
      { title: "원가 절감", text: "청소 시간 70% 단축 및 물·세정제 80% 절감으로 매장 운영비 절약" },
    ],
  },
  {
    id: "3",
    name: "대형 마트 · 쇼핑몰",
    robotKeys: ["sweepi-pro", "dusti"],
    image: "./images/main-section3-2.png",
    desc: "영업 중에도 70dB 미만의 저소음과 AI 스팟 청소로 유동 인구가 많은 매장 바닥의 젖은 얼룩과 쓰레기를 즉시 처리합니다.",
    benefits: [
      { title: "업무 자동화", text: "넓은 매장 통로 무인 청소, 쓰레기 핫스팟 지도 기반 집중 관리" },
      { title: "고객 경험 개선", text: "360° 장애물 회피로 쇼핑객 방해 없이 쾌적하고 안전한 매장 유지" },
      { title: "운영 비용 절감", text: "인력 부담 감소, 주·야간 청소 자동화, 에너지 및 용수 절감" },
    ],
  },
  {
    id: "4",
    name: "제조 · 물류센터",
    robotKeys: ["kargo", "dusti", "dusti-pro"],
    image: "./images/main-section3-2_new.png",
    desc: "300kg 적재 물류로봇 카고와 10만㎡ 건식 청소로봇 더스티의 조합으로 공정 물류 이송과 분진·파렛트 잔해 청소를 완벽 자동화합니다.",
    benefits: [
      { title: "생산성 극대화", text: "24시간 무인 자재 운송 및 대형 공간 청소로 생산 속도 증가" },
      { title: "작업자 안전 확보", text: "ISO 3691-4 준수 고중량 운반 자동화로 근골격계 질환 및 사고 예방" },
      { title: "구축·유지비 절감", text: "마커리스 VSLAM+로 AGV 대비 설치 시간 70% 단축 및 인건비 절감" },
    ],
  },
  {
    id: "5",
    name: "건강 · 대형병원",
    robotKeys: ["sweepi-pro", "dusti-pro"],
    image: "./images/sweepi-pro-render.png",
    desc: "HEPA 13 초미세 필터(99.97% 여과)와 후면 AI 카메라 자가 검증으로 병원 내 교차 감염과 2차 오염을 철저히 차단합니다.",
    benefits: [
      { title: "업무 부담 완화", text: "보조·미화 업무 자동화로 의료진 및 시설팀 피로도 감소" },
      { title: "정밀 위생 관리", text: "실시간 청결도 히트맵 모니터링 및 브러시·스퀴지 오염 자동 감지" },
      { title: "감염 예방", text: "비대면 무인 청소 시스템 및 초미세먼지 포집으로 병원 내 위생 최적화" },
    ],
  },
  {
    id: "6",
    name: "주택 · 오피스 빌딩",
    robotKeys: ["sweepi", "dusti-pro"],
    image: "./images/main-section3-2.png",
    desc: "IoT 엘리베이터·출입 게이트 연동으로 다층 오피스 빌딩을 로봇 스스로 이동하며 로비부터 복도까지 무인 관리합니다.",
    benefits: [
      { title: "다층 무인 운영", text: "엘리베이터·보안 게이트 IoT 연동 및 워크스테이션 자동 급배수·충전" },
      { title: "에너지 효율 최적화", text: "야간 무인 스케줄링 가동 및 디지털 클리닝 리포트 자동 발행" },
      { title: "자산 가치 상승", text: "첨단 AI 로봇 도입으로 스마트 빌딩 브랜드 이미지 제고" },
    ],
  },
  {
    id: "7",
    name: "학교 · 교육시설",
    robotKeys: ["sweepi", "washi"],
    image: "./images/main-section3-1_new.png",
    desc: "학생들의 등하교 전후 스케줄링 청소로 교실 복도, 체육관, 학생식당의 위생과 안전을 빈틈없이 지킵니다.",
    benefits: [
      { title: "학습 환경 개선", text: "미세먼지 없는 깨끗한 복도와 교실 환경으로 학생 건강 보호" },
      { title: "시설 관리 자동화", text: "요일·시간별 자동 스케줄링 및 완료 보고서 자동 생성" },
      { title: "안전 및 위생 강화", text: "급식실·체육관 바닥 즉시 건조로 학생 미끄럼 안전사고 방지" },
    ],
  },
  {
    id: "8",
    name: "문화 · 엔터테인먼트",
    robotKeys: ["sweepi-pro", "washi"],
    image: "./images/main-section2-1.png",
    desc: "전시장, 영화관, 스포츠 경기장 등 대규모 관람객이 몰리는 다중이용시설을 빠르고 조용하게 정비합니다.",
    benefits: [
      { title: "고객 경험 향상", text: "친근한 로봇 디스플레이 연출과 항상 청결한 관람 공간 제공" },
      { title: "피크타임 빠른 정비", text: "회차 간 짧은 시간 내 대면적 고속 청소 및 즉각 건조" },
      { title: "비용 절감", text: "대형 공간 유지보수 인력 배치 최적화 및 관리비 절감" },
    ],
  },
  {
    id: "9",
    name: "공항 · 교통 허브",
    robotKeys: ["dusti-pro", "sweepi-pro", "kargo"],
    image: "./images/main-section3-3_new.png",
    desc: "초대형 여객 터미널과 기차역의 방대한 바닥 면적을 마커 없이 정밀 주행하며 24시간 무결점 청결을 유지합니다.",
    benefits: [
      { title: "초대형 공간 최적화", text: "특징점이 적은 넓은 공항·역사에서도 LiDAR+VSLAM으로 정밀 주행" },
      { title: "승객 편의 증대", text: "다중 센서 융합으로 유동 인구와 수하물을 안전하게 회피" },
      { title: "24/7 무중단 관리", text: "자동 충전·급배수 스테이션 연동으로 365일 상시 청결 유지" },
    ],
  },
  {
    id: "10",
    name: "공공기관 · 스마트시티",
    robotKeys: ["sweepi", "dusti", "kargo"],
    image: "./images/dusti-render.png",
    desc: "청사 로비, 민원실, 공공 체육·문화시설의 환경 관리를 디지털화하고 투명한 작업 데이터 리포트를 제공합니다.",
    benefits: [
      { title: "행정 시설 자동화", text: "공공청사 미화 및 문서·자재 이송 효율화" },
      { title: "데이터 기반 관리", text: "청소 면적, 시간, 용수·전력 소비량 등 정량적 성과 보고서 제공" },
      { title: "ESG 친환경 실천", text: "물·세정제 절감 및 저전력 배터리 시스템으로 탄소 배출 저감" },
    ],
  },
];

// 공식 홍보 영상 데이터 (세림로보틱스 공식 유튜브)
const OFFICIAL_VIDEOS = [
  { id: "tgiCuqmpbso", title: "세림로보틱스 AI 스마트 로봇 메인 홍보영상 #1" },
  { id: "Q5Zm9GrO9kM", title: "세림로보틱스 산업·상업용 청소·물류로봇 #2" },
  { id: "kYf5Psnilos", title: "세림로보틱스 현장 주행 및 솔루션 소개 #3" },
];

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileNavAndScrollSpy();
  initHeroShowcase();
  initCounters();
  initProductsGrid();
  initRecommender();
  initIndustries();
  initModalCloseHandlers();
  initContactForm();
});

// 토스트 알림 유틸리티
window.showToast = function (message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2600);
};

// 전화번호 클릭 처리 (PC에서도 클립보드 복사 + 안내 토스트 + 통화 연결)
window.handlePhoneAction = function (phone = "1800-9633") {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(phone).catch(() => {});
  }
  showToast(`📞 대표번호 ${phone} 이(가) 클립보드에 복사되었습니다!`);
};

// 1. 라이트 / 다크 테마 토글
function initThemeToggle() {
  const btn = document.getElementById("themeToggleBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";
    if (isDark) {
      html.removeAttribute("data-theme");
      btn.textContent = "🌙";
      btn.title = "다크 모드로 전환";
      showToast("☀️ 트렌디 라이트 모드가 적용되었습니다.");
    } else {
      html.setAttribute("data-theme", "dark");
      btn.textContent = "☀️";
      btn.title = "라이트 모드로 전환";
      showToast("🌙 오로라 다크 모드가 적용되었습니다.");
    }
  });
}

// 2. 모바일 메뉴 & 스크롤 스파이 네비게이션
function initMobileNavAndScrollSpy() {
  const btn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("mainNav");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      nav.classList.toggle("mobile-open");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("mobile-open");
      });
    });
  }

  // 스크롤 위치에 따른 활성 메뉴 표시
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".main-nav a");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 140;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((a) => {
          a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
        });
      }
    });
  });
}

// 3. 히어로 쇼케이스 스위처 (탭, 좌우 화살표, 해시태그 연동)
let currentHeroIndex = 0;

window.selectHeroRobot = function (robotKey, showNotification = false) {
  const idx = ROBOT_KEYS.indexOf(robotKey);
  if (idx !== -1) currentHeroIndex = idx;

  const data = ROBOTS_DATA[robotKey];
  if (!data) return;

  // 탭 및 해시태그 활성화 상태 동기화
  document.querySelectorAll(".switcher-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.robot === robotKey);
  });
  document.querySelectorAll(".hero-tag[data-robot]").forEach((t) => {
    t.classList.toggle("active", t.dataset.robot === robotKey);
  });

  const imgEl = document.getElementById("heroRobotImg");
  const codeEl = document.getElementById("heroModelCode");
  const highlightEl = document.getElementById("heroModelHighlight");
  const titleEl = document.getElementById("heroModelTitle");
  const descEl = document.getElementById("heroModelDesc");
  const metricsEl = document.getElementById("heroMiniMetrics");
  const detailBtn = document.getElementById("heroDetailBtn");
  const pdfBtn = document.getElementById("heroPdfBtn");

  imgEl.style.opacity = "0";
  imgEl.style.transform = "scale(0.92)";

  setTimeout(() => {
    imgEl.src = data.image;
    imgEl.alt = `${data.name} (${data.enName})`;
    codeEl.textContent = data.enName;
    highlightEl.textContent = data.highlightMetric;
    titleEl.textContent = `${data.name} (${data.enName})`;
    descEl.textContent = data.tagline;

    if (metricsEl) {
      metricsEl.innerHTML = data.quickMetrics
        .map(
          (m) => `
        <div class="showcase-metric-pill">
          <strong class="font-tech">${m.value}</strong>
          <span>${m.label}</span>
        </div>
      `
        )
        .join("");
    }

    if (detailBtn) detailBtn.onclick = () => openProductModal(robotKey);
    if (pdfBtn) pdfBtn.onclick = () => openPdfPreviewModal(robotKey);

    imgEl.style.opacity = "1";
    imgEl.style.transform = "scale(1)";
  }, 150);

  if (showNotification) {
    showToast(`🤖 ${data.name} (${data.enName}) 모델이 선택되었습니다.`);
  }
};

function initHeroShowcase() {
  document.querySelectorAll(".switcher-btn").forEach((btn) => {
    btn.addEventListener("click", () => selectHeroRobot(btn.dataset.robot, true));
  });

  document.querySelectorAll(".hero-tag[data-robot]").forEach((tag) => {
    tag.addEventListener("click", () => selectHeroRobot(tag.dataset.robot, true));
  });

  const prevBtn = document.getElementById("heroPrevBtn");
  const nextBtn = document.getElementById("heroNextBtn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentHeroIndex = (currentHeroIndex - 1 + ROBOT_KEYS.length) % ROBOT_KEYS.length;
      selectHeroRobot(ROBOT_KEYS[currentHeroIndex]);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentHeroIndex = (currentHeroIndex + 1) % ROBOT_KEYS.length;
      selectHeroRobot(ROBOT_KEYS[currentHeroIndex]);
    });
  }

  selectHeroRobot("dusti", false);
}

// 4. 글로벌 실적 카운터 애니메이션
function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || "";
        const duration = 1200;
        const start = performance.now();

        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(target * eased);
          el.textContent = current.toLocaleString("ko-KR") + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        observer.unobserve(el);
      });
    },
    { threshold: 0.3 }
  );

  counters.forEach((c) => observer.observe(c));
}

// 5. 6대 로봇 라인업 카드 렌더링 및 필터
function initProductsGrid() {
  const grid = document.getElementById("productsGrid");
  const filterBtns = document.querySelectorAll(".filter-tab");
  if (!grid) return;

  window.renderProductCards = function (filter = "all") {
    const list = Object.values(ROBOTS_DATA).filter(
      (r) => filter === "all" || r.category === filter
    );

    grid.innerHTML = list
      .map(
        (r) => `
      <article class="product-card" data-category="${r.category}">
        <div class="product-card__visual" onclick="openProductModal('${r.id}')" title="클릭하여 ${r.name} 상세 제원 보기">
          <span class="product-badge-top">${r.badge}</span>
          ${r.isPro ? '<span class="product-tag-pro font-tech">PRO AI</span>' : ""}
          <img src="${r.image}" alt="${r.name} (${r.enName})" loading="lazy" />
        </div>
        <div class="product-card__body">
          <p class="product-card__subtitle">${r.tagline}</p>
          <h3 class="product-card__title">
            ${r.name} <span class="font-tech">${r.enName}</span>
          </h3>
          <p class="product-card__desc">${r.summary}</p>
          <div class="product-metrics">
            ${r.quickMetrics
              .map(
                (m) => `
              <div class="metric-item">
                <strong class="font-tech">${m.value}</strong>
                <span>${m.label}</span>
              </div>
            `
              )
              .join("")}
          </div>
          <ul class="product-features-list">
            ${r.features.map((f) => `<li><span>${f}</span></li>`).join("")}
          </ul>
          <div class="product-card__actions">
            <button type="button" class="btn btn-primary btn-sm" onclick="openProductModal('${r.id}')">
              🔍 상세 제원 · 기술
            </button>
            <button type="button" class="btn btn-outline btn-sm" onclick="openPdfPreviewModal('${r.id}')">
              📄 PDF 소개서 보기
            </button>
            <button type="button" class="btn btn-secondary btn-sm btn-full" onclick="selectRobotForInquiry('${r.name} (${r.enName})')">
              ✍️ 이 로봇으로 무료 시연·견적 신청하기
            </button>
          </div>
        </div>
      </article>
    `
      )
      .join("");
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProductCards(btn.dataset.filter);
      showToast(`✅ '${btn.textContent.trim()}' 카테고리가 표시됩니다.`);
    });
  });

  renderProductCards("all");
}

// 6. 맞춤 로봇 추천 & ROI 시뮬레이터 (STEP 1, STEP 2, STEP 3 + 평수 프리셋 버튼 완벽 연동)
function initRecommender() {
  let state = {
    env: "warehouse",
    task: "dry-large",
    areaPyeong: 1500,
  };

  const envBtns = document.querySelectorAll("[data-rec-env]");
  const taskBtns = document.querySelectorAll("[data-rec-task]");
  const slider = document.getElementById("areaRangeInput");
  const areaDisplay = document.getElementById("areaValueDisplay");
  const presetBtns = document.querySelectorAll(".area-preset-btn");
  const resultCard = document.getElementById("recResultCard");

  // 환경별 가중치 (작업 난이도 및 인력 대체 효과 반영)
  const envMultiplier = {
    warehouse: 1.15,
    office: 1.0,
    retail: 1.25,
    restaurant: 1.35,
  };

  // 과제별 가중치
  const taskMultiplier = {
    "dry-large": 1.0,
    allinone: 1.2,
    greasy: 1.4,
    cargo: 1.5,
  };

  function calculateRecommendation(triggerToast = false) {
    let recKey = "dusti";
    if (state.task === "cargo") {
      recKey = "kargo";
    } else if (state.task === "greasy") {
      recKey = "washi";
    } else if (state.task === "allinone") {
      if (state.env === "retail" || state.areaPyeong >= 1000) {
        recKey = "sweepi-pro";
      } else {
        recKey = "sweepi";
      }
    } else if (state.task === "dry-large") {
      if (state.env === "office" || state.env === "retail" || state.areaPyeong <= 2000) {
        recKey = "dusti-pro";
      } else {
        recKey = "dusti";
      }
    }

    // 음식점 환경에서 건식/올인원 선택 시 워시 또는 스위피 추천 보정
    if (state.env === "restaurant" && state.task !== "cargo") {
      recKey = state.areaPyeong >= 500 && state.task === "allinone" ? "sweepi" : "washi";
    }

    const robot = ROBOTS_DATA[recKey];
    const sqm = Math.round(state.areaPyeong * 3.3058);
    const mult = (envMultiplier[state.env] || 1) * (taskMultiplier[state.task] || 1);

    const recommendedUnits = Math.max(
      1,
      Math.ceil(sqm / (recKey === "washi" ? 2200 : recKey === "kargo" ? 8000 : 10000))
    );
    const dailyRunHours = Math.min(20, Math.max(1.5, +(sqm / (robot.hourlyRate * recommendedUnits)).toFixed(1)));
    const monthlyHoursSaved = Math.max(36, Math.round((sqm / 420) * 22 * mult));
    const annualCostSavedManWon = Math.max(1500, Math.round(monthlyHoursSaved * 1.48 * 12));

    document.getElementById("recRobotImg").src = robot.image;
    document.getElementById("recRobotBadge").textContent = `${robot.badge} · 권장 ${recommendedUnits}대`;
    document.getElementById("recRobotName").textContent = `${robot.name} (${robot.enName})`;
    document.getElementById("recRobotReason").textContent = robot.summary;
    document.getElementById("roiUnits").textContent = `${recommendedUnits}대 (일 약 ${dailyRunHours}시간 가동)`;
    document.getElementById("roiHours").textContent = `월 약 ${monthlyHoursSaved.toLocaleString()}시간 단축`;
    document.getElementById("roiCost").textContent = `연 약 ${annualCostSavedManWon.toLocaleString()}만원 절감`;
    document.getElementById("roiEfficiency").textContent = robot.highlightMetric;

    document.getElementById("recModalBtn").onclick = () => openProductModal(recKey);
    document.getElementById("recPdfBtn").onclick = () => openPdfPreviewModal(recKey);
    document.getElementById("recConsultBtn").onclick = () => {
      selectRobotForInquiry(`${robot.name} (${robot.enName})`);
    };

    if (resultCard) {
      resultCard.classList.remove("pulse-update");
      void resultCard.offsetWidth;
      resultCard.classList.add("pulse-update");
      setTimeout(() => resultCard.classList.remove("pulse-update"), 260);
    }

    if (triggerToast) {
      showToast(`✨ 최적 매칭 결과: ${robot.name} (${robot.enName}) · 권장 ${recommendedUnits}대`);
    }
  }

  function updateArea(pyeong, triggerToast = false) {
    state.areaPyeong = pyeong;
    if (slider) slider.value = pyeong;
    const sqm = Math.round(pyeong * 3.3058);
    if (areaDisplay) {
      areaDisplay.textContent = `${pyeong.toLocaleString()}평 (약 ${sqm.toLocaleString()}㎡)`;
    }
    presetBtns.forEach((b) => {
      b.classList.toggle("active", parseInt(b.dataset.pyeong, 10) === pyeong);
    });
    calculateRecommendation(triggerToast);
  }

  envBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      envBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.env = btn.dataset.recEnv;
      calculateRecommendation(true);
    });
  });

  taskBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      taskBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.task = btn.dataset.recTask;
      calculateRecommendation(true);
    });
  });

  if (slider) {
    slider.addEventListener("input", (e) => {
      updateArea(parseInt(e.target.value, 10), false);
    });
  }

  presetBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      updateArea(parseInt(btn.dataset.pyeong, 10), true);
    });
  });

  updateArea(1500, false);
}

// 7. 10대 산업별 솔루션 탭 (클릭 시 로봇 이미지·추천칩·상담연동 동적 변경)
function initIndustries() {
  const pillsContainer = document.getElementById("industryPills");
  const titleEl = document.getElementById("indTitle");
  const descEl = document.getElementById("indDesc");
  const imgEl = document.getElementById("indImage");
  const chipsEl = document.getElementById("indRobotChips");
  const benefitsEl = document.getElementById("indBenefits");
  const consultBtn = document.getElementById("indConsultBtn");

  if (!pillsContainer) return;

  pillsContainer.innerHTML = INDUSTRIES_DATA.map(
    (ind, idx) => `
    <button type="button" class="industry-pill ${idx === 0 ? "active" : ""}" data-ind-id="${ind.id}">
      ${ind.name}
    </button>
  `
  ).join("");

  function renderIndustry(id, notify = false) {
    const item = INDUSTRIES_DATA.find((i) => i.id === id) || INDUSTRIES_DATA[0];
    titleEl.textContent = `${item.name} 맞춤 스마트 로봇 솔루션`;
    descEl.textContent = item.desc;
    if (imgEl) {
      imgEl.src = item.image;
      imgEl.alt = `${item.name} 추천 로봇`;
    }

    if (chipsEl) {
      chipsEl.innerHTML = item.robotKeys
        .map((k) => {
          const r = ROBOTS_DATA[k];
          return `
            <button type="button" class="btn btn-secondary btn-sm" onclick="openProductModal('${r.id}')">
              🤖 ${r.name} (${r.enName}) 상세보기
            </button>
          `;
        })
        .join("");
    }

    benefitsEl.innerHTML = item.benefits
      .map(
        (b) => `
      <div class="industry-benefit-card">
        <h4>✓ ${b.title}</h4>
        <p>${b.text}</p>
      </div>
    `
      )
      .join("");

    if (consultBtn) {
      const firstRobot = ROBOTS_DATA[item.robotKeys[0]];
      consultBtn.onclick = () => {
        const contentEl = document.getElementById("ucontent");
        if (contentEl && !contentEl.value) {
          contentEl.value = `[${item.name}] 현장 도입 및 시연 문의드립니다.`;
        }
        selectRobotForInquiry(`${firstRobot.name} (${firstRobot.enName})`);
      };
    }

    if (notify) {
      showToast(`🏢 [${item.name}] 맞춤 솔루션이 선택되었습니다.`);
    }
  }

  pillsContainer.querySelectorAll(".industry-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      pillsContainer.querySelectorAll(".industry-pill").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderIndustry(btn.dataset.indId, true);
    });
  });

  renderIndustry("1", false);
}

// 8. 모달 제어 (제품 상세 모달 / PDF 미리보기 모달 / 홍보 영상 모달)
function initModalCloseHandlers() {
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeAllModals();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllModals();
  });
}

window.closeAllModals = function () {
  document.querySelectorAll(".modal-backdrop.open").forEach((m) => {
    m.classList.remove("open");
  });
  const videoFrame = document.getElementById("videoModalIframe");
  if (videoFrame) videoFrame.src = "";
};

// 8-A. 제품 상세 모달 열기
window.openProductModal = function (robotKey) {
  const data = ROBOTS_DATA[robotKey];
  if (!data) return;

  const backdrop = document.getElementById("productModal");
  const content = document.getElementById("modalBodyContent");

  const specsHtml = Object.entries(data.specs)
    .map(
      ([k, v]) => `
    <div class="modal-spec-item">
      <span>${k}</span>
      <strong>${v}</strong>
    </div>
  `
    )
    .join("");

  const appsHtml = data.applications
    .map((app) => `<span class="hero-tag" style="cursor:default;"># ${app}</span>`)
    .join("");

  content.innerHTML = `
    <div class="modal-top-grid">
      <div style="text-align:center; background:var(--gradient-stage); border-radius:20px; padding:24px; border:1px solid var(--border-subtle);">
        <img src="${data.image}" alt="${data.name}" />
      </div>
      <div>
        <span class="section-badge">${data.badge}</span>
        <h2 style="font-size:2rem; font-weight:900; margin-bottom:6px;">
          ${data.name} <span class="font-tech" style="color:var(--accent-primary); font-size:1.3rem;">${data.enName}</span>
        </h2>
        <p style="color:var(--accent-primary); font-weight:700; margin-bottom:10px;">${data.tagline}</p>
        <p style="color:var(--text-secondary); font-size:0.94rem; margin-bottom:16px;">${data.summary}</p>
        <div class="hero-quick-tags" style="margin-bottom:20px;">${appsHtml}</div>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <button type="button" class="btn btn-primary btn-sm" onclick="openPdfPreviewModal('${data.id}')">
            📄 PDF 제품소개서 미리보기
          </button>
          <a href="${data.pdf}" download class="btn btn-outline btn-sm" onclick="showToast('📥 ${data.name} 제품소개서 다운로드가 시작되었습니다.')">
            ⬇️ PDF 다운로드
          </a>
          <button type="button" class="btn btn-secondary btn-sm" onclick="selectRobotForInquiry('${data.name} (${data.enName})')">
            ✍️ 이 로봇 시연·견적 신청
          </button>
        </div>
      </div>
    </div>

    <h3 style="font-size:1.12rem; font-weight:800; margin-bottom:12px; color:var(--accent-primary);">
      📋 모델 상세 제원 (Specifications)
    </h3>
    <div class="modal-spec-grid">${specsHtml}</div>

    <h3 style="font-size:1.12rem; font-weight:800; margin-bottom:12px; color:var(--accent-primary);">
      💡 핵심 기술 및 특장점
    </h3>
    <ul class="product-features-list" style="margin-bottom:0;">
      ${data.features.map((f) => `<li><span>${f}</span></li>`).join("")}
    </ul>
  `;

  closeAllModals();
  backdrop.classList.add("open");
};

// 8-B. 페이지 내 PDF 뷰어 모달 열기
window.openPdfPreviewModal = function (robotKey) {
  const data = ROBOTS_DATA[robotKey];
  if (!data) return;

  const backdrop = document.getElementById("pdfModal");
  const content = document.getElementById("pdfModalContent");

  content.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px; padding-right:44px;">
      <div>
        <span class="section-badge" style="margin-bottom:4px;">OFFICIAL PDF BROCHURE</span>
        <h3 style="font-size:1.35rem; font-weight:800;">${data.pdfTitle}</h3>
      </div>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <a href="${data.pdf}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
          새 탭에서 크게 열기 ↗
        </a>
        <a href="${data.pdf}" download class="btn btn-primary btn-sm" onclick="showToast('📥 ${data.name} PDF 다운로드를 시작합니다.')">
          ⬇️ PDF 파일 저장
        </a>
      </div>
    </div>
    <div style="width:100%; height:70vh; border-radius:14px; overflow:hidden; border:1px solid var(--border-strong); background:#1e293b;">
      <iframe
        src="${data.pdf}"
        title="${data.pdfTitle}"
        style="width:100%; height:100%; border:none;"
      ></iframe>
    </div>
  `;

  closeAllModals();
  backdrop.classList.add("open");
};

// 8-C. 공식 홍보 영상 모달 열기
window.openVideoModal = function (videoIndex = 0) {
  const backdrop = document.getElementById("videoModal");
  const content = document.getElementById("videoModalContent");
  const video = OFFICIAL_VIDEOS[videoIndex] || OFFICIAL_VIDEOS[0];

  const tabsHtml = OFFICIAL_VIDEOS.map(
    (v, idx) => `
    <button
      type="button"
      class="btn ${idx === videoIndex ? "btn-primary" : "btn-outline"} btn-sm"
      onclick="openVideoModal(${idx})"
    >
      🎬 영상 #${idx + 1}
    </button>
  `
  ).join("");

  content.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px; padding-right:44px;">
      <div>
        <span class="section-badge" style="margin-bottom:4px;">SERIM ROBOTICS OFFICIAL VIDEO</span>
        <h3 style="font-size:1.3rem; font-weight:800;">${video.title}</h3>
      </div>
      <div style="display:flex; gap:8px;">${tabsHtml}</div>
    </div>
    <div style="position:relative; width:100%; padding-bottom:56.25%; border-radius:16px; overflow:hidden; background:#000;">
      <iframe
        id="videoModalIframe"
        src="https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0"
        title="${video.title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style="position:absolute; inset:0; width:100%; height:100%; border:none;"
      ></iframe>
    </div>
  `;

  closeAllModals();
  backdrop.classList.add("open");
};

// 상담 폼으로 로봇 자동 선택 및 스크롤 이동
window.selectRobotForInquiry = function (robotLabel) {
  closeAllModals();
  const selectEl = document.getElementById("interestRobotSelect");
  if (selectEl) {
    for (let i = 0; i < selectEl.options.length; i++) {
      if (selectEl.options[i].value.includes(robotLabel.split(" ")[0])) {
        selectEl.selectedIndex = i;
        break;
      }
    }
  }
  const contactSec = document.getElementById("contact");
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: "smooth" });
  }
  setTimeout(() => {
    const nameInput = document.getElementById("uname");
    if (nameInput) nameInput.focus();
  }, 550);
  showToast(`✍️ 상담 폼에 '${robotLabel}' 모델이 자동 선택되었습니다.`);
};

// 9. 상담 및 무료 시연 신청 폼 제출
function initContactForm() {
  const form = document.getElementById("serimContactForm");
  const feedback = document.getElementById("formFeedback");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("uname");
    const tel = formData.get("utel");
    const robot = formData.get("robot");
    const type = formData.get("inquiryType");

    feedback.style.display = "block";
    feedback.innerHTML = `
      <div style="background:var(--accent-Soft-bg); border:2px solid var(--accent-primary); border-radius:16px; padding:20px; margin-top:12px;">
        <strong style="color:var(--accent-primary); font-size:1.05rem; display:block; margin-bottom:6px;">
          ✓ [${type}] 신청이 완료되었습니다!
        </strong>
        <p style="font-size:0.92rem; color:var(--text-primary); margin-bottom:12px;">
          <strong>${name}</strong> 고객님(${tel}), 선택하신 <strong>${robot}</strong> 모델에 대해 세림로보틱스 전문 엔지니어가 확인 후 신속히 연락드리겠습니다.
        </p>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <button type="button" class="btn btn-primary btn-sm" onclick="handlePhoneAction('1800-9633')">
            📞 대표번호 1800-9633 복사
          </button>
          <a href="https://www.serimrobotics.co.kr/inquiry/inquiry__1.html" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
            공식 홈페이지 빠른상담 접수 ↗
          </a>
        </div>
      </div>
    `;
    showToast("🎉 무료 시연 및 상담 신청이 정상 접수되었습니다!");
    form.reset();
  });
}
