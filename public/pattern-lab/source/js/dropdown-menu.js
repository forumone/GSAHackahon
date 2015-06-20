(function ($) {
  var $menu = $('.js-dropdown-menu'),
      $topItems = $menu.find('> .nav__item'),
      $topLinks = $topItems.find('> .nav__link'),
      $subLinks = $topItems.find('> .nav--subnav .nav__link');

  // Add ARIA roles to menu elements.
  $menu.attr('role', 'menu');
  $topItems.attr('role', 'presentation');
  $topLinks.attr('role', 'menuitem');

  // Add is-expanded class when top items are hovered. Requires jQuery
  // hoverIntent plugin.
  $topItems.hoverIntent({
    sensitivity: 8, // number = sensitivity threshold (must be 1 or higher)
    interval: 200, // number = milliseconds of polling interval
    over: function () {
      $(this).addClass('is-expanded');
    },
    timeout: 250, // number = milliseconds delay before onMouseOut function call
    out: function () {
      $(this).removeClass('is-expanded');
    }
  });

  // Add is-expanded class when top links are focused.
  $topLinks.focusin(function () {
    $(this).parent().addClass('is-expanded');
  }).focusout(function () {
    $(this).parent().removeClass('is-expanded');
  });

  // Add is-expanded class when links are focused.
  $subLinks.focusin(function () {
    $(this).parent().parent().parent().addClass('is-expanded');
  }).focusout(function () {
    $(this).parent().parent().parent().removeClass('is-expanded');
  });

})(jQuery);
