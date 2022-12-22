const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Handlebars
app.engine('.hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// HTML Routes
app.use('/', require('./routes/views'));

// API Routes
app.use('/api/', require('./routes/api'));

const PORT = process.env.port || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));