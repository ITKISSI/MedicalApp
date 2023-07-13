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
#[ORM\Table(name: "doctors")]
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

    #[ORM\OneToMany(mappedBy: 'Doctor', targetEntity: Appointment::class, cascade: ['persist'])]
    private Collection $Appointments ;

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
            $appointment->setDoctor($this);
        }

        return $this;
    }

    public function removeAppointment(Appointment $appointment): self
    {
        if ($this->Appointments->removeElement($appointment)) {
            // set the owning side to null (unless already changed)
            if ($appointment->getDoctor() === $this) {
                $appointment->setDoctor(null);
            }
        }

        return $this;
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
