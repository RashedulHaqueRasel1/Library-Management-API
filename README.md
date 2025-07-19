
# 📚 Library Management API

This is a RESTful API built using **TypeScript**, **Express.js**, and **MongoDB** to manage a basic library system — including books and borrowing functionality.

## Github Repo & Live Link:

  github: "[Click Here](https://github.com/RashedulHaqueRasel1/Library-Management-API)"

  live_link: "[Click Here](https://library-management-green-two.vercel.app)"
---

## 🛠️ Technologies Used

- TypeScript
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv

---

## ✅ Features

- 📚 Add / View / Delete Books
- 🔄 Borrow & Return Books
- 🧾 Separate controller, model, and interface layers
- 🔒 Environment variable support using `.env`

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository


git clone https://github.com/RashedulHaqueRasel1/Library-Management-API.git

cd Library-Management-API

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Setup Environment Variables

Create a .env file in the root directory and add the following:

DB_USER=

DB_PASS=

PORT=3000

### 4️⃣ Compile TypeScript
npx tsc

### 5️⃣ Start the Server
node dist/server.js

### 📬 API Endpoints
# Books
GET /api/books — Get all books

POST /api/books — Add a new book

GET /api/books/:bookId — Get a single book

PATCH /api/books/:bookId — Update book details

DELETE /api/books/:bookId — Delete a book

# Borrow
POST /api/borrow — Borrow a book

GET /api/borrow — List borrowed books


### 👨‍💻 Author
Rashedul Haque Rasel

Email: rashedulhaquerasel1@gmail.com