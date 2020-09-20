$('#button-scroll-up').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 1000);
});

$(document).scroll(function () {
  if ($(document).scrollTop() > 300) {
    $('#button-scroll-up').fadeIn();
  } else {
    $('#button-scroll-up').fadeOut();
  }
});
