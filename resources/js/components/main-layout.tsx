import { HeartIcon, RocketIcon, SmilePlusIcon } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';

export default function MainLayout({
    children,
}: {
    children?: React.ReactNode;
}) {
    return (
        <div className="bg-linear-[30deg] from-violet-500 via-white to-purple-300 py-8 md:py-16">
            <div className="px-4 text-center">
                <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight md:text-4xl text-balance">
                    😂 Meme Wall 😎
                </h1>

                <h1 className="mt-4 scroll-m-20 text-xl font-extrabold tracking-tight text-purple-600 md:text-2xl text-balance">
                    Create, save and share your funniest memes!
                </h1>

                <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-4">
                    <Button className="w-full cursor-pointer bg-blue-500 hover:bg-blue-700 sm:w-auto">
                        <SmilePlusIcon className="mr-2 h-5 w-5 text-yellow-400" />
                        Create Meme
                    </Button>
                    <Button className="w-[calc(50%-0.5rem)] cursor-pointer sm:w-auto" variant="outline">
                        <HeartIcon className="mr-2 h-5 w-5 text-rose-500" />
                        Favorites
                    </Button>
                    <Button className="w-[calc(50%-0.5rem)] cursor-pointer sm:w-auto" variant="outline">
                        <RocketIcon className="mr-2 h-5 w-5 text-blue-400" />
                        Top Memes
                    </Button>
                </div>
            </div>

            <div className="container mx-auto mt-8 md:mt-12">{children}</div>
        </div>
    );
}
