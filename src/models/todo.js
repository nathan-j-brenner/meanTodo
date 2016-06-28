'use strict';
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
	task: String
});

const model = mongoose.model('Todo', todoSchema);

module.exports = model;