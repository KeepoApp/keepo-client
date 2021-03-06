const express = require('express');
const path = require('path');

const app = express();
app.use('/dist', express.static('dist'));
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(process.env.PORT || 3000);
