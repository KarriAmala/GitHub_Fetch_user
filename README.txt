 GitHub User Information Fetcher with SQLite Storage

 Project Overview

This project is a Node.js and Express-based web application that allows users to:

1. Enter a GitHub username through a web interface.
2. Fetch user information from the GitHub REST API.
3. Store selected user details in a SQLite database.
4. Retrieve previously stored user information using REST APIs.

The application demonstrates:

* Frontend to Backend communication
* REST API consumption
* SQLite database integration
* Data persistence
* Express.js routing

Technologies Used

* Node.js
* Express.js
* Axios
* SQLite3
* HTML/CSS/JavaScript

Project Structure

github_user_app/

├── server.js
├── database.js
├── github_users.db
├── package.json
└── public/
└── index.html

 Database Schema

Table Name: github_users

Columns:

1. id

   * Type: INTEGER
   * Primary Key
   * Auto Increment

2. username

   * Type: TEXT
   * Unique

3. followers

   * Type: INTEGER

4. following

   * Type: INTEGER

5. public_repos

   * Type: INTEGER

6. location

   * Type: TEXT

7. fetched_at

   * Type: DATETIME
   * Automatically stores record creation timestamp

Stored User Information

The following GitHub user details are stored:

* Username
* Followers Count
* Following Count
* Public Repository Count
* Location
* Fetch Timestamp

Installation

1. Clone or download the project.

2. Open terminal in project folder.

3. Install dependencies:

  npm install Or install manually:

npm install express
npm install axios
npm install sqlite3

## Running the Application

Start the server:

node server.js

Server will run on:

http://localhost:3000

## API Endpoints

1. Fetch GitHub User and Store in Database

Method:
GET

Endpoint:
/api/github/:username

Description:
Fetches user information from GitHub API and stores it in SQLite database.

Example:

http://localhost:3000/api/github/octocat

Sample Response:

{
"login": "octocat",
"followers": 100,
"following": 5,
"public_repos": 10,
"location": "San Francisco"
}

---

2. Get All Stored Users

Method:
GET

Endpoint:
/api/users

Description:
Returns all users stored in the SQLite database.

Example:

http://localhost:3000/api/users


Sample Response:

[
{
"id": 1,
"username": "octocat",
"followers": 100,
"following": 5,
"public_repos": 10,
"location": "San Francisco",
"fetched_at": "2026-06-07 10:00:00"
}
]

---

3. Get User Information by Username

Method:
GET

Endpoint:
/api/users/:username


example: http://localhost:3000/api/users/KarriAmala

Description:
Retrieves a specific user from the SQLite database using username.

Example:

http://localhost:3000/api/users/octocat

Sample Response:

{
"id": 1,
"username": "octocat",
"followers": 100,
"following": 5,
"public_repos": 10,
"location": "San Francisco",
"fetched_at": "2026-06-07 10:00:00"
}

Error Handling

User Not Found in GitHub:

{
"message": "User not found"
}

User Not Found in Database:

{
"message": "User not found in database"
}

Future Enhancements

* Add user deletion API
* Add user update API
* Add pagination for user listing
* Add search functionality
* Add authentication
* Add Docker support
* Deploy to AWS or Azure
* Add GitHub repository details storage
* Create dashboard for analytics

## Author

Project: GitHub User Information Fetcher
Backend: Node.js + Express.js
Database: SQLite3
API Source: GitHub REST API
