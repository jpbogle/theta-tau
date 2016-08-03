const express   = require('express');
const app       = express();
const port      = process.env.PORT || 8080;
const server    = app.listen(port);
const path      = require('path');

app.locals.PORT = port;

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');
app.use(express.static(path.join(__dirname, '/public')));

require('./routes.js')(app);

console.log("started on port: " + port);
