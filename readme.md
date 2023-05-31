### todo-app using MERN Stack

##### project is maily devided in two part : frontend and backend

- both needs to be run seperatly
- to run backend cd into backend and run npm install to install the node_modules
- create a .env file at root level in backend folder and make create two variables, PORT and MONGO_URI
- MONGO_URI will have your connection string to mongoDB atlas
- now its time to start the dev server : npm start is the command
- backend will run on port 5000 and the link will be : http://localhost:5000/

###### API endpoints

- there are two endpoint : user and todos
- i'm useing the standerd convension for api endpoints.

  - GET http://locahost:5000/api/v1/todos
  - GET http://locahost:5000/api/v1/todos/:id
  - POST http://locahost:5000/api/v1/todos/:id
  - PATCH http://locahost:5000/api/v1/todos/:id
  - DELETE http://locahost:5000/api/v1/todos/:id

- USER enpoints for registering user and loging in
  - POST http://locahost:5000/api/v1/auth/register
  - POST http://locahost:5000/api/v1/auth/login

Todo App
Welcome to the Todo App! This application allows you to create and manage your daily tasks efficiently. It is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and provides a seamless and intuitive user experience.

Features
User Authentication: Register and login securely to access your personalized todo list.
Create Todo: Add new tasks to your list with a title and description.
Update Todo: Edit the title or description of existing tasks.
Mark as Complete: Mark tasks as complete once they are done.
Delete Todo: Remove unnecessary tasks from your list.
Filter and Sort: Filter and sort your tasks based on different criteria, such as completion status, due date, or priority.
Responsive Design: Enjoy a consistent experience across different devices and screen sizes.
Prerequisites
To run the Todo App locally, you need to have the following software installed on your system:

Node.js (version 12 or higher)
MongoDB (running locally or accessible via connection string)
Getting Started
Follow these steps to get the Todo App up and running on your machine:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/todo-app.git
Navigate to the project directory:

bash
Copy code
cd todo-app
Install the dependencies:

Copy code
npm install
Create a .env file in the project root and provide the necessary environment variables:

makefile
Copy code
PORT=3000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
Start the development server:

sql
Copy code
npm start
Open your browser and visit http://localhost:3000 to see the Todo App in action.

Folder Structure
The folder structure of the Todo App follows a standard MERN project layout:

bash
Copy code
todo-app/
├── frontend/ # Frontend code (React.js)
├── backend/ # Backend code (Express.js and Node.js)
├── models/ # Database models (Mongoose)
├── routes/ # API routes (Express.js)
├── controllers/ # Request handlers (Express.js)
└── ...

Technologies Used
Frontend: React.js, HTML5, CSS3, JavaScript
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Authentication: JSON Web Tokens (JWT)
Deployment: Heroku, Netlify
License
The Todo App is open source and released under the MIT License.

Contributions
Contributions to the Todo App are welcome! If you find any bugs or want to suggest new features, please open an issue or submit a pull request on the GitHub repository.

Contact
If you have any questions or need further assistance, feel free to reach out to the project maintainer:

Name: Your Name
Email: your-email@example.com
GitHub: your-username
Enjoy using the Todo App and stay productive!
