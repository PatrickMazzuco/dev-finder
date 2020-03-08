import env from 'dotenv';
import express from 'express';
import cors from 'cors';

import connectDB from './database/db';
import routes from './routes';

const app = express();
env.config();

// Connect to the database
connectDB();

// Init middleware
app.use(cors());
app.use(express.json());

// Init routes
routes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
