// importing all the dependencies
const express = require("express");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const MongoStore = require("connect-mongo");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

// importing all the files from other directories
const User = require("./models/user");
const flightRoutes = require("./routes/flight");
const authRoutes = require("./routes/auth");

// NodeJS-MongoDB connection using mongoose
mongoose.set("strictQuery", false);
const dbUrl = process.env.MONGO_URI;
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", () => {
  console.log("Database Connected");
});

const app = express();

// setting up view engines
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// setting the static paths
app.use(express.static(path.join(__dirname, "public")));

// middleware for parsing bodies from URL.
app.use(express.urlencoded({ extended: true }));

// store sessions
const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 60 * 60,
});
store.on("error", function (err) {
  console.log("Session Store Error", err);
});
const sessionConfig = {
  store,
  name: "sesh",
  secret: "secret-key",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(flash());
app.use(session(sessionConfig));
app.use(mongoSanitize());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  if (req.originalUrl !== "/login") req.session.returnTo = req.originalUrl;
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.use("/", flightRoutes);
app.use("/", authRoutes);
app.all("*", (req, res, next) => {
  res.redirect("/");
});

app.use((err, req, res, next) => {
  console.log(err.message);
  req.flash("error", "Error : Something went wrong!");
  res.redirect("/");
});

// running server @ PORT 80
const port = "80";
app.listen(port, () => {
  console.log(`Server live @ PORT ${port}`);
});
