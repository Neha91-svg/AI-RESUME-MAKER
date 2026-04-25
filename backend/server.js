const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock database
let users = [];
let resumes = [];

// Auth Routes
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  // Simple mock login
  res.json({ success: true, user: { email, name: 'User' }, token: 'mock-token-123' });
});

app.post('/api/auth/signup', (req, res) => {
  const { email, password } = req.body;
  res.json({ success: true, message: 'User created' });
});

// Resume Routes
app.post('/api/resumes', (req, res) => {
  const resumeData = req.body;
  resumes.push(resumeData);
  res.json({ success: true, message: 'Resume saved' });
});

app.get('/api/resumes', (req, res) => {
  res.json(resumes);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
