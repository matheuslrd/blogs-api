const express = require('express');
const bodyParser = require('body-parser');

const { createUser, userLogin, showUsers } = require('./controllers/UserController');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.route('/login')
  .post(userLogin);

app.route('/user')
  .get(showUsers)
  .post(createUser);
