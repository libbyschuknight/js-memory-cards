
var joshua = new Card("joshua", "<img src = http://www.buckybox.com/images/team-joshua-63101086.jpg >", false);
var joshua2 = new Card("joshua", "<img src = http://www.buckybox.com/images/team-joshua-63101086.jpg >", false);
var rohan = new Card("rohan", "<img src = http://wellingtontimebank.org.nz/sites/wellingtontimebank.org.nz/files/Rohan%20Wakefield.jpg >", false);
var rohan2 = new Card("rohan", "<img src = http://wellingtontimebank.org.nz/sites/wellingtontimebank.org.nz/files/Rohan%20Wakefield.jpg >", false);
var darcy = new Card("darcy", "<img src = https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/041/3ae/04d4230.jpg>", false);
var darcy2 = new Card("darcy", "<img src = https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/041/3ae/04d4230.jpg>", false);
var kerwin = new Card("kerwin", "<img id='img_2' src = https://yt3.ggpht.com/-VNCbHXwPKHA/AAAAAAAAAAI/AAAAAAAAAAA/zTHO0QRPbbk/s900-c-k-no/photo.jpg>", false);
var kerwin2 = new Card("kerwin", "<img id='img_1' src = https://yt3.ggpht.com/-VNCbHXwPKHA/AAAAAAAAAAI/AAAAAAAAAAA/zTHO0QRPbbk/s900-c-k-no/photo.jpg>", false);


var cardsArray = [
joshua, joshua2, rohan, rohan2,
darcy, darcy2, kerwin, kerwin2,
joshua, joshua2, darcy, darcy2,
kerwin, kerwin2, rohan, rohan2
].sort(function() {
  return .5 - Math.random();
});

// //set array - not shuffling
// var cardsArray = [
// joshua, joshua2, rohan, rohan2,
// darcy, darcy2, kerwin, kerwin2,
// joshua, joshua2, darcy, darcy2,
// kerwin, kerwin2, rohan, rohan2
// ]

function placeCard(array) {
  for (var i = 1; i < 17; i ++){
    var $id = $(document).find("#" + i);
    var object = array[i-1];
    $id.html(object.image_src);
  }};
