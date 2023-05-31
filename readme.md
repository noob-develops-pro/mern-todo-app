# TODO - APP using MERN Stack

- you need to clone this repo to be able to work with : https://github.com/noob-develops-pro/mern-todo-app.git
- project is maily devided in two part : frontend and backend

### Backend

- both needs to be run seperatly
- to run backend cd into backend and run npm install to install the node_modules
- create a .env file at root level in backend folder and make create two variables, PORT and MONGO_URI
- MONGO_URI will have your connection string to mongoDB atlas
- now its time to start the dev server : npm start is the command
- backend will run on port 5000 and the link will be : http://localhost:5000/

### API endpoints

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

## Frontend

- cd into frontend and run npm install : for node_modules
- npm start : this time the server will run on port : 3000
- visit http://localhost:3000/ to view the app
