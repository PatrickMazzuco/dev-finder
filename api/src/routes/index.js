import { Router } from 'express';
import devRouter from './dev';
import searchRouter from './search';

const router = Router();

router.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  return next();
});

router.get('/', (req, res) => res.send('API Running'));

export default app => {
  app.use(router);
  app.use(devRouter);
  app.use(searchRouter);
};
