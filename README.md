# Starting point for a new Node.js Restful Api

### How to use ?

##### Clone the project and install dependencies

```
git clone git@github.com:hqro/Express-Backpack-Babel-ES7-Api-Boilerplate.git App
cd App
yarn
```

##### Development mode

```
yarn start
```

##### Production mode

```
yarn build
yarn production
```

##### Why ?

This is a simple starter boilerplate to avoid to configure the same things each time you start a new project.

##### How it works ?

All the important files are in the `src` folder. The Express and Mongoose configuration files are in `src/config` folder. Each time you want to add a new route to your Api, you can call your mongoose schema, callback you controller and make the logic from an helper.
Use de `.env` file to store your important informations such as your server port, your mongo password, or maybe an OAuth key...
