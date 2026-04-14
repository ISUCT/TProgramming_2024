import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from "typeorm";

export class CreateHotelsTable1750402314321 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Hotels",
                columns: [
                    {
                        name: "HotelID",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "Name",
                        type: "varchar",
                        length: "40",
                        isNullable: false,
                    },
                    {
                        name: "Address",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "Rooms",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "Countries_CountryID",
                        type: "int",
                        isNullable: true,
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

        // Создание внешнего ключа
        const fkName = "FK_Hotels_Countries";
        await queryRunner.createForeignKey(
            "Hotels",
            new TableForeignKey({
                name: fkName,
                columnNames: ["Countries_CountryID"],
                referencedColumnNames: ["CountryID"],
                referencedTableName: "Countries",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
            })
        );

        // Создание индексов
        await queryRunner.createIndex(
            "Hotels",
            new TableIndex({
                name: "idx_Hotels_HotelID_CountryID",
                columnNames: ["HotelID", "Countries_CountryID"],
                isUnique: true,
            })
        );

        await queryRunner.createIndex(
            "Hotels",
            new TableIndex({
                name: "idx_Hotels_Name",
                columnNames: ["Name"],
                isUnique: false,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Проверка существования таблицы
        const tableExists = await queryRunner.hasTable("Hotels");
        if (!tableExists) return;

        // 1. Удаление всех зависимых внешних ключей из других таблиц
        try {
            const tourFkExists = await queryRunner.query(`
                SELECT COUNT(*) as count 
                FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS 
                WHERE CONSTRAINT_TYPE = 'FOREIGN KEY' 
                AND TABLE_SCHEMA = DATABASE() 
                AND CONSTRAINT_NAME = 'FK_Tours_Hotels'
            `);
            
            if (tourFkExists[0].count > 0) {
                await queryRunner.query(`ALTER TABLE Tours DROP FOREIGN KEY FK_Tours_Hotels`);
            }
        } catch (e) {
            console.log("Error checking/removing FK_Tours_Hotels:", e.message);
        }

        // 2. Удаление внешнего ключа текущей таблицы
        const fkName = "FK_Hotels_Countries";
        const fkExists = await queryRunner.query(`
            SELECT COUNT(*) as count 
            FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS 
            WHERE CONSTRAINT_TYPE = 'FOREIGN KEY' 
            AND TABLE_SCHEMA = DATABASE() 
            AND TABLE_NAME = 'Hotels'
            AND CONSTRAINT_NAME = '${fkName}'
        `);
        
        if (fkExists[0].count > 0) {
            await queryRunner.query(`ALTER TABLE Hotels DROP FOREIGN KEY ${fkName}`);
        }

        // 3. Удаление индексов (только если они не используются в FK)
        const indexNames = ["idx_Hotels_Name"]; // Убираем составной индекс, так как он используется во внешнем ключе
        
        for (const indexName of indexNames) {
            try {
                const indexExists = await queryRunner.query(`
                    SELECT COUNT(*) as count 
                    FROM INFORMATION_SCHEMA.STATISTICS 
                    WHERE TABLE_SCHEMA = DATABASE() 
                    AND TABLE_NAME = 'Hotels' 
                    AND INDEX_NAME = '${indexName}'
                `);
                
                if (indexExists[0].count > 0) {
                    await queryRunner.query(`DROP INDEX ${indexName} ON Hotels`);
                }
            } catch (e) {
                console.log(`Error dropping index ${indexName}:`, e.message);
            }
        }

        // 4. Удаление таблицы
        await queryRunner.dropTable("Hotels");
    }
}
