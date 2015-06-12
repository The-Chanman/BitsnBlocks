var http = require("http");

// Utility function that downloads a URL and invokes
// callback with the data.
function download(url, callback) {
  http.get(url, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on("end", function() {
      callback(data);
    });
  }).on("error", function() {
    callback(null);
  });
}

var cheerio = require("cheerio");

var url = "https://bitcoinaverage.com/#USD"

download(url, function(data) {
  if (data) {
    //console.log(data);

    var $ = cheerio.load(data);
    $("#global-average-dataUSD > td.legend-price.text-right > span").each(function(i, e) {
        console.log($(e).html());
      });
      
    console.log("done");
  }
  else console.log("error");  
});


