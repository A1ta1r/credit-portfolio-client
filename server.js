var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.get('*', function(req,res,next) {
  if(req.headers['x-forwarded-proto'] != 'https' && process.env.NODE_ENV === 'production')
    res.redirect('https://'+req.hostname+req.url)
  else
    next() /* Continue to other routes if we're not redirecting */
});
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
