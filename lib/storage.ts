import { sampleRecipes } from "@/data/recipes";
import { GroceryItem, MealPlan, Note, Recipe } from "@/lib/types";
import { makeId } from "@/lib/recipe-utils";

const RECIPES_KEY = "whats-cookin-jin-recipes";
const INGREDIENTS_KEY = "whats-cookin-jin-ingredients";
const GROCERY_KEY = "whats-cookin-jin-grocery";
const NOTES_KEY = "whats-cookin-jin-notes";
const MEAL_PLAN_KEY = "whats-cookin-jin-meal-plan";
const CORRECT_INSTAGRAM_RECIPE_KEY = "whats-cookin-jin-migration-instagram-DUP5oZbEvN0-v2";
const CORRECT_INSTAGRAM_SOURCE = "https://www.instagram.com/p/DUP5oZbEvN0/";
const CORRECT_INSTAGRAM_IMAGE = "/recipe-media/albaechu-roll-riceball.jpg";
const CHIPOTLE_RECIPE_KEY = "whats-cookin-jin-migration-instagram-DVk5kmrCSqA-v1";
const CHIPOTLE_SOURCE = "https://www.instagram.com/p/DVk5kmrCSqA/";
const CHIPOTLE_IMAGE = "/recipe-media/chipotle-chicken-kimbap.jpg";
const MACKEREL_OCHAZUKE_RECIPE_KEY = "whats-cookin-jin-migration-instagram-DTzUfNIknjs-v1";
const MACKEREL_OCHAZUKE_SOURCE = "https://www.instagram.com/p/DTzUfNIknjs/";
const MACKEREL_OCHAZUKE_IMAGE = "/recipe-media/mackerel-ochazuke.jpg";
const BASIL_PROSCIUTTO_RECIPE_KEY = "whats-cookin-jin-migration-instagram-DYZSk2uCDxt-v1";
const BASIL_PROSCIUTTO_SOURCE = "https://www.instagram.com/p/DYZSk2uCDxt/";
const BASIL_PROSCIUTTO_IMAGE = "/recipe-media/basil-prosciutto-sandwich.jpg";
const LUNCHBOX_REFERENCE_RECIPE_KEY = "whats-cookin-jin-migration-lunchbox-reference-v1";
const LUNCHBOX_REFERENCE_SOURCE = "https://www.instagram.com/p/CgJCfDKpNx_/?img_index=1";
const LUNCHBOX_REFERENCE_IMAGES = [
  "/recipe-media/lunchbox-reference-1.jpg",
  "/recipe-media/lunchbox-reference-2.jpg",
  "/recipe-media/lunchbox-reference-3.jpg"
];
const CRISPY_DONUT_RECIPE_KEY = "whats-cookin-jin-migration-instagram-DXOZ1AFkeDz-v1";
const CRISPY_DONUT_SOURCE = "https://www.instagram.com/p/DXOZ1AFkeDz/";
const CRISPY_DONUT_IMAGE = "/recipe-media/crispy-donut-grilled.jpg";
const HOME_CHEESE_PASTA_RECIPE_KEY = "whats-cookin-jin-migration-youtube-GiLssCwAsmw-v1";
const HOME_CHEESE_PASTA_SOURCE = "https://www.youtube.com/watch?v=GiLssCwAsmw";
const HOME_CHEESE_PASTA_IMAGE = "/recipe-media/home-cheese-pasta.jpg";
const LEE_DAHEE_TOFU_RICE_RECIPE_KEY = "whats-cookin-jin-migration-youtube-g7MonAmFDYw-v1";
const LEE_DAHEE_TOFU_RICE_SOURCE = "https://www.youtube.com/watch?v=g7MonAmFDYw";
const LEE_DAHEE_TOFU_RICE_IMAGE = "/recipe-media/lee-dahee-quick-diet-recipe.jpg";
const ANCHOVY_JAMON_KIMBAP_RECIPE_KEY = "whats-cookin-jin-migration-youtube-TBKpKegeDx0-v1";
const ANCHOVY_JAMON_KIMBAP_SOURCE = "https://www.youtube.com/watch?v=TBKpKegeDx0";
const ANCHOVY_JAMON_KIMBAP_IMAGE = "/recipe-media/anchovy-jamon-kimbap.jpg";
const MUSHROOM_TONKATSU_RECIPE_KEY = "whats-cookin-jin-migration-youtube-1nZw3EmWfg8-v1";
const MUSHROOM_TONKATSU_SOURCE = "https://www.youtube.com/watch?v=1nZw3EmWfg8";
const MUSHROOM_TONKATSU_IMAGE = "/recipe-media/king-oyster-mushroom-tonkatsu.jpg";
const AGLIO_OLIO_MEAL_PREP_RECIPE_KEY = "whats-cookin-jin-migration-youtube-bRbjuOri248-v1";
const AGLIO_OLIO_MEAL_PREP_SOURCE = "https://www.youtube.com/watch?v=bRbjuOri248";
const AGLIO_OLIO_MEAL_PREP_IMAGE = "/recipe-media/aglio-olio-meal-prep.jpg";
const DIET_WRAP_MEAL_PREP_RECIPE_KEY = "whats-cookin-jin-migration-youtube-X9QXgRN5Nko-v1";
const DIET_WRAP_MEAL_PREP_SOURCE = "https://www.youtube.com/watch?v=X9QXgRN5Nko";
const DIET_WRAP_MEAL_PREP_IMAGE = "/recipe-media/diet-wrap-meal-prep.jpg";
const SOY_EGG_PASTA_RECIPE_KEY = "whats-cookin-jin-migration-youtube-eIX8sxfQZjI-v1";
const SOY_EGG_PASTA_SOURCE = "https://www.youtube.com/watch?v=eIX8sxfQZjI";
const SOY_EGG_PASTA_IMAGE = "/recipe-media/soy-egg-pasta.jpg";
const SPAM_TOFU_JJAGEULI_RECIPE_KEY = "whats-cookin-jin-migration-youtube-cImdJ_2Od4I-v1";
const SPAM_TOFU_JJAGEULI_SOURCE = "https://www.youtube.com/watch?v=cImdJ_2Od4I";
const SPAM_TOFU_JJAGEULI_IMAGE = "/recipe-media/spam-tofu-jjageuli.jpg";
const CABBAGE_TTEOKBOKKI_RECIPE_KEY = "whats-cookin-jin-migration-youtube-K-hndP-Du3s-v1";
const CABBAGE_TTEOKBOKKI_SOURCE = "https://www.youtube.com/watch?v=K-hndP-Du3s";
const CABBAGE_TTEOKBOKKI_IMAGE = "/recipe-media/cabbage-tteokbokki.jpg";
const SALTY_GIRL_SNACK_RECIPE_KEY = "whats-cookin-jin-migration-youtube-ms72lxZ6o44-v1";
const SALTY_GIRL_SNACK_SOURCE = "https://www.youtube.com/watch?v=ms72lxZ6o44";
const SALTY_GIRL_SNACK_IMAGE = "/recipe-media/salty-girl-snack.jpg";
const SALMON_POT_RICE_RECIPE_KEY = "whats-cookin-jin-migration-youtube-_FONTYv-fgo-v1";
const SALMON_POT_RICE_SOURCE = "https://www.youtube.com/watch?v=_FONTYv-fgo";
const SALMON_POT_RICE_IMAGE = "/recipe-media/salmon-pot-rice.jpg";
const CAULIFLOWER_ALFREDO_PASTA_RECIPE_KEY = "whats-cookin-jin-migration-instagram-DYEd1CcvpCZ-v1";
const CAULIFLOWER_ALFREDO_PASTA_SOURCE = "https://www.instagram.com/p/DYEd1CcvpCZ/";
const CAULIFLOWER_ALFREDO_PASTA_IMAGE = "/recipe-media/cauliflower-alfredo-pasta.jpg";
const ALMOND_BUTTER_BURRATA_SANDWICH_RECIPE_KEY = "whats-cookin-jin-migration-instagram-DXMRvrREt2L-v1";
const ALMOND_BUTTER_BURRATA_SANDWICH_SOURCE = "https://www.instagram.com/p/DXMRvrREt2L/";
const ALMOND_BUTTER_BURRATA_SANDWICH_IMAGE = "/recipe-media/almond-butter-burrata-sandwich.jpg";
const CRISPY_GNOCCHI_SALAD_RECIPE_KEY = "whats-cookin-jin-migration-instagram-DWiteipj5Xc-v1";
const CRISPY_GNOCCHI_SALAD_SOURCE = "https://www.instagram.com/p/DWiteipj5Xc/";
const CRISPY_GNOCCHI_SALAD_IMAGE = "/recipe-media/crispy-gnocchi-salad.jpg";
const APPLE_BRIE_SANDWICH_RECIPE_KEY = "whats-cookin-jin-migration-instagram-DVc7MrUETP1-v1";
const APPLE_BRIE_SANDWICH_SOURCE = "https://www.instagram.com/p/DVc7MrUETP1/";
const APPLE_BRIE_SANDWICH_IMAGE = "/recipe-media/apple-brie-sandwich.jpg";
const TZATZIKI_SAUCE_RECIPE_KEY = "whats-cookin-jin-migration-instagram-DYq12Y8SkX-v1";
const TZATZIKI_SAUCE_SOURCE = "https://www.instagram.com/p/DYq12Y8SkX-/";
const TZATZIKI_SAUCE_IMAGE = "/recipe-media/tzatziki-sauce.jpg";
const MISO_CREAM_CHEESE_PASTA_RECIPE_KEY = "whats-cookin-jin-migration-instagram-DX1UsVuhdnJ-v1";
const MISO_CREAM_CHEESE_PASTA_SOURCE = "https://www.instagram.com/p/DX1UsVuhdnJ/";
const MISO_CREAM_CHEESE_PASTA_IMAGE = "/recipe-media/miso-cream-cheese-pasta.jpg";
const YUPDDUK_STYLE_TTEOKBOKKI_RECIPE_KEY = "whats-cookin-jin-migration-youtube-D2cc-cDwpYA-v1";
const YUPDDUK_STYLE_TTEOKBOKKI_SOURCE = "https://www.youtube.com/watch?v=D2cc-cDwpYA";
const YUPDDUK_STYLE_TTEOKBOKKI_IMAGE = "/recipe-media/yupdduk-style-tteokbokki.jpg";
const SHEPHERDS_PURSE_DOENJANG_RAMEN_RECIPE_KEY = "whats-cookin-jin-migration-youtube-RbpoDQV-UWY-v1";
const SHEPHERDS_PURSE_DOENJANG_RAMEN_SOURCE = "https://www.youtube.com/watch?v=RbpoDQV-UWY";
const SHEPHERDS_PURSE_DOENJANG_RAMEN_IMAGE = "/recipe-media/shepherds-purse-doenjang-ramen.jpg";
const SAMPLE_RECIPE_IDS = new Set(sampleRecipes.map((recipe) => recipe.id));

