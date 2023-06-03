<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

class AppointmentControllerTest extends WebTestCase
{
        public function testIndex()
        {
            $client = static::createClient();
            $client->request('GET', '/appointments');
            var_dump($client->getResponse()->getContent());

            $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());
        }

        public function testShow()
        {
        $client = static::createClient();
        $client->request('GET', '/appointments/1'); // Remplacer {id} par un ID valide d'un rendez-vous existant

        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());
        }

        public function testUpdate()
        {
        $client = static::createClient();
        $client->request('PUT', '/appointments/7/reporter', [], [], [], '{"date":"2023-06-30", "hour":"10:00", "state":true}'); // Remplacer {id} par un ID valide d'un rendez-vous existant

        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());
        }

        public function testUpdateState()
        {
        $client = static::createClient();
        $client->request('PUT', '/appointments/7/stateChange', [], [], [], '{"state":true}'); // Remplacer {id} par un ID valide d'un rendez-vous existant

        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());
        }

        public function testCreate()
        {
        $client = static::createClient();
        $client->request('POST', '/confirm', [], [], [], '{"doctorId":1, "patientFirstName":"John", "patientLastName":"Doe", "email":"john.doe@example.com", "confirmEmail":"john.doe@example.com", "phoneNumber":"123456789", "address":"123 Street", "cin":"ABC123", "age":30, "date":"2023-06-30", "hour":"10:00", "state":true}'); // Remplacer les valeurs des champs avec les données appropriées

        $this->assertEquals(Response::HTTP_CREATED, $client->getResponse()->getStatusCode());
        }
}

