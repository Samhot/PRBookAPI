const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var cors=require('./cors');
app.use(cors.permission)
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

ServerWOD = require('./routes_wods');
ServerTODO = require('./routes_todos');
ServerGlobal = require('./routes_global');
 
// default route
app.get('/', function (req, res) {
    return res.send({ message: 'Bienveeeenue' })
});

// // // // // // // // // WODS // // // // // // // // // //
// Retrieve all wods 
app.get('/wods', ServerWOD.getWods);

// Retrieve wod with id 
app.get('/wod/:id', ServerWOD.getWodById);

// Search for wods with ‘bug’ in their name
app.get('/wod/search/:keyword', ServerWOD.searchWod);

// Add a new wod  
app.post('/wod', ServerWOD.createWod);

//  Update wod with id
app.put('/wod/:id', ServerWOD.updateWod);

//  Delete wod
app.delete('/wod/:id', ServerWOD.deleteWod);

// // // // // // // // // TODOS // // // // // // // // // //
// Retrieve all todos
app.get('/todos', ServerTODO.getTodos);

// Retrieve todo with id 
app.get('/todo/:id', ServerTODO.getTodoById);

// Search for todos with ‘bug’ in their name
app.get('/todo/search/:keyword', ServerTODO.searchTodo);

// Add a new todo  
app.post('/todo', ServerTODO.createTodo);

//  Update todo with id
app.put('/todo/:id', ServerTODO.updateTodo);

//  Delete todo
app.delete('/todo/:id', ServerTODO.deleteTodo);

// Search for todos with ‘bug’ in their name
app.get('/todo/search/:keyword', ServerTODO.searchTodo);

// // // // // // // // // MOUVS // // // // // // // // // //

// Retrieve all mouvs 
app.get('/mouvs', ServerWOD.getMouvs);

// Retrieve mouv with id 
app.get('/mouv/:id', ServerWOD.getMouvById);

// Search for mouvs with ‘bug’ in their name
app.get('/mouv/search/:keyword', ServerWOD.searchMouv);

// // // // // // // // // GLOBAL // // // // // // // // // //
// Search for anything with ‘bug’ in their name
app.get('/search/:keyword', ServerGlobal.searchGlobal);

// // // // // // // // // // // // // // // // // // // // // // // // // // // /// // // // //

// port must be set to 3000 because incoming http requests are routed from port 80 to port 8080
app.listen(5000, function () {
   console.log('Node app is running on port 5000');
});

module.exports = app;