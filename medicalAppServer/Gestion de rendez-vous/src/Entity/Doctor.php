<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\DoctorRepository;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: DoctorRepository::class)]
#[ApiResource]
class Doctor
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['doctor:speciality'])]
    private ?string $speciality = null;

    #[ORM\ManyToOne(inversedBy: 'Doctor')]
    private ?Appointment $Appointment = null;  

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSpeciality(): ?string
    {
        return $this->speciality;
    }

    public function setSpeciality(string $speciality): self
    {
        $this->speciality = $speciality;

        return $this;
    }

    public function getAppointment(): ?Appointment
    {
        return $this->Appointment;
    }

    public function setAppointment(?Appointment $Appointment): self
    {
        $this->Appointment = $Appointment;

        return $this;
    }

   
}
