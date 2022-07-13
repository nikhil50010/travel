
$(window).scroll(function(){
     if($(this).scrollTop()>200){
        $("header").addClass("sticky")
        }
        else{
        $("header").removeClass("sticky")
         }
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            items:4,
            margin:30,
        }
    );
  });