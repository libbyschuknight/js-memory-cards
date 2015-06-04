
var joshua = new Card("joshua", "<img src = http://www.buckybox.com/images/team-joshua-63101086.jpg >", false);
var joshua2 = new Card("joshua", "<img src = http://www.buckybox.com/images/team-joshua-63101086.jpg >", false);
var rohan = new Card("rohan", "<img src = http://wellingtontimebank.org.nz/sites/wellingtontimebank.org.nz/files/Rohan%20Wakefield.jpg >", false);
var rohan2 = new Card("rohan", "<img src = http://wellingtontimebank.org.nz/sites/wellingtontimebank.org.nz/files/Rohan%20Wakefield.jpg >", false);

// var $dog = $('dog')
// var $dog2 = $('dog2')
// var $cat = $('cat')
// var $cat2 = $('cat2')

var cardsArray = [joshua, joshua2, rohan, rohan2]

$(document).ready(function () {
  for (var i = 1; i < 5; i ++){
    var $id = $(document).find("#" + i);
    var object = cardsArray[i-1];
    $id.html(object.image_src);
  }



})


