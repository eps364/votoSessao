import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Sessao from './SessaoModel';

@Entity('pautas')
class Pauta extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  pauta: string;

  @Column()
  descricao: string;

  @OneToMany(() => Sessao, sessao => sessao.id)
  @JoinColumn({ name: 'id' })
  sessao: Sessao[];
}

export default Pauta;
