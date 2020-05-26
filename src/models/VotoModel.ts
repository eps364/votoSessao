import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Usuario from './UsuarioModel';
import Sessao from './SessaoModel';

@Entity('votos')
class Voto extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  voto: boolean;

  @Column()
  usuarioId: number;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'usuarioId' })
  usuario: Usuario;

  @Column()
  sessaoId: number;

  @ManyToOne(() => Sessao)
  @JoinColumn({ name: 'sessaoId' })
  sessao: Sessao;
}

export default Voto;
