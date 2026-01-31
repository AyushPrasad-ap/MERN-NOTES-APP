# 📝 MERN Notes App

A full-stack **MERN (MongoDB, Express, React, Node.js)** Notes application.

🚀 **Live Demo:**
🔗 **[https://mern-notes-app-56qf.onrender.com/](https://mern-notes-app-56qf.onrender.com/)**

---

## ✨ Features

* 📄 Create, read, update, and delete notes
* 🌐 RESTful API with Express & MongoDB
* 🎨 Modern UI using **Tailwind CSS + DaisyUI**
* 🌓 Theme switcher (Light, Dark, Cyberpunk, Luxury, Coffee, Valentine)
* 💾 Theme persistence using `localStorage`
* ⏱️ Rate limiting middleware
* 📱 Fully responsive design
* ☁️ Deployed on **Render**

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* React Router
* Tailwind CSS
* DaisyUI
* Axios

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* Rate limiting middleware
* Environment-based configuration

### Deployment

* Render (single service for full app)

---

## 🌍 Live Application

* **Frontend + Backend:**
  [https://mern-notes-app-56qf.onrender.com/](https://mern-notes-app-56qf.onrender.com/)

> The frontend is built using Vite and served after build, while the backend API runs on the same Render service.

---

## 📂 Project Structure

```
MERN_NOTES_APP
├── backend
│   └── src
│       ├── config
│       ├── controllers
│       ├── middleware
│       ├── models
│       ├── routes
│       └── server.js
├── frontend
│   └── src
│       ├── components
│       ├── pages
│       ├── lib
│       ├── App.jsx
│       └── main.jsx
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside `backend/`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
CLIENT_URL=http://localhost:5173
```

> When deployed on Render, these variables are configured in the **Render Dashboard → Environment** section.

---

## 🚀 Running Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/AyushPrasad-ap/MERN-NOTES-APP.git
cd MERN-NOTES-APP
```

### 2️⃣ Backend setup

```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Frontend setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:5173`
Backend will run on `http://localhost:5001`

---

## 🔌 API Endpoints

Base URL (local): `http://localhost:5001/api/notes`\
Base URL (prod): `https://mern-notes-app-56qf.onrender.com/api/notes`

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/notes`     | Fetch all notes   |
| GET    | `/api/notes/:id` | Fetch single note |
| POST   | `/api/notes`     | Create a note     |
| PUT    | `/api/notes/:id` | Update a note     |
| DELETE | `/api/notes/:id` | Delete a note     |

---

## 🎨 Theming (DaisyUI)

* Theme selection available on the Home page navbar
* Themes supported:

  * `light`
  * `dark`
  * `cyberpunk`
  * `luxury`
  * `coffee`
  * `valentine`
* Selected theme persists using `localStorage`
* Theme applied globally using `data-theme` on `<html>`

---

## 🧠 Key Learnings

* Handling **case-sensitive imports** for Linux deployments
* Proper separation of frontend & backend in MERN
* Production builds with Vite
* Debugging Render deployment issues
* Managing global UI state (theme) correctly

---

## 🐛 Common Issues

### Internal Server Error (500)

* Check MongoDB connection string
* Inspect Render logs for stack traces
* Ensure all file import paths match **exact casing**

### Theme not persisting

* Ensure `localStorage` access is wrapped in try/catch
* Confirm `data-theme` is set on `document.documentElement`

---

## 🙌 Acknowledgements

* DaisyUI & Tailwind CSS documentation
* Render deployment platform

---

## 📜 License

MIT License \
Feel free to use this project for learning, portfolio, or extension purposes.


