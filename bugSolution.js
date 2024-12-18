const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

app.use((err, req, res, next) => {
  //Separate error handling based on error type
  if (err.status === 404) {
    return res.status(404).send(err.message);
  } else {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
  }
});