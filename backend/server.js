const express = require('express');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
const servicesRouter = require('./src/routes/servicesRoutes');
const ordersRouter = require('./src/routes/ordersRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' });
});

app.use(servicesRouter);
app.use(ordersRouter);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
