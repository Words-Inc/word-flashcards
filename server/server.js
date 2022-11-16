const express = require('express');
const app = express();

const apiRouter = require('./routes/api.js');

app.use(express.json());

app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj);
  return res.status(errorObj.status).json(errorObj.message);
});

app.use("*", (req, res) => res.status(404).send('Oh no!!'));

app.listen(3000, () => { console.log(`Listening on port 3000...`); });


module.exports = app;