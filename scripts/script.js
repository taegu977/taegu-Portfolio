//fullpage
$('#wrap').fullpage({
    scrollBar:true,
    scrollingSpeed:400,
    responsiveWidth:1650,
    showActiveTooltip:true,
    menu:'nav',
    anchors:['intro', 'profile', 'web', 'app', 'sns', 'illust', 'video', 'outro']
})

//web swiper
const web = new Swiper('.web .swiper', {
    autoplay:{delay:4000},
    loop:true,
    navigation:{
        nextEl:'.web .swiper-button-next',
        prevEl:'.web .swiper-button-prev',
    }
})

//app swiper
const app = new Swiper('.app .swiper', {
    autoplay:{delay:4000},
    loop:true,
    navigation:{
        nextEl:'.app .swiper-button-next',
        prevEl:'.app .swiper-button-prev',
    }
})

// sns swiper
const sns = new Swiper('.sns .swiper', {
    slidesPerView:2,//한번에 보일 슬라이드 수(모바일)
    spaceBetween:20, //슬라이드 사이 여백
    autoplay:{delay:1, desableOnInteration:true,},
    loop:true,
    speed:8000,
    freemode:true,
    // 반응형 슬라이드 수
    breakpoints:{
        800:{slidesPerView:3,},//800이상일 때 3개
        1200:{slidesPerView:5,},//1200이상일 때 4개
    }
})

//illust swiper
const illust = new Swiper('.illust .swiper', {
    slidesPerView:2,//한번에 보일 슬라이드 수(모바일)
    spaceBetween:20, //슬라이드 사이 여백
    autoplay:{delay:1, desableOnInteration:true,},
    loop:true,
    speed:8000,
    freemode:true,
    // 반응형 슬라이드 수
    breakpoints:{
        800:{slidesPerView:3,},//800이상일 때 3개
        1200:{slidesPerView:5,},//1200이상일 때 4개
    }
})
