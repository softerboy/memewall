import {
    CatIcon,
    DogIcon,
    FlameIcon,
    HeartIcon,
    LaptopIcon,
} from 'lucide-react';
import { Button } from './ui/button';

const sidebarSections = [
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
                id: 'most_liked',
                title: 'Most Liked',
                icon: <HeartIcon />,
            },
        ],
    },
    {
        name: 'second',
        items: [
            {
                id: 'funny',
                title: 'Funny',
                icon: <FlameIcon />,
            },
            {
                id: 'programming',
                title: 'Programming',
                icon: <LaptopIcon />,
            },
            {
                id: 'cats',
                title: 'Cats',
                icon: <CatIcon />,
            },
            {
                id: 'random',
                title: 'Random',
                icon: <DogIcon />,
            },
        ],
    },
    {
        tag: 'other',
        items: [
            {
                id: 'other_1',
                title: 'Other #1',
                icon: <FlameIcon />,
            },
            {
                id: 'other_1',
                title: 'Other #1',
                icon: <FlameIcon />,
            },
            {
                id: 'other_1',
                title: 'Other #1',
                icon: <FlameIcon />,
            },
            {
                id: 'other_1',
                title: 'Other #1',
                icon: <FlameIcon />,
            },
        ],
    },
];

export default function MainSidebar() {
    return sidebarSections.map((section) => (
        <div key={section.name} className="p-4">
            {section.items.map((item) => (
                <Button
                    key={item.id}
                    className="mb-2 w-full cursor-pointer justify-start"
                    variant="link"
                >
                    {item.icon}
                    {item.title}
                </Button>
            ))}
        </div>
    ));
}
