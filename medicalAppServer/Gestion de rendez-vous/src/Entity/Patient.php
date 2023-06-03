<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\PatientRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PatientRepository::class)]
#[ApiResource]
//#[GetCollection(normalizationContext:['groups' => ['appointment:All','doctor:speciality','patient:Name','doctor:name','patient:All']])]
class Patient extends User
{
    #[ORM\Column(length: 255)]
 //   #[Groups(['patient:All'])]
    private ?string $phoneNumber = null;

    /**
     * @return string|null
     */
    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    /**
     * @param string|null $phoneNumber
     */
    public function setPhoneNumber(?string $phoneNumber): void
    {
        $this->phoneNumber = $phoneNumber;
    }
    #[ORM\OneToMany(mappedBy: 'Patient', targetEntity: Appointment::class, cascade: ['persist'])]
    private Collection $Appointments;

    #[ORM\ManyToMany(targetEntity: doctor::class, inversedBy: 'patients')]
    private Collection $doctor;

    public function __construct()
    {
        parent::__construct();
        $this->Appointments = new ArrayCollection();
        $this->doctor = new ArrayCollection();
    }

    /**
     * @return Collection<int, Appointment>
     */
    public function getAppointments(): Collection
    {
        return $this->Appointments;
    }

    public function addAppointment(Appointment $appointment): self
    {
        if (!$this->Appointments->contains($appointment)) {
            $this->Appointments->add($appointment);
            $appointment->setPatient($this);
        }

        return $this;
    }

    public function removeAppointment(Appointment $appointment): self
    {
        if ($this->Appointments->removeElement($appointment)) {
            // set the owning side to null (unless already changed)
            if ($appointment->getPatient() === $this) {
                $appointment->setPatient(null);
            }
        }

        return $this;
    }
    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'phoneNumber' => $this->phoneNumber,
        ];
    }

    /**
     * @return Collection<int, doctor>
     */
    public function getDoctor(): Collection
    {
        return $this->doctor;
    }

    public function addDoctor(doctor $doctor): self
    {
        if (!$this->doctor->contains($doctor)) {
            $this->doctor->add($doctor);
        }

        return $this;
    }

    public function removeDoctor(doctor $doctor): self
    {
        $this->doctor->removeElement($doctor);

        return $this;
    }


}
