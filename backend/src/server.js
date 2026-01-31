import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './config/db.js';
import notesRoutes from './routes/notesRoutes.js';
import rateLimiter from './middleware/ratelimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


// middleware
app.use(cors({
    origin: 'http://localhost:5173', // frontend origin
}));
app.use(express.json());  // to parse JSON request bodies
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
});

