<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReponseQuestion extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'estBonneQuestion',
        'niveauPertinence',
        'reponse_id',
        'question_id',
    ];
}
