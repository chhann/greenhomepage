/* 스크롤 이벤트 작성*/
// 스크롤 할때마다 실행되는 함수도 함께 작성

// 내비게이션 바
const nav = document.querySelector("#nav")

/*
 * 스크롤 이벤트 조건을 걸때 사용할 수 있는 속성
 * 스크롤 위치 : scrollY,
 * 스크롤 길이 : scrollHeight,
 * 화면의 길이 : innerHeight,
*/


window.addEventListener("scroll", function(){
    // scrollY가 200 이상 되면 scrollon 클래스 추가
    if (this.scrollY>200) {
        nav.classList.add("scrollon")
    }
    else{
        // sscrollY가 200미만
        nav.classList.remove("scrollon");
    }
    
    //  scrollY가 200 미만이면 scrollon 제거
})