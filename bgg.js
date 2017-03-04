// all options are optional
// Sample returned object from bgg
// {
//  objecttype: 'thing',
//  objectid: 62871,
//  subtype: 'boardgame',
//  collid: 37458891,
//  name: { sortindex: 1, '$t': 'Zombie Dice'  },
//  yearpublished: 2010,
//  image: '//cf.geekdo-images.com/images/pic2664015.jpg',
//  thumbnail: '//cf.geekdo-images.com/images/pic2664015_t.jpg',
//  status: //
//      {
//          own: 1,
//          prevowned: 0,
//          fortrade: 0,
//          want: 0,
//          wanttoplay: 0,
//          wanttobuy: 0,
//          wishlist: 0,
//          preordered: 0,
//          lastmodified: '2016-10-13 21:58:06'
//      },
//      numplays: 0
//  }
//
//
 var options = {
  timeout: 10000, // timeout of 10s (5s is the default)

  // see https://github.com/cujojs/rest/blob/master/docs/interceptors.md#module-rest/interceptor/retry
  retry: {
    initial: 100,
    multiplier: 2,
    max: 15e3
  }
}

var bgg = require('bgg')(options);

bgg('user', {name: 'maverickmind', guilds:1})
  .then(function(results){
    //console.log(results);
  });

//collection spits out just titles, includes expansions
bgg('collection', {
  username: 'maverickmind',
  subtype: 'boardgame',
  own: [1]
}).then(function(results){
  var item = results.items.item,
    i = 0,
    title;

//  console.log("title!", item);
  //for(i;i<item.length;i++) {
  //  title =item[i].name['$t'];
  //  console.log("========");
  //  console.log(title);
  //  console.log("========");
  //}
});

module.exports = bgg;
