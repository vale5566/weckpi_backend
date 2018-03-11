var express = require('express');
var router = express.Router();
var fs = require("fs");
var player = require("play-sound")(opts = {})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/", function (req, res, next) {
    console.log(req.query.time);
    fs.writeFileSync("time.txt", req.query.time);
    res.redirect('/');
var customTime = req.query.time;
var customTime = customTime + ":0";
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var time = h + ":" + m + ":" + s;
    var oTime = h + ":" + m;
    if (customTime === time) {
      player.play("alarm.mp3", function(err){
        if(err) throw err
        })
    }
}
setInterval(startTime, 1000);
});

module.exports = router;
