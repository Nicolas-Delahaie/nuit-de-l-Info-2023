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
        Schema::create('veep_contents', function (Blueprint $table) {
            $table->id();
            $table->string('question');
            $table->string('content');
            $table->date('vocalDate');
            $table->string('linkedin');
            $table->string('description');
            $table->string('blog');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
