# ZealTestHub 🚀

**Empowering Education with Seamless Online Assessments**

## 📌 Overview
ZealTestHub is an advanced online examination platform designed for **Zeal Institute of Business Administration and Computer Application, Research (ZIBACAR)**. Built on the **MERN stack**, it facilitates smooth and secure chapter tests and internal assessments for students while providing robust analytics for teachers.

## ✨ Features
### 🔹 **Role-Based Access Control (RBAC)**
- 👨‍🏫 **Teachers (Admins)**: Can upload question files, analyze student performance, and generate reports.
- 🎓 **Students**: Can log in, take scheduled tests, and receive instant results.

### 📊 **Interactive Test Analytics**
- Live **pie, bar, and line charts** using **Chart.js** to visualize student performance.
- Track individual and batch-wise progress.

### 📩 **Automated Notifications**
- Email result notifications sent instantly after test completion.
- Timely reminders for upcoming tests.

### 📑 **Excel Report Generation**
- Teachers can download **Excel reports** for student performance tracking and documentation.

### 🔐 **Secure & Scalable Architecture**
- Authentication using **JWT**.
- Data stored securely in **MongoDB**.
- Backend deployed on **Render/Railway**, frontend on **Vercel**.

## 🛠️ Tech Stack
- **Frontend**: React (Vite)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **UI Styling**: Tailwind CSS
- **Charts**: Chart.js
- **Deployment**: Render/Railway (Backend), Vercel (Frontend)

## 🚀 Getting Started
### 🔧 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/zealtesthub.git
   cd zealtesthub
   ```
2. Install dependencies for both frontend and backend:
   ```sh
   cd client && npm install
   cd ../server && npm install
   ```
3. Set up environment variables (`.env` file in `server` directory):
   ```env
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Run the application:
   ```sh
   # Start backend
   cd server && npm run dev
   
   # Start frontend
   cd ../client && npm run dev
   ```

## 📌 Future Enhancements
- ✅ AI-driven **test recommendations** based on student performance.
- ✅ **Question Bank** for adaptive learning.
- ✅ **Gamification** elements to enhance engagement.

## 🤝 Contributing
We welcome contributions! Feel free to **fork** this repo, create a new branch, and submit a **pull request**.

## 📜 License
This project is licensed under the **MIT License**.

## 📞 Contact
For any queries, reach out at **your.email@example.com** or visit **[ZealTestHub](https://zealtesthub.com)**.

---

**Transforming Learning, One Test at a Time! 🚀**

