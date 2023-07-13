<?php
require_once __DIR__.'/../../vendor/autoload.php';

use Infobip\Api\SmsApi;
use Infobip\Configuration;
use Infobip\Model\SmsAdvancedTextualRequest;
use Infobip\Model\SmsDestination;
use Infobip\Model\SmsTextualMessage;

function sendConfirmationSms(): Throwable|Exception|\Infobip\Model\SmsResponse|\Infobip\Model\ApiException|null
{
    $BASE_URL = "https://3v95dn.api.infobip.com";
    $API_KEY = "039bf6306be73436e3104fa74c201698-229b9b54-3b8d-4afa-853b-7597e7300c33";
    $SENDER = "InfoSMS";
    $RECIPIENT = "212637677880";
    $MESSAGE_TEXT = "Votre rendez-vous a été confirmé avec succès.";

    $configuration = new Configuration(host: $BASE_URL, apiKey: $API_KEY);
    $sendSmsApi = new SmsApi(config: $configuration);
    $destination = new SmsDestination(to: $RECIPIENT);
    $message = new SmsTextualMessage(destinations: [$destination], from: $SENDER, text: $MESSAGE_TEXT);
    $request = new SmsAdvancedTextualRequest(messages: [$message]);

    try {
        return $sendSmsApi->sendSmsMessage($request);
    } catch (Throwable $apiException) {
        return $apiException;
    }
}