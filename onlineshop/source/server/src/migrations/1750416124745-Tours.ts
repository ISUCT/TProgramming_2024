import { MigrationInterface, QueryRunner } from "typeorm";

export class Tours1750416124745 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Создание таблицы
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS \`Tours\` (
                \`TourID\` INT NOT NULL AUTO_INCREMENT,
                \`Name\` VARCHAR(50) NOT NULL,
                \`Description\` VARCHAR(200) NULL,
                \`Price\` DECIMAL(10,2) NOT NULL,
                \`Start_date\` DATE NULL,
                \`End_date\` DATE NULL,
                \`HotelID\` INT NULL,
                PRIMARY KEY (\`TourID\`),
                CONSTRAINT \`fk_Tours_Hotels\`
                    FOREIGN KEY (\`HotelID\`)
                    REFERENCES \`Hotels\` (\`HotelID\`)
                    ON DELETE SET NULL
                    ON UPDATE CASCADE
            ) ENGINE=InnoDB;
        `);

        // Вставка данных
        await queryRunner.query(`
            INSERT INTO \`Tours\` (\`Name\`, \`Description\`, \`Price\`, \`Start_date\`, \`End_date\`, \`HotelID\`) VALUES
            ('New York City Tour', 'Explore the Big Apple', 6700.00, '2025-04-01', '2025-04-05', 1),
            ('Berlin History Tour', 'Discover Berlin', 5800.00, '2025-05-10', '2025-05-15', 2),
            ('Paris Culinary Tour', 'Taste the flavors of France', 7200.00, '2025-06-20', '2025-06-25', 3),
            ('Madrid Adventure', NULL, 4800.00, '2025-07-01', '2025-07-10', 4),
            ('Tokyo Beach Resort', 'Relax on beautiful beaches', 9500.00, '2025-08-01', '2025-08-10', 5);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Удаление данных и таблицы
        await queryRunner.query(`DELETE FROM \`Tours\``);
        await queryRunner.query(`DROP TABLE IF EXISTS \`Tours\``);
    }
}