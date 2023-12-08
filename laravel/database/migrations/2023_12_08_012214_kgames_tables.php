<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // -------------------------------------------- //
        //        C R E A T I O N   T A B L E S         //
        // -------------------------------------------- //
        Schema::create("categories", function (Blueprint $table) {
            $table->id();
            $table->string('nom');
        });
        Schema::create("reponses_categories", function (Blueprint $table) {
            $table->id();
            // Clés étrangères
            $table->unsignedBigInteger('reponse_id');
            $table->unsignedBigInteger('categorie_id');
            $table->unique(['reponse_id', 'categorie_id']);
        });
        Schema::create("reponses", function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->string('description');
        });
            
        Schema::create("reponses_questions", function (Blueprint $table) {
            $table->id();
            $table->boolean('estBonneQuestion');
            $table->integer('niveauPertinence');
            // Clés étrangères
            $table->unsignedBigInteger('reponse_id');
            $table->unsignedBigInteger('question_id');
            $table->unique(['reponse_id', 'question_id']);
        });
        Schema::create("questions", function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->integer('score');
            $table->integer('difficulte');
            $table->binary('image');
            $table->string('libelle');
            // Clés étrangères
            $table->unsignedBigInteger('quizz_id');
        });
        Schema::create("quizz", function (Blueprint $table) {
            $table->id();
            $table->date('dateCreation');
        });
        Schema::create("participer", function (Blueprint $table) {
            $table->id();
            $table->integer('score');

            // Clés étrangères
            $table->unsignedBigInteger('quizz_id');
            $table->unsignedBigInteger('user_id');
        });


        // -------------------------------------------- //
        //       A J O U T   R E F E R E N C E S        //
        // -------------------------------------------- //
        Schema::table('reponses_questions', function (Blueprint $table) {
            $table->foreign("reponse_id")->references("id")->on("reponses");
            $table->foreign("question_id")->references("id")->on("reponses");
        });
        Schema::table('questions', function (Blueprint $table) {
            $table->foreign("quizz_id")->references("id")->on("quizz");
        });
        Schema::table('participer', function (Blueprint $table) {
            $table->foreign("quizz_id")->references("id")->on("quizz");
            $table->foreign("user_id")->references("id")->on("users");
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        $tablesCrees = [
            "reponses",
            "reponses_contenir",
            "questions",
            "quizz",
            "participer"
        ];
        foreach ($tablesCrees as $tablesCrees) {
            Schema::dropIfExists($tablesCrees);
        }
    }
};
