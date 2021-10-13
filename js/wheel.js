const header = document.querySelector("#header");
const toggleBtn = document.querySelector('.toggleBtn');
const bgWrapper = document.querySelector('.bg-wrapper');
const gnb = document.querySelector('#gnb');


/* 스크롤 됐을때(상단헤더 투명도 조절) */
document.addEventListener('scroll', ()=>{
  if(window.pageYOffset > 10){
    header.style.opacity='0.8'; 
  }else if(window.pageYOffset < 10){
    header.style.opacity ='1';
  }
});

/* 상단 헤더에 마우스오버됐을때 */
gnb.addEventListener('mouseover', ()=>{
  bgWrapper.classList.add('on');
});

/* 상단 헤더에 마우스아웃됐을때 */
gnb.addEventListener('mouseout', ()=>{
  bgWrapper.classList.remove('on');
})


/* 상단 이동 버튼 클릭했을 때 */
toggleBtn.addEventListener('click', ()=>{
  window.scrollTo({top:0, left:0, behavior:'smooth'});
});




let n = 0;
let state = 1;

document.addEventListener('wheel', function(e) {
  // console.log(e.wheelDelta)
  if (e.wheelDelta < 0 && state == 1) {
    state = 0;
    n++;
    if (n == 3) {
      n = 2;
      state = 1;
    }
    else {
      $("html:not(:animated), body:not(:animated)").animate({ scrollTop: $("section:eq("+n+")").position().top }, 1000, function() {
        state = 1
      })
    }
  }
  else if (e.wheelDelta > 0 && state == 1) {
    state = 0;
    n--;
    if (n < 0) {
      n = 0;
      state = 1;
    }
    else {
      $("html:not(:animated), body:not(:animated)").animate({ scrollTop: $("section:eq("+n+")").position().top }, 1000, function() {
        state= 1;
      })
    }
  }
//   console.log(n)
})
window.addEventListener('load', function() {
  setTimeout(function() {
    scrollTo(0, 0)
  }, 10)
})