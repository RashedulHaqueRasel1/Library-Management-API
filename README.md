
# 📚 Library Management API

This is a RESTful API built using **TypeScript**, **Express.js**, and **MongoDB** to manage a basic library system — including books and borrowing functionality.

## 🔗 Live Repo

GitHub: [https://github.com/RashedulHaqueRasel1/Library-Management-API](https://github.com/RashedulHaqueRasel1/Library-Management-API)

---

## 📁 Folder Structure

src
│
├── app
│ ├── controllers # Request handlers (Book & Borrow)
│ │ ├── book.controllers.ts
│ │ └── borrow.controllers.ts
│ │
│ ├── interfaces # TypeScript interfaces for model schemas
│ │ ├── book.interface.ts
│ │ └── borrow.interface.ts
│ │
│ ├── models # Mongoose models
│ │ ├── book.models.ts
│ │ └── borrow.model.ts
│
├── app.ts # Express app configuration
└── server.ts # Entry point of the application



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

```bash
git clone https://github.com/RashedulHaqueRasel1/Library-Management-API.git
cd Library-Management-API

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Setup Environment Variables

Create a .env file in the root directory and add the following:

PORT=3000
MONGODB_URI=your_mongodb_connection_string

### 4️⃣ Compile TypeScript
npx tsc

### 5️⃣ Start the Server
node dist/server.js

### 📬 API Endpoints
Method	Endpoint	Description
GET	    /api/books	  Get all books
POST	/api/books	 Add a new book
DELETE	/api/books/:id	Delete a book
POST	/api/borrow	 Borrow a book
GET	   /api/borrow	 Return a summary of borrowed books,


### 👨‍💻 Author
Rashedul Haque Rasel
Email: rashedulhaquerasel1@gmail.com