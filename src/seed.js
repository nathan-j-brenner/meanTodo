'use strict'

const Todo = require('./models/todo.js');

const todos = [
	'task 1',
	'task 2',
	'task 3'
];

todos.forEach((todo, index)=>{
	Todo.find({'task': todo}, (err, todos)=>{
		if(!err && !todos.length){
			Todo.create({task: todo});
		}
	});
});