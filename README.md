# 🛒 Household Grocery Tracker

A simple full-stack web application built with **React**, **Redux**, **Node.js**, and **MongoDB Atlas** that allows users to track household grocery items.  
The app supports full **CRUD (Create, Read, Update, Delete)** operations and demonstrates how to deploy both backend and frontend separately on **Render** using a GitHub repository.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React (with React Router & Redux Toolkit) |
| Backend | Node.js + Express |
| Database | MongoDB Atlas |
| Deployment | Render.com |

---

🌐 **Deploying on Render**

You will deploy **backend** and **frontend** as two separate Render services.

---

### 🧩 Step 1 — Deploy Backend

1. Push your project to **GitHub**.  
2. Go to **Render Dashboard** → click **“New +” → “Web Service”**.  
3. Connect your GitHub repo.  
4. Select the **backend** folder as the root.  
5. Set up:

   - **Build Command:** `npm install`  
   - **Start Command:** `npm start`

6. Add **Environment Variables** in Render:
MONGO_URI=your MongoDB Atlas URI;
PORT=10000

7. Deploy and note the backend URL — e.g.:
https://grocery-backend.onrender.com


---

### 🧠 Step 2 — Configure Frontend

Your local `.env` file (ignored by Git) should contain:

REACT_APP_BACKEND_URL=http://localhost:5000

> ⚠️ Note: The `.env` file is **not pushed to GitHub** because it’s listed in `.gitignore`:
>
> ```
> node_modules
> frontend/node_modules
> backend/node_modules
> frontend/.env
> backend/.env
> ```

---

### 🎨 Step 3 — Deploy Frontend

1. Go to **Render Dashboard** → click **New + → Static Site**.  
2. Connect the **same GitHub repository**.  
3. In **Root Directory**, set: frontend

4. Set up the build settings:

- **Build Command:** `npm run build`  
- **Publish Directory:** `build`

5. Under **Environment Variables** in Render, add:

REACT_APP_BACKEND_URL=https://grocery-backend.onrender.com

6. Click **Create Static Site** to deploy.

Once deployed, your frontend will be live at something like:

https://grocery-frontend.onrender.com

---

### 🔄 Connecting Both

Your deployed frontend automatically uses the backend URL from Render’s environment variable:

REACT_APP_BACKEND_URL=https://grocery-backend.onrender.com

✅ No need to push `.env` files to GitHub — Render handles them securely!

---

### 🚀 Live Project

My project is live at:  
👉 **[https://household-grocery-tracker.onrender.com/](https://household-grocery-tracker.onrender.com/)**


