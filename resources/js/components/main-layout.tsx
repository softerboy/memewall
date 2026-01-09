import { HeartIcon, RocketIcon, SmilePlusIcon } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';

export default function MainLayout({
    children,
}: {
    children?: React.ReactNode;
}) {
    return (
        <div className="bg-linear-[30deg] from-violet-500 via-white to-purple-300 pt-16 pb-16">
            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                    😂 Meme Wall 😎
                </h1>

                <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance text-purple-600">
                    Create, save and share your funniest memes!
                </h1>

                <div className="flex justify-center gap-4">
                    <Button className="cursor-pointer bg-blue-500 hover:bg-blue-700">
                        <SmilePlusIcon />
                        Create Meme
                    </Button>
                    <Button className="cursor-pointer" variant="outline">
                        <HeartIcon />
                        My Favorites
                    </Button>
                    <Button className="cursor-pointer" variant="outline">
                        <RocketIcon />
                        Top Memes
                    </Button>
                </div>
            </div>

            <div className="container m-auto">{children}</div>
        </div>
    );
}
