const db = require('../models/userModel.js');

const userController = {};

userController.signup = (req, res, next) => {
    console.log('signup');
    const params = [req.body.username, req.body.password];
    const signupQuery = 'INSERT INTO users (username, password) VALUES ($1, $2)';
    db.query(signupQuery, params)
        .then(() => {return next()})
        .catch((err) => {return next(err)})
}

userController.login = (req, res, next) => {
    console.log('login');
    const params = [req.body.username, req.body.password];
    const loginQuery = 'SELECT cards FROM users WHERE username = $1 AND password = $2';
    db.query(loginQuery, params)
        .then((data) => {
            console.log("here's state:", data.rows[0]);
            res.locals.cards = data.rows[0];
            return next()})
        .catch((err) => {return next(err)})
}

userController.update = (req, res, next) => {
    console.log('update');
    const params = [req.body.username, req.body.cards];
    const postQuery = 'UPDATE users SET cards = $2 WHERE username = $1';
    db.query(postQuery, params)
        .then(() => {return next()})
        .catch((err) => {return next(err)})
}

module.exports = userController;