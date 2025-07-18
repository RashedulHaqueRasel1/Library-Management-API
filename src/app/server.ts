import { Server } from 'http';
import app from './app';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config(); 

// Load environment variables from .env file
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
 
let server: Server;
const port = 3000;

async function main() {
    try {
        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.gwet8mu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('✅ Library Management Connected to MongoDB Using Mongoose.');

        server = app.listen(port, () => {
            console.log(`✅ Library Management Server is running on http://localhost:${port}`);
        });

    } catch (error) {
        console.error('❌ Error starting server:', error);
    }
}

main();

