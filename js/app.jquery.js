$(window).scroll(function() {
    $(".hero.section").each(function(){
      var posTop        = $(this).offset().top ;
      var posBottom     = $(this).height();
     	var wrapHeroTop   = $('.wrap-hero').offset().top;
      var wrapGraphsTop = $('.wrap-graphs').offset().top;
      var wrapImgTop    = $('.wrap-img').offset().top;
      var imgBron       = $('.img-bron').offset().top;
      
      var winTop = $(window).scrollTop();  
      var winBottom = winTop + $(window).height();
 //       wrap-hero
         if (wrapHeroTop*1.1 < winTop ) {
          $('.wrap-hero').addClass("rotate-wrap-hero");        
           $('.wrap-img').addClass('hidden-wrap-img');
        } else if( wrapHeroTop*1.1  > winTop ) {
          $('.wrap-hero').removeClass('rotate-wrap-hero');
          $('.wrap-img').removeClass('hidden-wrap-img');
        };
      
//   wrap-graphs  and bg-white  
      if(wrapGraphsTop  < winTop){
        $('.wrap-graphs').addClass('active-wrap-graphs');
        $('.bg-white').addClass('active-bg-white');
         
      } else if ( wrapGraphsTop   > winBottom * 0.9){
        $('.wrap-graphs').removeClass('active-wrap-graphs');
        $('.bg-white').removeClass('active-bg-white');
         
      }
      
//       wrap-img
      if (wrapHeroTop*1.2 < winTop ) {
               
           $('.wrap-img').addClass('hidden-wrap-img');
        } else if( wrapHeroTop*1.2  > winTop ) {
           
          $('.wrap-img').removeClass('hidden-wrap-img');
        };
//  img-bron
      if( imgBron < winTop) {
        $('.img-bron').addClass('active-img-bron');
      } else if(imgBron > winBottom) {
        $('.img-bron').removeClass('active-img-bron');
      }
    });
  
  });