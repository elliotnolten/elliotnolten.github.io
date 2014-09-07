(function($){
  $(document).ready(function(){
    var list = $('.productslist');
    list.api({
      callback:function(){
        var th = list.find('.th'),
            pops = th.find('.pop'),
            mask = $('.mask'),
            winH = $(window).height(),
            winW = $(window).width(),
            calcPos = function(el){
              var elW = el.width(),
                  elH = el.height();
              el.css({
                'top': (winH - elH)/2,
                'left': Math.abs(winW - elW)/2
              });
            };

        th.each(function(){
          $(this).on('click.popup',function(e){
            e.preventDefault();
            var pop = $(this).next();
            if (!pop.hasClass('active')) {
              pop.addClass('active');
              mask.addClass('active');
              calcPos(pop);
            }
          });
        });

        mask.on('click',function(){
          $('.active').removeClass('active');
        });
      }
    });
  });
})(jQuery);