$(document).ready(function(){

  $('nav a').each(function(index, elemento){
    $(this).css({
      'top': '-200px'
    });

    $(this).animate({
      top: '0'
    }, 1000 + (index * 500));
  });


  $('#uno').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    },500);
  });

  var productos = $('#item2').offset().top;


  $('#dos').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: productos - 90
    },500);
  });



  var ubicacion = $('#item3').offset().top;


  $('#tres').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ubicacion - 90
    },1000);
  });

  var contacto = $('#item4').offset().top;


  $('#cuatro').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: contacto
    },1000);
  });
});
