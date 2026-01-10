import { Menu } from 'lucide-react';
import MainLayout from '@/components/main-layout';
import MainSidebar from '@/components/main-sidebar';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Head } from '@inertiajs/react';

export default function CreateMeme() {
    return (
        <MainLayout>
            <Head title="Create Meme" />

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
                            <h2 className="text-2xl font-bold text-gray-800">
                                Create a New Meme
                            </h2>

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

                        <div className="rounded-lg bg-white p-6 shadow-sm border border-purple-100">
                            <p className="text-gray-600">
                                Meme creation interface will go here.
                            </p>
                            {/* Add meme creation form or tool here in the future */}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
