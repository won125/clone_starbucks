// Badge img가 스크롤을 내리면 사라지도록 하고 위치에 따라 스크롤업 버튼이 보이거나 숨겨지게 됨
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () { //throttle 메소드 이용 -> 함수 대량 실행 방지
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션) -> 애니메이션 동장
    gsap.to(badgeEl, .6, { // 뱃지 요소가 0.6초 동안 opacity가 0으로 되는 애니메이션 동작
      opacity: 0,
      display: 'none'
    }); 
    // 스크롤업 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 스크롤업 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x:100
    });
  }
}, 300)); 

// 스크롤업 버튼 눌렀을 때 페이지 맨 상단으로 이동 기능
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

// visual 섹션 내 타이틀의 fade-in 애니메이션 설정
const fadeEl = document.querySelectorAll('.visual .fade-in');
fadeEl.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 순차적으로 애니메이션이 동작하도록 설정
    opacity: 1
  });
});

// swiper 사용하여 공지사항 세로 슬라이드
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

// swiper 사용하여 프로모션 가로 슬라이드
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' = swiper slide direction 속성의 기본값
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기 (왼쪽 ㄴㄴ)
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

// 푸터 위 awards의 이미지 슬라이드 구현
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
   }
});

// 스타벅스 프로모션을 클릭하면 아래의 프로모션 이미지 목록이 숨겨지거나 보이는 기능
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide');

  } else {
    promotionEl.classList.remove('hide');
  }
});


// 유튜브 비디오 영역 위에 둥둥 떠 다니는 아이콘들의 애니메이션 구현
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한반복
    yoyo: true, // 한 번 재생된 애니메이션을 그 뒤로 다시 실행
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


 // scrollMagic library API 사용
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  // 특정 섹션이 화면에 보이기 시작하면 애니메이션을 추가해주는 역할
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소 지정
      triggerHook: .8 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});