
$(document).ready(function () {
    placeCard(cardsArray);

    // on click of card

    $('.col-md-3').on('click', function(){
      var $img_info = $(this).children();
      console.log($img_info);
      $img_info.show();



    });

      // revel face image


})
