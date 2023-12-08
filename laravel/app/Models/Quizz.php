<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quizz extends Model
{
    use HasFactory;

    public $timestamps = false;
    public $table = 'quizz';

    protected $fillable = [
        'dateCreation'
    ];

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
}
