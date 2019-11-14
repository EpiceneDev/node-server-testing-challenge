const router = require('express').Router();

const Examples = require('./examples-model.js');

router.get('/', (req, res) => {
  Examples.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;