# MERN_NOTES_APP

A simple **MERN** (MongoDB, Express, React, Node) notes application.
This repo contains a `backend` (Express + MongoDB) and a `frontend` (Vite + React + Tailwind + DaisyUI). The app supports creating, listing, viewing, editing and deleting notes, and includes a theme selector using DaisyUI.

---

# Features

* Create / Read / Update / Delete notes (REST API)
* Persistent storage with MongoDB
* Frontend built with React, Tailwind CSS and DaisyUI
* Theme selector (light / dark / cyberpunk / luxury / coffee / valentine) persisted to `localStorage`
* Rate limiting middleware (optional) and basic error handling
* Minimal, clean UI and mobile-responsive layout

---

# Tech Stack

* Frontend: React (Vite), Tailwind CSS, DaisyUI, react-router
* Backend: Node.js, Express, Mongoose
* Database: MongoDB (URI via env variable)
* Dev tools: nodemon (backend dev), Vite (frontend dev)

---

# Repo Structure

```
MERN_NOTES_APP
├─ backend
│  ├─ src
│  │  ├─ config
│  │  │  ├─ db.js
│  │  │  └─ upstash.js
│  │  ├─ controllers
│  │  │  └─ notesController.js
│  │  ├─ middleware
│  │  │  └─ rateLimiter.js
│  │  ├─ models
│  │  │  └─ Note.js
│  │  ├─ routes
│  │  │  └─ notesRoutes.js
│  │  └─ server.js
│  └─ package.json
└─ frontend
   ├─ src
   │  ├─ components
   │  │  ├─ Navbar.jsx
   │  │  ├─ NoteCard.jsx
   │  │  ├─ NotesNotFound.jsx
   │  │  └─ RateLimitedUI.jsx
   │  ├─ lib
   │  │  ├─ axios.js
   │  │  └─ utils.js
   │  ├─ pages
   │  │  ├─ CreateNotePage.jsx
   │  │  ├─ HomePage.jsx
   │  │  └─ NoteDetailPage.jsx
   │  ├─ App.jsx
   │  ├─ index.css
   │  └─ main.jsx
   └─ package.json
```

---

# Prerequisites

* Node.js (v16+ recommended)
* npm (or yarn)
* A MongoDB database (Atlas or local)
* Optional: Redis / Upstash keys if you use rate-limiter that depends on Redis

---

# Environment variables

Create `.env` in `backend/` with at least:

```env
MONGO_URI=<your-mongo-connection-string>
PORT=5001
# Optional (if used in your code)
CLIENT_URL=http://localhost:5173
UPSTASH_REDIS_REST_URL=<if using upstash>
UPSTASH_REDIS_REST_TOKEN=<if using upstash>
```

Make sure `MONGO_URI` is valid and reachable. If using MongoDB Atlas, whitelist your IP or use 0.0.0.0/0 for testing only.

---

# Installation & Running (local)

Open two terminals (one for backend, one for frontend).

## Backend

```bash
cd backend
npm install
# start in dev mode
npm run dev     # typically nodemon server.js or nodemon src/server.js
# or
npm start       # production
```

If the server fails to start, check the console for DB connection errors (invalid MONGO_URI or network issues).

## Frontend

```bash
cd frontend
npm install
npm run dev     # runs Vite dev server (default port 5173)
```

Open `http://localhost:5173` (or the address printed by Vite).

If frontend cannot reach backend, ensure your backend runs on `http://localhost:5001` (or update `frontend/src/lib/axios.js` baseURL to match).

---

# Useful npm scripts (examples)

If your `package.json` differs, adapt accordingly.

**Backend** (`backend/package.json`)

* `dev` → run nodemon for development
* `start` → start node server in production

**Frontend** (`frontend/package.json`)

* `dev` → run Vite dev server
* `build` → build production bundle
* `preview` → preview production build

---

# API Endpoints

Routes are mounted at `/api/notes`:

* `GET /api/notes` — list all notes
* `GET /api/notes/:id` — get a single note
* `POST /api/notes` — create a new note `{ title, content }`
* `PUT /api/notes/:id` — update a note
* `DELETE /api/notes/:id` — delete a note

Test with curl / Postman:

```bash
# list notes
curl http://localhost:5001/api/notes

# create note
curl -X POST http://localhost:5001/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"Hello", "content":"World"}'
```

---

# Theming (Tailwind + DaisyUI)

* The app uses DaisyUI themes. The root `data-theme` is changed in `App.jsx` via `document.documentElement.setAttribute("data-theme", theme)`.
* The Navbar contains a `<select>` that calls `setTheme(...)`. `App.jsx` persists the value to `localStorage`.
* Available examples: `light`, `dark`, `cyberpunk`, `luxury`, `coffee`, `valentine`. You can add/remove DaisyUI themes in `tailwind.config.js` if needed.

---

# Troubleshooting common issues

### 500 Internal Server Error on `GET /api/notes`

* Look at the backend server console for stack trace. The console error shows the root cause.
* Common causes:

  * DB connection failed (`MONGO_URI` wrong)
  * Controller or model file has syntax or runtime error (ensure `notesController.js` is complete and exports functions)
  * Model import path is incorrect
* Add helpful logging in controller catch blocks:

```js
catch (err) {
  console.error("Error fetching notes:", err);
  res.status(500).json({ message: err.message || "Internal Server Error" });
}
```

### `Cannot read properties of undefined (reading 'length')` in frontend

* This happens when you try to use `.length` on `undefined` (e.g., `res.date` typo). Fix by:

  * Confirm axios response: use `res.data`
  * Initialize state with `useState([])`
  * Guard with `Array.isArray(notes) && notes.length > 0`

### CORS issues

* If the browser blocks requests, ensure backend sets CORS to allow frontend origin:

```js
import cors from "cors";
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
```

---

# Testing

* Manual testing via browser + Postman / curl.
* Optionally add automated tests with Jest (backend) and React Testing Library (frontend).

---

# Deployment notes

* Build frontend: `cd frontend && npm run build`. Serve `dist` with static hosting (Netlify, Vercel, Surge) or serve from your backend.
* Backend: deploy on platforms like Render, Heroku, Railway, or any VPS. Ensure `MONGO_URI` and any Redis/Upstash keys are set in environment variables on the host.
* When serving production, update CORS origin(s) accordingly.

---

# Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes and push
4. Open a PR with a clear description

Please run linters and formatters before opening PRs (add ESLint/Prettier configs if desired).

---

# Acknowledgements & Resources

* TailwindCSS & DaisyUI docs for theme and component utilities

---

# License

MIT © Ayush Prasad. Feel free to adapt this project for learning and portfolio use.

