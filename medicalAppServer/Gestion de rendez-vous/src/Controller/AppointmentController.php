<?php

namespace App\Controller;

use App\Entity\Appointment;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AppointmentController extends AbstractController
{
    #[Route('/appointments', name: 'appointments' ,methods: ['GET']) ]
    public function index(EntityManagerInterface $em): Response
    {
        $appointments = $em->getRepository(Appointment::class)->findAll();
        $data = [];
    
        foreach ($appointments as $appointment) {
            $appointmentData = [
                'id'        => $appointment->getId(),
                'date'      => $appointment->getDate()->format('Y-m-d'),
                'hour'      => $appointment->getHour()->format('H:i'),
                'state'     => $appointment->isState(),
                'Patient'   => $appointment->getPatient()->toArray(),
                'Doctor'    => $appointment->getDoctor()->toArray(),
                
            ];
            $data[] = $appointmentData;
        }
        return $this->json($data);
    }
    

    #[Route('/appointments/{id}', name: 'appointments_show' ,methods: ['GET']) ]
    public function showAppointment(Appointment $appointment): Response
    {
        return $this->json([
            'id'        => $appointment->getId(),
            'date'      => $appointment->getDate()->format('Y-m-d'),
            'hour'      => $appointment->getHour()->format('H:i'),
            'state'     => $appointment->isState(),
            'Patient'   => $appointment->getPatient()->toArray(),
            'Doctor'    => $appointment->getDoctor()->toArray(),
        ]);
        
    }

    #[Route('/appointments/{id}/reporter', name:'appointments_reporter', methods:["PUT"])]
    public function update(Request $request, Appointment $appointment, EntityManagerInterface $em): Response
    {
        $data = json_decode($request->getContent(), true);

        $appointment->setDate(\DateTime::createFromFormat('Y-m-d', $data['date']));
        $appointment->setHour(\DateTime::createFromFormat('H:i', $data['hour']));

        if (isset($data['state']) && $data['state'] != $appointment->isState()) {
            $appointment->setState($data['state']);
        }      
        
        $em->persist($appointment);
        $em->flush();

        return $this->json($appointment);
    }


   

    



}
