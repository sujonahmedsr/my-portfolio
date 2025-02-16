import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import globalErrorHandler from './app/middlewares/globalErrorHandling';
import router from './app/routes/routes';
const app = express();


// Middlewares
app.use(cors({origin: [`http://localhost:3000`, `https://blogs-portfolio-zeta.vercel.app`], credentials: true}));
app.use(cookieParser());
app.use(express.json());


// api end points 
app.use('/api', router)



app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

// global error handler 
app.use(globalErrorHandler)

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: 'Route not found'
  })
})

export default app