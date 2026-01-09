import MainLayout from '@/components/main-layout';
import MainSidebar from '@/components/main-sidebar';

export default function Home() {
    return (
        <MainLayout>
            <div className="mt-8 grid grid-flow-row grid-cols-14 shadow-md">
                <div className="col-span-2 rounded-tl-md rounded-bl-md bg-purple-100 shadow-[inset_-12px_0_20px_theme(colors.purple.200)]">
                    <MainSidebar />
                </div>
                <div className="col-span-12 rounded-tr-md rounded-br-md bg-purple-50 p-4">
                    <div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-600">
                                Meme Generator
                            </h1>
                        </div>
                        <hr className="my-2 w-full border-t border-gray-300" />

                        <div>Content goes here</div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
