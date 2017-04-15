module.exports.controller = function(app) {

  app.get('/', function (req, res) {
    var folders = getFolders();

    data = {folder: folders};
    res.render('files/index', data);
  })

  function getFolders(){
    return '12345';
  }

  function getFiles(folder){
    return 'files';
  }

}
