var path = require('path'),
fs = require('fs');
folderPath = path.join(__dirname, '/../public/server');

module.exports.controller = function(app) {

  app.get('/', function (req, res) {
    var folders = getFolders(folderPath);
    data = {folders: folders};
    res.render('files/index', data);
  })

  app.get('/:folder', function (req, res) {
    var folder = req.params.folder;
    var files = getFiles(folder);

    data = {files: files};
    res.render('files/index2', data);
  })

  function getFolders(path){
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
  }

  function getFiles(folder){
    return 'files';
  }

}
