var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", function (req, res) {
	var available = {
		valid: true
	};
	
	console.log(req.body);
	switch(req.body.email) {
		case "super": available.valid = false;
	}
	
	res.json(available);
});

app.get("/*", function (req, res) {
	res.send("Hello World!");
});

app.listen(8080, function () {
	console.log("Example app listening on port 8080!");
});