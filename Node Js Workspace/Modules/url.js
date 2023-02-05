var url = require('url');
var adr = 'https://www.w3schools.com/nodejs/shownodejs.asp?filename=demo_ref_http';
var q = url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata);
console.log(qdata.month);