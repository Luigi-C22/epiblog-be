const { body, validationResult } = require('express-validator');

const postBodyParams = [
    body('category')
    .notEmpty()
    .isString()
    .isLength({min: 5})
    .withMessage('Title is required and must be greater than 5 characters'),
    
    body('title')
    .notEmpty()
    .isString()
    .isLength({min: 5})
    .withMessage('Title is required and must be greater than 5 characters'),

    body('cover')
    .notEmpty()
    .isURL()
    .withMessage('Cover must be an URL string'),

    body('readTime')
    .notEmpty()
    .isNumeric()
    .withMessage('String must have Number'),
    
    body('author')
    .notEmpty()
    .isString()
    .withMessage('Author must be a string'),

    body('content')
    .notEmpty()
    .isString()
    .isLength({min: 10})
    .withMessage('Content must be a String at least 10 characters')
];

const validatePostBody = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    next()
};

module.exports = { postBodyParams, validatePostBody };