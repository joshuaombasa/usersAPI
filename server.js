const express = require("express")
const cors = require('cors');
const app = express()

// Enable CORS for all routes
app.use(cors());

// Define a sample array of users
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' }
]

// Define a route to get the list of users
app.get('/users', (req, res) => {
  res.json(users);
})

const port = 3000; // You can change the port if needed
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})