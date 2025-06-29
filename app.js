const express = require('express');
const app = express();
const path = require('path')
const port = 3000;


// Serve static assets (images, CSS, JS) GLOBALLY
// This allows you to serve files from a directory called 'public'
// __dirname is the full path to the current file’s directory
// path.join(__dirname, 'public') creates a full path like: /your/project/path/public
// express.static(...) sets up middleware so Express automatically serves files inside public/
app.use(express.static(path.join(__dirname, 'public')));

//app.get('/', (req, res) => {
  //res.send('Hello, World!');
//});

// Serve the index.html file when the root URL is accessed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', "index.html"))
});

app.get('/auth', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'auth.html'));
});


app.listen(port, () => {
    console.log('Server is running on http://localhost:'+ port);
    console.log('Press Ctrl+C to stop the server');
})

