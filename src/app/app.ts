import express, { Application, NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { bookRouter } from './controllers/book.controllers';
import { borrowRouter } from './controllers/borrow.controllers';

const app: Application = express();


// middleware 
app.use(express.json());



// routers
app.use("/api/books", bookRouter);
app.use("/api/borrow", borrowRouter);




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
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    // Mongoose Validation Error
    if (err.name === 'ValidationError') {
        const errors: any = {};
        Object.keys(err.errors).forEach((key) => {
            errors[key] = err.errors[key].message;
        });

        return res.status(400).json({
            message: 'Validation failed',
            success: false,
            error: {
                name: err.name,
                errors: err.errors,
            },
        });
    }

    // Default error
    res.status(err.status || 500).json({
        message: err.message || 'Something went wrong',
        success: false,
        error: err,
    });
});

export default app;