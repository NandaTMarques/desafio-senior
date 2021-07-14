const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const errorMiddleware = require('./src/middlewares/errorMiddleware');
const servicesRouter = require('./src/routes/servicesRoutes');
const ordersRouter = require('./src/routes/ordersRoutes');

const app = express();
const port = process.env.PORT || 3001;
app.use(cors()); // informar quais os dominios pode consumir os dados da api
app.use(cookieParser());
app.use(express.json());

app.use(servicesRouter);
app.use(ordersRouter);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
