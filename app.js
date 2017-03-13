
var fs = require('fs');
var cheerio = require('request');
var request = require('request');
var cheerio = require('cheerio');
// taking the page
url = 'https://github.com/aniket965';
//  requesting page

request(url,function(error,res,html){
if(!error){
    //console.log(html);
  var $ = cheerio.load(html);
    var dates = $('rect').nextAll();
  fs.writeFileSync("aniket.txt",dates);
var loader =   fs.readFileSync("aniket.txt");
var u = cheerio.load(loader);
var lol =  u('rect');
while(lol != u('rect').last()){
    console.log(lol.attr()['data-count']);
    lol = lol.next();
}
console.log(lol);
}

});