<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230415220759 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE patient_doctor (patient_id INT NOT NULL, doctor_id INT NOT NULL, INDEX IDX_148E1A906B899279 (patient_id), INDEX IDX_148E1A9087F4FB17 (doctor_id), PRIMARY KEY(patient_id, doctor_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE patient_doctor ADD CONSTRAINT FK_148E1A906B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE patient_doctor ADD CONSTRAINT FK_148E1A9087F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patient_doctor DROP FOREIGN KEY FK_148E1A906B899279');
        $this->addSql('ALTER TABLE patient_doctor DROP FOREIGN KEY FK_148E1A9087F4FB17');
        $this->addSql('DROP TABLE patient_doctor');
    }
}
