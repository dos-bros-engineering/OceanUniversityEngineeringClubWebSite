const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

//middlewares
app.use(cors());
app.use(
    express.urlencoded({
        extended:true
    })
);

app.use(express.json());

//REST APIs
//Articles
app.get('/articles',(req, res)=>{
    controller.getArticles((req, res, next) => {
        res.send();
    })
});

app.post('/addarticles',(req,res)=>{
    controller.addArticles(req.body,(callback) => {
        res.send();
    })
});

app.patch('/updatearticles/:id',(req,res)=>{
    controller.updateArticles(req.params.id, req.body, (result) => {
        res.send(result);
    })
});

app.delete('/deletearticles/:id', (req, res) => {
  controller.deleteArticles(req.params.id, (result) => {
    res.send(result);
  });
});

//News 
app.get('/news',(req, res)=>{
    controller.getNews((req, res, next) => {
        res.send();
    })
});

//Comments
app.get('/comments',(req, res)=>{
    controller.getComments((req, res, next) => {
        res.send();
    })
});

//Superadmin
app.get('/superadmin',(req, res)=>{
    controller.getSuperAdmin((req, res, next) => {
        res.send();
    })
});

//Admin
app.get('/admin',(req, res)=>{
    controller.getAdmin((req, res, next) => {
        res.send();
    })
});

app.post('/addadmin',(req,res)=>{
    controller.addAdmin(req.body,(callback) => {
        res.send();
    })
});

app.patch('/updateadmin/:id',(req,res)=>{
    controller.updateAdmin(req.params.id, req.body, (result) => {
        res.send(result);
    })
});

app.delete('/deleteadmin/:id', (req, res) => {
  controller.deleteAdmin(req.params.id, (result) => {
    res.send(result);
  });
});

module.exports = app;