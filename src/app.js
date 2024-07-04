const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const port = 3000;

const app = express();

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 
    'public')));

app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
    app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

app.
get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => console.log(`App is running localhost:${port}`));