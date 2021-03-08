const express = require('express');
const app = express();
const routes = require('./routes');
const errorHandling = require('./middleware/errorhandlers');
const log = require('./middleware/log');


app.use(log.logger);
app.use(express.static(__dirname + '/static'));
app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.loginProcess);
app.get('/chat', routes.chat);
app.use(errorHandling.error);
app.use(errorHandling.notFound);

app.get('/error', function(req, res, next){
    next(new Error('A contrived error'));
  });

app.listen(3000);
console.log("App server running on port 3000");