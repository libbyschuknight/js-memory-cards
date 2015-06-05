
$(document).ready(function () {

  var cards_clicked = [];
  var img_info_array = [];
  var count = 0;

  placeCard(cardsArray);

  $('.col-md-3').on('click', function(){
    var $img_info = $(this).children();
    img_info_array.push($img_info);
    $img_info.show();
    card_click = $(this).attr('class');
    cards_clicked.push(card_click);

    if ($(cards_clicked).length == 2){
      if ( cards_clicked[0] === cards_clicked[1] ) {
        $('.cards_clicked[0]').find('#img').css("display", "inline");

      } else {

        $img_info.slideToggle("slow");
        img_info_array[0].hide();
        img_info_array = [];
        console.log(img_info_array);
        }
        cards_clicked = [];
        console.log(cards_clicked);
    }


    });

});


