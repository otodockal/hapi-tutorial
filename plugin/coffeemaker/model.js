
var data = [
  {
    "id": 1,
    "type": "Aeropress",
    "about": "Definitely the simplest and cheapest method of preparation coffee for travelers.",
    "pic_view": "http://www.aeropress.cz/images/main_img_aero.png",
    "pic_thumb": "http://www.aeropress.cz/images/aeropress.png",
    "source": "http://www.aeropress.cz/"
  },
  {
    "id": 2,
    "type": "French Press",
    "about": "French Press is one of the simplest methods of preparing specialty coffee.",
    "pic_view": "http://www.frenchpress.cz/images/main-img-frenchpress.png",
    "pic_thumb": "http://www.frenchpress.cz/images/frenchpress.png",
    "source": "http://www.frenchpress.cz/"
  },
  {
    "id": 3,
    "type": "Vacuum Pot",
    "about": "Spectacular and clean way of brewing of coffee. Big popular in Japan.",
    "pic_view": "http://www.vacuumpot.cz/images/main-img-vacpot.png",
    "pic_thumb": "http://www.vacuumpot.cz/images/vacuumpot.png",
    "source": "http://www.vacuumpot.cz/"
  },
  {
    "id": 4,
    "type": "Chemex",
    "about": "Traditional Chemex is currently one of the most popular ways of preparing high-quality coffees in a commercial environment at home. This method works on the principle of manually filtering when using a filter glass decanter get a very clean and delicate drink.",
    "pic_view": "http://www.filtrovanakava.cz/chemex/images/chemex.png",
    "pic_thumb": "http://www.filtrovanakava.cz/images/chemex.png",
    "source": "http://www.filtrovanakava.cz/chemex/"
  },
  {
    "id": 5,
    "type": "Clever Dripper",
    "about": "By the name, Clever is very clever for preparing of filter coffee.",
    "pic_view": "http://www.filtrovanakava.cz/clever/images/clever-big.png",
    "pic_thumb": "http://www.filtrovanakava.cz/images/clever.jpg",
    "source": "http://www.filtrovanakava.cz/clever/"
  },
  {
    "id": 6,
    "type": "Hario V60",
    "about": "New from Japanese firm Hario. Works on principles manually filtering by porcelain or glass filter.",
    "pic_view": "http://www.filtrovanakava.cz/hario-v60/images/hario.jpg",
    "pic_thumb": "http://www.filtrovanakava.cz/images/v60.png",
    "source": "http://www.filtrovanakava.cz/hario-v60/"
  }
]

var shuffle = function (sourceArray) {
  for (var n = 0; n < sourceArray.length - 1; n++) {
    var k = n + Math.floor(Math.random() * (sourceArray.length - n));

    var temp = sourceArray[k];
    sourceArray[k] = sourceArray[n];
    sourceArray[n] = temp;
  }
  return sourceArray;
}

var getCoffeemakerById = function (id) {
  return data.filter(function (item) {
    if (item.id === id) {
      return item;
    }
  })[0];
}

module.exports = function (plugin) {

  plugin.method('getRandomCoffeemakers', function (next) {
    next(null, shuffle(data));
  },{
    cache: {
      expiresIn: 5000
    }
  });

  plugin.method('getCoffeemakerById', function (id, next) {

    var coffeemaker = getCoffeemakerById(id);

    if (!coffeemaker) {
      next(new Error('Not found'));
    }

    next(null, coffeemaker);
  });

}
