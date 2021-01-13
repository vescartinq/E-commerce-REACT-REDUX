import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';

const app = express();
const port = process.env.PORT || 5000;
const dbUrl = process.env.DBURL || 'mongodb://localhost/trisoul';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((element) => element._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.send('Server working well and hard');
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});