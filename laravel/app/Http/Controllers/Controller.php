<?php

namespace App\Http\Controllers;

use App\Models\VeepContent;
use GuzzleHttp\Client;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    static public function getVeepContentNoConnect()
    {
        $client = new Client();
        $apiUrl = 'https://demo.veep.ai/?rest_route=/veepdotai_rest/v1/contents/&JWT=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDE5ODQ5MTUsImlzcyI6Imh0dHBzOlwvXC9kZW1vLnZlZXAuYWkiLCJleHAiOjE3MDI1ODk3MTUsImRhdGEiOnsidXNlciI6eyJlbWFpbCI6InJvYmluLmFsb256bzAzQGdtYWlsLmNvbSIsImlkIjoxMDgsInVzZXJuYW1lIjoicm9iaW4uYWxvbnpvMDNAZ21haWwuY29tIiwicGljdHVyZSI6bnVsbH19fQ.jAOhkaqpfQP4UGYpd7l59dWWKNCqnesZotWH3xor0DY';

        try {
            $response = $client->request('GET', $apiUrl);
            $apiData = json_decode($response->getBody(), true);

            foreach ($apiData as $value) {
                $veepContent = new VeepContent();
                $question = $value['title'];
                $vocalDate = $value['date'];
                $linkedin = $value['short'][0];
                $description = $value['description'][0];
                $blog = $value['long'][0];

                $veepContent->question = $question;
                $veepContent->vocalDate = $vocalDate;
                $veepContent->linkedin = $linkedin;
                $veepContent->description = $description;
                $veepContent->blog = $blog;
                $veepContent->connected = false;
                $veepContent->save();
            }

            return $veepContent;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
    static public function getVeepContentConnect()
    {
        $client = new Client();
        $apiUrl = 'https://demo.veep.ai/?rest_route=/veepdotai_rest/v1/contents/&JWT=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDE5OTYwNDMsImlzcyI6Imh0dHBzOlwvXC9kZW1vLnZlZXAuYWkiLCJleHAiOjE3MDI2MDA4NDMsImRhdGEiOnsidXNlciI6eyJlbWFpbCI6Im1heGltZWZhbGxlazFAZ21haWwuY29tIiwiaWQiOjEwOSwidXNlcm5hbWUiOiJtYXhpbWVmYWxsZWsxQGdtYWlsLmNvbSIsInBpY3R1cmUiOm51bGx9fX0.M_NgCR5e3qtxtMTDxerr1oN65ctJRrS_bZ39reFj70M';

        try {
            $response = $client->request('GET', $apiUrl);
            $apiData = json_decode($response->getBody(), true);

            foreach ($apiData as $value) {
                $veepContent = new VeepContent();
                $question = $value['title'];
                $vocalDate = $value['date'];
                $linkedin = $value['short'][0];
                $description = $value['description'][0];
                $blog = $value['long'][0];

                $veepContent->question = $question;
                $veepContent->vocalDate = $vocalDate;
                $veepContent->linkedin = $linkedin;
                $veepContent->description = $description;
                $veepContent->blog = $blog;
                $veepContent->connected = true;
                $veepContent->save();
            }

            return $veepContent;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
