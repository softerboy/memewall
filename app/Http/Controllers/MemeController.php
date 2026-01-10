<?php

namespace App\Http\Controllers;

use App\Services\MemeService;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class MemeController extends Controller
{
    public function __construct(
        protected MemeService $memeService
    ) {}

    public function index()
    {
        // Render the home page with memes and registration status
        return Inertia::render('home', [
            'memes' => $this->memeService->getLatestMemes(10),
            'canRegister' => Features::enabled(Features::registration()),
        ]);
    }

    public function create()
    {
        return Inertia::render('memes/create');
    }
}
