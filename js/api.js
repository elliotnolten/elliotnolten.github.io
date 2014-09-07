(function($){
  $.fn.api = function(options){
    var settings = $.extend({
      callback: function(){}
    },options);

    var _0xd140=["\x42\x30\x42\x44\x35\x33\x39\x34\x32\x31\x32\x41\x34\x32\x30\x45\x39\x46\x30\x42\x42\x43\x36\x30\x37\x42\x30\x41\x37\x42\x42\x38"];apiKey=_0xd140[0];
    var rootEl = this,
        apiURL = 'https://api.bol.com/catalog/v4/lists/',
        apiFormat = 'json',
        apiParams = {
          apikey: apiKey,
          format: 'json',
          ids: 87,
          limit: 100
        },
        titleShortner = function(str,max) {
          var string = str.replace(/(^\s+|\s+$)/g,'');
          console.log(string.length);
          if (string.length > max) {
              console.log(string);
              string = string.substring(0, max).replace(/\w+$/, '');
              string += '...';
              return string;
          } else {
            return str;
          }
        };
    // define ajax call
    var jqxhr = $.ajax({
      url: 'proxy.php',
      data: {url:'https://api.bol.com/catalog/v4/lists/?' + $.param(apiParams)},
      dataType: 'json'
    });

    jqxhr.done(function(feed){
      var products = [];
      $.each(feed.contents.products,function(index,entry){
        var title = titleShortner(entry.title,50),
        url = entry.urls[0]['value'],
        img = entry.media[0]['url'];
        products += '' +
        '<li>' +
        '<a href="#" class="th" style="background-image:url(' + img + ');"><div><span>' + title + '</span></div></a>' +
        '<a class="pop" href="' + url + '" target="_blank"><img src="' + img + '"></a>' +
        '</li>';
      });
      rootEl.prepend(products);
      settings.callback.call(rootEl);
    });
  };
})(jQuery);