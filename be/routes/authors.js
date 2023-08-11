const express = require('express')
const author = express.Router
const AuthorModel = require('../models/authorModel');

author.get('/authors', async (req, res) => {
    try {
        const authors = await AuthorModel.find()
        res.status(200).send({
            statusCode: 200,
            authors,
        });
    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            messagge: "Internal server error",
        });
    }
});

author.get('/authors/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const authorExist = await AuthorModel.findById(id);

        if (!authorExist) {
            return res.status(404).send({
                statuscode: 404,
                messagge: `Author with id ${id} doesn't exist!`
            });
        }
        res.statusCode(200).send({
            statusCode: 200,
            authorExist,
        });
    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            messagge: "Internal server error",
        });
    }
});




author.post('/authors', async (req, res) => {

    const newAuthor = AuthorModel({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        dob: req.body.dob,
        avatar: req.body.avatar,
    });

    try {
        const author = await newAuthor.save();

        res.status(201).send({
            statusCode: 201,
            message: "Author saved successfully",
            author,
        });
    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            message: "Internal serveer error",
        });
    }
});

author.patch('/authors/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const authorExist = await AuthorModel.findById(id);

        if (!authorExist) {
            return res.status(404).send({
                statusCode: 404,
                message: `Author with id ${id} doesn't exist`,
            });
        }

        const authorId = id;
        const dataToUpdate = req.body;
        const options = { new: true };

        const result = await AuthorModel.findByIdAndUpdate(
            authorId,
            dataToUpdate,
            options
        );

        res.status(200).send({
            statusCode: 200,
            result,
        });

    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            messagge: "Internal server error",
        });
    }
});

author.delete('/authors/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const authorExist = await AuthorModel.findById(id);

        if (!authorExist) {
            return res.status(404).send({
                statusCode: 404,
                message: `Author with id ${id} doesn't exist`,
            });
        }
        const authorToDelete = await AuthorModel.findByIdAndDelete(id);

        res.status(200).send({
            statusCode: 200,
            message: `Author with id ${id} deleted successfully`,
        });

    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            messagge: "Internal server error",
        });
    }
});

module.exports = author;