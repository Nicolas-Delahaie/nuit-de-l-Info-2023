<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quizz;

class QuizzController extends Controller
{
    function showQuestionsReponses($id)
    {
        $questions = Quizz::findOrFail($id)
            ->questions()
            ->with('reponses')
            ->get();
    }
}
