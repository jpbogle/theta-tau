const controller = {};

controller.get = function(req,res){
  res.render('../views/bios.ejs');
}

module.exports = controller;
