import express from "express";
import cors from "cors";
import session from "express-session";
import db from "./config/Database.js";
import dotenv from "dotenv";
import  SequelizeStore  from "connect-session-sequelize";
import bodyParser from "body-parser";

import UserRoute from "./routes/userRoute.js";
import AuthRoute from "./routes/AuthRoute.js"
import indicatorsRoute from "./routes/indicatorsRoute.js"
import Users from "./models/UserModel.js";
import indicators from "./models/indicatorModel.js";

console.log("hey")
dotenv.config();

const app = express();
app.use(bodyParser.json());

const sessionStore=SequelizeStore(session.Store);

const store = new sessionStore({
    db:db
});
app.use('/uploads', express.static('uploads'));

(async()=>{
    //await db.sync();
    await indicators.sequelize.sync();
    await Users.sequelize.sync();
    
})();




app.use(session({
    secret:process.env.SESS_SECRET,
    resave:false,
    saveUninitialized:"true",
    store:store,
    cookie:{
        secure:'auto'
    }
}))

app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}));

app.use(express.json());
app.use(UserRoute);
app.use(AuthRoute);
app.use(indicatorsRoute);
// store.sync();

app.listen(process.env.APP_PORT,()=>{
    console.log('Server up and runningg....');
});
