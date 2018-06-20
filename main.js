/*SCROLL-PAGE*/

$(document).ready(function(){
      $("#menu").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 700);
      });
      });

// MODAl contacts
var modal = document.getElementById('modal');
var close = document.getElementById('close');
document.getElementById('contacts').onclick = function(){
  modal.style.display = 'block';
}
modal.onclick = function(event){
  if(event.target == modal || event.target == close ){
    modal.style.display = 'none';
  }
}



