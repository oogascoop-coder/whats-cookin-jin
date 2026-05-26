# What's Cookin', Jin

개인 레시피 저장 웹사이트 MVP입니다.  
인스타그램, 유튜브, 블로그에서 본 레시피를 저장하고, 냉장고에 남은 재료로 만들 수 있는 레시피를 찾을 수 있습니다.

## 처음 실행하는 방법

터미널에서 아래 명령어를 한 줄씩 입력하세요.

```bash
npm install
npm run dev
```

실행 후 브라우저에서 아래 주소를 열면 됩니다.

```bash
http://localhost:3000
```

## 자주 쓰는 명령어

```bash
npm run dev
```

개발 서버를 켭니다.

```bash
npm run type-check
```

TypeScript 오류가 있는지 확인합니다.

```bash
npm run lint
```

ESLint 검사를 실행합니다.

## 파일 구조

```txt
app/
  layout.tsx                 전체 레이아웃
  page.tsx                   Home 페이지
  my-recipes/page.tsx        내 레시피
  ingredients/page.tsx       재료로 찾기
  categories/page.tsx        카테고리
  meal-types/page.tsx        식사 타입
  favorites/page.tsx         즐겨찾기
  trash/page.tsx             휴지통
  grocery-list/page.tsx      장보기 리스트
  tips/page.tsx              요리 팁
  notes/page.tsx             주방 메모

components/
  Sidebar.tsx                왼쪽 메뉴와 모바일 하단 메뉴
  TopBar.tsx                 검색창, 알림, 프로필, 새 레시피 버튼
  RecipeCard.tsx             레시피 카드
  RecipeGrid.tsx             카드 그리드
  RecipeModal.tsx            레시피 상세 보기
  RecipeFormModal.tsx        새 레시피 등록/수정 폼
  CategoryChips.tsx          카테고리 필터 칩
  IngredientSelector.tsx     재료 선택/추가
  FavoritesPanel.tsx         홈의 즐겨찾기 패널
  EmptyState.tsx             빈 화면 안내

data/
  recipes.ts                 처음 실행할 때 보이는 샘플 레시피

lib/
  types.ts                   데이터 타입
  storage.ts                 localStorage 저장/불러오기
  recipe-utils.ts            검색, 필터 같은 작은 도우미 함수
```

## 초보자 수정 가이드

샘플 레시피를 바꾸고 싶다면 `data/recipes.ts`를 수정하세요.

카테고리를 바꾸고 싶다면 `data/recipes.ts` 안의 `categories` 배열을 수정하세요.

색상을 바꾸고 싶다면 `tailwind.config.ts` 또는 `app/globals.css`의 색상 값을 수정하세요.

## 레시피 카드에 이미지나 동영상 넣는 방법

카드 위쪽 썸네일 영역은 `이미지 또는 동영상 URL` 값을 사용합니다.

가장 쉬운 방법은 프로젝트 안에 `public/recipe-media` 폴더를 만들고 이미지나 동영상을 넣는 것입니다.

예시:

```txt
public/
  recipe-media/
    cucumber.jpg
    noodles.mp4
```

그다음 새 레시피를 만들거나 수정할 때 `이미지 또는 동영상 URL` 칸에 아래처럼 입력하세요.

```txt
/recipe-media/cucumber.jpg
```

또는 동영상이면:

```txt
/recipe-media/noodles.mp4
```

이미지는 `.jpg`, `.jpeg`, `.png`, `.webp`를 추천합니다.  
동영상은 `.mp4` 또는 `.webm`을 추천합니다.

YouTube, Instagram 주소는 보통 바로 카드 동영상으로 재생되지 않습니다. 그런 링크는 `출처 URL` 칸에 넣고, 카드에는 직접 이미지 파일이나 짧은 mp4 파일을 넣는 방식이 가장 안정적입니다.

## 저장 방식

백엔드는 없습니다. 데이터는 브라우저의 `localStorage`에 저장됩니다.

즉, 같은 브라우저에서는 새로고침해도 데이터가 남아 있지만, 다른 컴퓨터나 다른 브라우저에서는 공유되지 않습니다.
