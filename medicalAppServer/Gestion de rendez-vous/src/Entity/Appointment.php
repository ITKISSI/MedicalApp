<?php

namespace App\Entity;


use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\AppointmentRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: AppointmentRepository::class)]
#[ApiResource]
#[GetCollection(normalizationContext:['groups' => ['appointment:All','doctor:speciality','patient:Name']])]
class Appointment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['appointment:All'])]
    private ?int $id = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    #[Groups(['appointment:All'])]
    private ?\DateTimeInterface $hour = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['appointment:All'])]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column]
    #[Groups(['appointment:All'])]
    private ?bool $state = null;

    #[ORM\OneToMany(mappedBy: 'Appointment', targetEntity: Doctor::class)]  
    #[Groups(['appointment:All'])]
    private Collection $Doctor;

    #[ORM\ManyToOne(inversedBy: 'Appointments')]
    #[Groups(['appointment:All'])]

    private ?Patient $Patient = null;

    public function __construct()
    {
        $this->Doctor = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getHour(): ?\DateTimeInterface
    {
        return $this->hour;
    }

    public function setHour(\DateTimeInterface $hour): self
    {
        $this->hour = $hour;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function isState(): ?bool
    {
        return $this->state;
    }

    public function setState(bool $state): self
    {
        $this->state = $state;

        return $this;
    }

    /**
     * @return Collection<int, Doctor>
     */
    public function getDoctor(): Collection
    {
        return $this->Doctor;
    }

    public function addDoctor(Doctor $doctor): self
    {
        if (!$this->Doctor->contains($doctor)) {
            $this->Doctor->add($doctor);
            $doctor->setAppointment($this);
        }

        return $this;
    }

    public function removeDoctor(Doctor $doctor): self
    {
        if ($this->Doctor->removeElement($doctor)) {
            // set the owning side to null (unless already changed)
            if ($doctor->getAppointment() === $this) {
                $doctor->setAppointment(null);
            }
        }

        return $this;
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

}