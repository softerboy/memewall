import {
    CatIcon,
    DogIcon,
    FlameIcon,
    HeartIcon,
    LaptopIcon,
} from 'lucide-react';
import { JSX } from 'react';

import { Button } from './ui/button';

export interface MainSidebarItem {
    tag: string;
    title: string;
    icon: JSX.Element;
}

const sidebarSections: { name: string; items: MainSidebarItem[] }[] = [
    {
        name: 'first',
        items: [
            {
                tag: 'trending',
                title: 'Trending',
                icon: <FlameIcon />,
            },
            {
                tag: 'newest',
                title: 'Newest',
                icon: <FlameIcon />,
            },
            {
                tag: 'most_liked',
                title: 'Most Liked',
                icon: <HeartIcon />,
            },
            {
                tag: 'recently_commented',
                title: 'Recently Commented',
                icon: <FlameIcon />,
            },
        ],
    },
    {
        name: 'second',
        items: [
            {
                tag: 'funny',
                title: 'Funny',
                icon: <FlameIcon />,
            },
            {
                tag: 'programming',
                title: 'Programming',
                icon: <LaptopIcon />,
            },
            {
                tag: 'cats',
                title: 'Cats',
                icon: <CatIcon />,
            },
            {
                tag: 'random',
                title: 'Random',
                icon: <DogIcon />,
            },
        ],
    },
    {
        name: 'other',
        items: [
            {
                tag: 'other_1',
                title: 'Other #1',
                icon: <FlameIcon />,
            },
            {
                tag: 'other_2',
                title: 'Other #2',
                icon: <FlameIcon />,
            },
            {
                tag: 'other_3',
                title: 'Other #3',
                icon: <FlameIcon />,
            },
            {
                tag: 'other_4',
                title: 'Other #4',
                icon: <FlameIcon />,
            },
        ],
    },
];

export default function MainSidebar() {
    return sidebarSections.map((section, index) => (
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
    ));
}
