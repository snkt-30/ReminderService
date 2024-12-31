const express = require("express");
const bodyParser = require("body-parser");

const { PORT, DB_SYNC } = require('./config/serverConfig');

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {

        // if(DB_SYNC){
        //      db.sequelize.sync({ alter: true })
        // }
        console.log(`Server is started at PORT ${PORT}`);
  })
};

setupAndStartServer();
