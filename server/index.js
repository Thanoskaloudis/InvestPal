import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import investmentRoutes from "./routes/investment.js";
import generalRoutes from "./routes/general.js";
import reportsRoutes from "./routes/reports.js";

import User from "./models/user.js";
import { dataUser } from "./data/index.js";

/* CONFIG */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/investment", investmentRoutes);
app.use("/general", generalRoutes);
app.use("/reports", reportsRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5002;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* Add user data once */
    //User.insertMany(dataUser);
  }).catch((error) => console.log(`${error} did not connect`));