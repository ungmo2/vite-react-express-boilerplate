const express = require('express');

const router = express.Router();

router.get('/todos', (req, res) => {
  res.send([
    { id: 3, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'HTML', completed: false },
  ]);
});

module.exports = router;
