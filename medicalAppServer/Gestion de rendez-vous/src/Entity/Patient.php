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
#[ORM\Table(name: "patients")]
//#[GetCollection(normalizationContext:['groups' => ['appointment:All','doctor:speciality','patient:Name','doctor:name','patient:All']])]
class Patient extends User
{
    #[ORM\Column(length: 255,nullable: true)]
    protected ?string $immatricultation = null;

    /**
     * @return string|null
     */
    public function getImmatricultation(): ?string
    {
        return $this->immatricultation;
    }

    /**
     * @param string|null $immatricultation
     */
    public function setImmatricultation(?string $immatricultation): void
    {
        $this->immatricultation = $immatricultation;
    }

    #[ORM\OneToMany(mappedBy: 'Patient', targetEntity: Appointment::class, cascade: ['persist'])]
    private Collection $Appointments;

    public function __construct()
    {
        parent::__construct();
        $this->Appointments = new ArrayCollection();
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
            'firstName' => $this->firstName,
            'lastName' => $this->lastName,
            'age' => $this->age,
            'address' => $this->address,
            'cin' => $this->cin,
            'phoneNumber' => $this->phoneNumber,
        ];
    }
}
