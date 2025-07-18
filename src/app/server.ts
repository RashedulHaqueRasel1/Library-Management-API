import { Server } from 'http';
import app from './app';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config(); 

let server: Server;
const port = process.env.PORT || 3000;

async function main() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gwet8mu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('✅ Library Management Connected to MongoDB Using Mongoose.');

        server = app.listen(port, () => {
            console.log(`✅ Library Management Server is running on http://localhost:${port}`);
        });

    } catch (error) {
        console.error('❌ Error starting server:', error);
    }
}

main();

