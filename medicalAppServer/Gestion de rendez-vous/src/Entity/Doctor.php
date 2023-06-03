<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\DoctorRepository;
use ApiPlatform\Metadata\ApiResource;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: DoctorRepository::class)]
#[ApiResource]
class Doctor extends User
{

    #[ORM\Column]
    private ?int $inp = null;

    /**
     * @return int|null
     */
    public function getInp(): ?int
    {
        return $this->inp;
    }

    /**
     * @param int|null $inp
     */
    public function setInp(?int $inp): void
    {
        $this->inp = $inp;
    }

    #[ORM\Column(length: 255)]
    //#[Groups(['doctor:speciality'])]
    private ?string $speciality = null;

    #[ORM\ManyToOne(cascade: ['persist'], inversedBy: 'Doctor')]
    private ?Appointment $Appointment = null;

    #[ORM\ManyToMany(targetEntity: Patient::class, mappedBy: 'doctor')]
    private Collection $patients;

    public function __construct()
    {
        parent::__construct();
        $this->patients = new ArrayCollection();
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


    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'speciality' => $this->speciality,
        ];
    }




}
