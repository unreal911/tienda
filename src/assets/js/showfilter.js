const showFilter=()=>{
  $('.js-show-filter').on('click',function(){
    $(this).toggleClass('show-filter');
    $('.panel-filter').slideToggle(400);

    if($('.js-show-search').hasClass('show-search')) {
        $('.js-show-search').removeClass('show-search');
        $('.panel-search').slideUp(400);
    }
  });

  $('.js-show-search').on('click',function(){
    $(this).toggleClass('show-search');
    $('.panel-search').slideToggle(400);

    if($('.js-show-filter').hasClass('show-filter')) {
        $('.js-show-filter').removeClass('show-filter');
        $('.panel-filter').slideUp(400);
    }
  });

}
showFilter()

