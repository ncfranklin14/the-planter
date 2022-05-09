const express = require("express");
const exphbs = require("express-handlebars");
// const allRoutes = require("./controllers");
const session = require("express-session");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
require('dotenv').config();
const cloudinary = require('cloudinary');
const app = express();
const PORT = process.env.PORT || 3000;

// const { add models } = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sess = {
    secret: "Super secret secret",
    cookie: {
      maxAge: 2 * 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  app.use(session(sess));
  // Static directory
  app.use(express.static('public'));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// app.use("/", allRoutes);
console.log(process.env.CLOUD);
cloudinary.config({ 
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET
});

sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});