
$(document).ready(function () {

  var cards_clicked = [];
  var count = 0;

    placeCard(cardsArray);
    $('.col-md-3').on('click', function(){
      var $img_info = $(this).children();
      $img_info.show();
      card_click = $(this).attr('class');
      cards_clicked.push(card_click);
      if cards_clicked.length(2)


      console.log(cards_clicked);
      });
      //on first click grab class info and store

      //on second click grab class infor and store somewhere else
      // compare the two variables to see if they are the same
      //if the same images stay shown
      //if different images turn down and loop repeats
    });


