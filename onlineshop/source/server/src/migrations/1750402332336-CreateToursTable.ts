import { 
    MigrationInterface, 
    QueryRunner, 
    Table, 
    TableForeignKey,
    TableIndex 
} from "typeorm";

export class CreateToursTable1750402332336 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Tours",
                columns: [
                    {
                        name: "TourID",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "Name",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                    },
                    {
                        name: "Description",
                        type: "varchar",
                        length: "200",
                        isNullable: true,
                    },
                    {
                        name: "Price",
                        type: "decimal",
                        precision: 10,
                        scale: 2,
                        isNullable: false,
                    },
                    {
                        name: "Start_date",
                        type: "date",
                        isNullable: true,
                    },
                    {
                        name: "End_date",
                        type: "date",
                        isNullable: true,
                    },
                    {
                        name: "Hotels_HotelID",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "Hotels_Countries_CountryID",
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

        // Альтернативный способ проверки индекса
        const table = await queryRunner.getTable("Tours");
        if (!table.indices.some(idx => idx.name === "idx_Tours_Name")) {
            await queryRunner.createIndex(
                "Tours",
                new TableIndex({
                    name: "idx_Tours_Name",
                    columnNames: ["Name"],
                })
            );
        }

        await queryRunner.createForeignKey(
            "Tours",
            new TableForeignKey({
                columnNames: ["Hotels_HotelID", "Hotels_Countries_CountryID"],
                referencedColumnNames: ["HotelID", "Countries_CountryID"],
                referencedTableName: "Hotels",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
                name: "FK_Tours_Hotels",
            })
        );

        await queryRunner.query(`
            DROP TRIGGER IF EXISTS check_tour_dates;
            CREATE TRIGGER check_tour_dates
            BEFORE INSERT ON Tours
            FOR EACH ROW
            BEGIN
                IF NEW.Start_date IS NOT NULL AND NEW.End_date IS NOT NULL THEN
                    IF NEW.End_date < NEW.Start_date THEN
                        SIGNAL SQLSTATE '45000'
                        SET MESSAGE_TEXT = 'Ошибка: Дата окончания тура должна быть больше или равна дате начала тура.';
                    END IF;
                END IF;
            END;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TRIGGER IF EXISTS check_tour_dates`);
        
        const table = await queryRunner.getTable("Tours");
        if (table) {
            // Удаление индекса
            if (table.indices.some(idx => idx.name === "idx_Tours_Name")) {
                await queryRunner.dropIndex("Tours", "idx_Tours_Name");
            }
            
            // Удаление foreign key
            const foreignKey = table.foreignKeys.find(
                fk => fk.columnNames.includes("Hotels_HotelID")
            );
            if (foreignKey) {
                await queryRunner.dropForeignKey("Tours", foreignKey);
            }
        }

        await queryRunner.dropTable("Tours");
    }
}
