window.onload = function(){
  document.getElementById('work').onclick = function(){
    alert('Кнопка в разработке');
  };
};

$(function(){
  $('.header-nav-link').click(function(){
    var id = $(this).attr('href');

    $('html, body').animate({
      scrollTop: ($(id).offset().top - 76)
    }, 500);
    return false;
  });
});
