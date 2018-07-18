var express = require('express'),
    app = express();

    //route application
    // .get()
    // .post()
    // .all() =>get/post

app.get('/', function(req, res) {
    res.send('<h1>Hello</h1>');
});

app.get('/profile', function(req, res) {
    res.sendFile(__dirname + 'view/profile.html');
});

app.get('/getdata/:username/:usercode', function(req, res) {
    // 原始操作是这样子的：
    // req.params.username
    // req.params.usercode
    // console.log(req.params);
    // console.log(req.query);//后面加location=pis&weather=sunny

});

app.use(function(req,res) {
    res.redirect('/');
}) ;
app.listen(3000, function(){
    console.log('Server running @ locolhost:3000');
});//start the server

// locolhost:4200/ => angular
// locolhost:3000/ => node => apis
//npm install nodemon