# Survey Application
![Survey App](./product-screenshot.png?raw=true)
This is a survey application built using HTML, CSS, JavaScript, Node.js, Express, and MongoDB. The application allows two types of users: fillers and makers. Fillers can fill in forms created by makers, while makers can create new surveys for others to fill.

## Project Status [✏️]

This project is currently **in progress**. Some features may be incomplete or under development.

## Features

- [X] **User Authentication**: Users can sign up and log in as fillers or makers.
- [ ] **Survey Creation**: Makers can create surveys with custom questions and options.
- [ ] **Survey Filling**: Fillers can access surveys created by makers and fill them out.
- [X] **Dashboard Interface**: Both fillers and makers have their own dashboard interfaces for managing surveys and responses.
- [ ] **Responsive Design**: The application is responsive and can be accessed from various devices.

## Technologies Used

- **Frontend**:
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />

- **Backend**:
  <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" />

- **Database**:
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />


## Setup Instructions

1. Clone the repository to your local machine.
2. Install Node.js and MongoDB if you haven't already.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the necessary dependencies.
   
   ```sh
   npm install
   ```
   
6. Configure your MongoDB connection in the `.env` file.
7. Run `npm run start` to start the server or alternatively use `npm run watch` to start the server using nodemon for automatic reloading.
   ```sh
   npm run start
   ```
   ```sh
   npm run watch
   ```
9. Access the application in your web browser at `http://localhost:3000`.

## Usage

- Register as a new user and choose whether you want to be a filler or a maker.
- Log in with your credentials.
- Makers can create new surveys, while fillers can fill out existing surveys.
- Dashboard interfaces provide access to surveys and responses.
- Log out when done.

## License

This project is licensed under the [MIT License](LICENSE).
