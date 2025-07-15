# HIREBOTIX: A Full-Stack Job Portal Application

HIREBOTIX is a comprehensive job portal platform designed to connect job seekers with employers efficiently. It provides robust functionalities for user management, job posting, application handling, and automated notifications, all built on the MERN stack.

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
    -   [Frontend](#frontend)
    -   [Backend](#backend)
-   [Setup and Installation](#setup-and-installation)
    -   [Prerequisites](#prerequisites)
    -   [Backend Setup](#backend-setup)
    -   [Frontend Setup](#frontend-setup)
-   [Usage](#usage)

## Features

* **Role-Based Authentication & Authorization:** Secure user registration and login with distinct roles for "Job Seekers" and "Employers". Access to features is controlled based on user roles.
* **Job Posting & Management:** Employers can post detailed job descriptions, including title, type (full-time/part-time), location, company details, responsibilities, qualifications, and salary. They can also view and manage their posted jobs.
* **Job Application System:** Job Seekers can apply for jobs by providing personal information, a cover letter, and uploading their resume. Both job seekers and employers have the ability to manage (view/delete) applications, with a dual-deletion mechanism ensuring data integrity.
* **Advanced Job Search & Filtering:** Users can search for jobs by keywords and filter results by city and job niche.
* **User Profile Management:** Users can view and update their profile details, including name, email, phone, and address. Job seekers can also update their preferred job niches, cover letter, and resume. Password update functionality is also available.
* **Automated Newsletter:** A cron job sends email notifications to job seekers about new job postings that match their specified job niches.

## Technologies Used

### Frontend

* **React.js**: A JavaScript library for building user interfaces.
* **Redux Toolkit**: For efficient and predictable state management.
* **React Router DOM v6**: For client-side routing.
* **Axios**: Promise-based HTTP client for making API requests.
* **React Toastify**: For displaying interactive notifications.
* **React Icons**: A library for including popular icon packs in React projects.
* **React Spinners**: For loading indicators.
* **Vite**: A fast build tool for modern web projects.

### Backend

* **Node.js**: JavaScript runtime environment.
* **Express.js**: Web application framework for Node.js.
* **MongoDB**: NoSQL database.
* **Mongoose**: MongoDB object data modeling (ODM) for Node.js.
* **Cloudinary**: Cloud-based image and video management (used for resume storage).
* **JSON Web Tokens (JWT)**: For secure user authentication.
* **Bcrypt**: For hashing passwords.
* **Nodemailer**: For sending emails (e.g., newsletters).
* **Node-cron**: For scheduling recurring tasks (e.g., daily newsletter).
* **CORS**: Middleware for Cross-Origin Resource Sharing.
* **Express-fileupload**: Middleware for handling file uploads.

## Setup and Installation

### Prerequisites

* Node.js (v18 or higher recommended)
* MongoDB Atlas account or local MongoDB instance
* Cloudinary account
* SMTP service (e.g., Gmail, SendGrid) for sending emails

### Backend Setup

1.  **Navigate to the `backend` directory:**
    ```bash
    cd backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Create a `.env` file** in the `backend` directory and add the following environment variables:
    ```
    PORT=5000
    MONGO_URI=<Your_MongoDB_Connection_String>
    JWT_SECRET_KEY=<Your_JWT_Secret_Key>
    JWT_EXPIRE=7d # Example: 7 days
    CLOUDINARY_CLOUD_NAME=<Your_Cloudinary_Cloud_Name>
    CLOUDINARY_API_KEY=<Your_Cloudinary_API_Key>
    CLOUDINARY_API_SECRET=<Your_Cloudinary_API_Secret>
    SMTP_HOST=<Your_SMTP_Host> # e.g., smtp.gmail.com
    SMTP_PORT=<Your_SMTP_Port> # e.g., 465 or 587
    SMTP_MAIL=<Your_SMTP_Email>
    SMTP_PASSWORD=<Your_SMTP_Password>
    FRONTEND_URL=[https://hirebotix-frontend.onrender.com](https://hirebotix-frontend.onrender.com) # Or your local frontend URL
    ```
    * Refer to `backend/app.js` and `backend/database/connection.js` for `MONGO_URI` and other backend configurations.
4.  **Run the backend server:**
    ```bash
    npm run dev
    # or
    npm start
    ```
    The server will typically run on `http://localhost:5000` (or the port you specify in `.env`).

### Frontend Setup

1.  **Navigate to the `frontend` directory:**
    ```bash
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Ensure the backend is running.** The frontend is configured to communicate with `https://hirebotix.onrender.com` (as seen in `frontend/src/store/slices/*.js` files), so if you're running locally, ensure your backend is accessible at the specified URL or update the `axios` base URL in the frontend slices accordingly.
4.  **Run the frontend development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The frontend will typically run on `http://localhost:5173` (or another port as indicated by Vite).

## Usage

Once both the frontend and backend servers are running:

1.  Open your web browser and navigate to the frontend URL (e.g., `http://localhost:5173`).
2.  You can register as a "Job Seeker" or "Employer".
3.  Explore job listings, apply for jobs, or post new job openings depending on your role.

## LINK - `https://hirebotix-frontend.onrender.com/`
