# Starting point for a new Nodejs Restful Api

### How to use ?

##### Clone the project and install dependencies

```
git clone https://github.com/hqro/Express-Nodemon-Babel-ES6-ES7-Restful-Api-Boilerplate My-App
cd My-App
npm install
```

##### Development mode

```
npm start
```

##### Production mode

```
npm run build
npm run start-prod
```

##### Why ?

This is a simple starter boilerplate to avoid to configure the same things each time you start a new project.

##### How it works ?

All the importants files are in the `src` folder. The Express and Mongoose configuration files are in `src/config` folder. Each time you want to add a new route to your Api, you can call your mongoose schema, callback you controller and make the logic from an helper.
Use de `.env` file to store your importants informations such as your server port, your mongo password, or maybe a oauth key...
