# 📝 JUST RECORD: 에세이 작성 가이드

이 홈페이지는 단순히 글만 적는 곳이 아닙니다.  
사진과 동영상을 마음껏 조합해 여러분만의 인생 기록을 화려하게 장식할 수 있는 시스템이 갖춰져 있습니다.

---

## 📂 1. 파일 위치 및 작성법
- **글을 쓰는 곳:** `src/content/logs/` 폴더
- **글 파일 형식:** 반드시 `.mdx` 확장자로 만들어주세요. (예: `my-trip.mdx`)
- **미디어(사진/영상) 넣는 곳:** `public/images/` 폴더 안에 파일들을 모아두면 됩니다.

> ⚠️ 첫 머리(Frontmatter)에는 반드시 제목, 날짜, 요약, 태그를 적어야 합니다. 형식은 기존 `first-record.mdx` 파일을 참고하세요!

---

## 🖼️ 2. 미디어 컴포넌트 사용법

본문 작성 시 아래 코드처럼 복사해서 붙여넣고, 따옴표 안에 아까 `public/images/`에 넣어둔 파일 이름만 적어주면 알아서 예쁘게 표시됩니다!

<br/>

### 🎬 세련된 비디오 플레이어 추가하기
동영상 파일을 페이지 중앙에 꽉 차게 띄워줍니다.

```mdx
import Video from '../../components/Video.astro';

<Video src="my-vacation.mp4" />
```
- 반복 재생이나 자동 재생을 원하시면 이렇게 옵션을 추가하세요: `<Video src="my-vacation.mp4" autoplay loop />`

<br/>

### 📸 풀 스크린 갤러리 띄우기 (여러 장 사진)
사진을 나란히 격자 형태로 예쁘게 배열해 주고, 클릭 시 모바일/PC 상관없이 전체 화면으로 사진을 크게 볼 수 있는 라이트박스 갤러리가 열립니다.

```mdx
import Gallery from '../../components/Gallery.astro';

<Gallery images={['photo1.jpg', 'photo2.png', 'photo3.jpg']} />
```
- `images={['파일명 1', '파일명 2', ...]}` 형태로 원하는 만큼 추가하세요!

<br/>

---

**즐거운 기록 생활 되세요!** 🚀
