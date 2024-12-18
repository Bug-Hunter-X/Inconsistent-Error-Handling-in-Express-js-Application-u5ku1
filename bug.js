const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data
  if (!user) {
    return res.status(404).send('User not found'); // Correct status code
  }
  res.send(user); 
});

// Incorrect error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong'); // Always sends 500, even for 404
});