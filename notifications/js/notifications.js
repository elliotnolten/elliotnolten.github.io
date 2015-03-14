(function($){
  var modalEl = $('.modal'),
      headerEl = modalEl.find('.header'),
      headerSpan = headerEl.find('.txt'),
      headerOriginTxt = headerSpan.text(),
      addedTxt = '"Dying Light" is toegevoegd aan ',
      listOption = modalEl.find('.lists').find('a:not(.new_list)'),
      stopEl = modalEl.find('.stop'),
      newList = modalEl.find('.new_list'),
      newListInput = newList.find('input');

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

  newListInput.on('keypress',function(e){
    if ($(this).val()) {
      $(this).parent().after('<a href="#" class="submit sb sb-check h-padding--s"></a>');
    } else {
      $('.submit').remove();
    }
    $(this).parent().parent().addClass('option');
  });

})(jQuery);