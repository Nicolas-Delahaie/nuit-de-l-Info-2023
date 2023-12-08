<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = [
            ["pseudo" => "root", "password" => bcrypt("root")],
            ["pseudo" => "root1", "password" => bcrypt("root")],
            ["pseudo" => "root2", "password" => bcrypt("root")],
            ["pseudo" => "root3", "password" => bcrypt("root")]
        ];
        foreach ($user as $val) {
            \App\Models\User::create($val);
        }
    }
}
