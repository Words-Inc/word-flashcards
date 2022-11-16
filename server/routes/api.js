const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/login', userController.login, (req, res) => {
    return res.status(200).json(res.locals.cards)
})

router.post('/signup', userController.signup, (req, res) => {
    return res.status(201).json();
})

router.post('/update', userController.update, (req, res) => {
    return res.status(200).json();
})

module.exports = router;