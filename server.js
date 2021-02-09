import dotenv from 'dotenv';
import express from 'express';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import pg from 'pg';
import asyncHandler from 'express-async-handler';
dotenv.config();


const client = new pg.Client(process.env.DATABASE_URL);

const getDogFood = asyncHandler(async (req, res) => {
  let sql = `SELECT * FROM dogfood`;
  console.log('in here')
  console.log(client);
  const dogFood = await client.query(sql)
  
  res.send(dogFood.rows[0].brand);
})

const app = express();

app.use(express.json());

app.get('/', getDogFood);


// app.use('/api/products', productRoutes);
// app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

client.connect()
  .then(() => {
    app.listen(PORT, console.log(`server running in dev mode on ${PORT}`.yellow.bold));
  })