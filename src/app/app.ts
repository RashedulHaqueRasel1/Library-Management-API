import express, { Application, NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { bookRouter } from './controllers/book.controllers';

const app: Application = express();


// middleware 
app.use(express.json());



// 
app.use("/api/books", bookRouter);





// well come route
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send({ message: 'Hello, Well Come to the Library Management API System!' });
});

// 404 Not Found middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send({
        message: '404 Not Found',
        error: 'The requested resource was not found'
    });
});

// Error handling middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('❌ Error:', error.message);
    res.status(500).send({ message: 'Internal Server Error', error: error.message });
});

export default app;