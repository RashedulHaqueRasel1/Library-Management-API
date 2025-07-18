// src/app/controllers/book.controllers.ts
export const GENRES = ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'] as const;
export type Genre = (typeof GENRES)[number];

export interface Book {
    title: string;
    author: string;
    genre: Genre;
    isbn: string;
    description?: string;
    copies: number;
    available: boolean;
}