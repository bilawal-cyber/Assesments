// controllers.js
const User = require('../modals/User');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' });
  }
};

const createUser = async (req, res) => {
  const { name, age } = req.body;

  try {
    const newUser = await User.create({ name, age });
    res.status(201).json(newUser);
  } catch (error) {
    console.log("error", error)
    res.status(500).json({ message: 'Error creating user' });
  }
};

const updateUserById = async (req, res) => {
  const userId = req.params.id;
  const { name, age } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, { name, age }, { new: true });
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
  }
};

const deleteUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (deletedUser) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
