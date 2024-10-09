# PropertyList Server

This repository contains the backend server for the Property Listing application, developed for an internship project.

## Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)
- MongoDB Atlas account

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chandankumarm55/PropertyList-Server-Internship.git
```
Navigate to the server directory:

bash
Copy code
cd PropertyList-Server-Internship
Install the dependencies:

bash
Copy code
npm install
Environment Variables
Create a .env file in the root directory and add the following environment variables:

makefile
Copy code
MONGO_URI=mongodb+srv://chandan:chandan228@cluster0.spp3a.mongodb.net/
PORT=5000
FRONTEND_URL=https://property-list-client-internship.vercel.app
Running the Server
To start the server, use the following command:

bash
Copy code
npm start
The server will run on the specified PORT (default is 5000).

API Endpoints
GET /api/properties - Retrieve all properties

GET /api/properties/:id - Retrieve a property by ID

POST /api/properties - Create a new property

PUT /api/properties/:id - Update an existing property

DELETE /api/properties/:id - Delete a property

GET /api/contacts - Retrieve all interested users

POST /api/contacts - Submit user interest

Deployment
The backend is hosted on Render. The admin panel can be accessed at:

Admin URL
Client Side
The client side of the application can be accessed at:

Client URL
