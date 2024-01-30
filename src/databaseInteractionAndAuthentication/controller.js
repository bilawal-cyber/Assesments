// controllers.js
let users = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
  ];
  
  const getAllUsers = (req, res) => {
    res.json(users);
  };
  
  const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  };
  
  const createUser = (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  const updateUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
  
    users = users.map(user => (user.id === userId ? { ...user, ...updatedUser } : user));
  
    res.json(updatedUser);
  };
  
  const deleteUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(user => user.id !== userId);
    res.json({ message: 'User deleted successfully' });
  };
  
  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
  };
  