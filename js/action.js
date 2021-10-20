$(document).ready(function(){
    $('.plan-package .item').click(function(){
      $('.plan-package .item').removeClass("active");
      $(this).addClass("active");
  });
  });

  $(function(){
    $('.item-card.owl-carousel').owlCarousel(
        {
            items: 3,
            lazyLoad: true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause:false,
            nav: true,
            loop: true,
            autoHeight: true,
            responsive:{
              0:{
                items:1
              },
              1200:{
                items:3,
                dots:true
              }
          }
       
        }
    );
  });