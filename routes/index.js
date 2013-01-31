
/*
 * GET home page.
 */
var uploadHelper = require('./uploadHelper');
exports.index = function(req, res){
  res.render('index', { title: 'Project on simple file upload using HTML 5 and Node.js' });
};

exports.doUpload = function(req,res){
	uploadHelper.doUpload(req,res);
};