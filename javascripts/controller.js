var joshua = new Card("joshua", "<img id='img_1' src = https://www.buckybox.com/images/team-joshua-63101086.jpg >");
var rohan = new Card("rohan", "<img id='img_3' src = https://wellingtontimebank.org.nz/sites/wellingtontimebank.org.nz/files/Rohan%20Wakefield.jpg >");
var darcy = new Card("darcy", "<img id='img_5' src = https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/041/3ae/04d4230.jpg>");
var kerwin = new Card("kerwin", "<img id='img_7' src = https://yt3.ggpht.com/-VNCbHXwPKHA/AAAAAAAAAAI/AAAAAAAAAAA/zTHO0QRPbbk/s900-c-k-no/photo.jpg>");
var raquel = new Card("raquel", "<img id='img_9' src = https://avatars3.githubusercontent.com/u/7959274?v=3&s=400>");
var daniel = new Card("daniel", "<img id='img_11' src = https://avatars1.githubusercontent.com/u/1431991?v=3&s=400>");
var eugene = new Card("eugene", "<img id='img_13' src = https://avatars3.githubusercontent.com/u/7520103?v=3&s=400>");
var samson = new Card("samson", "<img id='img_15' src =https://avatars1.githubusercontent.com/u/105251?v=3&s=400>");

var cardsArray = [
joshua, rohan, darcy, kerwin,
raquel, daniel, eugene, samson,
joshua, rohan, darcy, kerwin,
raquel, daniel, eugene, samson
].sort(function() {
  return .5 - Math.random();
});

function placeCard(array) {
  for (var i = 1; i < 17; i ++){
    var $id = $(document).find("#" + i);
    var object = array[i-1];
    $id.html(object.image_src);
    $id.addClass(object.match);
  }};
