import express from 'express';
import cors from 'cors';
import useRouter from '../routes/routes.js';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

app.use('/', useRouter)

app.listen(PORT, async () => console.log(`app listening on port ${PORT}`));

export default app;