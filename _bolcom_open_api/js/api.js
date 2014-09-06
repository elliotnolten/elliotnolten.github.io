(function($){
  var _0xd140=["\x42\x30\x42\x44\x35\x33\x39\x34\x32\x31\x32\x41\x34\x32\x30\x45\x39\x46\x30\x42\x42\x43\x36\x30\x37\x42\x30\x41\x37\x42\x42\x38"];apiKey=_0xd140[0];
  var apiURL = 'https://api.bol.com/catalog/v4/lists/',
      apiFormat = 'json',
      apiParams = [
            'ids=4005',
            'sort=priceasc'
          ],
      apiEndpoint = apiURL + '?apikey=' + apiKey + '&format=' + apiFormat + '&' + apiParams.join('&'),
      functionCall;

  // define ajax call
  var jqxhr = $.ajax({url: '/proxy.php?url=' + apiEndpoint});

  jqxhr.done(function(feed){
    var products = [];
    $.each(feed.contents.products,function(index,entry){
      console.log(entry.urls[0]['value']);
      products += '' +
      '<li><a href="' + entry.urls[0]['value'] + '">' + entry.title + '</a></li>';
    });
    $('ul').html(products);
  });
})(jQuery);