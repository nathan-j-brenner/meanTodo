'use strict';

const express = require('express');
const router = express.Router();
// const todos = require('../../mock/todos.json');
const Todo = require('../models/todo.js');

router.get('/todos', (req, res)=>{
	// res.json({todos: todos});
	Todo.find({}, (err, todos)=>{
		if(err) res.status(500).json({ message: err.message });
		res.json({todos: todos});
	});
});

router.post('/todos', (req, res)=>{
	var todo = req.body;
	// res.send(todo);
	Todo.create(todo, (err, todo)=>{
		if(err) {
			return res.status(500).json({ err: err.message });
		}
		res.json({'todo': todo, message: 'Todo Created'});
	});
});

router.put('/todos/:id', (req, res)=>{
	var id = req.params.id;
	var todo = req.body;
	if( todo && todo._id !== id) {
		return res.status(500).json({message: "Ids don't match"});
	}
	Todo.findByIdAndUpdate(id, todo, {new: true}, (err, todo)=>{
		if(err) {
			return res.status(500).json({err: err.message});
		}
		res.json({todo: todo, message: 'Todo Updated'});
	});
});


router.delete('/todos/:id', (req, res)=>{
	var id = req.params.id;
	Todo.findByIdAndRemove(id, (err, result)=>{
		if(err){
			return res.status(500).json({err: err.message});
		}
		res.json({message: "Todo deleted"});
	});
});

module.exports = router;