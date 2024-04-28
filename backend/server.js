import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); //loads environment variables from a .env file into process.env
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoute.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';

const port = process.env.PORT || 5001;
connectDB();

const app = express();

// Body Parser Middleware
app.use(express.json()); // for raw json
app.use(express.urlencoded({ extended: true })); //

//Cookie parser Middleware
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('API is runnig....');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// error handler Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
