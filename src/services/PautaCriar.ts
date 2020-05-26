import { getCustomRepository } from 'typeorm';
import Pauta from '../models/PautaModel';
import PautaRepository from '../repositories/PautaRepository';

interface Request {
  pauta: string;
  descricao: string;
}

class PautaCriar {
  public async execute({ pauta, descricao }: Request): Promise<Pauta> {
    const pautaRepository = getCustomRepository(PautaRepository);

    const pautaConc = pautaRepository.create({
      pauta,
      descricao,
    });

    await pautaRepository.save(pautaConc);

    return pautaConc;
  }
}

export default PautaCriar;
