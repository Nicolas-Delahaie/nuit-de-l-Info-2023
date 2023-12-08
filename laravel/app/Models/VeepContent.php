<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VeepContent extends Model
{
    use HasFactory;

    // use table name
    protected $table = 'veep_contents';

    protected $fillable = [
        'question',
        'content',
        'vocalDate',
        'linkedin',
        'description',
        'blog',
    ];
}
