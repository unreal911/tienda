
const iniciarModal = () => {

  (function ($) {
    /*==================================================================
        [ Show modal1 ]*/
    $('.js-show-modal1').on('click', function (e) {
      e.preventDefault();
      $('.js-modal1').addClass('show-modal1');
    });

    $('.js-hide-modal1').on('click', function () {
      $('.js-modal1').removeClass('show-modal1');
    });
  })(jQuery);
}
iniciarModal()
