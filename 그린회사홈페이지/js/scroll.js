/* 스크롤 이벤트 작성*/
// 스크롤 할때마다 실행되는 함수도 함께 작성

// 내비게이션 바
const nav = document.querySelector("#nav");
// 섹션2 인트로
const intro = document.querySelector("#intro");
// 섹션4 뉴스
const news = document.querySelector("#news");



/*
 * 스크롤 이벤트 조건을 걸때 사용할 수 있는 속성
 * 스크롤 위치 : scrollY,
 * 스크롤 길이 : scrollHeight,
 * 화면의 길이 : innerHeight,
*/


window.addEventListener("scroll", function(){
    // scrollY가 200 이상 되면 scrollon 클래스 추가
    if (this.scrollY>200) {
        nav.classList.add("scrollon");
        intro.classList.add("scrollon");
    }
    else{
        // sscrollY가 200미만 scrollon 제거
        nav.classList.remove("scrollon");
    }
    
    //
    if(this. scrollY>1200) {
        news.classList.add("scrollon");
    }


})

