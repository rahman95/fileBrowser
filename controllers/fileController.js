var path = require('path'),
fs = require('fs'),
folderPath = path.join(__dirname, '/../');

module.exports.controller = function(app) {

  app.get('/', function (req, res) {
    var folders = getFolders(folderPath);
    var files = getFiles(folderPath);
    data = {'folders': folders, 'files': files};
    res.render('files/index', data);
  })

  app.get('/*', function (req, res) {
    var uri = decodeURI(req.params[0]);
    if(uri.indexOf('file=') > -1){
      uri = uri.replace('file=','')
      var file = path.join(folderPath,uri);
      res.download(file);
    }else{
      var folders = getFolders(path.join(folderPath,uri));
      var files = getFiles(path.join(folderPath,uri));
      data = {'folders': folders, 'files': files};
      res.render('files/index', data);
    }
  })

  function getFolders(folder){
    return fs.readdirSync(folder).filter(function (file) {
      return fs.statSync(folder+'/'+file).isDirectory();
    });
  }

  function getFiles(folder){
    return fs.readdirSync(folder).filter(function (file) {
      return fs.statSync(folder+'/'+file).isFile();
    });
  }

}
