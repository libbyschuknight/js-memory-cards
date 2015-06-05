
$(document).ready(function () {

  var cards_clicked = [];
  var img_info_array = [];
  var winning_array = [];

  placeCard(cardsArray);

  $('.col-md-3').on('click', function(){
    count ++;
    var $img_info = $(this).children();
    img_info_array.push($img_info);
    $img_info.show();
    card_click = $(this).attr('class');
    cards_clicked.push(card_click);

    if ($(cards_clicked).length == 2){
      if ( cards_clicked[0] === cards_clicked[1] ) {
        $('.cards_clicked[0]').find('#img').css("display", "inline");
          winning_array.push(cards_clicked[0])

      } else {

        $img_info.slideToggle(2000);
        img_info_array[0].hide();

        }
        cards_clicked = [];
        img_info_array = [];
      }
      if ($(winning_array).length === 8) {
        alert ("YOU WIN!!!");
      };

    });

});

function reloadGame() {
    location.reload();
}



