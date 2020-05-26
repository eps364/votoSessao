import { getCustomRepository } from 'typeorm';
import SessaoRepository from '../repositories/SessaoRepository';
import VotoRepository from '../repositories/VotoRepository';

class ContabilizarVotosPorPauta {
  public async execute({ pautaId }: any): Promise<any> {
    // const sessaoRepository = getCustomRepository(SessaoRepository);
    // const sessao = await sessaoRepository.findOne({
    //   where: { pautaId },
    // });
    // if (!sessao) throw new Error('Votação nesta Pauta não encontrada!');

    // const votoRepository = getCustomRepository(VotoRepository);

    // const Sim = await votoRepository.count({
    //   where: {
    //     sessaoId: sessao.id,
    //     voto: true,
    //   },
    // });
    // const Nao = await votoRepository.count({
    //   where: {
    //     sessaoId: sessao.id,
    //     voto: false,
    //   },
    // });

    // return { pauta: sessao.pautaId, sessao: sessao.id, Sim, Nao };
    return { message: pautaId };
  }
}

export default ContabilizarVotosPorPauta;
