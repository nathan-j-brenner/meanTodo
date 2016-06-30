'use strict';

const mongoose = require('mongoose');

// for local testing
var local = 'mongodb://localhost/mean-todo';

// for cloud db
var mongoLab = 'mongodb://admin:admin@ds011903.mlab.com:11903/dabears';

mongoose.connect(mongoLab, (err)=>{
	if(err) console.log('failed connecting to mongodb');
	else console.log('successfully connected to mongodb');
});
