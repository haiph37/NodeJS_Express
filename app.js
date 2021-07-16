const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;
const apiPath = '/api/';

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('Client'));
// app.get('/', function (req, res) {
//    res.sendFile( __dirname + '/' + "index.html" );
// });
app.use(apiPath + 'users' , require('./routers/users.route'));

app.get('/test', function(req, res){
    res.send('Bạn đang trong trang test');
});

app.get('/users', function(req, res){
    res.send([
        {name : 'Huy', address:'USA'},
        {name : 'Hieu', address : 'VN'},
    ]);
});

app.listen(port, function(){
    const host = 'localhost';

    console.log('Example app listening at http://%s:%s', host, port);
})