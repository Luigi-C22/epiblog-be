const express = require('express')
const mongoose = require('mongoose')
const PostsModel = require('../models/postModel');
const postModel = require('../models/postModel');

const post = express.Router()



post.get('/posts', async (req, res)=> {
    try {
        const posts =  await PostsModel.find();

        res.status(200).send({
            statusCode: 200,
            posts: posts
        })
    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            message: "internal server Error",
            error,
        })
    }
});


post.get('/posts/:postId', async (req, res) =>{

const { postId } = req.params;

    try {
        const postById = await PostsModel.findById(postId);
        res.status(200).send({
            statusCode: 200,
            postById,
        });

    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            message: "internal server Error",
            error,
    });
}
});

post.post('/posts', async (req, res) =>{
    
const newPost = new PostsModel({
    title: req.body.title,
    content: req.body.content,
    img: req.body.img,
    author: req.body.author,
    rate: Number(req.body.rate)
})

    try {
        const post = await newPost.save();

        res.status(201).send({
            statusCode: 201,
            message: "Post saved successfully",
            payload: post,
        })
    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            message: "Internal server error",
            error,
        });
    }
});

post.patch('/posts/:id', async (req, res) => {
    const { id } = req.params

    const postExist = await PostsModel.findById(id)

    if(!postExist) {
        return res.status(404).send({
            statusCode: 404,
            message: `Post with id ${id} not found`
        })
    }
    try {
        const postId = id;
        const dataToUpdate = req.body;
        const options = { new: true};

        const result = await PostsModel.findByIdAndUpdate(postId, dataToUpdate, options)

        res.status(200).send({
            statusCode: 200,
            message: `Post with id ${id} modified successfully`,
            result
        })
    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            message: "Internal server error",
            error,
        });
    }     
});


post.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;

    const postExist = await postModel.findById(id)

    if(!postExist) {
        return res.status(404).send({
            statusCode: 404,
            message: `Post with id ${id} not found`
        })
    }

    try {
        const postTodelete = await postModel.findByIdAndDelete(id)
        res.status(200).send ({
            statusCode: 200,
            message: `Post with id ${id} deleted successfully`,
        });
    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            message: "Internal server error",
            error,
        });
    }
})

module.exports = post;