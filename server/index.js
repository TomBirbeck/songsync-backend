import express from 'express';
import cors from 'cors';
import useRouter from '../routes/routes.js';
import {auth} from 'express-oauth2-jwt-bearer';
const app = express();
const PORT = process.env.PORT || 3001;
// const PORT = 3001;

const jwtCheck = auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.URI,
    tokenSigningAlg: process.env.ALGORITHM,
  });

app.use(cors());

app.use(express.json());

app.use('/', jwtCheck, useRouter)

app.listen(PORT, async () => console.log(`app listening on port ${PORT}`));

export default app;