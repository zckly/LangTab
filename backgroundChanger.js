var spainBackgrounds = [
  {  image: 'http://www.traveltipoffs.com/wp-content/uploads/2013/01/barcelona3.jpg',
   subtitle: 'Barcelona'
  },
  {  image: 'http://www.tourist-destinations.com/wp-content/uploads/2012/07/Spain-tourist-attractions.jpg',
   subtitle: 'Spain'
  },
  {  image: 'http://thewowstyle.com/wp-content/uploads/2015/01/Valencia.jpg',
   subtitle: 'Valencia'
  },
  { image: 'http://images-resrc.staticlp.com/S=W1000M,H700M/O=85/http://media.lonelyplanet.com/a/g/hi/t/c83ae1e624166db3b93148806bef3505-montserrat-mountain.jpg',
    subtitle: 'Montserrat Mountain'
  },
  { image: 'http://images-resrc.staticlp.com/S=W1000M,H700M/O=85/http://media.lonelyplanet.com/a/g/hi/t/4245b069c58537fdfa1293e95e3702e8-capilla-real.jpg',
    subtitle: 'Capilla Real'
  },
  {
    image: 'http://images-resrc.staticlp.com/S=W1000M,H700M/O=85/http://media.lonelyplanet.com/a/g/hi/t/5149098759b6ea410e464cc241ad415e-esglesia-de-santa-maria-del-pi.jpg',
    subtitle: 'Església de Santa Maria del Pi'
  },
  {
    image: 'http://images-resrc.staticlp.com/S=W1000M,H700M/O=85/http://media.lonelyplanet.com/a/g/hi/t/42db01120fe573e100fe1d3e22d2a2a3-mirador-san-nicolas.jpg',
    subtitle: 'Mirador San Nicolás'
  },
  {
    image: 'http://images-resrc.staticlp.com/S=W1000M,H700M/O=85/http://media.lonelyplanet.com/a/g/hi/t/9c6723f8d7a68a2d45708ea76279e298-museo-guggenheim.jpg',
    subtitle: 'Museo Guggenheim'
  },
  {
    image: 'http://images-resrc.staticlp.com/S=W1000M,H700M/O=85/http://media.lonelyplanet.com/a/g/hi/t/ad3df584341a383f37113c5a737bea97-playa-del-silencio.jpg',
    subtitle: 'Playa del Silencio'
  },
  {
    image: 'http://images-resrc.staticlp.com/S=W1000M,H700M/O=85/http://media.lonelyplanet.com/a/g/hi/t/f7138a5262f36888fa6d995b504131cc-jardin-botanico-la-concepcion.jpg',
    subtitle: 'Jardín Botánico La Concepción'
  },
  {
    image: 'http://images-resrc.staticlp.com/S=W1000M,H700M/O=85/http://media.lonelyplanet.com/a/g/hi/t/5496deb20e158b3db08569122399d0f9-parque-de-maria-luisa.jpg',
    subtitle: 'Parque de María Luisa'
  },
  {
    image: 'http://images-resrc.staticlp.com/S=W1000M,H700M/O=85/http://media.lonelyplanet.com/a/g/hi/t/fdde64891d52af5d8d6798bdfb3a7915-metropol-parasol.jpg',
    subtitle: 'View from Metropol Parasol'
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
  var bgNumber = getRandomInt(0, spainBackgrounds.length-1);
  $('body').css('background-image', 'url('+ spainBackgrounds[bgNumber].image+')');
});