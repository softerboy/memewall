import MainLayout from '@/components/main-layout';
import MainSidebar from '@/components/main-sidebar';
import MemeMakerTool from '@/components/meme-maker-tool';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { home } from '@/routes';
import { Head, Link } from '@inertiajs/react';
import { Menu } from 'lucide-react';

export default function CreateMeme({
    templateData,
}: {
    templateData?: {
        blank: string;
    } | null;
}) {
    return (
        <MainLayout>
            <Head title="Create Meme" />

            <div className="grid grid-cols-1 bg-purple-50 shadow-md lg:mt-4 lg:rounded-md lg:grid-cols-12">
                {/* Desktop Sidebar */}
                <div className="hidden bg-purple-100 shadow-[inset_-12px_0_20px_theme(colors.purple.200)] lg:col-span-3 lg:block lg:rounded-l-md xl:col-span-2">
                    <div className="sticky top-4">
                        <MainSidebar />
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="p-4 lg:col-span-9 lg:rounded-tr-md lg:rounded-br-md xl:col-span-10">
                    <div className="flex flex-col gap-4">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href={home().url}>Home</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Create Meme</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
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

                        <MemeMakerTool templateImage={templateData?.blank} />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
