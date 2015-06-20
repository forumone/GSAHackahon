(function ($) {

  // Use selectability.js for select elements.
  $('select').selectability();

  // Toggle accordion visibility.
  $('.js-accordion').click(function () {
      $(this).next().slideToggle();
      $(this).toggleClass('is-collapsed');
  });

})(jQuery);
