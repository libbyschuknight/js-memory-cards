
var dog = new Card("dog", "dog", false);
var dog2 = new Card("dog", "dog", false);
var cat = new Card("cat", "cat", false);
var cat2 = new Card("cat", "cat", false);

// var $dog = $('dog')
// var $dog2 = $('dog2')
// var $cat = $('cat')
// var $cat2 = $('cat2')

var cardsArray = [dog, dog2, cat, cat2]

$(document).ready(function () {
  for (var i = 1; i < 5; i ++){
    var $id = $(document).find("#" + i);
    var object = cardsArray[i-1];
    $id.text(object.description);
    // console.log($id);
  }
  // append the description of the card to it
  // $id.text();

})


