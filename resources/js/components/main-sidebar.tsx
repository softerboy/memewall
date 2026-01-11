import {
    CatIcon,
    FlameIcon,
    HeartIcon,
    LaptopIcon,
    LaughIcon,
    MessageSquareIcon,
    ShuffleIcon,
    SparklesIcon,
} from 'lucide-react';
import React from 'react';

import { Button } from './ui/button';

export interface MainSidebarItem {
    tag: string;
    title: string;
    icon: React.ReactNode;
}

const sidebarSections: { name: string; items: MainSidebarItem[] }[] = [
    {
        name: 'first',
        items: [
            {
                tag: 'trending',
                title: 'Trending',
                icon: <FlameIcon className="mr-2 h-5 w-5 text-orange-500" />,
            },
            {
                tag: 'newest',
                title: 'Newest',
                icon: <SparklesIcon className="mr-2 h-5 w-5 text-blue-500" />,
            },
            {
                tag: 'most_liked',
                title: 'Most Liked',
                icon: <HeartIcon className="mr-2 h-5 w-5 text-rose-500" />,
            },
            {
                tag: 'recently_commented',
                title: 'Recently Commented',
                icon: (
                    <MessageSquareIcon className="mr-2 h-5 w-5 text-emerald-500" />
                ),
            },
        ],
    },
    {
        name: 'second',
        items: [
            {
                tag: 'funny',
                title: 'Funny',
                icon: <LaughIcon className="mr-2 h-5 w-5 text-yellow-500" />,
            },
            {
                tag: 'programming',
                title: 'Programming',
                icon: <LaptopIcon className="mr-2 h-5 w-5 text-indigo-500" />,
            },
            {
                tag: 'cats',
                title: 'Cats',
                icon: <CatIcon className="mr-2 h-5 w-5 text-amber-600" />,
            },
            {
                tag: 'random',
                title: 'Random',
                icon: <ShuffleIcon className="mr-2 h-5 w-5 text-purple-500" />,
            },
        ],
    },
];

export default function MainSidebar() {
    return (
        <>
            <div className="px-6 py-4">
                <h2 className="text-2xl font-black tracking-tighter text-purple-700">
                    MemeWall
                </h2>
                <p className="text-xs font-medium text-gray-500 italic">
                    Where productivity goes to die
                </p>
            </div>
            {sidebarSections.map((section, index) => (
                <div key={section.name} className="px-4 py-2">
                    {section.items.map((item) => (
                        <Button
                            key={item.tag}
                            className="mb-2 w-full cursor-pointer justify-start"
                            variant="link"
                        >
                            {item.icon}
                            {item.title}
                        </Button>
                    ))}
                    {index !== sidebarSections.length - 1 && (
                        <hr className="border-gray-300" />
                    )}
                </div>
            ))}
        </>
    );
}
