'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', (err)=>{
	if(err) console.log('failed connecting to mongodb');
	else console.log('successfully connected to mongodb');
});
