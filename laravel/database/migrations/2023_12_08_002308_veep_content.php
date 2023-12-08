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
            $table->longText('question');
            $table->date('vocalDate');
            $table->longText('linkedin');
            $table->longText('description');
            $table->longText('blog');
            $table->boolean('connected');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('veep_contents');
    }
};
