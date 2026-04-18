# 🏡 Wanderlust

### Airbnb Clone – Full Stack Web Application

Wanderlust is a **full-stack web application inspired by Airbnb**, built as my first complete full-stack project. The goal was to understand how real-world web applications work — from frontend to backend.
---

## 🚀 Live Demo

🔗 [(https://wanderlust-yf6a.onrender.com)](https://wanderlust-yf6a.onrender.com))

---

## 🛠 Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | HTML, CSS, Bootstrap, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | Passport.js, Express Session |
| **Image Uploads** | Cloudinary |
| **Deployment** | Render |

---

## ✨ Features

- 🔐 User authentication — Sign Up, Login, Logout
- 🏘️ Create, read, update, and delete property listings
- 🖼️ Image upload for listings via Cloudinary
- 🔒 Authorization — only owners can edit or delete their listings
- 📱 Responsive UI
- 🌐 RESTful API design

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add the following:

```env
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
```

### 4. Run the application

```bash
nodemon app.js
```

### 5. Open in browser

```
http://localhost:3000
```

---

## 📁 Project Structure

```
wanderlust/
├── models/          # Mongoose schemas
├── routes/          # Express route handlers
├── views/           # EJS templates
├── public/          # Static assets (CSS, JS, images)
├── middleware.js    # Custom middleware
├── app.js           # Entry point
└── .env             # Environment variables (not committed)
```

---

## 📚 What I Learned

- Full-stack application architecture
- Backend routing and middleware with Express.js
- MongoDB schema design using Mongoose
- Authentication and authorization using Passport.js
- Cloudinary integration for image uploads
- Error handling and input validation
- Deploying a full-stack Node.js application to Render

---

## 🔮 Future Improvements

- [ ] Booking and reservation system
- [ ] Advanced search and filter functionality
- [ ] Reviews and ratings system
- [ ] Improved UI/UX
- [ ] Payment gateway integration (Stripe)
- [ ] Map integration for listing locations

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

Inspired by [Airbnb](https://www.airbnb.com/) and built for learning full-stack web development.
