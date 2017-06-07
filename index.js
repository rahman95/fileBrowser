var express = require('express'),
app = express(),
sassMiddleware = require('node-sass-middleware'),
http = require('http'),
path = require('path'),
fs = require('fs');
folderPath = path.join(__dirname, 'public/server');

app.use(sassMiddleware({
src: __dirname,
dest: __dirname,
debug: true,
force: true,
outputStyle: 'compressed'
}));
app.set('view engine', 'pug');
app.set('views','./views');

// dynamically include routes (Controller)
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
