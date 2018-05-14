const express = require('express');
const app = express();
const port = 3000;
const consign = require('consign');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign()
.include('routers')
.into(app);

app.listen(port, () => {
    console.log(`Server is listening !!!`);
});