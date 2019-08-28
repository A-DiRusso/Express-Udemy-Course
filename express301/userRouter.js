const express = require('express');
let router = express.Router();

const validateUser = (req, res, next) => {
  res.locals.validated = true;
  next();
};

// this is middleware that will only be added to this router
router.use(validateUser);

router.get('/', (req, res, next) => {
  res.json({
    msg: 'User Router Works',
  });
});

module.exports = router;