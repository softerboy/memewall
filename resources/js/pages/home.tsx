import { Menu, Search } from 'lucide-react';
import MainLayout from '@/components/main-layout';
import MainSidebar from '@/components/main-sidebar';
import { MemeCard } from '@/components/meme-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

interface Meme {
    url: string;
    template: string;
    title: string;
    likes: number;
}

interface HomeProps {
    memes: Meme[];
}

export default function Home({ memes }: HomeProps) {
    return (
        <MainLayout>
            <div className="mt-4 grid grid-cols-1 rounded-md bg-purple-50 shadow-md lg:grid-cols-12">
                {/* Desktop Sidebar */}
                <div className="hidden bg-purple-100 shadow-[inset_-12px_0_20px_theme(colors.purple.200)] lg:col-span-3 lg:block lg:rounded-l-md xl:col-span-2">
                    <div className="sticky top-4">
                        <MainSidebar />
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="p-4 lg:col-span-9 lg:rounded-tr-md lg:rounded-br-md xl:col-span-10">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-bold text-gray-600">
                                Meme Generator
                            </h1>

                            {/* Mobile Sidebar Trigger */}
                            <div className="lg:hidden">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <Menu className="h-6 w-6 text-purple-700" />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side="left" className="p-0">
                                        <SheetHeader className="sr-only">
                                            <SheetTitle>Navigation</SheetTitle>
                                        </SheetHeader>
                                        <MainSidebar />
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>

                        <div className="relative max-w-sm">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                                type="search"
                                placeholder="Search memes..."
                                className="pl-10"
                            />
                        </div>

                        <hr className="w-full border-t border-gray-300" />

                        {/* Responsive grid for memes */}
                        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 xl:columns-4">
                            {memes.map((meme, index) => (
                                <div
                                    key={index}
                                    className="mb-4 break-inside-avoid"
                                >
                                    <MemeCard
                                        authorName="MemeGen API"
                                        imageUrl={meme.url}
                                        title={meme.title}
                                        likes={meme.likes}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
