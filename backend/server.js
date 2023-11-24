const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const crypto = require('crypto');


const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Generate a random string with a given length
const generateRandomString = (length) => {
    return crypto.randomBytes(Math.ceil(length / 2))
      .toString('hex') // convert to hexadecimal format
      .slice(0, length); // return required number of characters
  };
  
  // Generate a strong API secret (e.g., 64 characters)

const secretKey = generateRandomString(64); // Replace with a strong secret key

console.log("secretkey: " + secretKey);

// Mock user data (in a real app, use a database)
const users = [];

app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ error: 'Username is already taken' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);

  // Generate a JWT token
  const token = jwt.sign({ userId: newUser.id, username: newUser.username }, secretKey, { expiresIn: '1h' });
  res.json({ token });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);

  if (user && (await bcrypt.compare(password, user.password))) {
    // Passwords match, generate a JWT token
    const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
