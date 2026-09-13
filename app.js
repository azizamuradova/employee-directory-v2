import express from 'express';
import employeesRouter from '#routers/employees.router';

const app = express();
export default app;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello employees!');
});

app.use('/employees', employeesRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong.');
});
