const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.json({ "tutorial" : "Build REST API with node.js" });
});

app.post('/', function(req, res){
    res.json(req.body);
});

app.listen(3000, function(){
    console.log('Node server listening on port 3000');
});