require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const connectDB = require('./config/db');

const seed = async () => {
  await connectDB(process.env.MONGO_URI);
  await User.deleteMany({});
  const p = await bcrypt.hash('password', 10);
  const users = [
    { name: 'Alice', email: 'alice@example.com', password: p },
    { name: 'Bob', email: 'bob@example.com', password: p }
  ];
  await User.insertMany(users);
  console.log('Seeded users');
  process.exit();
};

seed();