function canUseStorage() {
  try {
    return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
  } catch {
    return false;
  }
}

function readJson<T>(key: string, fallback: T): T {
  if (!canUseStorage()) return fallback;

  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

function makeCorrectInstagramRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `instagram-cabbage-roll-riceball-${Date.now()}`,
    title: "육수에 푹 적신 알배추롤 & 구운 주먹밥",
    sourceUrl: CORRECT_INSTAGRAM_SOURCE,
    sourceType: "Instagram",
    category: "한식 / 밥",
    mealType: "Dinner",
    dietGoal: "None",
    time: "30 min",
    difficulty: "Easy",
    servings: 1,
    ingredients: [
      "알배추",
      "닭다리살",
      "두부",
      "소금",
      "후추",
      "물",
      "쯔유",
      "밥",
      "간장",
      "맛술",
      "물엿",
      "혼다시",
      "참기름"
    ],
    steps: [
      "닭다리살에 소금, 후추로 간한 뒤 팬에 볶고 잠시 빼둬요.",
      "닭을 볶은 팬에 물 300ml와 쯔유를 넣어 간장 국물을 만들어요.",
      "볶아둔 닭다리살을 다지고 두부 반 모와 섞어요.",
      "알배추는 살짝 데쳐 준비해요.",
      "알배추를 펼친 뒤 닭다리살과 두부 소를 넣고 돌돌 말아요. 심지가 억세면 칼집을 살짝 내면 잘 말려요.",
      "알배추롤을 5분 정도 찐 뒤, 만들어둔 국물을 부어 먹어요.",
      "구운 주먹밥은 간장 2스푼, 맛술 1스푼, 물엿 1스푼, 혼다시 0.5스푼을 밥과 섞어 모양을 잡아요.",
      "참기름을 두른 팬에 주먹밥을 앞뒤로 노릇하게 구워요.",
      "마지막에 주먹밥을 국물에 적셔 미니 오차츠케처럼 즐겨요."
    ],
    tags: ["알배추", "주먹밥", "오차츠케", "닭육수", "따뜻한 한 끼"],
    notes: "인스타 캡션 기반 정리. 1스푼은 약 15ml 기준.",
    imageUrl: CORRECT_INSTAGRAM_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeChipotleKimbapRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `instagram-chipotle-chicken-kimbap-${Date.now()}`,
    title: "치폴레 치킨김밥",
    sourceUrl: CHIPOTLE_SOURCE,
    sourceType: "Instagram",
    category: "한식 / 밥",
    mealType: "Lunch",
    dietGoal: "High Protein",
    time: "20 min",
    difficulty: "Easy",
    servings: 1,
    ingredients: [
      "김",
      "밥",
      "라이스소스",
      "달걀",
      "닭가슴살",
      "할라치폴레",
      "소금",
      "후추",
      "치즈",
      "오이",
      "궁채피클",
      "우엉조림",
      "청상추"
    ],
    steps: [
      "닭가슴살은 익힌 뒤 결대로 잘게 찢어요.",
      "찢은 닭가슴살에 할라치폴레 세 스푼을 넣고 촉촉하게 버무려요.",
      "달걀은 소금 간을 살짝 해서 도톰하게 말거나 부쳐요.",
      "밥에는 라이스소스를 넣어 간을 맞춰요.",
      "김 위에 밥을 얇게 펴고 청상추, 치즈, 달걀, 오이, 우엉조림, 궁채피클, 치폴레 닭가슴살을 올려요.",
      "재료가 흐트러지지 않게 단단히 말아 먹기 좋게 썰어요.",
      "더 매콤하고 촉촉하게 먹고 싶으면 할라치폴레를 곁들여 찍어 먹어요."
    ],
    tags: ["김밥", "닭가슴살", "치폴레", "고단백", "도시락"],
    notes: "인스타 캡션 기반 정리. 닭가슴살 한 덩이가 들어가는 고단백 김밥.",
    imageUrl: CHIPOTLE_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeMackerelOchazukeRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `instagram-mackerel-ochazuke-${Date.now()}`,
    title: "고등어 오차즈케",
    sourceUrl: MACKEREL_OCHAZUKE_SOURCE,
    sourceType: "Instagram",
    category: "한식 / 밥",
    mealType: "Lunch",
    dietGoal: "None",
    time: "10 min",
    difficulty: "Easy",
    servings: 1,
    ingredients: [
      "밥",
      "비비고 순살 고등어구이",
      "따뜻한 녹차 또는 다시 육수",
      "김가루",
      "쪽파",
      "깨",
      "와사비"
    ],
    steps: [
      "비비고 순살 고등어구이를 전자레인지에 데워요.",
      "그릇에 따뜻한 밥을 담고 데운 고등어구이를 올려요.",
      "김가루, 쪽파, 깨를 취향껏 올려요.",
      "따뜻한 녹차나 다시 육수를 가장자리로 부어요.",
      "기호에 따라 와사비를 조금 곁들여 가볍게 풀어 먹어요."
    ],
    tags: ["오차즈케", "고등어", "간단 점심", "전자레인지", "생선"],
    notes:
      "인스타 캡션 기반 정리. 캡션에는 순살 고등어구이를 전자레인지에 데워 간단히 먹는 오차즈케로 소개되어 있어요. 오차즈케 기본 토핑은 먹기 좋게 보완했습니다.",
    imageUrl: MACKEREL_OCHAZUKE_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeBasilProsciuttoSandwichRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `instagram-basil-prosciutto-sandwich-${Date.now()}`,
    title: "바질 프로슈토 샌드위치",
    sourceUrl: BASIL_PROSCIUTTO_SOURCE,
    sourceType: "Instagram",
    category: "간단 요리",
    mealType: "Lunch",
    dietGoal: "None",
    time: "15 min",
    difficulty: "Easy",
    servings: 1,
    ingredients: [
      "포카치아",
      "바질",
      "올리브오일",
      "잣",
      "파르미지아노 레지아노",
      "마늘",
      "소금",
      "후추",
      "부라타치즈",
      "프로슈토",
      "과일잼",
      "루바브 잼"
    ],
    steps: [
      "바질, 올리브오일, 잣, 파르미지아노 레지아노, 마늘을 절구나 블렌더에 넣고 갈아요.",
      "소금과 후추로 바질페스토 간을 맞춰요.",
      "포카치아를 반으로 갈라 안쪽에 바질페스토를 넉넉히 발라요.",
      "부라타치즈를 올리고 프로슈토를 겹겹이 얹어요.",
      "과일잼이나 루바브 잼을 조금 곁들여 단맛과 산미를 더해요.",
      "빵을 덮고 먹기 좋게 잘라 바로 먹어요."
    ],
    tags: ["샌드위치", "바질페스토", "프로슈토", "부라타", "포카치아"],
    notes: "인스타 캡션 기반 정리. 바질페스토는 먹을 만큼만 바로 만들어 쓰는 것이 포인트.",
    imageUrl: BASIL_PROSCIUTTO_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeLunchboxReferenceRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `instagram-lunchbox-reference-${Date.now()}`,
    title: "도시락 예시 모음",
    sourceUrl: LUNCHBOX_REFERENCE_SOURCE,
    sourceType: "Instagram",
    category: "간단 요리",
    mealType: "Lunch",
    dietGoal: "None",
    time: "0 min",
    difficulty: "Easy",
    servings: 1,
    ingredients: ["키토김밥", "닭가슴살 큐브", "연어", "오이", "샐러드", "방울토마토", "단호박"],
    steps: [
      "레시피가 아니라 도시락 구성과 담음새를 참고하는 이미지 모음이에요.",
      "김밥, 단백질, 채소, 작은 사이드 재료를 한 도시락 안에 나눠 담는 느낌을 참고해요.",
      "상세창에서 세 장의 이미지를 같이 보면서 도시락 색감과 배치를 확인해요."
    ],
    tags: ["도시락", "참고용", "피크닉", "식단", "담음새"],
    notes:
      "인스타 참고 이미지 3장을 하나로 묶어둔 카드예요. 출처: https://www.instagram.com/p/CgJCfDKpNx_/?img_index=1, https://www.instagram.com/p/CjF0j0IpSpF/?img_index=2, https://www.instagram.com/p/CiM1CNGutRj/?img_index=2",
    imageUrl: LUNCHBOX_REFERENCE_IMAGES[0],
    galleryImages: LUNCHBOX_REFERENCE_IMAGES,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeCrispyDonutRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `instagram-crispy-donut-grilled-${Date.now()}`,
    title: "크리스피 도넛 굽먹",
    sourceUrl: CRISPY_DONUT_SOURCE,
    sourceType: "Instagram",
    category: "간식",
    mealType: "Snack",
    dietGoal: "None",
    time: "12 min",
    difficulty: "Easy",
    servings: 1,
    ingredients: ["오리지널 글레이즈드 도넛"],
    steps: [
      "팬을 약불로 예열해요.",
      "오리지널 글레이즈드 도넛을 팬에 올리고 2분 정도 구워요.",
      "타지 않게 앞뒤로 자주 뒤집어가며 겉면을 바삭하게 만들어요.",
      "팬에서 꺼낸 뒤 10분 정도 충분히 식혀요.",
      "겉은 바삭하고 속은 쫄깃해졌을 때 바로 먹어요."
    ],
    tags: ["도넛", "간식", "굽먹", "크리스피크림", "오리지널글레이즈드"],
    notes: "인스타 캡션 기반 정리. 약불에서 짧게 굽고, 10분 식혀 겉바속쫄 식감을 만드는 게 포인트.",
    imageUrl: CRISPY_DONUT_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeHomeCheesePastaRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `youtube-home-cheese-pasta-${Date.now()}`,
    title: "홈파스타 치즈파스타",
    sourceUrl: HOME_CHEESE_PASTA_SOURCE,
    sourceType: "YouTube",
    category: "면 / 파스타",
    mealType: "Dinner",
    dietGoal: "None",
    time: "10 min",
    difficulty: "Easy",
    servings: 1,
    ingredients: ["파스타면", "체다치즈", "우유", "버터", "다진 마늘", "소금", "후추", "면수"],
    steps: [
      "파스타면을 소금 넣은 물에 삶고, 면수는 조금 남겨둬요.",
      "팬에 버터와 다진 마늘을 넣고 약불에서 향을 내요.",
      "우유를 붓고 체다치즈를 넣어 녹이면서 치즈 소스를 만들어요.",
      "삶은 면을 넣고 면수를 조금씩 더해가며 꾸덕하게 섞어요.",
      "후추를 넉넉히 뿌리고 간이 부족하면 소금으로 맞춰요.",
      "소스가 면에 잘 붙으면 따뜻할 때 바로 먹어요."
    ],
    tags: ["홈파스타", "치즈파스타", "10분컷", "집밥", "간단레시피"],
    notes:
      "유튜브 설명 기반 정리. 영상 설명에는 어남선생 치즈파스타를 변형한 느끼하고 고급스러운 치즈파스타라고 소개되어 있어요. 정확한 계량 텍스트는 공개되어 있지 않아 집에서 따라 하기 쉬운 기본 치즈파스타 흐름으로 정리했습니다.",
    imageUrl: HOME_CHEESE_PASTA_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeLeeDaheeTofuRiceRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `youtube-lee-dahee-tofu-rice-${Date.now()}`,
    title: "이다희 두부 묵은지 비빔밥",
    sourceUrl: LEE_DAHEE_TOFU_RICE_SOURCE,
    sourceType: "YouTube",
    category: "다이어트",
    mealType: "Lunch",
    dietGoal: "Light",
    time: "10 min",
    difficulty: "Easy",
    servings: 1,
    ingredients: ["두부", "묵은지", "현미밥", "김", "참기름", "깨", "후추"],
    steps: [
      "두부는 물기를 빼고 으깨요.",
      "팬에 으깬 두부를 넣고 중약불에서 수분이 날아가도록 볶아요.",
      "묵은지는 물기를 가볍게 짠 뒤 먹기 좋게 잘게 썰어요.",
      "그릇에 현미밥, 볶은 두부, 묵은지를 넣고 섞어요.",
      "참기름, 깨, 후추를 조금 넣어 고소하게 마무리해요.",
      "김에 한입씩 싸서 먹어요."
    ],
    tags: ["급진급빠", "다이어트", "두부", "묵은지", "김쌈"],
    notes:
      "유튜브 영상과 공개 레시피 페이지를 참고해 정리했어요. 정확한 계량보다 두부로 포만감을 더하고 묵은지와 김으로 맛을 잡는 다이어트식 한 그릇으로 보면 좋아요.",
    imageUrl: LEE_DAHEE_TOFU_RICE_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeAnchovyJamonKimbapRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `youtube-anchovy-jamon-kimbap-${Date.now()}`,
    title: "엔초비 김밥 & 하몽 김밥",
    sourceUrl: ANCHOVY_JAMON_KIMBAP_SOURCE,
    sourceType: "YouTube",
    category: "한식 / 밥",
    mealType: "Lunch",
    dietGoal: "None",
    time: "25 min",
    difficulty: "Medium",
    servings: 2,
    ingredients: [
      "김",
      "밥",
      "설탕",
      "레몬즙",
      "피쉬소스",
      "올리브오일",
      "계란말이",
      "엔초비",
      "바질",
      "고수",
      "하몽",
      "썬드라이드 토마토"
    ],
    steps: [
      "따뜻한 밥에 설탕, 레몬즙, 피쉬소스, 올리브오일을 넣고 고루 섞어 밥을 조미해요.",
      "엔초비 김밥은 김 위에 조미한 밥을 적당량 펴요.",
      "계란말이, 엔초비, 바질 또는 고수를 올린 뒤 단단하게 말아요.",
      "엔초비는 너무 적게 넣으면 비릴 수 있으니 한 줄로 곱게 넣어 맛을 살려요.",
      "하몽 김밥은 하몽을 한 장씩 떼어 잘 펴고 그 위에 김을 올려요.",
      "조미한 밥, 엔초비, 썬드라이드 토마토, 바질 또는 고수를 올려 돌돌 말아요.",
      "먹기 좋은 두께로 썰어 도시락이나 피크닉 메뉴로 즐겨요."
    ],
    tags: ["김밥", "엔초비", "하몽", "피크닉", "살롱드태윤"],
    notes:
      "유튜브 설명란 기반 정리. 밥 조미의 레몬즙은 식초로 대체 가능하고, 계란말이는 영상에서 별도 비법 레시피를 참고하라고 안내되어 있어요.",
    imageUrl: ANCHOVY_JAMON_KIMBAP_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeMushroomTonkatsuRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `youtube-mushroom-tonkatsu-${Date.now()}`,
    title: "새송이 버섯 돈가스",
    sourceUrl: MUSHROOM_TONKATSU_SOURCE,
    sourceType: "YouTube",
    category: "간단 요리",
    mealType: "Dinner",
    dietGoal: "None",
    time: "10 min",
    difficulty: "Easy",
    servings: 3,
    ingredients: [
      "새송이 버섯",
      "돼지고기 앞다리살 불고기용",
      "라이스페이퍼",
      "모짜렐라 피자치즈",
      "소금",
      "후추",
      "물",
      "현미유",
      "돈가스 소스",
      "타르타르소스"
    ],
    steps: [
      "새송이 버섯 3개를 찜기나 전자레인지로 5분 정도 익힌 뒤 식혀요.",
      "식힌 버섯을 돌려 깎듯이 저며 넓게 펼쳐요.",
      "다시 말리지 않게 격자 칼집을 내고 물기를 제거해요.",
      "버섯 앞뒤에 소금과 후추를 한두 꼬집씩 뿌려 밑간해요.",
      "라이스페이퍼를 물에 담갔다 바로 빼요.",
      "라이스페이퍼 위에 고기, 버섯, 모짜렐라 치즈, 고기 순서로 올리고 감싸요.",
      "팬에 현미유를 조금 두른 뒤 키친타월로 얇게 바르듯 닦아요.",
      "중불에서 돈가스 겉면을 앞뒤로 먼저 익혀요.",
      "물 100ml를 붓고 뚜껑을 닫아 3분 익혀요.",
      "뚜껑을 열고 물이 증발할 때까지 노릇하게 구워 돈가스 소스나 타르타르소스와 먹어요."
    ],
    tags: ["돈가스", "새송이버섯", "라이스페이퍼", "10분요리", "아이반찬"],
    notes:
      "유튜브 설명란 기반 정리. 새송이 3개 기준 성인 3~4인분이며, 1T는 15ml, 1t는 5ml, 1컵은 200ml 기준이에요.",
    imageUrl: MUSHROOM_TONKATSU_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeAglioOlioMealPrepRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `youtube-aglio-olio-meal-prep-${Date.now()}`,
    title: "히든천재 알리오올리오 밀프렙",
    sourceUrl: AGLIO_OLIO_MEAL_PREP_SOURCE,
    sourceType: "YouTube",
    category: "면 / 파스타",
    mealType: "Lunch",
    dietGoal: "Meal Prep",
    time: "30 min",
    difficulty: "Medium",
    servings: 5,
    ingredients: [
      "스파게티면 500g",
      "엑스트라버진 올리브오일 136g",
      "마늘 48g",
      "웨이파 24g",
      "미원 2.8g",
      "소금 23.2g",
      "페페론치노 0.8g",
      "파슬리 0.4g",
      "헥산 I+G 0.2g",
      "물 2680.6g",
      "감자전분 4g",
      "그라나파다노 치즈 30g"
    ],
    steps: [
      "파스타 삶을 물 2500g에 소금 20g을 넣고 끓여요.",
      "스파게티면 500g을 삶아 1인분당 삶은 면 120g 정도로 나눌 수 있게 준비해요.",
      "마늘은 잘게 다지거나 슬라이스해요.",
      "팬에 올리브오일, 마늘, 페페론치노를 넣고 약불에서 향을 내요.",
      "물 180.6g에 웨이파, 미원, 소금 3.2g, 헥산 I+G, 감자전분을 풀어 소스 베이스를 만들어요.",
      "마늘 향이 올라오면 소스 베이스를 넣고 농도가 살짝 잡히도록 끓여요.",
      "삶은 면과 소스를 5등분해서 밀폐용기에 나눠 담아요.",
      "먹기 전에 데운 뒤 그라나파다노 치즈와 파슬리를 뿌려 마무리해요."
    ],
    tags: ["밀프렙", "알리오올리오", "파스타", "성분레시피", "도시락"],
    notes:
      "유튜브 설명란 기준 정리. 5인분 기준이며 영상 설명에는 1인분 186g, 단백질 16.5g, 지방 29.7g, 탄수화물 71.2g, 당 3.9g으로 안내되어 있어요. 레시피가 짭조름한 편이라 간은 줄여도 좋아요.",
    imageUrl: AGLIO_OLIO_MEAL_PREP_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeDietWrapMealPrepRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `youtube-diet-wrap-meal-prep-${Date.now()}`,
    title: "다이어트 랩 밀프렙",
    sourceUrl: DIET_WRAP_MEAL_PREP_SOURCE,
    sourceType: "YouTube",
    category: "다이어트",
    mealType: "Lunch",
    dietGoal: "Meal Prep",
    time: "30 min",
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "통밀 또띠아",
      "버섯",
      "닭가슴살",
      "달걀",
      "양상추",
      "토마토",
      "양파",
      "저당 소스",
      "소금",
      "후추"
    ],
    steps: [
      "버섯은 먹기 좋게 썰어 팬에 볶아 수분을 날려요.",
      "닭가슴살은 익힌 뒤 결대로 찢거나 한입 크기로 썰어요.",
      "달걀은 스크램블하거나 지단처럼 부쳐 준비해요.",
      "양상추, 토마토, 양파처럼 수분이 있는 채소는 씻은 뒤 물기를 잘 제거해요.",
      "통밀 또띠아 위에 채소, 버섯, 닭가슴살, 달걀을 올려요.",
      "저당 소스를 조금 넣고 단단하게 말아요.",
      "랩을 종이호일이나 랩으로 감싸 냉장 보관하고, 먹을 때 반으로 잘라요."
    ],
    tags: ["밀프렙", "다이어트랩", "고단백", "버섯", "체중감량"],
    notes:
      "유튜브 설명란에는 정확한 재료와 계량이 공개되어 있지 않아, 영상 제목과 보이는 구성 기준으로 따라 하기 쉬운 밀프렙 버전으로 정리했어요. 정확한 재료를 알게 되면 수정하면 됩니다.",
    imageUrl: DIET_WRAP_MEAL_PREP_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeSoyEggPastaRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `youtube-soy-egg-pasta-${Date.now()}`,
    title: "간장계란파스타",
    sourceUrl: SOY_EGG_PASTA_SOURCE,
    sourceType: "YouTube",
    category: "면 / 파스타",
    mealType: "Dinner",
    dietGoal: "None",
    time: "15 min",
    difficulty: "Easy",
    servings: 1,
    ingredients: ["스파게티면", "달걀노른자", "간장", "버터", "마늘", "올리브오일", "후추", "치즈"],
    steps: [
      "스파게티면을 소금 넣은 물에 삶고 면수는 조금 남겨둬요.",
      "팬에 올리브오일과 마늘을 넣고 약불에서 향을 내요.",
      "삶은 면을 넣고 간장과 버터를 더해 고루 섞어요.",
      "불을 약하게 줄인 뒤 달걀노른자를 넣고 빠르게 섞어 촉촉하게 만들어요.",
      "필요하면 면수를 조금 넣어 농도를 맞춰요.",
      "후추를 넉넉히 뿌리고 치즈를 올려 마무리해요."
    ],
    tags: ["간장계란", "파스타", "스파게티", "간단요리", "자취요리"],
    notes:
      "유튜브 제목과 썸네일 기준 정리. 설명란에 정확한 재료와 계량이 공개되어 있지 않아 집에서 따라 하기 쉬운 간장계란파스타 흐름으로 정리했어요.",
    imageUrl: SOY_EGG_PASTA_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeSpamTofuJjageuliRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `youtube-spam-tofu-jjageuli-${Date.now()}`,
    title: "간단한 스팸두부짜글이",
    sourceUrl: SPAM_TOFU_JJAGEULI_SOURCE,
    sourceType: "YouTube",
    category: "국 / 찌개",
    mealType: "Dinner",
    dietGoal: "None",
    time: "20 min",
    difficulty: "Easy",
    servings: 2,
    ingredients: [
      "두부 1모",
      "대파 1대",
      "양파 1/2개",
      "스팸 100~150g",
      "고추장 2스푼",
      "고춧가루 1스푼",
      "설탕 1/2스푼",
      "진간장 2스푼",
      "물 600ml",
      "마늘 1스푼",
      "후추",
      "청양고추"
    ],
    steps: [
      "두부는 큼직하게 썰고, 양파와 대파는 먹기 좋게 썰어요.",
      "스팸은 으깨거나 작게 잘라 준비해요.",
      "냄비에 양파, 두부, 스팸을 담고 물을 부어요.",
      "고추장, 고춧가루, 설탕, 진간장, 마늘을 넣고 끓여요.",
      "국물이 끓으면 중불로 줄이고 두부에 양념이 배도록 졸여요.",
      "대파와 청양고추를 넣고 한 번 더 끓인 뒤 후추로 마무리해요."
    ],
    tags: ["스팸", "두부", "짜글이", "밥도둑", "간단요리"],
    notes:
      "유튜브 설명란 재료 기준으로 정리. 설명에는 물 600ml가 종이컵 약 3.5컵이라고 안내되어 있어요. 스팸이 짭짤하니 간은 마지막에 보고 조절하면 좋아요.",
    imageUrl: SPAM_TOFU_JJAGEULI_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeCabbageTteokbokkiRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `youtube-cabbage-tteokbokki-${Date.now()}`,
    title: "양배추 떡볶이",
    sourceUrl: CABBAGE_TTEOKBOKKI_SOURCE,
    sourceType: "YouTube",
    category: "다이어트",
    mealType: "Snack",
    dietGoal: "Low Carb",
    time: "10 min",
    difficulty: "Easy",
    servings: 1,
    ingredients: [
      "양배추 약 1/4개",
      "물 250ml",
      "저당 고추장 1스푼",
      "고춧가루 2스푼",
      "간장 2스푼",
      "알룰로스 3스푼",
      "후춧가루 0.5스푼",
      "카레가루 1스푼"
    ],
    steps: [
      "양배추를 사각형 모양으로 큼직하게 썰어요.",
      "썬 양배추를 찜기에 넣고 전자레인지에 5분 돌려요.",
      "팬에 물, 저당 고추장, 고춧가루, 간장, 알룰로스, 후춧가루를 넣어요.",
      "카레가루를 넣고 싶다면 함께 넣은 뒤 한 번 끓여요.",
      "찐 양배추를 넣고 반투명해질 때까지 졸여요.",
      "양념이 잘 배면 따뜻할 때 바로 먹어요."
    ],
    tags: ["양배추", "떡볶이", "다이어트", "저당", "간식"],
    notes:
      "유튜브 설명란 기준 정리. 카레가루는 선택 재료라 취향에 따라 생략해도 좋아요. 떡 대신 양배추로 만드는 가벼운 떡볶이 느낌의 레시피예요.",
    imageUrl: CABBAGE_TTEOKBOKKI_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeSaltyGirlSnackRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `youtube-salty-girl-snack-${Date.now()}`,
    title: "솔티걸 스낵",
    sourceUrl: SALTY_GIRL_SNACK_SOURCE,
    sourceType: "YouTube",
    category: "간식",
    mealType: "Snack",
    dietGoal: "Light",
    time: "5 min",
    difficulty: "Easy",
    servings: 1,
    ingredients: ["샐러리", "레몬즙", "올리브오일", "후리카케", "파마산 치즈"],
    steps: [
      "샐러리는 깨끗하게 씻고 질긴 섬유질을 필러로 한 겹 벗겨요.",
      "먹기 좋은 길이로 자르거나 손으로 집어먹기 좋게 준비해요.",
      "샐러리에 레몬즙과 올리브오일을 뿌려요.",
      "후리카케를 넉넉히 뿌리고 파마산 치즈를 갈아 올려요.",
      "가볍게 섞은 뒤 바로 먹으면 아삭한 식감이 좋아요."
    ],
    tags: ["샐러리", "건강간식", "다이어트", "저칼로리", "아삭"],
    notes:
      "유튜브 설명란 기준 정리. 샐러리의 질긴 겉섬유를 벗기면 더 아삭하고 먹기 편해요. 과자 대신 가볍게 먹기 좋은 건강 간식 레시피예요.",
    imageUrl: SALTY_GIRL_SNACK_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeSalmonPotRiceRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `youtube-salmon-pot-rice-${Date.now()}`,
    title: "연어 솥밥",
    sourceUrl: SALMON_POT_RICE_SOURCE,
    sourceType: "YouTube",
    category: "한식 / 밥",
    mealType: "Dinner",
    dietGoal: "None",
    time: "25 min",
    difficulty: "Medium",
    servings: 1,
    ingredients: [
      "연어 150g",
      "소금",
      "후추",
      "간장 1T",
      "알룰로스 1T",
      "맛술 1T",
      "물 2T",
      "쪽파 3대",
      "쌀 180ml",
      "물 150ml",
      "참기름 1t",
      "참치액 1/2T",
      "스리라차 소스"
    ],
    steps: [
      "쌀은 30분 이상 불려 준비해요.",
      "연어에 소금과 후추를 앞뒤로 뿌려 밑간해요.",
      "간장 1T, 알룰로스 1T, 맛술 1T, 물 2T를 섞어 연어 양념을 만들어요.",
      "팬에 오일을 두르고 연어의 앞뒤와 옆면까지 노릇하게 구워요.",
      "준비한 연어 양념을 붓고 약불에서 윤기 나게 조려요.",
      "주물냄비에 불린 쌀과 참기름을 넣고 중약불에서 1-2분 볶아요.",
      "물 150ml, 간장 1/2T, 참치액 1/2T를 넣고 강불로 끓여요.",
      "끓기 시작하면 바닥까지 한 번 저은 뒤 뚜껑을 닫고 초약불로 15분 익혀요.",
      "불을 끄고 조린 연어와 쪽파를 올린 뒤 뚜껑을 덮어 5분 뜸 들여요.",
      "먹을 때 스리라차 소스를 살짝 곁들이면 더 맛있어요."
    ],
    tags: ["연어", "솥밥", "집밥", "한그릇", "1인가구"],
    notes:
      "유튜브 설명란 기준 정리. 쌀 180ml는 약 145g이며 30분 이상 불린 쌀 기준이에요. 불이 세면 바닥이 타기 쉬우니 솥밥을 익힐 때는 초약불을 유지해 주세요.",
    imageUrl: SALMON_POT_RICE_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeCauliflowerAlfredoPastaRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `instagram-cauliflower-alfredo-pasta-${Date.now()}`,
    title: "사기급 알프레도 파스타",
    sourceUrl: CAULIFLOWER_ALFREDO_PASTA_SOURCE,
    sourceType: "Instagram",
    category: "면 / 파스타",
    mealType: "Meal Prep",
    dietGoal: "High Protein",
    time: "20 min",
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "냉동 콜리플라워 600~800g",
      "페투치네 건면 350~450g",
      "닭안심살 400g",
      "우유 200~300g",
      "파마산 치즈 30g",
      "페코리노 치즈 30g",
      "다진 마늘 3~4작은술",
      "소금 3~5g",
      "디종 머스타드 1/2작은술",
      "올리브유",
      "후추"
    ],
    steps: [
      "끓는 물에 소금을 넣고 콜리플라워를 숟가락으로 눌렀을 때 완전히 으깨질 정도로 푹 삶아요.",
      "믹서기에 삶은 콜리플라워, 우유, 파마산 치즈, 페코리노 치즈, 다진 마늘, 소금을 넣고 아주 부드럽게 갈아요.",
      "페투치네 면은 소금물에 알덴테로 삶아요.",
      "면이 삶아지는 동안 팬에 기름을 살짝 두르고 닭안심살을 노릇하게 구워 따로 둬요.",
      "팬에 갈아둔 소스, 삶은 면, 올리브유를 약간 넣고 중불에서 저어가며 볶아요.",
      "소스가 되직하면 면수를 조금씩 추가해 농도를 맞춰요.",
      "접시에 담고 구운 닭안심살을 올린 뒤 후추와 치즈 가루를 뿌려 마무리해요."
    ],
    tags: ["알프레도", "콜리플라워", "고단백", "밀프렙", "크림파스타"],
    notes:
      "인스타그램 설명 기준 정리. 4인분 기준이며 단백질 45g, 일반 파스타 대비 절반 열량으로 소개된 레시피예요. 밀프렙할 때는 면을 평소보다 2분 덜 삶고 소스는 따로 보관했다가 먹기 직전에 합쳐 데우면 식감이 좋아요.",
    imageUrl: CAULIFLOWER_ALFREDO_PASTA_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeAlmondButterBurrataSandwichRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `instagram-almond-butter-burrata-sandwich-${Date.now()}`,
    title: "아몬드버터 부라타치즈 샌드위치",
    sourceUrl: ALMOND_BUTTER_BURRATA_SANDWICH_SOURCE,
    sourceType: "Instagram",
    category: "간단 요리",
    mealType: "Brunch",
    dietGoal: "None",
    time: "10 min",
    difficulty: "Easy",
    servings: 1,
    ingredients: ["치아바타", "아몬드버터", "부라타치즈", "루꼴라", "프로슈토 또는 햄", "올리브오일", "후추", "칠리 플레이크"],
    steps: [
      "치아바타를 반으로 갈라 가볍게 굽거나 데워요.",
      "빵 한쪽 면에 아몬드버터를 얇게 펴 발라요.",
      "루꼴라를 올리고 프로슈토나 햄을 겹쳐 올려요.",
      "부라타치즈를 찢어 올린 뒤 올리브오일을 살짝 뿌려요.",
      "후추와 칠리 플레이크를 뿌려 마무리해요.",
      "다른 빵으로 덮어 샌드위치처럼 먹거나 오픈 샌드위치로 즐겨요."
    ],
    tags: ["샌드위치", "부라타", "아몬드버터", "브런치", "루꼴라"],
    notes:
      "인스타그램 게시글 제목과 대표 이미지 기준으로 정리. 본문에는 레시피가 고정댓글에 있다고 되어 있지만 댓글 내용은 자동으로 가져오지 못해, 보이는 재료 기준의 참고용 버전으로 넣었어요.",
    imageUrl: ALMOND_BUTTER_BURRATA_SANDWICH_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeCrispyGnocchiSaladRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `instagram-crispy-gnocchi-salad-${Date.now()}`,
    title: "크리스피 뇨끼 샐러드",
    sourceUrl: CRISPY_GNOCCHI_SALAD_SOURCE,
    sourceType: "Instagram",
    category: "샐러드",
    mealType: "Meal Prep",
    dietGoal: "High Protein",
    time: "20 min",
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "뇨끼 500g",
      "닭가슴살 500g",
      "로메인 200g",
      "오이 1개",
      "방울토마토 20알",
      "올리브오일 4큰술",
      "파마산 가루 4큰술",
      "소금 0.5큰술",
      "마늘가루 3t",
      "파프리카 가루 2t",
      "그릭요거트 250g",
      "우유 60g",
      "레몬즙 2큰술",
      "다진 딜 1큰술"
    ],
    steps: [
      "냉동 뇨끼는 해동하지 않고 바로 준비해요.",
      "뇨끼에 올리브오일, 파마산 가루, 소금, 마늘가루 2t, 파프리카 가루를 넣고 버무려요.",
      "에어프라이어 190도에서 15분 굽고, 중간에 한 번 흔들어 고르게 바삭하게 만들어요.",
      "그릭요거트, 우유, 레몬즙, 올리브오일 2큰술, 마늘가루 1t, 다진 딜, 소금 1t를 섞어 소스를 만들어요.",
      "로메인, 오이, 방울토마토를 먹기 좋게 손질해요.",
      "손질한 채소, 닭가슴살, 구운 뇨끼를 담고 소스를 부어 섞어요.",
      "뇨끼의 바삭함이 살아있을 때 바로 먹어요."
    ],
    tags: ["뇨끼", "샐러드", "고단백", "닭가슴살", "딜요거트"],
    notes:
      "인스타그램 설명 기준 정리. 냉동 뇨끼는 해동하지 않고 바로 시즈닝해서 구워야 겉은 바삭하고 속은 쫀득해요. 소스를 섞으면 바삭함이 줄어드니 먹기 직전에 합치는 게 좋아요.",
    imageUrl: CRISPY_GNOCCHI_SALAD_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeAppleBrieSandwichRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `instagram-apple-brie-sandwich-${Date.now()}`,
    title: "애플브리 샌드위치",
    sourceUrl: APPLE_BRIE_SANDWICH_SOURCE,
    sourceType: "Instagram",
    category: "간단 요리",
    mealType: "Brunch",
    dietGoal: "None",
    time: "10 min",
    difficulty: "Easy",
    servings: 1,
    ingredients: ["치아바타바게트", "사과", "브리치즈", "햄", "루꼴라", "꿀 또는 잼", "후추", "올리브오일"],
    steps: [
      "치아바타바게트를 반으로 갈라 가볍게 굽거나 데워요.",
      "사과는 얇게 슬라이스하고 브리치즈도 먹기 좋은 두께로 썰어요.",
      "빵 한쪽에 꿀이나 잼을 얇게 바르고 루꼴라를 올려요.",
      "햄, 브리치즈, 사과를 차례로 겹쳐 올려요.",
      "후추를 살짝 뿌리고 취향에 따라 올리브오일을 아주 조금 더해요.",
      "남은 빵으로 덮어 바로 먹어요."
    ],
    tags: ["사과", "브리치즈", "샌드위치", "브런치", "치아바타"],
    notes:
      "인스타그램 제목과 대표 이미지 기준으로 정리. 본문에는 자세한 계량이 공개되어 있지 않아, 보이는 재료와 애플브리 샌드위치 기본 조합으로 따라 하기 쉽게 정리했어요.",
    imageUrl: APPLE_BRIE_SANDWICH_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeTzatzikiSauceRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `instagram-tzatziki-sauce-${Date.now()}`,
    title: "차지키 소스",
    sourceUrl: TZATZIKI_SAUCE_SOURCE,
    sourceType: "Instagram",
    category: "샐러드",
    mealType: "Snack",
    dietGoal: "Light",
    time: "10 min",
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "그릭요거트 200g",
      "레몬 1/2개",
      "딜 3g",
      "소금",
      "올리브오일",
      "오이 1/2개",
      "다진마늘 1ts",
      "홀그레인 머스타드 1ts"
    ],
    steps: [
      "오이는 채 썰어 소금 1ts를 넣고 잘 버무려 잠시 둬요.",
      "레몬은 즙을 내고 레몬 제스트도 조금 준비해요.",
      "딜은 줄기를 빼고 잎만 잘게 다져요.",
      "그릭요거트에 레몬즙, 딜, 소금, 다진마늘, 홀그레인 머스타드를 넣고 섞어요.",
      "오이는 물기를 꼭 짠 뒤 요거트 소스에 넣고 잘 섞어요.",
      "마지막으로 올리브오일을 뿌려 마무리해요.",
      "냉장고에서 1시간 이상 숙성하면 더 맛있어요."
    ],
    tags: ["차지키", "그릭요거트", "오이", "딜", "소스"],
    notes:
      "인스타그램 설명 기준 정리. 오이, 당근, 샐러리 같은 야채스틱에 찍어 먹거나 모닝빵, 연어, 감자에 곁들이기 좋아요. 간을 보고 소금이나 레몬즙을 추가해 주세요.",
    imageUrl: TZATZIKI_SAUCE_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeMisoCreamCheesePastaRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `instagram-miso-cream-cheese-pasta-${Date.now()}`,
    title: "미소 크림치즈 파스타",
    sourceUrl: MISO_CREAM_CHEESE_PASTA_SOURCE,
    sourceType: "Instagram",
    category: "면 / 파스타",
    mealType: "Dinner",
    dietGoal: "None",
    time: "25 min",
    difficulty: "Medium",
    servings: 1,
    ingredients: [
      "생연어 횟감 200g",
      "시금치 한 줌",
      "크림치즈 2T",
      "미소 된장 1/2T",
      "치킨스톡 1T",
      "물 250ml",
      "양파 1/4개",
      "버터 2조각",
      "파스타면",
      "소금",
      "후추",
      "올리브오일"
    ],
    steps: [
      "양파는 작게 다지고 생연어는 큼직하게 썰어요.",
      "연어에 소금, 후추, 올리브오일로 밑간해요.",
      "치킨스톡 1T와 물 250ml를 섞어 닭육수를 만들어요.",
      "밑간한 연어는 한쪽 면만 바삭하게 구워 따로 빼둬요.",
      "파스타면은 면 종류에 맞게 삶아요.",
      "팬에 오일을 두르고 다진 양파와 버터를 넣어 양파가 투명해질 때까지 볶아요.",
      "닭육수, 크림치즈, 미소 된장, 삶은 면, 면수를 넣고 섞어 소스가 면에 배도록 해요.",
      "시금치를 넣어 숨이 살짝 죽게 섞어요.",
      "마지막에 구운 연어를 올려 마무리해요."
    ],
    tags: ["연어", "미소", "크림치즈", "파스타", "집밥"],
    notes:
      "인스타그램 설명 기준 정리. 원문은 한신희 셰프 레시피를 참고했다고 되어 있어요. 연어는 한쪽 면만 바삭하게 구워 올리면 식감이 좋아요.",
    imageUrl: MISO_CREAM_CHEESE_PASTA_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeYupddukStyleTteokbokkiRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `youtube-yupdduk-style-tteokbokki-${Date.now()}`,
    title: "엽떡 스타일 떡볶이",
    sourceUrl: YUPDDUK_STYLE_TTEOKBOKKI_SOURCE,
    sourceType: "YouTube",
    category: "간식",
    mealType: "Snack",
    dietGoal: "None",
    time: "20 min",
    difficulty: "Easy",
    servings: 2,
    ingredients: [
      "떡볶이떡",
      "어묵",
      "대파",
      "양배추",
      "물 또는 육수",
      "고추장",
      "고춧가루",
      "진간장",
      "설탕",
      "다진마늘",
      "후추",
      "카레가루",
      "모짜렐라 치즈"
    ],
    steps: [
      "떡볶이떡은 딱딱하면 물에 잠시 불리고, 어묵과 채소는 먹기 좋게 썰어요.",
      "냄비에 물이나 육수를 넣고 고추장, 고춧가루, 진간장, 설탕, 다진마늘을 풀어요.",
      "후추와 카레가루를 조금 넣어 엽떡 스타일의 매콤한 향을 더해요.",
      "양념이 끓으면 떡, 어묵, 양배추를 넣고 중불에서 졸여요.",
      "떡이 말랑해지고 국물이 걸쭉해지면 대파를 넣고 한 번 더 끓여요.",
      "취향에 따라 모짜렐라 치즈를 올려 녹여 먹어요."
    ],
    tags: ["떡볶이", "엽떡스타일", "매운맛", "분식", "간식"],
    notes:
      "유튜브 제목과 썸네일 기준 정리. 영상 설명란에 정확한 재료와 계량이 공개되어 있지 않아 집에서 만들기 쉬운 엽떡 스타일 떡볶이 흐름으로 정리했어요.",
    imageUrl: YUPDDUK_STYLE_TTEOKBOKKI_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function makeShepherdsPurseDoenjangRamenRecipe(): Recipe {
  const now = new Date().toISOString();

  return {
    id: `youtube-shepherds-purse-doenjang-ramen-${Date.now()}`,
    title: "냉이 된장라면",
    sourceUrl: SHEPHERDS_PURSE_DOENJANG_RAMEN_SOURCE,
    sourceType: "YouTube",
    category: "국 / 찌개",
    mealType: "Lunch",
    dietGoal: "None",
    time: "10 min",
    difficulty: "Easy",
    servings: 1,
    ingredients: [
      "농심 감자면 1개",
      "냉이 30g",
      "청양고춧가루 1g",
      "된장 15g",
      "멸치액젓 1g",
      "뜨거운 물 500g"
    ],
    steps: [
      "냉이는 흙을 털어내고 깨끗하게 씻은 뒤 먹기 좋게 다듬어요.",
      "냄비에 뜨거운 물 500g을 붓고 된장과 멸치액젓을 풀어요.",
      "감자면의 면과 스프를 넣고 끓여요.",
      "면이 풀어지기 시작하면 냉이를 넣어 향을 살려요.",
      "청양고춧가루를 한 꼬집 넣고 면이 익을 때까지 끓여요.",
      "국물 간을 보고 짜면 물을 조금 더하고, 싱거우면 된장을 아주 조금만 더해요."
    ],
    tags: ["라면", "냉이", "된장", "감자면", "간단요리"],
    notes:
      "유튜브 설명란 기준 정리. 기준량은 564g, 염도 1.06%, 원가 2,229원으로 안내되어 있어요. 숟가락 계량은 정확하지 않으니 가능하면 저울 계량을 추천한다고 적혀 있었어요.",
    imageUrl: SHEPHERDS_PURSE_DOENJANG_RAMEN_IMAGE,
    favorite: false,
    bookmarked: true,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

function removeSampleRecipes(recipes: Recipe[]) {
  return recipes.filter((recipe) => !SAMPLE_RECIPE_IDS.has(recipe.id));
}

function upsertManagedRecipe(recipes: Recipe[], recipe: Recipe) {
  const existing = recipes.find((item) => item.sourceUrl === recipe.sourceUrl || item.title === recipe.title);

  if (!existing) return [recipe, ...recipes];

  return recipes.map((item) =>
    item.id === existing.id
      ? {
          ...existing,
          ...recipe,
          id: existing.id,
          favorite: existing.favorite,
          bookmarked: existing.bookmarked || recipe.bookmarked,
          createdAt: existing.createdAt,
          deleted: false,
          updatedAt: new Date().toISOString()
        }
      : item
  );
}

function migrateManagedRecipes(recipes: Recipe[]) {
  const storageAvailable = canUseStorage();
  const migrationDone = storageAvailable && window.localStorage.getItem(CORRECT_INSTAGRAM_RECIPE_KEY) === "done";
  const chipotleDone = storageAvailable && window.localStorage.getItem(CHIPOTLE_RECIPE_KEY) === "done";
  const mackerelOchazukeDone =
    storageAvailable && window.localStorage.getItem(MACKEREL_OCHAZUKE_RECIPE_KEY) === "done";
  const basilProsciuttoDone =
    storageAvailable && window.localStorage.getItem(BASIL_PROSCIUTTO_RECIPE_KEY) === "done";
  const lunchboxReferenceDone =
    storageAvailable && window.localStorage.getItem(LUNCHBOX_REFERENCE_RECIPE_KEY) === "done";
  const crispyDonutDone = storageAvailable && window.localStorage.getItem(CRISPY_DONUT_RECIPE_KEY) === "done";
  const homeCheesePastaDone =
    storageAvailable && window.localStorage.getItem(HOME_CHEESE_PASTA_RECIPE_KEY) === "done";
  const leeDaheeTofuRiceDone =
    storageAvailable && window.localStorage.getItem(LEE_DAHEE_TOFU_RICE_RECIPE_KEY) === "done";
  const anchovyJamonKimbapDone =
    storageAvailable && window.localStorage.getItem(ANCHOVY_JAMON_KIMBAP_RECIPE_KEY) === "done";
  const mushroomTonkatsuDone =
    storageAvailable && window.localStorage.getItem(MUSHROOM_TONKATSU_RECIPE_KEY) === "done";
  const aglioOlioMealPrepDone =
    storageAvailable && window.localStorage.getItem(AGLIO_OLIO_MEAL_PREP_RECIPE_KEY) === "done";
  const dietWrapMealPrepDone =
    storageAvailable && window.localStorage.getItem(DIET_WRAP_MEAL_PREP_RECIPE_KEY) === "done";
  const soyEggPastaDone = storageAvailable && window.localStorage.getItem(SOY_EGG_PASTA_RECIPE_KEY) === "done";
  const spamTofuJjageuliDone =
    storageAvailable && window.localStorage.getItem(SPAM_TOFU_JJAGEULI_RECIPE_KEY) === "done";
  const cabbageTteokbokkiDone =
    storageAvailable && window.localStorage.getItem(CABBAGE_TTEOKBOKKI_RECIPE_KEY) === "done";
  const saltyGirlSnackDone =
    storageAvailable && window.localStorage.getItem(SALTY_GIRL_SNACK_RECIPE_KEY) === "done";
  const salmonPotRiceDone =
    storageAvailable && window.localStorage.getItem(SALMON_POT_RICE_RECIPE_KEY) === "done";
  const cauliflowerAlfredoPastaDone =
    storageAvailable && window.localStorage.getItem(CAULIFLOWER_ALFREDO_PASTA_RECIPE_KEY) === "done";
  const almondButterBurrataSandwichDone =
    storageAvailable && window.localStorage.getItem(ALMOND_BUTTER_BURRATA_SANDWICH_RECIPE_KEY) === "done";
  const crispyGnocchiSaladDone =
    storageAvailable && window.localStorage.getItem(CRISPY_GNOCCHI_SALAD_RECIPE_KEY) === "done";
  const appleBrieSandwichDone =
    storageAvailable && window.localStorage.getItem(APPLE_BRIE_SANDWICH_RECIPE_KEY) === "done";
  const tzatzikiSauceDone = storageAvailable && window.localStorage.getItem(TZATZIKI_SAUCE_RECIPE_KEY) === "done";
  const misoCreamCheesePastaDone =
    storageAvailable && window.localStorage.getItem(MISO_CREAM_CHEESE_PASTA_RECIPE_KEY) === "done";
  const yupddukStyleTteokbokkiDone =
    storageAvailable && window.localStorage.getItem(YUPDDUK_STYLE_TTEOKBOKKI_RECIPE_KEY) === "done";
  const shepherdsPurseDoenjangRamenDone =
    storageAvailable && window.localStorage.getItem(SHEPHERDS_PURSE_DOENJANG_RAMEN_RECIPE_KEY) === "done";
  const correctTitle = "육수에 푹 적신 알배추롤 & 구운 주먹밥";
  const samplesRemoved = recipes.some((recipe) => SAMPLE_RECIPE_IDS.has(recipe.id));
  const hadWrongRecipe = recipes.some(
    (recipe) =>
      recipe.title === "냉털 나폴리탄 파스타" ||
      (recipe.sourceUrl === CORRECT_INSTAGRAM_SOURCE && recipe.title !== correctTitle)
  );

  let nextRecipes = removeSampleRecipes(recipes).filter(
    (recipe) =>
      recipe.title !== "냉털 나폴리탄 파스타" &&
      !(recipe.sourceUrl === CORRECT_INSTAGRAM_SOURCE && recipe.title !== correctTitle)
  );

  let hasCorrectRecipe = nextRecipes.some(
    (recipe) => recipe.sourceUrl === CORRECT_INSTAGRAM_SOURCE && recipe.title === correctTitle
  );
  let updatedImage = false;

  nextRecipes = nextRecipes.map((recipe) => {
    if (
      recipe.sourceUrl === CORRECT_INSTAGRAM_SOURCE &&
      recipe.title === correctTitle &&
      recipe.imageUrl !== CORRECT_INSTAGRAM_IMAGE
    ) {
      updatedImage = true;
      return {
        ...recipe,
        imageUrl: CORRECT_INSTAGRAM_IMAGE,
        deleted: false,
        updatedAt: new Date().toISOString()
      };
    }

    return recipe;
  });

  if (!hasCorrectRecipe) {
    nextRecipes = [makeCorrectInstagramRecipe(), ...nextRecipes];
    hasCorrectRecipe = true;
  }

  const existingChipotle = nextRecipes.find(
    (recipe) => recipe.sourceUrl === CHIPOTLE_SOURCE || recipe.title === "치폴레 치킨김밥"
  );
  const chipotleNeedsUpdate =
    !existingChipotle || existingChipotle.imageUrl !== CHIPOTLE_IMAGE || existingChipotle.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeChipotleKimbapRecipe());

  const existingMackerelOchazuke = nextRecipes.find(
    (recipe) => recipe.sourceUrl === MACKEREL_OCHAZUKE_SOURCE || recipe.title === "고등어 오차즈케"
  );
  const mackerelOchazukeNeedsUpdate =
    !existingMackerelOchazuke ||
    existingMackerelOchazuke.imageUrl !== MACKEREL_OCHAZUKE_IMAGE ||
    existingMackerelOchazuke.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeMackerelOchazukeRecipe());

  const existingBasilProsciutto = nextRecipes.find(
    (recipe) => recipe.sourceUrl === BASIL_PROSCIUTTO_SOURCE || recipe.title === "바질 프로슈토 샌드위치"
  );
  const basilProsciuttoNeedsUpdate =
    !existingBasilProsciutto ||
    existingBasilProsciutto.imageUrl !== BASIL_PROSCIUTTO_IMAGE ||
    existingBasilProsciutto.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeBasilProsciuttoSandwichRecipe());

  const existingLunchboxReference = nextRecipes.find(
    (recipe) => recipe.sourceUrl === LUNCHBOX_REFERENCE_SOURCE || recipe.title === "도시락 예시 모음"
  );
  const lunchboxReferenceNeedsUpdate =
    !existingLunchboxReference ||
    existingLunchboxReference.imageUrl !== LUNCHBOX_REFERENCE_IMAGES[0] ||
    existingLunchboxReference.deleted ||
    JSON.stringify(existingLunchboxReference.galleryImages || []) !== JSON.stringify(LUNCHBOX_REFERENCE_IMAGES);
  nextRecipes = upsertManagedRecipe(nextRecipes, makeLunchboxReferenceRecipe());

  const existingCrispyDonut = nextRecipes.find(
    (recipe) => recipe.sourceUrl === CRISPY_DONUT_SOURCE || recipe.title === "크리스피 도넛 굽먹"
  );
  const crispyDonutNeedsUpdate =
    !existingCrispyDonut || existingCrispyDonut.imageUrl !== CRISPY_DONUT_IMAGE || existingCrispyDonut.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeCrispyDonutRecipe());

  const existingHomeCheesePasta = nextRecipes.find(
    (recipe) => recipe.sourceUrl === HOME_CHEESE_PASTA_SOURCE || recipe.title === "홈파스타 치즈파스타"
  );
  const homeCheesePastaNeedsUpdate =
    !existingHomeCheesePasta ||
    existingHomeCheesePasta.imageUrl !== HOME_CHEESE_PASTA_IMAGE ||
    existingHomeCheesePasta.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeHomeCheesePastaRecipe());

  const existingLeeDaheeTofuRice = nextRecipes.find(
    (recipe) => recipe.sourceUrl === LEE_DAHEE_TOFU_RICE_SOURCE || recipe.title === "이다희 두부 묵은지 비빔밥"
  );
  const leeDaheeTofuRiceNeedsUpdate =
    !existingLeeDaheeTofuRice ||
    existingLeeDaheeTofuRice.imageUrl !== LEE_DAHEE_TOFU_RICE_IMAGE ||
    existingLeeDaheeTofuRice.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeLeeDaheeTofuRiceRecipe());

  const existingAnchovyJamonKimbap = nextRecipes.find(
    (recipe) => recipe.sourceUrl === ANCHOVY_JAMON_KIMBAP_SOURCE || recipe.title === "엔초비 김밥 & 하몽 김밥"
  );
  const anchovyJamonKimbapNeedsUpdate =
    !existingAnchovyJamonKimbap ||
    existingAnchovyJamonKimbap.imageUrl !== ANCHOVY_JAMON_KIMBAP_IMAGE ||
    existingAnchovyJamonKimbap.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeAnchovyJamonKimbapRecipe());

  const existingMushroomTonkatsu = nextRecipes.find(
    (recipe) => recipe.sourceUrl === MUSHROOM_TONKATSU_SOURCE || recipe.title === "새송이 버섯 돈가스"
  );
  const mushroomTonkatsuNeedsUpdate =
    !existingMushroomTonkatsu ||
    existingMushroomTonkatsu.imageUrl !== MUSHROOM_TONKATSU_IMAGE ||
    existingMushroomTonkatsu.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeMushroomTonkatsuRecipe());

  const existingAglioOlioMealPrep = nextRecipes.find(
    (recipe) => recipe.sourceUrl === AGLIO_OLIO_MEAL_PREP_SOURCE || recipe.title === "히든천재 알리오올리오 밀프렙"
  );
  const aglioOlioMealPrepNeedsUpdate =
    !existingAglioOlioMealPrep ||
    existingAglioOlioMealPrep.imageUrl !== AGLIO_OLIO_MEAL_PREP_IMAGE ||
    existingAglioOlioMealPrep.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeAglioOlioMealPrepRecipe());

  const existingDietWrapMealPrep = nextRecipes.find(
    (recipe) => recipe.sourceUrl === DIET_WRAP_MEAL_PREP_SOURCE || recipe.title === "다이어트 랩 밀프렙"
  );
  const dietWrapMealPrepNeedsUpdate =
    !existingDietWrapMealPrep ||
    existingDietWrapMealPrep.imageUrl !== DIET_WRAP_MEAL_PREP_IMAGE ||
    existingDietWrapMealPrep.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeDietWrapMealPrepRecipe());

  const existingSoyEggPasta = nextRecipes.find(
    (recipe) => recipe.sourceUrl === SOY_EGG_PASTA_SOURCE || recipe.title === "간장계란파스타"
  );
  const soyEggPastaNeedsUpdate =
    !existingSoyEggPasta || existingSoyEggPasta.imageUrl !== SOY_EGG_PASTA_IMAGE || existingSoyEggPasta.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeSoyEggPastaRecipe());

  const existingSpamTofuJjageuli = nextRecipes.find(
    (recipe) => recipe.sourceUrl === SPAM_TOFU_JJAGEULI_SOURCE || recipe.title === "간단한 스팸두부짜글이"
  );
  const spamTofuJjageuliNeedsUpdate =
    !existingSpamTofuJjageuli ||
    existingSpamTofuJjageuli.imageUrl !== SPAM_TOFU_JJAGEULI_IMAGE ||
    existingSpamTofuJjageuli.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeSpamTofuJjageuliRecipe());

  const existingCabbageTteokbokki = nextRecipes.find(
    (recipe) => recipe.sourceUrl === CABBAGE_TTEOKBOKKI_SOURCE || recipe.title === "양배추 떡볶이"
  );
  const cabbageTteokbokkiNeedsUpdate =
    !existingCabbageTteokbokki ||
    existingCabbageTteokbokki.imageUrl !== CABBAGE_TTEOKBOKKI_IMAGE ||
    existingCabbageTteokbokki.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeCabbageTteokbokkiRecipe());

  const existingSaltyGirlSnack = nextRecipes.find(
    (recipe) => recipe.sourceUrl === SALTY_GIRL_SNACK_SOURCE || recipe.title === "솔티걸 스낵"
  );
  const saltyGirlSnackNeedsUpdate =
    !existingSaltyGirlSnack ||
    existingSaltyGirlSnack.imageUrl !== SALTY_GIRL_SNACK_IMAGE ||
    existingSaltyGirlSnack.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeSaltyGirlSnackRecipe());

  const existingSalmonPotRice = nextRecipes.find(
    (recipe) => recipe.sourceUrl === SALMON_POT_RICE_SOURCE || recipe.title === "연어 솥밥"
  );
  const salmonPotRiceNeedsUpdate =
    !existingSalmonPotRice || existingSalmonPotRice.imageUrl !== SALMON_POT_RICE_IMAGE || existingSalmonPotRice.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeSalmonPotRiceRecipe());

  const existingCauliflowerAlfredoPasta = nextRecipes.find(
    (recipe) => recipe.sourceUrl === CAULIFLOWER_ALFREDO_PASTA_SOURCE || recipe.title === "사기급 알프레도 파스타"
  );
  const cauliflowerAlfredoPastaNeedsUpdate =
    !existingCauliflowerAlfredoPasta ||
    existingCauliflowerAlfredoPasta.imageUrl !== CAULIFLOWER_ALFREDO_PASTA_IMAGE ||
    existingCauliflowerAlfredoPasta.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeCauliflowerAlfredoPastaRecipe());

  const existingAlmondButterBurrataSandwich = nextRecipes.find(
    (recipe) =>
      recipe.sourceUrl === ALMOND_BUTTER_BURRATA_SANDWICH_SOURCE ||
      recipe.title === "아몬드버터 부라타치즈 샌드위치"
  );
  const almondButterBurrataSandwichNeedsUpdate =
    !existingAlmondButterBurrataSandwich ||
    existingAlmondButterBurrataSandwich.imageUrl !== ALMOND_BUTTER_BURRATA_SANDWICH_IMAGE ||
    existingAlmondButterBurrataSandwich.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeAlmondButterBurrataSandwichRecipe());

  const existingCrispyGnocchiSalad = nextRecipes.find(
    (recipe) => recipe.sourceUrl === CRISPY_GNOCCHI_SALAD_SOURCE || recipe.title === "크리스피 뇨끼 샐러드"
  );
  const crispyGnocchiSaladNeedsUpdate =
    !existingCrispyGnocchiSalad ||
    existingCrispyGnocchiSalad.imageUrl !== CRISPY_GNOCCHI_SALAD_IMAGE ||
    existingCrispyGnocchiSalad.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeCrispyGnocchiSaladRecipe());

  const existingAppleBrieSandwich = nextRecipes.find(
    (recipe) => recipe.sourceUrl === APPLE_BRIE_SANDWICH_SOURCE || recipe.title === "애플브리 샌드위치"
  );
  const appleBrieSandwichNeedsUpdate =
    !existingAppleBrieSandwich ||
    existingAppleBrieSandwich.imageUrl !== APPLE_BRIE_SANDWICH_IMAGE ||
    existingAppleBrieSandwich.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeAppleBrieSandwichRecipe());

  const existingTzatzikiSauce = nextRecipes.find(
    (recipe) => recipe.sourceUrl === TZATZIKI_SAUCE_SOURCE || recipe.title === "차지키 소스"
  );
  const tzatzikiSauceNeedsUpdate =
    !existingTzatzikiSauce || existingTzatzikiSauce.imageUrl !== TZATZIKI_SAUCE_IMAGE || existingTzatzikiSauce.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeTzatzikiSauceRecipe());

  const existingMisoCreamCheesePasta = nextRecipes.find(
    (recipe) => recipe.sourceUrl === MISO_CREAM_CHEESE_PASTA_SOURCE || recipe.title === "미소 크림치즈 파스타"
  );
  const misoCreamCheesePastaNeedsUpdate =
    !existingMisoCreamCheesePasta ||
    existingMisoCreamCheesePasta.imageUrl !== MISO_CREAM_CHEESE_PASTA_IMAGE ||
    existingMisoCreamCheesePasta.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeMisoCreamCheesePastaRecipe());

  const existingYupddukStyleTteokbokki = nextRecipes.find(
    (recipe) => recipe.sourceUrl === YUPDDUK_STYLE_TTEOKBOKKI_SOURCE || recipe.title === "엽떡 스타일 떡볶이"
  );
  const yupddukStyleTteokbokkiNeedsUpdate =
    !existingYupddukStyleTteokbokki ||
    existingYupddukStyleTteokbokki.imageUrl !== YUPDDUK_STYLE_TTEOKBOKKI_IMAGE ||
    existingYupddukStyleTteokbokki.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeYupddukStyleTteokbokkiRecipe());

  const existingShepherdsPurseDoenjangRamen = nextRecipes.find(
    (recipe) =>
      recipe.sourceUrl === SHEPHERDS_PURSE_DOENJANG_RAMEN_SOURCE || recipe.title === "냉이 된장라면"
  );
  const shepherdsPurseDoenjangRamenNeedsUpdate =
    !existingShepherdsPurseDoenjangRamen ||
    existingShepherdsPurseDoenjangRamen.imageUrl !== SHEPHERDS_PURSE_DOENJANG_RAMEN_IMAGE ||
    existingShepherdsPurseDoenjangRamen.deleted;
  nextRecipes = upsertManagedRecipe(nextRecipes, makeShepherdsPurseDoenjangRamenRecipe());

  if (
    storageAvailable &&
    (samplesRemoved ||
      hadWrongRecipe ||
      updatedImage ||
      !migrationDone ||
      !chipotleDone ||
      chipotleNeedsUpdate ||
      !mackerelOchazukeDone ||
      mackerelOchazukeNeedsUpdate ||
      !basilProsciuttoDone ||
      basilProsciuttoNeedsUpdate ||
      !lunchboxReferenceDone ||
      lunchboxReferenceNeedsUpdate ||
      !crispyDonutDone ||
      crispyDonutNeedsUpdate ||
      !homeCheesePastaDone ||
      homeCheesePastaNeedsUpdate ||
      !leeDaheeTofuRiceDone ||
      leeDaheeTofuRiceNeedsUpdate ||
      !anchovyJamonKimbapDone ||
      anchovyJamonKimbapNeedsUpdate ||
      !mushroomTonkatsuDone ||
      mushroomTonkatsuNeedsUpdate ||
      !aglioOlioMealPrepDone ||
      aglioOlioMealPrepNeedsUpdate ||
      !dietWrapMealPrepDone ||
      dietWrapMealPrepNeedsUpdate ||
      !soyEggPastaDone ||
      soyEggPastaNeedsUpdate ||
      !spamTofuJjageuliDone ||
      spamTofuJjageuliNeedsUpdate ||
      !cabbageTteokbokkiDone ||
      cabbageTteokbokkiNeedsUpdate ||
      !saltyGirlSnackDone ||
      saltyGirlSnackNeedsUpdate ||
      !salmonPotRiceDone ||
      salmonPotRiceNeedsUpdate ||
      !cauliflowerAlfredoPastaDone ||
      cauliflowerAlfredoPastaNeedsUpdate ||
      !almondButterBurrataSandwichDone ||
      almondButterBurrataSandwichNeedsUpdate ||
      !crispyGnocchiSaladDone ||
      crispyGnocchiSaladNeedsUpdate ||
      !appleBrieSandwichDone ||
      appleBrieSandwichNeedsUpdate ||
      !tzatzikiSauceDone ||
      tzatzikiSauceNeedsUpdate ||
      !misoCreamCheesePastaDone ||
      misoCreamCheesePastaNeedsUpdate ||
      !yupddukStyleTteokbokkiDone ||
      yupddukStyleTteokbokkiNeedsUpdate ||
      !shepherdsPurseDoenjangRamenDone ||
      shepherdsPurseDoenjangRamenNeedsUpdate)
  ) {
    writeJson(RECIPES_KEY, nextRecipes);
    window.localStorage.setItem(CORRECT_INSTAGRAM_RECIPE_KEY, "done");
    window.localStorage.setItem(CHIPOTLE_RECIPE_KEY, "done");
    window.localStorage.setItem(MACKEREL_OCHAZUKE_RECIPE_KEY, "done");
    window.localStorage.setItem(BASIL_PROSCIUTTO_RECIPE_KEY, "done");
    window.localStorage.setItem(LUNCHBOX_REFERENCE_RECIPE_KEY, "done");
    window.localStorage.setItem(CRISPY_DONUT_RECIPE_KEY, "done");
    window.localStorage.setItem(HOME_CHEESE_PASTA_RECIPE_KEY, "done");
    window.localStorage.setItem(LEE_DAHEE_TOFU_RICE_RECIPE_KEY, "done");
    window.localStorage.setItem(ANCHOVY_JAMON_KIMBAP_RECIPE_KEY, "done");
    window.localStorage.setItem(MUSHROOM_TONKATSU_RECIPE_KEY, "done");
    window.localStorage.setItem(AGLIO_OLIO_MEAL_PREP_RECIPE_KEY, "done");
    window.localStorage.setItem(DIET_WRAP_MEAL_PREP_RECIPE_KEY, "done");
    window.localStorage.setItem(SOY_EGG_PASTA_RECIPE_KEY, "done");
    window.localStorage.setItem(SPAM_TOFU_JJAGEULI_RECIPE_KEY, "done");
    window.localStorage.setItem(CABBAGE_TTEOKBOKKI_RECIPE_KEY, "done");
    window.localStorage.setItem(SALTY_GIRL_SNACK_RECIPE_KEY, "done");
    window.localStorage.setItem(SALMON_POT_RICE_RECIPE_KEY, "done");
    window.localStorage.setItem(CAULIFLOWER_ALFREDO_PASTA_RECIPE_KEY, "done");
    window.localStorage.setItem(ALMOND_BUTTER_BURRATA_SANDWICH_RECIPE_KEY, "done");
    window.localStorage.setItem(CRISPY_GNOCCHI_SALAD_RECIPE_KEY, "done");
    window.localStorage.setItem(APPLE_BRIE_SANDWICH_RECIPE_KEY, "done");
    window.localStorage.setItem(TZATZIKI_SAUCE_RECIPE_KEY, "done");
    window.localStorage.setItem(MISO_CREAM_CHEESE_PASTA_RECIPE_KEY, "done");
    window.localStorage.setItem(YUPDDUK_STYLE_TTEOKBOKKI_RECIPE_KEY, "done");
    window.localStorage.setItem(SHEPHERDS_PURSE_DOENJANG_RAMEN_RECIPE_KEY, "done");
  }

  return nextRecipes;
}

