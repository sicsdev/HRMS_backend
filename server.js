import express from 'express';
import mongoose from 'mongoose';
import { DATABASE_URI } from './config';
import router from './routes';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/',router);
app.use(express.urlencoded({extended: true}))

mongoose.connect(DATABASE_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => app.listen(8000, () => console.log('listen on port 8000.'))).catch((error) => console.log("error occured", error))