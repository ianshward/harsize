var fs = require('fs');
var har = JSON.parse(fs.readFileSync(process.argv[2]));
var match = process.argv[3];

var totalCount = 0;
var totalSize = har.log.entries.reduce(function(memo, entry) {
  if (entry.request.url.match(match)) {
    totalCount++;
    var size = entry.response.content.size;
    return memo + size;
  }
  else return memo;
}, 0);

console.log(totalCount);
console.log(totalSize);
console.log(totalSize / totalCount);
