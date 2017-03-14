
var fs = require('fs');
var cheerio = require('request');
var request = require('request');
var cheerio = require('cheerio');
// taking the page
url = 'https://github.com/aniket965';
//  requesting page

var days = [0, 0, 0, 0, 0, 0];
request(url, function (error, res, html) {
  if (!error) {
    //console.log(html);
    var $ = cheerio.load(html);
    var dates = $('rect').nextAll();
    fs.writeFileSync("aniket.txt", dates);
    var loader = fs.readFileSync("aniket.txt");
    var u = cheerio.load(loader);
    var lol = u('rect');
    var counter = 0;
    var c = 0;
    while (lol.attr() != undefined) {
      var value = parseInt(lol.attr()['data-count'] + '');
      // console.log(value);    
      days[counter] = days[counter] + value;
      // console.log(days);
      if (counter === 5) {
        counter = 0;
      }
      else {
        counter = counter + 1;
      }

      lol = lol.next();
    }
    var total_work = days.reduce(function (a, b) {
      return a + b;
    }, 0);

    var days_percentage = days.map(function (day) {
      day = (day / total_work) * 100;
      return day;
    });
    console.log(days_percentage);
    // console.log(c);
    console.log(total_work + ' exculding sundays');


  }

});