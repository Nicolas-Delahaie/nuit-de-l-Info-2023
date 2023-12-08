<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    // ------- POST ------- /
    /**
     * @brief Identifie l utilisateur. Identifiants corrects : cree un token et lui renvoie
     * 
     * @param Request requete envoyee par le client avec :
     * @param string pseudo string pseudo de l'utilisateur
     * @param string password string Mot de passe en clair
     * @param string duration float Duree du token en minutes (entre 1 minute et 100 jours)
     * 
     * @return Response 200, 401, 422
     * @return string token string Token de l'utilisateur
     * @return string type string Type de l'utilisateur
     */
    public function login(Request $request)
    {
        // -- Validation des parametres --
        try {
            $request->validate([
                'pseudo' => 'required',
                'password' => 'required',
                'duration' => 'required|numeric|between:1,144000' //Entre 1 minute et 100 jours
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            //Recupère l erreur de validation des champs
            return response(['message' => 'Mauvais format de reponse', 'errors' => $e->errors()], 422);
        }

        // -- Verification des identifiants --
        $user = User::where('pseudo', $request->pseudo)->first();
        if ($user && Hash::check($request->password, $user->password)) {
            // -- Identifiants bons --
            // Revocation des autres tokens
            $user->tokens()->delete();

            // Création du token
            $token = $user->createToken('userToken');

            // //Ajout de la date d'expiration
            $date_expiration = now()->addMinutes($request->duration);
            $token->accessToken->expires_at = $date_expiration;
            $token->accessToken->save();

            return response([
                'token' => $token->plainTextToken,
                'user_id' => $user->id,
                'message' => 'Utilisateur bien authentifié'
            ], 299);
        } else {
            // Mauvais identifiants
            return response(['message' => 'Mot de passe ou mail incorrect'], 401);
        }

    }
}
