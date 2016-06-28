'use strict';

const express = require('express');
const parser = require('body-parser');
const app = express();
const router = require('./api');

require('./database');
require('./seed');

app.use('/', express.static('public'));
app.use(parser.json());

app.use('/api', router);

app.listen(3000, ()=>{
	console.log('Express running on port 3000');
});