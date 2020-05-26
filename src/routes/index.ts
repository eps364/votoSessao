import { Router } from 'express';
import pautaRouter from './pauta.routes';
import sessaoRouter from './sessao.routes';
import usuarioRouter from './usuario.routes';
import votoRouter from './voto.routes';

const routes = Router();

routes.use('/pauta', pautaRouter);
routes.use('/sessao', sessaoRouter);
routes.use('/usuario', usuarioRouter);
routes.use('/voto', votoRouter);

routes.get('/', (request, response) =>
  response.json({ linkDoProjeto: 'https://github.com/eps364/VotoSessao' }),
);

export default routes;
