const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const router = require('./resources/routers/index.router');
const db = require('./config/db/index');
const methodOverride = require('method-override');

const port = 3001;

const app = express();

//override từ POST -> PUT
app.use(methodOverride('_method'));

//sử dụng json
app.use(express.json());

//console.log json - method: POST
app.use(
    express.urlencoded({
        extended: true,
    }),
);
// app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

app.engine(
    '.hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

router(app);
db.connect();

app.listen(port, () => console.log(`App is running localhost:${port}`));
