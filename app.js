const express = require('express');
const app = express();

const port = 3000;
require('./dbConnect');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', require('./routes/auth'));
app.use('/post', require('./routes/post'));

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
