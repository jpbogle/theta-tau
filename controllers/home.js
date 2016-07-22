const controller = {};

controller.get = function(req,res){
  res.render('../views/home.html');
}

module.exports = controller;
