/*
 * Serve JSON to our AngularJS client
 */


var mongojs = require('mongojs');
var db = mongojs('surveys',['surveys']);
// GET

exports.posts = function (req, res) {

  db.surveys.find(function (err,docs){
    //  console.log(docs);
      res.json(docs);
    });
};

exports.post = function (req, res) {
  var id = req.params.id;

  db.surveys.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
    res.json(doc);
  });
};

// POST

exports.addPost = function (req, res) {
    db.surveys.insert(req.body,function(err,doc){
    res.json(doc);
  });
};

// PUT

exports.editPost = function (req, res) {
  var id = req.params.id;

  delete req.body._id;
  var upd = req.body;
  //console.log(upd);
  db.surveys.update({_id:mongojs.ObjectId(id)},upd,function(err,doc){
    res.json(doc);
  });
};

// DELETE

exports.deletePost = function (req, res) {
  var id = req.params.id;
  console.log(id);

  db.surveys.remove({_id:mongojs.ObjectId(id)},function(err,doc){
    res.json(doc);
  });
};