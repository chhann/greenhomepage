/* 슬라이더 버튼을 눌렀을때 slider-item 위치 바뀜 */
const prevButoon = document.querySelector("#prev-button");
const nextButoon = document.querySelector("#next-button");

// 슬라이드 아이템
const sliderItems = document.querySelectorAll(".slider-item");

// 전체 슬라이더 갯수
const maxSlide = sliderItems.length;

// 현재 슬라이더를 알려주기 위한 변수
let currSlide = 1;

// next 버튼을 눌렀을때 left값이 이동
nextButoon.addEventListener("click",function(){
    //현재 슬라이드가 전체갯수보다 작을때 실행
    if(currSlide<maxSlide){
        //2>-100%, 3>-200%, 4>-300% >> 화면의넓이 곱해서
        currSlide++;  
        //slider.items를 통해서 모든 legt값 이동
        for (let i = 0; i<sliderItems.length; i++){
            sliderItems[i].style.left = `${100+(-100)*currSlide}%`
        } 
    }
})

// prev 버튼을 눌렀을때 left값이 이동
prevButoon.addEventListener("click",function(){
    //현재 슬라이드가 보다 클때 실행
    if(currSlide>1){
        //2>-100%, 3>-200%, 4>-300% >> 화면의넓이 곱해서
        currSlide--;  
        //slider.items를 통해서 모든 legt값 이동
        for (let i = 0; i<sliderItems.length; i++){
            sliderItems[i].style.left = `${100+(-100)*currSlide}%`
        } 
    }
})