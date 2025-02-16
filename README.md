# 🚀 Personal Portfolio & Blog Website

This is a **Personal Portfolio & Blog Website** built with **Next.js, TypeScript, Tailwind CSS, and MongoDB**. It includes a portfolio showcase, blog management, and a fully functional dashboard for managing content.

### ✅ Live Links
- **Frontend:**  [Live](https://blogs-portfolio-zeta.vercel.app/)  
- **Backend:**  [Live](https://my-portfolio-backend-ebon.vercel.app/)

---

## 🌟 Features

### 🔹 Public Pages
✅ **Home Page (/**)  
- Portfolio introduction with name, bio, and profile picture.  
- Skill showcase.  
- Featured projects section.  
- Resume download button.  

✅ **Projects Page (/projects)**  
- Displays a list of projects with images, descriptions, and links.  
- Clicking on a project opens a detailed page (`/projects/[id]`).  

✅ **Blog Page (/blog)**  
- Lists blog posts fetched from an API or JSON file.  
- Clicking on a blog post opens the details page (`/blog/[id]`).  

✅ **Contact Page (/contact)**  
- Simple contact form (name, email, message).  
- Messages stored in a database or local storage.  

### 🔹 Dashboard (Authenticated Users Only)
✅ **Login (/dashboard)**  
- Social authentication using NextAuth.  
- Only authenticated users can access the dashboard.  

✅ **Blog Management (/dashboard/blogs)**  
- Create, read, edit, and delete blog posts.  
- Form includes title, content, image, and category.  

✅ **Project Management (/dashboard/projects)**  
- CRUD operations (Create, Read, Update, Delete) for projects.  
- Upload project image, title, live link, descriptions, etc.  

✅ **Message Management (/dashboard/messages)**  
- View messages submitted from the contact form.  

---

## 🛠️ Tech Stack

### ✅ Frontend
- **Next.js** with **TypeScript**
 - **React js**
- **Tailwind CSS** for styling  
- **Dynamic Routing** for `/projects/[id]` and `/blog/[id]`  

### ✅ Backend
- **Node.js** with **Express.js**  
- **RESTful API** to manage projects, blogs, and messages  

### ✅ Database
- **MongoDB** for storing blogs, projects, and messages  

### ✅ Authentication
- **NextAuth.js** with Google/GitHub login  
