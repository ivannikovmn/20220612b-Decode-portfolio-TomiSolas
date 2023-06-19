const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'))

app.set("view engine" , "ejs")

app.get('/' , (req , res) =>{
    res.render("index")
})

app.get('/login', (req, res) => {
    res.render("login")
})

app.get('/about', (req, res) => {
    res.render("about")
})

app.get('/services', (req, res) => {
    res.render("services")
})

app.get('/blog', (req, res) => {
    res.render("blog")
})

app.get('/contact', (req, res) => {
    res.render("contact")
})

const PORT = 3000;
app.listen(PORT , () => {
    console.log(`Server listening on port ${PORT}`);
})