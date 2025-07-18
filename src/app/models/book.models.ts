// src/app/models/book.models.ts
import { model, Schema } from "mongoose";
import { Book, GENRES } from "../interfaces/book.interface";

const bookSchema = new Schema<Book>({
    title: { 
        type: String, 
        required: true 
    },
    author: { 
        type: String, 
        required: true 
    },
    genre: { 
        type: String, 
        enum: GENRES, 
        required: true 
    },
    isbn: { 
        type: String, 
        required: true, 
        unique: true 
    },
    description: { 
        type: String 
    },
    copies: { 
        type: Number, 
        required: true, 
        min: 0 
    },
    available: { 
        type: Boolean, 
        default: true 
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);

bookSchema.methods.updateAvailability = function () {
    this.available = this.copies > 0;
    return this.save();
};

bookSchema.pre('save', function (next) {
    this.available = this.copies > 0;
    next();
});

export const BookModel = model<Book>('Book', bookSchema);