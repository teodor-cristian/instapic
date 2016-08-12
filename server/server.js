var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydatabase.sqlite');
var check;
db.serialize(function() {

    db.run("CREATE TABLE if not exists POSTS (USERNAME TEXT,DESCRIPTION TEXT,PICTURE_SRC TEXT)");

});


app.get("/", function(req, res) {
    db.all("SELECT * from POSTS", function(err, rows) {
      if(err) throw err;

      res.send(rows);
    });
});

app.post('/add', function(req, res) {
  console.log(req.body);
  var statAdd=db.prepare("INSERT INTO POSTS VALUES ('"+req.body.USERNAME+"','"+req.body.DESCRIPTION+"','"+req.body.PICTURE_SRC+"')");
  statAdd.run();
  statAdd.finalize();
  


  res.send('A new object has been added');
});

app.listen(3000, function() {
    console.log('Exemple app listening on port 3000');
});
