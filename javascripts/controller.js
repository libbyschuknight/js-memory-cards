
var joshua = new Card("joshua", "<img id='img_1' src = http://www.buckybox.com/images/team-joshua-63101086.jpg >", false);
var joshua2 = new Card("joshua", "<img id='img_2' src = http://www.buckybox.com/images/team-joshua-63101086.jpg >", false);
var rohan = new Card("rohan", "<img id='img_3' src = http://wellingtontimebank.org.nz/sites/wellingtontimebank.org.nz/files/Rohan%20Wakefield.jpg >", false);
var rohan2 = new Card("rohan", "<img id='img_4' src = http://wellingtontimebank.org.nz/sites/wellingtontimebank.org.nz/files/Rohan%20Wakefield.jpg >", false);
var darcy = new Card("darcy", "<img id='img_5' src = https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/041/3ae/04d4230.jpg>", false);
var darcy2 = new Card("darcy", "<img id='img_6' src = https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/041/3ae/04d4230.jpg>", false);
var kerwin = new Card("kerwin", "<img id='img_7' src = https://yt3.ggpht.com/-VNCbHXwPKHA/AAAAAAAAAAI/AAAAAAAAAAA/zTHO0QRPbbk/s900-c-k-no/photo.jpg>", false);
var kerwin2 = new Card("kerwin", "<img id='img_8' src = https://yt3.ggpht.com/-VNCbHXwPKHA/AAAAAAAAAAI/AAAAAAAAAAA/zTHO0QRPbbk/s900-c-k-no/photo.jpg>", false);
var raquel = new Card("raquel", "<img id='img_9' src = https://avatars3.githubusercontent.com/u/7959274?v=3&s=400>", false);
var raquel2 = new Card("raquel", "<img id='img_10' src = https://avatars3.githubusercontent.com/u/7959274?v=3&s=400>", false);
var daniel = new Card("daniel", "<img id='img_11' src = https://avatars1.githubusercontent.com/u/1431991?v=3&s=400>", false);
var daniel2 = new Card("daniel", "<img id='img_12' src = https://avatars1.githubusercontent.com/u/1431991?v=3&s=400>", false);
var eugene = new Card("eugene", "<img id='img_13' src = https://avatars3.githubusercontent.com/u/7520103?v=3&s=400>", false);
var eugene2 = new Card("eugene", "<img id='img_14' src = https://avatars3.githubusercontent.com/u/7520103?v=3&s=400>", false);
var samson = new Card("samson", "<img id='img_15' src =https://avatars1.githubusercontent.com/u/105251?v=3&s=400>", false);
var samson2 = new Card("samson", "<img id='img_16' src = https://avatars1.githubusercontent.com/u/105251?v=3&s=400>", false);


var cardsArray = [
joshua, joshua2, rohan, rohan2,
darcy, darcy2, kerwin, kerwin2,
raquel, raquel2, daniel, daniel2,
eugene, eugene2, samson, samson2
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
