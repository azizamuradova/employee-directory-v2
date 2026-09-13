import { Router } from 'express';
import {
  createEmployee,
  getEmployee,
  getEmployees,
  getRandomEmployee,
} from '#db/employees';

const employeesRouter = Router();
export default employeesRouter;

employeesRouter.get('/', (req, res) => {
  const employees = getEmployees();
  res.send(employees);
});

employeesRouter.get('/random', (req, res) => {
  const employee = getRandomEmployee();
  res.send(employee);
});

employeesRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const employee = getEmployee(+id);

  if (!employee) {
    return res.status(404).send(`Employee #${id} not found.`);
  }
  res.send(employee);
});

employeesRouter.post('/', (req, res) => {
  const { name } = req.body || {};

  if (!name) {
    return res.status(400).send('Name is required.');
  }
  const employee = createEmployee(name);
  res.status(201).send(employee);
});
