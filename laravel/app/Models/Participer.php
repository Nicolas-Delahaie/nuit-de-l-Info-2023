<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Participer extends Model
{
    use HasFactory;

    public $timestamps = false;
    public $table = 'participer';

    protected $fillable = [
        'score',
        'quizz_id',
        'user_id',
    ];
}
