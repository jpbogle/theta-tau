const home = require('./controllers/home.js');
const bios = require('./controllers/bios.js');

module.exports = function(app){
  app.get('/',function(req,res){
    home.get(req,res);
  });
  app.get('/bios',function(req,res){
    bios.get(req,res);
  });
}
