const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('client/public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});

app.listen(5000, () => console.log('server on 5k'));
