<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\DoctorRepository;
use ApiPlatform\Metadata\ApiResource;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: DoctorRepository::class)]
#[ApiResource]
#[Get(normalizationContext:['groups' => ['appointment:All','doctor:speciality','patient:Name' ,'doctor:name']])]
#[Put(denormalizationContext:['groups' => ['appointment:date' , 'appointment:state']])]
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

    #[ORM\ManyToMany(targetEntity: Patient::class, mappedBy: 'doctor')]
    private Collection $patients;

    #[ORM\Column(length: 255)]
    #[Groups(['doctor:name'])]
    private ?string $firstName = null;

    #[ORM\Column(length: 255)]
    #[Groups(['doctor:name'])]
    private ?string $lastName = null;

    public function __construct()
    {
        $this->patients = new ArrayCollection();
    }  

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

    /**
     * @return Collection<int, Patient>
     */
    public function getPatients(): Collection
    {
        return $this->patients;
    }

    public function addPatient(Patient $patient): self
    {
        if (!$this->patients->contains($patient)) {
            $this->patients->add($patient);
            $patient->addDoctor($this);
        }

        return $this;
    }

    public function removePatient(Patient $patient): self
    {
        if ($this->patients->removeElement($patient)) {
            $patient->removeDoctor($this);
        }

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'firstName' => $this -> firstName,
            'lastName' => $this -> lastName,
            'speciality' => $this->speciality,
        ];
    }
}
