var request = require('request');
var cheerio = require('cheerio');

request('http://bitcointicker.co/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('#lastTrade').each(function(i, element){
      var a = $(this);
      debugger;
      console.log(a.text());
    });
  }
});