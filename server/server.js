const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Welcome page API
app.get('/', (req, res) => {
  res.send('Welcome to Mp3 Bee');

});

// get all music api
app.get('/api/music', (req, res) => {
  const musicFilePath = path.join(__dirname, 'music.json');
  fs.readFile(musicFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading music file');
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const usersFilePath = path.join(__dirname, 'user.json');
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading users file');
    }
    const users = JSON.parse(data);
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  const contactFilePath = path.join(__dirname, 'contact.json');
  fs.readFile(contactFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading contact file');
    }
    const contacts = JSON.parse(data);
    contacts.push({ name, email, message });
    fs.writeFile(contactFilePath, JSON.stringify(contacts), (err) => {
      if (err) {
        return res.status(500).send('Error writing contact file');
      }
      res.status(200).send('Contact form submitted');
    });
  }
  )
}
)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
