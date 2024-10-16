# Job-Post project

## Overview

It is a Node.js application that provides a user registration system, allowing users to sign up with their email and phone number. The application utilizes MongoDB as the database to store user information and employs Nodemailer for email verification.

## Features

- **User Registration**: Users can sign up by providing their name, phone number, company name, and company email.
- **Email Verification**: Sends an OTP (One-Time Password) to the user's email for verification.
- **MongoDB Integration**: Utilizes MongoDB for storing user data securely.
- **Environment Configuration**: Easy management of configurations through a `.env` file.
- **Error Handling**: Includes error handling for database connections and email sending processes.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Nodemailer**: Module for sending emails from Node.js applications.

## Installation

### Prerequisites

- Node.js installed on your machine.
- MongoDB running locally or in a Docker container.

### Steps to Run the Application

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/cuvette-assignment.git
   cd cuvette-assignment
   
   Install Dependencies:

2. **Install Dependencies**:
   ```bash
   npm install

3. **Set Up MongoDB**:
    
   ```bash
   docker run --name mongo -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e         MONGO_INITDB_ROOT_PASSWORD=password123 mongo:latest
   
   
4. **Configure Environment Variables**:
    
Create a .env file in the root directory of the project and add the following configuration:
```bash
PORT=3000
MONGO_URL="mongodb://admin:password123@localhost:27017/myDatabase"
JWT_SECRET="your_jwt_secret"
EMAIL="your_email@gmail.com"
APP_PASSWORD="your_app_password"

**Replace the placeholders with your actual email credentials and details**:
    
    
    
    