import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); //loads environment variables from a .env file into process.env
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 5001;
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is runnig....');
});

app.use('/api/products', productRoutes);


// error handler Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
