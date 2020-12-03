# React Phonebook Test - Answers

# Backend server

Run `node server.js` to start the back end node server

I had problems starting the node server on port 6000 as mentioned in the instructions. Therefore I 
modified to `8000` and installed the `cors` package to get rid of the CORS policy issue.

The API to access the contacts is available on `http://localhost:8000/contacts?term=aa` 

# Frontend react application 

I have include the REACT_APP_API_URL in the .env file . Ideally .env files should be added in the .gitignore file. But to ease the set up I have checked in the code.

1. Clone the repo 
2. `npm i` to install the dependencies
3. `npm run start` to start the application and run on `http://localhost:3000`
4. `npm run test` to run the tests

The test packages are installed under devDependencies.
The loading image loads so quickly that it is not visible because the data is minimum.





