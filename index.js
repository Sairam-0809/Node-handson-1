const express = require("express");
const app = express();
const PORT = 4000;

// Route handling for /api/main
app.get('/api/main', (req, res) => {
  const responseText = `Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It allows you to build powerful APIs and web applications easily.`;
  res.send(responseText);
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});