import { MigrationInterface, QueryRunner } from "typeorm";

export class Hotels1750416116430 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Создание таблицы
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS \`Hotels\` (
                \`HotelID\` INT NOT NULL AUTO_INCREMENT,
                \`Name\` VARCHAR(40) NOT NULL,
                \`Address\` VARCHAR(100) NOT NULL,
                \`Rooms\` INT NOT NULL,
                \`CountryID\` INT NULL,
                PRIMARY KEY (\`HotelID\`),
                CONSTRAINT \`fk_Hotels_Countries\`
                    FOREIGN KEY (\`CountryID\`)
                    REFERENCES \`Countries\` (\`CountryID\`)
                    ON DELETE SET NULL
                    ON UPDATE CASCADE
            ) ENGINE=InnoDB;
        `);

        // Вставка данных
        await queryRunner.query(`
            INSERT INTO \`Hotels\` (\`Name\`, \`Address\`, \`Rooms\`, \`CountryID\`) VALUES
            ('Hilton', '123 Main St, NYC', 200, 1),
            ('Marriott', '456 Elm St, Berlin', 150, 5),
            ('Radisson', '789 Maple Ave, Paris', 100, 4),
            ('Sheraton', '101 Oak St, Madrid', 180, 7),
            ('InterContinental', '202 Pine St, Tokyo', 220, 8);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Удаление данных и таблицы
        await queryRunner.query(`DELETE FROM \`Hotels\``);
        await queryRunner.query(`DROP TABLE IF EXISTS \`Hotels\``);
    }
}