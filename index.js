const express = require('express');
app = express();

var bgg = require('bgg');

app.listen(3000,function(){
    console.log("hi i'm here 2!");
});

//app.get('/', function(req, res){
//    console.log(bggInstance);
//});
//


app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/index.html');

//collection spits out just titles, includes expansions
    /*
    var bggInstance = new bgg();

    console.log("entered the app ");
    bggInstance('collection', {
        username: 'maverickmind',
        subtype: 'boardgame',
        own: [1]
    }).then(function(results){
    var item, title;
    item = results.items.item, i = 0, title;

    for(i;i<item.length;i++) {
      title =item[i].name['$t'];
      console.log("========");
      console.log(title);
      console.log("========");
    }
});
*/
});
