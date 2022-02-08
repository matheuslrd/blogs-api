const express = require('express');
const bodyParser = require('body-parser');

const { createUser, userLogin, showUsers, showUserById } = require('./controllers/UserController');
const { createCategory, showAllCategories } = require('./controllers/CategoryController');
const { verifyToken } = require('./middlewares/verifyToken');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.route('/user/:id')
  .get(verifyToken, showUserById);

app.route('/login')
  .post(userLogin);

app.route('/user')
  .get(verifyToken, showUsers)
  .post(createUser);

app.route('/categories')
  .get(verifyToken, showAllCategories)
  .post(verifyToken, createCategory);
