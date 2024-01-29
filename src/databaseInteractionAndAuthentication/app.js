const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.status(404).json({
      message: 'Ohh you are lost, read the API documentation to find your way back home :)'
    })
  })
  

// In-memory data store (replace with a database in a real-world scenario)
let users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Doe', age: 30 },
];

app.use(bodyParser.json());

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get a specific user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  users = users.map(user => (user.id === userId ? { ...user, ...updatedUser } : user));

  res.json(updatedUser);
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);
  res.json({ message: 'User deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
