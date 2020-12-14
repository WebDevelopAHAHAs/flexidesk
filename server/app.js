const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session)
const { uri } = require("./config/databaseKey")
const dbConn = uri;
const pageRouter = require('./routes/page_routes');
const authRouter = require('./routes/auth_routes');

const port = process.env.PORT || 3009;
const app = express();

// If we are not running in production, load our local .env
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//Set three properties to avoid deprecation warnings: useNewUrlParser: true, useUnifiedTopology: true, useFileAndModify: false, useCreateIndex: true
mongoose.connect(
  dbConn,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  (err) => {
    if (err) {
        console.log("ERROR: Failed to connect to database.", err);
    } else {
        console.log("Connected to database.", dbConn);
    }
  }
);

// Install middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(session({
    // resave and saveUninitialized set to false for deprecation warnings
    secret: "Express is awesome",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1200 // 20 minutes
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));

app.get('/', (req, res) => {
    console.log('GET on /');
    console.log('Session Details', req.session)
    res.send("Request received.");
})

app.use("/", pageRouter)
app.use('/auth', authRouter)

app.listen(port, () => {
    console.log(`FlexiDesk listening on port ${port}`);
});