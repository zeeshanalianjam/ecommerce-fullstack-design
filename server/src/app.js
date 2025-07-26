import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// Middleware configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// Import routes
import { userRouter } from './routes/user.routes.js';
import { uploadImageRouter } from './routes/uploadImage.routes.js';
import { categoryRouter } from './routes/category.routes.js';
import { productRouter } from './routes/product.routes.js';
import { brandRouter } from './routes/brand.routes.js';
import { featureRouter } from './routes/feature.routes.js';

// Use routes
app.use('/api/v1/user', userRouter);
// http://localhost:8080/api/v1/user/register
app.use('/api/v1/image', uploadImageRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/brands', brandRouter);
app.use('/api/v1/features', featureRouter);

export { app };
