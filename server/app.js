const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session)
const { uri } = require("./config/databaseKey")

const pageRouter = require('./routes/page_routes');
const authRouter = require('./routes/auth_routes');
const userRouter = require('./routes/user_routes');
const deskRouter = require('./routes/desk_routes');
const bookingRouter = require('./routes/booking_routes');

// const cacheReset = require('./models/schemaCacheDelete')
// const bookingRouter = require('./routes/booking_routes');

const port = process.env.PORT || 3009;
const app = express();

// If we are not running in production, load our local .env
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// cacheReset();


// cacheReset(mongoose);

// Install middleware
app.use(session({
  // resave and saveUninitialized set to false for deprecation warnings
  secret: "Express is awesome",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1200000 // 20 minutes in milliseconds
  },
  store: new MongoStore({
      mongooseConnection: mongoose.connection
  })
}));

// --- CORS --- //
const corsOptions = {
  credentials: true
}
const whitelist = ['http://localhost:3000', 'www.flexi-desks.com']
app.use(cors({
  credentials: true,
  origin: function (origin,callback) {
      // Check each url in whitelist and see if it includes the origin (instead of matching exact string)
      const whitelistIndex = whitelist.findIndex((url) => url.includes(origin))
      console.log("found whitelistIndex", whitelistIndex)
      callback(null,whitelistIndex > -1)
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


//Set three properties to avoid deprecation warnings: useNewUrlParser: true, useUnifiedTopology: true, useFileAndModify: false, useCreateIndex: true
mongoose.connect(
  uri,
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
        console.log("Connected to database.", uri);
    }
  }
);

// app.get('/', (req, res) => {
//     console.log('GET on /');
//     console.log('Session Details', req.session)
//     res.send("Request received.");
// })

// app.use("/", pageRouter);
app.use('/auth', authRouter);
app.use("/user", userRouter);
app.use("/desk", deskRouter);
app.use("/booking", bookingRouter);


app.listen(port, () => {
    console.log(`FlexiDesk listening on port ${port}`);
});