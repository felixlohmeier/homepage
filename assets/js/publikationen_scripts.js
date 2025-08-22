/*
 Author: Felix Lohmeier
 Version: 0.1
 */

var $btns = $('.filter').click(function() {
  if (this.id == 'all') {
    $('#parent > div, #parent > li').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#parent > div, #parent > li').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})
