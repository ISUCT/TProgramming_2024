import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCountriesTable1750402237274 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Создаем таблицу
        await queryRunner.createTable(
            new Table({
                name: "Countries",
                columns: [
                    {
                        name: "CountryID",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "Name",
                        type: "varchar",
                        length: "20",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true
        );

        // Проверяем существование индекса через запрос к системной таблице
        const indexExists = await queryRunner.query(`
            SELECT COUNT(*) as count 
            FROM INFORMATION_SCHEMA.STATISTICS 
            WHERE TABLE_SCHEMA = DATABASE() 
            AND TABLE_NAME = 'Countries' 
            AND INDEX_NAME = 'idx_Countries_Name'
        `);

        if (indexExists[0].count === 0) {
            await queryRunner.query(`CREATE INDEX idx_Countries_Name ON Countries (Name)`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    // Сначала удаляем связанные внешние ключи
    await queryRunner.query(`ALTER TABLE hotels DROP FOREIGN KEY fk_Hotels_Countries1`);
    // Затем удаляем таблицу
    await queryRunner.dropTable("countries");
    }
}
