// input 요소 자체 클릭이 아니라 input이 속한 search 클래스 전체를 클릭 가능하게 바꿔줌
var searchEl = document.querySelector('.search');
var searchInputEl = searchEl.querySelector('input');
var sw = false;

searchEl.addEventListener('click', function () {
  searchInputEl.focus(); // focus를 강제 적용
});

// input 요소가 클릭되어 focused 되면 속성 셋팅 전환
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); // 속성을 placeholder로 하고 그 데이터를 통합검색으로 셋팅
});

// input 요소에 focus가 해제 됐을 때
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); // placeholder 내 데이터 값을 빈 공백으로
})


// footer copyright에서 연도 계산하여 출력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해의 해가 나옴