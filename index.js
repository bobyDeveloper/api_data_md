const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by bobyDev');
});

app.get('/hours', (req, res, next) => {
  res.sendfile("assets/1a_dev_hours.json");
});

app.get('/size', (req, res, next) => {
	res.sendfile("assets/1a_proxy_size.json");
  });

//Issue #5  
app.get('/data1', (req, res, next) => {
	res.sendfile("assets/Data_Test1.json");
});

//Issue #6
app.get('/data2', (req, res, next) => {
	res.sendfile("assets/Data_Test2.json");
});

app.get('/data3', (req, res, next) => {
	res.sendfile("assets/Data_Test3.json");
});

app.get('/data4', (req, res, next) => {
	res.sendfile("assets/Data_Test4.json");
});

app.listen(port,  () => 
	console.log('listening on port ' + port
));
