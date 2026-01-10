import { HeartIcon, RocketIcon, SmilePlusIcon } from 'lucide-react';
import React from 'react';
import { Link } from '@inertiajs/react';

import DecorativeBubbles from '@/components/decorative-bubbles';
import { Button } from '@/components/ui/button';
import memes from '@/routes/memes/index';

export default function MainLayout({
    children,
}: {
    children?: React.ReactNode;
}) {
    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden bg-linear-to-br from-violet-500 via-purple-400 to-indigo-500 py-8 md:py-16">
            <DecorativeBubbles />

            <div className="relative z-10 px-4 text-center">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-white drop-shadow-md md:text-5xl text-balance">
                    😂 Meme Wall 😎
                </h1>

                <h1 className="mt-4 scroll-m-20 text-xl font-extrabold tracking-tight text-purple-100 drop-shadow-sm md:text-2xl text-balance">
                    Create, save and share your funniest memes!
                </h1>

                <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-4">
                    <Link href={memes.create()}>
                        <Button className="w-full cursor-pointer bg-white text-purple-600 hover:bg-purple-50 sm:w-auto">
                            <SmilePlusIcon className="mr-2 h-5 w-5 text-yellow-500" />
                            Create Meme
                        </Button>
                    </Link>
                    <Button className="w-[calc(50%-0.5rem)] cursor-pointer border-white/40 bg-white/10 text-white hover:bg-white/20 sm:w-auto" variant="outline">
                        <HeartIcon className="mr-2 h-5 w-5 text-rose-300" />
                        Favorites
                    </Button>
                    <Button className="w-[calc(50%-0.5rem)] cursor-pointer border-white/40 bg-white/10 text-white hover:bg-white/20 sm:w-auto" variant="outline">
                        <RocketIcon className="mr-2 h-5 w-5 text-blue-300" />
                        Top Memes
                    </Button>
                </div>
            </div>

            <div className="container mx-auto mt-8 md:mt-12">{children}</div>
        </div>
    );
}
