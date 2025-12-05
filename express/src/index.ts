import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter.js';
import './controllers/LoginController.js';
import './controllers/RootController.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['hastobeastring']}));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
