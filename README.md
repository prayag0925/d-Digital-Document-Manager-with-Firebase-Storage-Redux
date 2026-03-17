# 📂 Digital Document Manager

A powerful **Digital Document Management System** built using **React.js**, **Redux Toolkit**, and **Firebase Storage**.
This application allows users to upload, manage, and organize documents securely in the cloud with real-time updates and smooth UI experience.

---

## 🚀 Features

### 📤 Upload Document

* Upload files such as:

  * 📄 PDFs
  * 🖼️ Images
  * 🎓 Certificates
  * 📊 Reports
  * 📃 Resume files

* Each file stores:

  * File Name
  * File Type
  * Upload Date
  * File Size
  * Download URL

---

### 📋 View Documents

* Display files in **table/card layout**
* Includes:

  * File preview
  * File name
  * Upload date
  * Download option

---

### ✏️ Update File Details

* Rename file
* Change category
* Add description

---

### ❌ Delete Document

* Remove files from Firebase Storage
* Redux state updates instantly

---

### 📁 File Category Management *(Extension)*

Organize files into categories:

* Personal
* Academic
* Office
* Certificates

---

### 🔍 Search & Filter

Search documents by:

* File name
* File type
* Upload date

---

### 🔄 Real-Time Sync

* Instant UI updates after upload/delete
* No manual refresh required

---

## 🧠 Use Case

Perfect for:

* 🎓 Colleges
* 🏢 Offices
* 🏬 Organizations

### Example:

* Students upload certificates
* Faculty upload reports
* Admin verifies & downloads files

---

## 🛠️ Tech Stack

| Technology                    | Description        |
| ----------------------------- | ------------------ |
| ⚛️ React.js                   | Frontend UI        |
| 🧠 Redux Toolkit              | State Management   |
| 🔥 Firebase Storage           | Cloud File Storage |
| 🔄 Redux Thunk                | Async Operations   |
| 🎨 Tailwind CSS / Material UI | Styling            |
| 🚀 Vercel / Firebase Hosting  | Deployment         |

---

## 🔥 Redux Modules

* uploadFile
* fetchFiles
* deleteFile
* updateFileMetadata
* loadingState
* errorHandling

---

## 📂 Project Structure

```id="x1d2f3"
src/
├── app/
│   └── store.js
├── features/
│   └── fileSlice.js
├── components/
│   ├── UploadFile.jsx
│   ├── FileList.jsx
│   ├── FileCard.jsx
│   └── SearchFilter.jsx
├── firebase/
│   └── firebaseConfig.js
└── pages/
    └── Dashboard.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash id="c9k21l"
git clone https://github.com/your-username/digital-document-manager.git
cd digital-document-manager
```

### 2️⃣ Install Dependencies

```bash id="v82kdl"
npm install
```

---

### 3️⃣ Firebase Setup

* Go to Firebase Console
* Create a new project
* Enable **Firebase Storage**
* (Optional) Enable Realtime Database for metadata

Create file:

```id="f21sde"
src/firebase/firebaseConfig.js
```

Add your config:

```js id="k29smd"
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
```

---

### 4️⃣ Run Project

```bash id="kq92md"
npm run dev
```

---

## 🔄 Redux Flow

* **Actions** → Trigger Firebase operations
* **Thunk Middleware** → Handle async file operations
* **Reducers** → Update state
* **Store** → Central data management

---

## 🚀 Advanced Features *(Optional)*

* 📊 Upload Progress Bar
* 🖱️ Drag & Drop Upload
* 👤 User Authentication
* 🔐 Role-Based Access
* 👁️ File Preview before upload

---

## 📸 Screenshots
 <img width="1920" height="1020" alt="Screenshot 2026-03-17 000021" src="https://github.com/user-attachments/assets/3a8bab15-ba7e-48dc-a38e-cb91c440eb4d" />


---

## 🌐 Deployment

You can deploy using:

* **Vercel**
* **Firebase Hosting**

---

## 🤝 Contributing

Feel free to fork and improve this project.

---

## 📄 License

This project is open-source under the **MIT License**.

---

## 💡 Author

**Prayag Patel**

---

🔥 *If you like this project, give it a ⭐ on GitHub!*
