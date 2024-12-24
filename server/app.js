// const con = require('./config/dbConfig');
const express = require('express');
const routes = require('./routes/routes');
const httpServer = require('http');
const app = express();
const cors = require('cors');
const server = httpServer.createServer(app);



app.use(express.json());
app.use(cors());
const port = 4000;

app.use(express.urlencoded({extended: false}));
app.post('/login', routes);
app.post('/signup', routes);
app.post('/registerstudent', routes);
app.get('/viewstudent', routes)
app.post('/deletestudentbyid', routes)





server.listen(port, ()=>{
    console.log(`Server is running on ${port} port`);
})