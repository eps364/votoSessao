import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateVoto1589751117576 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'votos',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'sessaoId',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'voto',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'usuarioId',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.dropForeignKey('pk_voto_usuario', 'voto');
    await queryRunner.dropTable('votos');
  }
}
