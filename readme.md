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

### what happens if you do not have MongoDB

- To establish a connection to MongoDB Atlas, heres the step by step guide:

- Visit the MongoDB Atlas website at https://www.mongodb.com/cloud/atlas and create an account if you don't have one already.

- Log in to your MongoDB Atlas account and navigate to the dashboard.

- Click on the "Create a New Cluster" button to create a new MongoDB cluster.

- Configure your cluster by selecting a cloud provider, region, and cluster tier based on your preferences and requirements. You can choose the free tier option if you want to start with a basic setup.

- Once the cluster is created and the deployment process is complete, click on the "Connect" button.

- In the "Connect to Cluster" dialog, select "Connect Your Application" as the connection method.

- Choose your driver and version from the options provided. MongoDB Atlas will generate a connection string for you to use in your Todo App.

- Copy the connection string and paste it into the .env file located in the root of backed directory.
- Replace <your-mongodb-connection-string> with the copied connection string.

- MONGODB_URI=<your-mongodb-connection-string>
- Save the changes to the .env file.

Start the development server and it will now connect to the MongoDB Atlas cluster using the provided connection string.
