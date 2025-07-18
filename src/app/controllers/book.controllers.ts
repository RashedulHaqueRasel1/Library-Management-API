import { NextFunction, Request, Response } from "express";
import express from 'express';
import { BookModel } from "../models/book.models";


export const bookRouter = express.Router();


// Create a new book
bookRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const book = await BookModel.create(body);
        res.status(201).send({
            success: true,
            message: 'Book created successfully',
            data: book
        });
    } catch (error) {
        next(error);
    }
});


// Get all books
bookRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { filter, sortBy = 'createdAt', sort = 'desc', limit = 10 } = req.query;
        const query: any = {};
        if (filter) query.genre = filter;

        const books = await BookModel.find(query)
            .sort({ [sortBy as string]: sort === 'asc' ? 1 : -1 })
            .limit(Number(limit));

        res.status(200).send({
            success: true,
            message: 'Books retrieved successfully',
            data: books
        });
    } catch (error) {
        next(error);
    }
});

// Get bookId
bookRouter.get('/:bookId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookId = req.params.bookId;
        const book = await BookModel.findById({ _id: bookId });
        if (!book) {
            return res.status(404).send({
                success: false,
                message: 'Book not found'
            });
        }
        res.status(200).send({
            success: true,
            message: 'Book retrieved successfully',
            data: book
        });
    } catch (error) {
        next(error);
    }
});

// Update a book
bookRouter.put('/:bookId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookId = req.params.bookId;
        const body = req.body;
        const book = await BookModel.findByIdAndUpdate(
            { _id: bookId },
            body,
            { new: true }
        );
        if (!book) {
            return res.status(404).send({
                success: false,
                message: 'Book not found'
            });
        }
        res.status(200).send({
            success: true,
            message: 'Book updated successfully',
            data: book
        });
    } catch (error) {
        next(error);
    }
});


// Delete a book
bookRouter.delete('/:bookId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookId = req.params.bookId;
        const book = await BookModel.findByIdAndDelete({ _id: bookId });
        if (!book) {
            return res.status(404).send({
                success: false,
                message: 'Book not found'
            });
        }
        res.status(200).send({
            success: true,
            message: 'Book deleted successfully',
            data: null
        });
    } catch (error) {
        next(error);
    }
});
