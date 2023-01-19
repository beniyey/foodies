![an image or foodies website](https://github.com/beniyey/foodies/blob/main/readme-assets/foodis-mockup-white.jpg?raw=true)

Link to the website - https://foodies-web-ben.herokuapp.com/ 

Foodies is a young and vibrant food market, that allows users to make orders of food
and save a profile on the platform, built using modern standard frontend and backend, foodies
is an all round project made to highlight the accecibility of modern tools.

# Features
- performs user validations
- has user side and admin side
- admin can make changes to products and add new ones
- updates changes for users in real time - using socket.io
- pagination 
- Demo user for a safe guest use

# Technologies used
- Angular - used for user interfaces and frontend developement.
- node.js - used to develop the backend.
- mongoDb - used as the main database.

# Npm packages used
- Jwt - used for user validation via tokens.
- socket.io - used for reactive user experience and instant updates.
- ngrx - used for state management throughout the app.

# Ui preview
Foodies login page 

![an image or foodies login page](https://github.com/beniyey/foodies/blob/main/readme-assets/login.jpg?raw=true)

Foodies Product page
![an image or foodies products main page](https://github.com/beniyey/foodies/blob/main/readme-assets/products.jpg?raw=true)

Foodies order page
![an image or foodies order page](https://github.com/beniyey/foodies/blob/main/readme-assets/order.jpg?raw=true)

# How to run it locally
1. download or clone the repository to your local machine and make sure to populate your mongo server with provided documents or your own:
```bash
$ git clone https://github.com/beniyey/foodies.git
```

2. Run `npm install` inside every folder separatelly first backend then frontend:
```bash
$ cd backend
$ npm install

$ cd ..
$ cd frontend
$ npm install
```

3. Start the dev server by opening two separate terminals for backend and frontend and running the command below on each of them . Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
```bash
$ npm start
```

# Support
Run into issues or bugs? Report them and we'll look into them.

# Pull requests
all pull requests are welcome if you have an improvement idea please tell us about it.

