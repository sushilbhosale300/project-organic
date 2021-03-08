const express = require('express');
const dotenv = require('dotenv');
const error = require('./middlewares/errorMiddlewareHandler');
const usersRoute = require('./routes/usersRoute');
const postRouter = require('./routes/postRoutes');
const cors = require('cors');
dotenv.config();
require('./config/dbConnect')();

const app = express();

app.use(cors());

//Passing body data
app.use(express.json());

//Routes
//Users
app.use('/api/users', usersRoute);
//Books
app.use('/api/posts', postRouter);

//Error middleware
app.use(error.errorMiddlewareHandler);

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and runing ${PORT}`);
});
