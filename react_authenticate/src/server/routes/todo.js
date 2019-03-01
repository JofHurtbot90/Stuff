const express = require('express');
const todoRouter = express.Router();
const Todo = require('../models/todo');

todoRouter('/', (req, res)=>{
    Todo.find((err, todos)=>{
        if (err){
            res.status(500);
            return next(err);
        }
        return res.send(todos);
    });
});

todoRouter.get('/', (req, res,next)=>{
    Todo.find({user: req.user._id}, (err, todos)=>{
        if (err) {
            res.status(500);
            return next(err);
        };
        return res.send(todos);
    });
});

todoRouter.post('/', (req, res, next)=>{
    const todo = new Todo(req.body);
    todo.user = req.user._id;
    todo.save(function(err, newTodo){
        if(err){
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newTodo);
    });
});



