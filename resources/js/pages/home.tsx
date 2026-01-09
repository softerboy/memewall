import MainLayout from '@/components/main-layout';
import MainSidebar from '@/components/main-sidebar';
import { MemeCard } from '@/components/meme-card';

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
            <div className="mt-8 grid grid-flow-row grid-cols-12 shadow-md">
                <div className="col-span-2 rounded-tl-md rounded-bl-md bg-purple-100 shadow-[inset_-12px_0_20px_theme(colors.purple.200)]">
                    <div className="sticky top-4">
                        <MainSidebar />
                    </div>
                </div>
                <div className="col-span-10 rounded-tr-md rounded-br-md bg-purple-50 p-4">
                    <div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-600">
                                Meme Generator
                            </h1>
                        </div>
                        <hr className="my-2 w-full border-t border-gray-300" />

                        {/* Responsive grid for memes using Tailwind's column layout */}
                        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
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
