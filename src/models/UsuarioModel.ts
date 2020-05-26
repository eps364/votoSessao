import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  nome: string;

  @Column('varchar')
  cpf: string;
}

export default Usuario;
