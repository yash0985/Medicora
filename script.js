// $(function(){
//     $(".hameBurger i").click(function(){

//     })
// })

 $(document).ready(function () {
    $(".show").click(function () {
      $(".show").fadeOut(200, function () {
        $(".hide").fadeIn(200);
      });
      $(".showbar").slideDown(300);
    });

    $(".hide").click(function () {
      $(".hide").fadeOut(200, function () {
        $(".show").fadeIn(200);
      });
      $(".showbar").slideUp(300);
    });




     $('.arrow').on('mouseenter', function () {
      $(this).find('.ul2').stop(true, true).slideDown(200);
    });

    $('.arrow').on('mouseleave', function () {
      $(this).find('.ul2').stop(true, true).slideUp(200);
    });









    $('.slider-before-after').each(function () {
    var $container = $(this);
    var $overlay = $container.find('.img-overlay');
    var $handle = $container.find('.handle');

    $container.on('mousemove touchmove', function (e) {
      var offset = $container.offset();
      var x = (e.pageX || e.originalEvent.touches[0].pageX) - offset.left;
      var width = $container.width();
      if (x < 0) x = 0;
      if (x > width) x = width;

      $overlay.css('width', x + 'px');
      $handle.css('left', x + 'px');
    });
  });

  });





