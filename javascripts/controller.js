
var dog = card("dog", "dog", false);
var dog2 = card("dog", "dog", false);
var cat = card("cat", "cat", false);
var cat2 = card("cat", "cat", false);

var $dog = $('dog')
var $dog2 = $('dog2')
var $cat = $('cat')
var $cat2 = $('cat2')

$(document).ready(function () {
  //Append description 'dog' to id in html
  for (var i = 1; i < 5; i ++){
    //find an id
    //search all the html for the id
    var $id = $(document).find("#" + i);
    console.log($id);
    $id.text("this is a string");
    // append the description of the card to it

  }

})


