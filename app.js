/*
* @Author: piyada-fongkaew
* @Date:   2016-05-26 15:23:20
* @Last Modified by:   piyada-fongkaew
* @Last Modified time: 2016-05-26 16:31:05
*/

'use strict';
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var port = 3000;
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views','./app/views');
app.set('view engine', 'pug');

app.use(express.static('./public'));

require('./app/route')(app);

app.listen(port,function(){
    console.log('Server runner at port ' + port);
});
