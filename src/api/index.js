'use strict';

const express = require('express');
const router = express.Router();
const todos = require('../../mock/todos.json');

router.get('/todos', (req, res)=>{
	res.json({todos: todos});
});

router.post('/todos', (req, res)=>{

});

router.put('/todo/:id', (req, res)=>{

});

router.delete('/todo/:id', (req, res)=>{

});

module.exports = router;