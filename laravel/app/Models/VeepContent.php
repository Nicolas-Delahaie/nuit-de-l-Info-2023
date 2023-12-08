<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VeepContent extends Model
{
    use HasFactory;

    // use table name
    protected $table = 'veep_contents';
    public $timestamps = false;

    protected $fillable = [
        'question',
        'vocalDate',
        'linkedin',
        'description',
        'blog',
        'connected',
    ];
}
