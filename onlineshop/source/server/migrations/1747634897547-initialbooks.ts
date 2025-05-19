import { MigrationInterface, QueryRunner } from "typeorm";

export class Initialbooks1747634897547 implements MigrationInterface {
    name = 'Initialbooks1747634897547'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_233978864a48c44d3fcafe0157"`);
        await queryRunner.query(`ALTER TABLE "book" DROP CONSTRAINT "PK_b66091a3d2edddc14f6b91fc606"`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "book_id"`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "publication_year"`);
        await queryRunner.query(`ALTER TABLE "book" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "book" ADD CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "book" ADD "title" character varying(40) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "book" ADD CONSTRAINT "UQ_c10a44a29ef231062f22b1b7ac5" UNIQUE ("title")`);
        await queryRunner.query(`ALTER TABLE "book" ADD "publicationYear" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "book" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "book" ADD "description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "publicationYear"`);
        await queryRunner.query(`ALTER TABLE "book" DROP CONSTRAINT "UQ_c10a44a29ef231062f22b1b7ac5"`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "book" DROP CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4"`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "book" ADD "publication_year" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "book" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "book" ADD "book_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "book" ADD CONSTRAINT "PK_b66091a3d2edddc14f6b91fc606" PRIMARY KEY ("book_id")`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_233978864a48c44d3fcafe0157" ON "book" ("name") `);
    }

}
