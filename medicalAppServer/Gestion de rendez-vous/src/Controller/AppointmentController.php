<?php

namespace App\Controller;

use App\Entity\Appointment;
use App\Entity\Doctor;
use App\Entity\Patient;
use App\Entity\Role;
use App\Entity\VonageService;
use App\Enum\AppointmentStatus;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Psr\Http\Client\ClientExceptionInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AppointmentController extends AbstractController
{
    #[Route('/appointments', name: 'appointments', methods: ['GET'])]
    public function index(EntityManagerInterface $em): Response
    {
        $appointments = $em->createQueryBuilder()
            ->select('a.id as appointmentId, a.date, a.hour, a.state, p.phoneNumber, p.id as patientId, u.firstName as patientFirstName, u.lastName as patientLastName, u.age as patientAge, u.address as patientAddress, u.email as patientEmail, u.cin as patientCin, u.login as patientLogin, u.password as patientPassword, d.id as doctorId, d.speciality,d.inp, ud.firstName as doctorFirstName, ud.lastName as doctorLastName, ud.age as doctorAge, ud.address as doctorAddress, ud.email as doctorEmail, ud.cin as doctorCin, ud.login as doctorLogin, ud.password as doctorPassword')
            ->from(Appointment::class, 'a')
            ->join('a.Patient', 'p')
            ->join(Patient::class, 'u', 'WITH', 'p.id = u.id')
            ->join('a.Doctor', 'd')
            ->join(Doctor::class, 'ud', 'WITH', 'd.id = ud.id')
            ->getQuery()
            ->getResult();

        $data = [];

        foreach ($appointments as $appointment) {
            $appointmentData = [
                'id' => $appointment['appointmentId'],
                'date' => $appointment['date']->format('Y-m-d'),
                'hour' => $appointment['hour']->format('H:i'),
                'state' => $appointment['state'],
                'patient' => [
                    'id' => $appointment['patientId'],
                    'phoneNumber' => $appointment['phoneNumber'],
                    'firstName' => $appointment['patientFirstName'],
                    'lastName' => $appointment['patientLastName'],
                    'age' => $appointment['patientAge'],
                    'address' => $appointment['patientAddress'],
                    'email' => $appointment['patientEmail'],
                    'cin' => $appointment['patientCin'],
                    'login' => $appointment['patientLogin'],
                    'password' => $appointment['patientPassword'],
                ],
                'doctor' => [
                    'id' => $appointment['doctorId'],
                    'speciality' => $appointment['speciality'],
                    'inp' => $appointment['inp'],
                    'firstName' => $appointment['doctorFirstName'],
                    'lastName' => $appointment['doctorLastName'],
                    'age' => $appointment['doctorAge'],
                    'address' => $appointment['doctorAddress'],
                    'email' => $appointment['doctorEmail'],
                    'cin' => $appointment['doctorCin'],
                    'login' => $appointment['doctorLogin'],
                    'password' => $appointment['doctorPassword'],
                ],
            ];
            $data[] = $appointmentData;
        }
        return $this->json($data);

    }

//    #[Route('/appointments/{id}', name: 'appointments_show', methods: ['GET'])]
//    public function show(EntityManagerInterface $em, int $id): Response
//    {
//        $appointment = $em->getRepository(Appointment::class)->find($id);
//
//        if (!$appointment) {
//            throw $this->createNotFoundException('Appointment not found');
//        }
//
//        $patientData = null;
//        if ($appointment->getPatient()) {
//            $patientData = [
//                'id' => $appointment->getPatient()->getId(),
//                'phoneNumber' => $appointment->getPatient()->getPhoneNumber(),
//                'firstName' => $appointment->getPatient()->getFirstName(),
//                'lastName' => $appointment->getPatient()->getLastName(),
//            ];
//        }
//
//        $doctorData = [];
//        foreach ($appointment->getDoctor() as $doctor) {
//            $doctorData[] = [
//                'id' => $doctor->getId(),
//                'speciality' => $doctor->getSpeciality(),
//                'inp' => $doctor->getInp(),
//                'firstName' => $doctor->getFirstName(),
//                'lastName' => $doctor->getLastName(),
//            ];
//        }
//
//        $appointmentData = [
//            'id' => $appointment->getId(),
//            'date' => $appointment->getDate()->format('Y-m-d'),
//            'hour' => $appointment->getHour()->format('H:i'),
//            'state' => $appointment->isState(),
//            'patient' => $patientData,
//            'doctors' => $doctorData, // Changer la clé 'doctor' en 'doctors'
//        ];
//
//        return $this->json($appointmentData);
//    }
    #[Route('/appointments/{id}', name: 'appointment_show', methods: ['GET'])]
    public function show(Appointment $appointment): Response
    {
        // Vous pouvez ajouter ici des vérifications ou des autorisations avant d'afficher le rendez-vous

        return $this->json($appointment);
    }

    #[Route('/appointments/{id}/reporter', name: 'appointments_reporter', methods: ["PUT"])]
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


    #[Route('/appointments/{id}/stateChange', name: 'appointments_state_change', methods: ["PUT"])]
    public function updateState(Request $request, Appointment $appointment, EntityManagerInterface $em): Response
    {
        $data = json_decode($request->getContent(), true);

        if (!isset($data['state'])) {
            return $this->json(['message' => 'Le nouvel état doit être spécifié.'], Response::HTTP_BAD_REQUEST);
        }

        $newState = $data['state'];

        // Vérifier si le nouvel état est une valeur valide pour l'enum AppointmentStatus
        $validStates = [
            AppointmentStatus::In_PROGRESS,
            AppointmentStatus::CONFIRMED,
            AppointmentStatus::DONE,
            AppointmentStatus::CANCELED,
        ];

//        if (!in_array($newState, $validStates)) {
//            return $this->json(['message' => 'Le nouvel état spécifié n\'est pas valide.'], Response::HTTP_BAD_REQUEST);
//        }

       // $appointment->setState($newState);

        $appointment->setState(AppointmentStatus::from($newState));

        $em->persist($appointment);
        $em->flush();

        return $this->json($appointment);
    }
    /**
     * @throws Exception
     */
    #[Route('/confirm', name: 'booking_confirm', methods: ["POST"])]
    public function create(Request $request ,EntityManagerInterface $em): Response
    {
        $data = json_decode($request->getContent(), true);

        // Récupérer les données envoyées depuis le frontend
        $doctorId = $data['doctorId'];
        $patientFirstName = $data['patientFirstName'];
        $patientLastName = $data['patientLastName'];
        $email = $data['email'];
        $confirmEmail = $data['confirmEmail'];
        $phoneNumber = $data['phoneNumber'];
        $address = $data['address'];
        $cin = $data['cin'];
        $age = $data['age'];
        $date = new \DateTime($data['date']);
        $hour = new \DateTime($data['hour']);
        $state = AppointmentStatus::In_PROGRESS;


        $doctor = $em->getRepository(Doctor::class)->find($doctorId);

        // Récupérer le rôle correspondant à "user"
        $userRole = $em->getRepository(Role::class)->findOneBy(['authority' => 'user']);

        // Créer un nouveau patient
        $patient = new Patient();
        $patient->setFirstName($patientFirstName);
        $patient->setLastName($patientLastName);
        $patient->setEmail($email);
        $patient->setPhoneNumber($phoneNumber);
        $patient->setAddress($address);
        $patient->setCIN($cin);
        $patient->setAge($age);
        $patient->setLogin($email);
        $patient->setPassword(random_int(100000,10000000000));
        $patient->setRole($userRole); // Définir le rôle de l'utilisateur à "user"

        // Créer un nouvel Appointment
        $appointment = new Appointment();
        $appointment->setDoctor($doctor);
        $appointment->setPatient($patient);
        $appointment->setDate($date);
        $appointment->setHour($hour);
        $appointment->setState($state);

        $em->persist($patient);
        $em->persist($appointment);
        $em->flush();

        // Retourner une réponse JSON
        return new Response('Le rendez-vous a été créé avec succès.', Response::HTTP_CREATED);
    }



}