<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Company;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Raphael Eze',
            'email' => 'ralphses@gmail.com',
            'password' => 'password'
        ]);

        Company::create([
            'name' => "PROMPT MARKETER",
            'email' => 'info@prompt-market.com',
            'address' => 'Gandu community',
            'api_key' => 'key'
        ]);
    }
}
