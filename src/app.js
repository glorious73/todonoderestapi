const express    = require("express");
const bodyParser = require("body-parser");
const morgan     = require("morgan");
const port       = process.env.PORT || 5000;
const home       = require("./routes/home");
const path       = require('path');
const app        = express();

//the limit is a safty feature, that we can ommit later
app.use(express.urlencoded({ limit: '2mb', extended: true }));
app.use(express.json({ limit: '2mb', extended: true }));

// Logging
app.use(morgan('dev'));

// Static
app.use(express.static(path.join(__dirname, '../public')));

// Route
app.use('/', home);


app.listen(port);

