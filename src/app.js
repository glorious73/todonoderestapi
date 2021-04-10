import express from "express";
import morgan from "morgan";
import path from "path";
import home from "./routes/home.js"; // not all resolvers will find files without ".js"

const app   = express(); 
const port  = process.env.PORT || 5000;
const __dirname = (() => {let x = path.dirname(decodeURI(new URL(import.meta.url).pathname)); return path.resolve( (process.platform == "win32") ? x.substr(1) : x ); })();

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

