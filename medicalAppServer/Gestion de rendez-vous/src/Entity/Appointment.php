<?php

namespace App\Entity;


use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use App\Enum\AppointmentStatus;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\AppointmentRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use DateTimeInterface;

#[ORM\Entity(repositoryClass: AppointmentRepository::class)]
#[ApiResource]
//#[GetCollection(normalizationContext:['groups' => ['appointment:All','doctor:speciality','patient:Name','doctor:name','patient:All']])]
class Appointment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
//    #[Groups(['appointment:All'])]
    private ?int $id = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
 //   #[Groups(['appointment:All' , 'appointment:date'])]
    private ?DateTimeInterface $hour = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
 //   #[Groups(['appointment:All' , 'appointment:date'])]
    private ?DateTimeInterface $date = null;


 //   #[Groups(['appointment:All' , 'appointment:state'])]
    #[ORM\Column(enumType: AppointmentStatus::class)]
    private ?AppointmentStatus $state = null;

    /**
     * @return AppointmentStatus|null
     */
    public function getState(): ?AppointmentStatus
    {
        return $this->state;
    }

    /**
     * @param AppointmentStatus|null $state
     */
    public function setState(?AppointmentStatus $state): void
    {
        $this->state = $state;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getHour(): ?DateTimeInterface
    {
        return $this->hour;
    }

    public function setHour(DateTimeInterface $hour): self
    {
        $this->hour = $hour;

        return $this;
    }

    public function getDate(): ?DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }


    #[ORM\ManyToOne(inversedBy: 'Appointments')]
    //   #[Groups(['appointment:All'])]
    private ?Doctor $Doctor= null;

    #[ORM\ManyToOne(inversedBy: 'Appointments')]
    //  #[Groups(['appointment:All'])]
    private ?Patient $Patient = null;

    public function __construct()
    {

    }

    public function getPatient(): ?Patient
    {
        return $this->Patient;
    }

    public function setPatient(?Patient $Patient): self
    {
        $this->Patient = $Patient;

        return $this;
    }

    public function getDoctor(): ?Doctor
    {
        return $this->Doctor;
    }

    public function setDoctor(?Doctor $Doctor): self
    {
        $this->Doctor = $Doctor;

        return $this;
    }


}
