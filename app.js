const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));

//


// Sample data
const books = [
    { image: `./image/bookcover.jpg`, title: 'Book 1' },
    { image: './image/bookcover2.jpg', title: 'Book 2' },
    { image: 'image/bookcover.jpg', title: 'Book 3' },
    { image: 'image/humanities and culture.jpg', title: 'Book 4' },
    { image: 'image/humbyprof.jpg', title: 'Book 5' },
    { image: 'image/bookcover.jpg', title: 'Book 6' },
    { image: 'image/humanities and culture.jpg', title: 'Book 7' },
    { image: 'image/bookcover 2.jpg', title: 'Book 8' },
    { image: 'image/humanities and culture.jpg', title: 'Book 9' },
    { image: 'image/bookcover 2.jpg', title: 'Book 10' }
];


// Routes
app.get('/', (req, res) => {
  res.render('index', { books: books });
});

app.get('/swipe', (  req, res) => {
  res.render('swipe', { books: books })
})

// Routes
app.get('/login', (req, res) => {
    res.render('login', { title: 'Login Page', formAction: '/login', signupLink: '/registration' });
  });

app.get('/registration', (req, res) => { 
  res.render('registration', { title: 'About' });
});

// Route to serve the HTML file
app.get('/pdf-viewer', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'readingpage.html'));
});

app.get('/nigeria', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'peopleandculture.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
