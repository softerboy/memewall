<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class MemeService
{
    private string $baseUrl = 'https://api.memegen.link';

    /**
     * Fetch latest memes from Memegen API.
     *
     * @param int $limit
     * @return array
     */
    public function getLatestMemes(int $limit = 30): array
    {
        // Fetch images from the Memegen API
        $response = Http::get("{$this->baseUrl}/images", [
            'limit' => $limit,
        ]);

        if (!$response->successful()) {
            return [];
        }

        $data = $response->json();

        // Transform the API response into our internal meme format
        return array_map(function ($meme) {
            return [
                'url' => $meme['url'],
                'template' => $meme['template'],
                'title' => $this->deriveTitleFromUrl($meme['url']),
                'likes' => rand(0, 1000), // Random likes for demonstration
            ];
        }, $data);
    }

    /**
     * Derive a human-readable title from the meme URL.
     *
     * @param string $url
     * @return string
     */
    private function deriveTitleFromUrl(string $url): string
    {
        // Extract the filename from the URL and clean it up
        $parts = explode('/', $url);
        $filename = end($parts);
        $nameWithoutExtension = pathinfo($filename, PATHINFO_FILENAME);

        // Replace separators with spaces and capitalize
        $title = str_replace(['_', '-'], ' ', $nameWithoutExtension);

        return Str::ucfirst($title) ?: 'Funny Meme';
    }
}
