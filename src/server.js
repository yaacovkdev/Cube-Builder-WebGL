const express = require('express');
var compression = require('compression');
const path = require('path');

const app = express();

app.use(compression());
app.use(express.static(__dirname + 'Core'));

app.listen(80, function(){
    console.log("localhost"+":80");
});
