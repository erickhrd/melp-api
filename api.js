
const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/data_melp.json', (req, res) => {
  var newurl = 'https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json';
  request(newurl).pipe(res);
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

