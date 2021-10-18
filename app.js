const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
require('./dbConnect');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./routes/auth'));
app.use('/post', require('./routes/post'));

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
