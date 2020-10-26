const express = require('express');
const exphbs = require('express-handlebars');
const product = require('./pruducts');
const session = require('express-session');
var bodyParser = require('body-parser');
var _ = require('lodash');
const pg = require("pg");
const Pool = pg.Pool;


const app = express();

// which db connection to use
const connectionString = process.env.DATABASE_URL || 'postgresql://codex-coder:pg123@localhost:5432/products';

const pool = new Pool({
    connectionString
});

const Products = product(pool);

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


//setup template handlebars as the template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

//setup middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
}

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: "./views/layouts/"
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/shop', function (req, res) {
    res.render('shop')
})

app.post('/shop', async function (req, res) {
    try {
        const top = req.body.top;
        const dress = req.body.dress;
        const tshirt = req.body.tshirt;
        const shoe = req.body.shoe;
        const pant = req.body.pant;
        const price = req.body.price;
        // console.log(price);
        const fname = _.capitalize(req.body.fname);
        const lname = _.capitalize(req.body.lname);
        const location = _.capitalize(req.body.location);
        const age = req.body.age;

        const products = await pool.query("insert into products(tops, dresses, tshirts, shoes, pants, price) values($1, $2, $3, $4, $5, $6)", [top, dress, tshirt, price, shoe, pant]);
        const info = await pool.query("insert into customer(Firstname, Lastname, Age, Location) values($1, $2, $3, $4)", [fname, lname, age, location]);

        res.render('payment')
    } catch (error) {
        console.log(error);
    }
})

// app.post('/', async function (req, res) {
//     var name = _.capitalize(req.body.fname);
//     var surname = _.capitalize(req.body.lname);

//     // res.render('index',
//     // message: 
//     // )
// })

app.get('/payment', async function (req, res) {

    res.render('payment')
});

app.get('/about', async function (req, res) {

    res.render('about')
});

app.get('/card', function (req, res) {
    res.render('card')
});

app.get('/cash', function (req, res) {
    res.render('cash')
});

app.get('/enquiry', function (req, res) {
    res.render('enquiry')
});


const PORT = process.env.PORT || 3008
app.listen(PORT, function () {

});