var backgrounds = [
  {  image: 'http://www.traveltipoffs.com/wp-content/uploads/2013/01/barcelona3.jpg',
   subtitle: 'Barcelona 3'
  },
  {  image: 'http://www.tourist-destinations.com/wp-content/uploads/2012/07/Spain-tourist-attractions.jpg',
   subtitle: 'Spain'
  },
  {  image: 'http://travelthee.com/wp-content/uploads/2014/10/barcelona-beach.jpg',
   subtitle: 'barcelona beach'
  },
  {  image: 'http://thewowstyle.com/wp-content/uploads/2015/01/Valencia.jpg',
   subtitle: 'Valencia in HD'
  }
]; 

/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$(document).ready(function(){
  var bgNumber = getRandomInt(0, backgrounds.length-1);
  $('body').css('background-image', 'url('+backgrounds[bgNumber].image+')');
});