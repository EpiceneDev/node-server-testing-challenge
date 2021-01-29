const router = require('express').Router();

const Examples = require('./examples-model.js');

router.get('/', (req, res) => {
  Examples.find()
    .then(examples => {
      res.status(200).json(examples);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;