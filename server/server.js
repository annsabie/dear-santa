const express = require("express");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const MongoDbStore = require("connect-mongodb-session")(session);
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000",
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
}));

const store = new MongoDbStore({
  uri: process.env.MONGO_URL,
  collection: "mySessions",
});

const sess = {
  secret: process.env.SESSION_KEY || "Super secret secret",
  cookie: {
    maxAge: 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: false,
  store,
};

app.use(session(sess));

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

// Use only if the main html isn't loading in production
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
