## Sample Express Js Project Template

### Flow Diagram
![Flow](https://github.com/redolf250/express-template/blob/main/template.png)

### Express Template Project
This repository contains an Express template for building Node.js applications. This guide will help you set up, run, and manage the application in different environments: development, production, and testing.

Prerequisites
- Node.js (version 12.x or higher)
- npm (version 6.x or higher)

`git clone https://github.com/redolf250/express-template.git`
`cd express-template`

#### Install Dependencies
`npm install`

#### To run the application in development mode:
`npm run dev`
In development mode, the application will use nodemon to automatically restart the server when file changes are detected. This is useful for active development.

### Production
To run the application in production mode:

`npm run prod`
In production mode, the application will run using node with environment variables set for production. Ensure that all necessary configurations and environment variables are properly set up before running in this mode.

### Testing
To run the application in a test environment:
`npm run testing`
This will run the application with configurations set for testing. This mode is typically used to run automated tests and should be configured to use a test database or mock services.

### Scripts
The following npm scripts are available:

`npm start: Alias for npm run prod. Runs the application in production mode.`
`npm run dev: Runs the application in development mode using nodemon.`
`npm run prod: Runs the application in production mode using node.`
`npm run testing: Runs the application in a test environment.`

#### Configuration
Configuration for different environments can be managed using environment variables. You can create .env files for each environment (.env.development, .env.production, .env.testing) and load them using a package like dotenv.

