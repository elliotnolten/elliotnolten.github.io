(function($){
  var modalEl = $('.modal'),
      headerEl = modalEl.find('.header'),
      headerSpan = headerEl.find('.txt'),
      headerOriginTxt = headerSpan.text(),
      addedTxt = '"Dying Light" is toegevoegd aan ',
      listOption = modalEl.find('.lists').find('a'),
      stopEl = modalEl.find('.stop'),
      newListInput = modalEl.find('.new_list');

  listOption.click(function(e){
    e.preventDefault();
    var listName = $(this).text(),
        headerTxt = addedTxt + '<strong>' + listName + '</strong>';
    headerSpan.html(headerTxt);
    modalEl.addClass('added');
  });

  stopEl.click(function(e){
    e.preventDefault();
    modalEl.removeClass('added');
    headerSpan.text(headerOriginTxt);
  });

})(jQuery);