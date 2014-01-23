
/*
 * GET home page.
 */

exports.home = function(req, res){
  res.render('index', { title: 'Amusing Wrestlers' });
};

var jf = require('jsonfile');

var file = 'data.json';

entries= jf.readFileSync(file);


exports.submit = function(req, res){
  entries.push(req.body.Username);
    jf.writeFileSync(file, entries);
    res.render('submissions', 
             { title: entries });
};

exports.visit = function(req, res){
    res.render('submissions', 
             { title: entries });
};


console.log(jf.readFileSync(file));
