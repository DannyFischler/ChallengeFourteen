const router = require('express').Router();
const { User, Post } = require('../models');

// Example: Route to create a new user
router.post('/users', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Add other routes as needed

module.exports = router;
