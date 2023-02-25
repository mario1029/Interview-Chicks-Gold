import express from 'express';
import cors from 'cors'
import morgan from 'morgan'
import {router} from './src/routes/index'
import config from './src/config/config';
import path from 'path'
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', config.PORT);

app.use("/water",router)
export default app;