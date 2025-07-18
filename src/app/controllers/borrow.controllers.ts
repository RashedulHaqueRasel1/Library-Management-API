import { NextFunction, Request, Response } from "express";
import express from 'express';
import { Borrow } from "../models/borrow.model";
import { BookModel } from "../models/book.models";

export const borrowRouter = express.Router();


// Create a new borrow
borrowRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const { book: bookId, quantity, dueDate } = req.body;
    try {
        const book = await BookModel.findById(bookId);
        if (!book) throw new Error('Book not found');

        if (book.copies < quantity) {
            return res.status(400).json({
                success: false,
                message: 'Not enough copies available',
                error: {}
            });
        }

        book.copies -= quantity;
        await book.save();

        const borrow = new Borrow({ book: bookId, quantity, dueDate });
        const result = await borrow.save();

        res.status(201).json({
            success: true,
            message: 'Book borrowed successfully',
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Borrow failed',
            error
        });
    }
});



// Borrowed Books Summary
borrowRouter.get('/', async (req: Request, res: Response) => {
    try {
        const summary = await Borrow.aggregate([
            {
                $group: {
                    _id: '$book',
                    totalQuantity: { $sum: '$quantity' },
                },
            },
            {
                $lookup: {
                    from: 'books',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'book',
                },
            },
            { $unwind: '$book' },
            {
                $project: {
                    _id: 0,
                    book: {
                        title: '$book.title',
                        isbn: '$book.isbn',
                    },
                    totalQuantity: 1,
                },
            },
        ]);
        res.json({
            success: true,
            message: 'Borrowed books summary retrieved successfully',
            data: summary
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to get summary', error });
    }
});

