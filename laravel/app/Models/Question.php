<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Client\ResponseSequence;

class Question extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'type',
        'score',
        'difficulte',
        'image',
        'libelle',
        'quizz_id',
    ];

    public function reponses()
    {
        return $this->hasManyThrough(Reponse::class, ReponseQuestion::class);
    }
}
