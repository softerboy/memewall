<?php

use App\Http\Controllers\MemeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Home page route showing the meme wall
Route::get('/', [MemeController::class, 'index'])->name('home');

// Routes that require authentication and email verification
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
