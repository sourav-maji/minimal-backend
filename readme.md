# 🚀 Minimal Node.js Backend Starter
A clean, production-ready backend starter template using Node.js, Express, and MongoDB with JWT-based authentication (access + refresh tokens).

Designed for fast bootstrapping of RESTful APIs with modular structure, best practices, and environment configurability.

## 📦 Tech Stack
- Node.js + Express — lightweight server framework

- MongoDB + Mongoose — NoSQL database

- JWT — access and refresh tokens for authentication

- ES6 Modules — modern JS support

- dotenv — for environment variable management

## ✨ Features
✅ Access + Refresh Token Auth (JWT)

✅ User Registration & Login

✅ Refresh token endpoint

✅ Logout (revokes refresh token)

✅ Protected routes with middleware

✅ Role-ready structure (extensible)

✅ Centralized error handling with custom AppError

✅ Modular file structure (controller, model, route, utils)

## 📁 Folder Structure
```bash
minimal-backend/
├── src/
│   ├── app.js                 # Express app entry point
│   ├── config/                # DB config
│   ├── controllers/           # Business logic
│   ├── models/                # Mongoose models
│   ├── routes/                # Route definitions
│   ├── utils/                 # Middleware, error & token utils
├── .env.example               # Sample environment variables
├── .gitignore
├── package.json

```

## ⚙️ Environment Variables
Create a .env file based on .env.example:
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/minimaldb
ACCESS_TOKEN_SECRET=your_access_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
```

## 🧪 API Endpoints

| Method | Endpoint             | Description                     | Auth Required |
| ------ | -------------------- | ------------------------------- | ------------- |
| POST   | `/api/register`      | Register new user               | ❌             |
| POST   | `/api/login`         | Login and get tokens            | ❌             |
| POST   | `/api/refresh-token` | Refresh access token            | ✅ (refresh)   |
| POST   | `/api/logout`        | Logout and revoke refresh token | ✅ (refresh)   |
| GET    | `/api/protected`     | Protected route example         | ✅ (access)    |
| GET    | `/health`            | Health check                    | ❌             |


## 🚀 Getting Started

```bash
# Clone the project
git clone https://github.com/sourav-maji/minimal-backend.git
cd minimal-backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Run development server
npm run dev


```


## 🧰 Scripts

```bash
npm run start     # Run server (prod)
npm run dev       # Run server with nodemon (dev)
```

## 🔒 Authentication Flow
Register/Login → returns accessToken + refreshToken

Use accessToken in headers:
Authorization: Bearer <access_token>

When accessToken expires, use /refresh-token to get new pair

Call /logout to revoke refresh token (in-memory)



## 🙋‍♂️ Maintainer & 👨‍💻 Author
Sourav Maji — AI Automation Engineer & Backend Developer

[**GitHub**](https://github.com/sourav-maji) | [**Linkedin**](https://www.linkedin.com/in/souravmajiwb/)