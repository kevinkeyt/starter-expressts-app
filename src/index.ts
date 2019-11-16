import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cookieParser from 'cookie-parser';

import { Request, Response } from 'express';
const app = express();
dotenv.config();

app.use(cookieParser());

const {
  PORT = 3000,
} = process.env;
app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world',
  });
});
app.listen(PORT, () => {
  console.log('server started at http://localhost:'+PORT);
  console.log(process.env.NODE_ENV);
});