<?php

namespace App\Enum;

enum AppointmentStatus:string
{
   case In_PROGRESS = "In_PROGRESS";
   case CONFIRMED= "CONFIRMED";
   case DONE= "DONE";
   case CANCELED = "CANCELED";

}
