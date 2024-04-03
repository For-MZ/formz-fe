import { createMiddleware } from '@mswjs/http-middleware';
import express from 'express';
import cors from 'cors';
import { handlers } from './handlers';

const app = express();
const port = 9000; // 서버 포트 번호

app.use(
  cors({
    origin: 'http://localhost:3000', // 클라이언트 포트 번호
    optionsSuccessStatus: 200,
    credentials: true,
  }),
);
app.use(express.json());
app.use(createMiddleware(...handlers));
app.listen(port, () => console.log(`모킹 서버 is running on port: ${port}`));