export function getRecipes() {
  const recipes = readJson<Recipe[]>(RECIPES_KEY, []);
  if (recipes.length > 0) return migrateManagedRecipes(recipes);

  const initialRecipes = migrateManagedRecipes(sampleRecipes);
  writeJson(RECIPES_KEY, initialRecipes);
  return initialRecipes;
}

export function saveRecipes(recipes: Recipe[]) {
  writeJson(RECIPES_KEY, recipes);
}

export function upsertRecipe(recipes: Recipe[], recipe: Recipe) {
  const exists = recipes.some((item) => item.id === recipe.id);
  return exists ? recipes.map((item) => (item.id === recipe.id ? recipe : item)) : [recipe, ...recipes];
}

export function createRecipeFromInput(input: Omit<Recipe, "id" | "favorite" | "bookmarked" | "deleted" | "createdAt" | "updatedAt">) {
  const now = new Date().toISOString();

  return {
    ...input,
    id: makeId("recipe"),
    favorite: false,
    bookmarked: false,
    deleted: false,
    createdAt: now,
    updatedAt: now
  };
}

export function getSavedIngredients() {
  return readJson<string[]>(INGREDIENTS_KEY, ["오이", "달걀", "두부", "양파", "대파"]);
}

export function saveSavedIngredients(ingredients: string[]) {
  writeJson(INGREDIENTS_KEY, ingredients);
}

export function getGroceryItems() {
  return readJson<GroceryItem[]>(GROCERY_KEY, []);
}

export function saveGroceryItems(items: GroceryItem[]) {
  writeJson(GROCERY_KEY, items);
}

export function makeGroceryItem(label: string): GroceryItem {
  return {
    id: makeId("grocery"),
    label,
    checked: false,
    createdAt: new Date().toISOString()
  };
}

export function getNotes() {
  return readJson<Note[]>(NOTES_KEY, []);
}

export function saveNotes(notes: Note[]) {
  writeJson(NOTES_KEY, notes);
}

export function getMealPlan() {
  return readJson<MealPlan>(MEAL_PLAN_KEY, {
    월: [],
    화: [],
    수: [],
    목: [],
    금: [],
    토: [],
    일: []
  });
}

export function saveMealPlan(plan: MealPlan) {
  writeJson(MEAL_PLAN_KEY, plan);
}
