var path = require('path'),
fs = require('fs');
folderPath = path.join(__dirname, '/../');

module.exports.controller = function(app) {

  app.get('/', function (req, res) {
    var folders = getFolders(folderPath);
    var files = getFiles(folderPath);
    data = {'folders': folders, 'files': files};
    res.render('files/index', data);
  })

  // app.get('/:folder', function (req, res) {
  //   var folder = decodeURI(req.params.folder);
  //   var files = getFiles(folder);
  //
  //   data = {files: files};
  //   res.render('files/index2', data);
  // })

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
