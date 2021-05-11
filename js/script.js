$(document).ready(function(){
    $(".icon").click(function(){
        $(".nav-bar").slideToggle();
    });
});
// slide show
var i=0;
var slidImg=["img/slide1-home1.jpg","img/slide2-home1.jpg","img/slide3-home1.jpg"];
var slidShow=function(){
    document.slideshow.src=slidImg[i];
    if(i<slidImg.length-1){
    i++;
    }else{
        i=0
    }
    setTimeout("slidShow()",2000);
}
slidShow()

// owl carousal
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})