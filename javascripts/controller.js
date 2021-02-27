var jeremy = new Card("jeremy", "<img id='img_1' src = https://lh3.googleusercontent.com/pw/ACtC-3f49MI06zlFRoBO-15u-jPFYZnA9nKATBUJs9leqotYtiEEXusxvXYR_d3PFhZobw4uPIdzwvxkMbLrML4BUKaljzUteMdhDjD7EjYrjbnmuee_TwuiH22AWY3ubut2GlMEwd_4JayEd6QyGfRxgh0aPw=w1290-h1426-no?authuser=0 >");

// rohan
var rohan = new Card("rohan", "<img id='img_2' src = https://wellingtontimebank.org.nz/sites/wellingtontimebank.org.nz/files/Rohan%20Wakefield.jpg >");

var libby = new Card("libby", "<img id='img_3' src = https://lh3.googleusercontent.com/pw/ACtC-3dgU57BONAEzimdRdN9Ah9n56ijuKXzs04N5CXYFgjX2Es5XjIy4CisxZyqrFZ5A9Jcqmpr73aF7-sQn3ZrFKWZeHOoaeqEXfmzqORz4fQeV1dorDzxd6gg0hKxXrlkLLFSKJ0dS1Q5Kryhfn9VQWnJ0Q=s354-no?authuser=0");

// libby
var libby = new Card("libby", "<img id='img_5' src = https://lh3.googleusercontent.com/pw/ACtC-3dgU57BONAEzimdRdN9Ah9n56ijuKXzs04N5CXYFgjX2Es5XjIy4CisxZyqrFZ5A9Jcqmpr73aF7-sQn3ZrFKWZeHOoaeqEXfmzqORz4fQeV1dorDzxd6gg0hKxXrlkLLFSKJ0dS1Q5Kryhfn9VQWnJ0Q=s354-no?authuser=0>");

// rylan
var rylan = new Card("rylan", "<img id='img_5' src = https://lh3.googleusercontent.com/pw/ACtC-3cwxszCE5dn3DDFWOIGPYMVZk0ZAntXkYMIOlNUHccPSaXKyDwQE2yOwCR7X_lD1rkmNAG0MewFyrBfazCK0RSY47XiyxYGipczraLIaO6ZDW7JRaTwSHoisJIg5AJiZgDctBaclD4hu4O5hvnB8JRPYw=w898-h878-no>");


var raquel = new Card("raquel", "<img id='img_9' src = https://avatars3.githubusercontent.com/u/7959274?v=3&s=400>");

var daniel = new Card("daniel", "<img id='img_11' src = https://avatars1.githubusercontent.com/u/1431991?v=3&s=400>");

var eugene = new Card("eugene", "<img id='img_13' src = https://avatars3.githubusercontent.com/u/7520103?v=3&s=400>");

var samson = new Card("samson", "<img id='img_15' src =https://avatars1.githubusercontent.com/u/105251?v=3&s=400>");

var cardsArray = [
jeremy, rohan, rylan, libby,
raquel, daniel, eugene, samson,
jeremy, rohan, rylan, libby,
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
