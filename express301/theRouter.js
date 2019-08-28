const express = require('express');
let router = express.Router();

//instead of app.get() we'll do router.get()
// router is made for this
//app can do anything
router.get('/', (req, res, next) => {
  res.json({
    msg: 'Router works!',
  });
});

module.exports = router;