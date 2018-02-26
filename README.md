# Starting point for a new Node.js Restful Api

The project includes full featured development kit to easily kickstart a new node API.
It includes Docker/Mongo/Mariadb(Mysql) configuration files + a full Babel/Node.js ES6+ setup.

## How to use ?

#### Clone the project and install dependencies

```bash
git clone git@github.com:hqro/Node-API-Boilterplate.git demo
cd demo
yarn install
```

#### Don't forget to remove `.git` directory

```bash
rm -Rvf .git
git init
git remote add ...
```

#### Development mode

```bash
yarn start
```

#### Tests mode

```bash
yarn test
```

#### Production mode

```bash
yarn build
yarn production
```


## Full development environment with Docker

This projet can be start directly from Docker containers. You need to install `docker` and `docker-compose` to try this feature.

```bash
docker network create boilerplate
docker-compose -f stack.yml up -d
```

It will launch a Node.js, a MongoDB and a MariaDB instance with on your local machine with a persistant volume. You can check the configuration on `stack.yml` file. Don't forget to uncomment lines on `index.js`.

### Aliases

You can now import easily from the root directory using `@` symbol or with root folders names.

```js
import '@/config/express' // import './config/express'
import demoHlpr from 'helpers/demo' // import demoHlpr from '../helpers/demo'
```

##### Why ?

This is a simple starter boilerplate to avoid to configure the same things each time you start a new project.

##### How it works ?

All the important files are in the `src` folder. The Express and Mongoose configuration files are in `src/config` folder. Each time you want to add a new route to your Api, you can call your mongoose schema, callback you controller and make the logic from an helper.
Use de `.env` file to store your important informations such as your server port, your mongo password, or maybe an OAuth key...
