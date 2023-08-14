const express = require('express')
const mongoose = require('mongoose')
const PostsModel = require('../models/postModel');

const logger = require('../middlewares/logger');
const isValidPost = require('../middlewares/validatePosts');
const { postBodyParams, validatePostBody } = require('../middlewares/postValidation');

const post = express.Router()



post.get('/posts', async (req, res) => {
    try {
        const posts = await PostsModel.find();

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


post.get('/posts/:postId', async (req, res) => {

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

post.post('/posts', postBodyParams, validatePostBody, async (req, res) => {

    const newPost = new PostsModel({
        category: req.body.category,
        title: req.body.title,
        cover: req.body.cover,
        readTime: req.body.readTime,
        author: req.body.author,
        content: req.body.content,
    });

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

    if (!postExist) {
        return res.status(404).send({
            statusCode: 404,
            message: `Post with id ${id} not found`
        })
    }
    try {
        const postId = id;
        const dataToUpdate = req.body;
        const options = { new: true };

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

    if (!postExist) {
        return res.status(404).send({
            statusCode: 404,
            message: `Post with id ${id} not found`
        })
    }

    try {
        const postTodelete = await postModel.findByIdAndDelete(id)
        res.status(200).send({
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