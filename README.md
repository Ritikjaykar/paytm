# Paytm Clone

A full-stack Paytm clone built using the MERN stack.

## Features

- User Signup & Signin
- JWT Authentication
- Search Users
- Check Account Balance
- Send Money to Other Users
- Protected Backend Routes
- MongoDB Database Integration
- Responsive UI using Tailwind CSS

---

## Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Zod

---

## Project Structure

```bash
paytm/
│
├── backend/
│   ├── routes/
│   ├── db.js
│   ├── middleware.js
│   └── index.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Ritikjaykar/paytm.git
```

---

## Backend Setup

```bash
cd backend
npm install
node index.js
```

Backend runs on:

```bash
http://localhost:3000
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## MongoDB Setup Using Docker

Start Docker Desktop first.

Run MongoDB container:

```bash
docker start mongodb
```

If container does not exist:

```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

---

## Environment Variables

Create a `.env` file if needed.

Example:

```env
JWT_SECRET=paytmclone
```

---

## API Endpoints

### User Routes

| Method | Route |
|---|---|
| POST | `/api/v1/user/signup` |
| POST | `/api/v1/user/signin` |
| GET | `/api/v1/user/bulk` |
| PUT | `/api/v1/user` |

### Account Routes

| Method | Route |
|---|---|
| GET | `/api/v1/account/balance` |
| POST | `/api/v1/account/transfer` |


---

## Author

Ritik Jaykar