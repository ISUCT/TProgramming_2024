import { MigrationInterface, QueryRunner } from "typeorm";

export class Countries1750416105894 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Создание таблицы
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS \`Countries\` (
                \`CountryID\` INT NOT NULL AUTO_INCREMENT,
                \`Name\` VARCHAR(20) NOT NULL,
                PRIMARY KEY (\`CountryID\`)
            ) ENGINE=InnoDB;
        `);

        // Вставка данных
        await queryRunner.query(`
            INSERT INTO \`Countries\` (\`Name\`) VALUES
            ('United States'),
            ('Canada'),
            ('United Kingdom'),
            ('France'),
            ('Germany'),
            ('Italy'),
            ('Spain'),
            ('Japan'),
            ('Australia'),
            ('Brazil');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Удаление данных и таблицы
        await queryRunner.query(`DELETE FROM \`Countries\``);
        await queryRunner.query(`DROP TABLE IF EXISTS \`Countries\``);
    }
}