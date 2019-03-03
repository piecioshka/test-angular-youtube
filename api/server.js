
// npm install express body-parser cors

const port = 3000;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const debug = require('debug');

const console = {
  log: debug('youtube:server')
}

app.get('/', (req, res) => {
  console.log(req.method + ' ' + req.url);
  res.json({
    status: 'ok',
    message: 'welcome'
  });
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: 'ok',
    message: 'data received'
  });
});

app.listen(port, () => {
  console.log('Server was started at http://localhost:' + port);
});
