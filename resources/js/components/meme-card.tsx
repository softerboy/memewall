// resources/js/components/meme-card.tsx
import { router } from '@inertiajs/react';
import { Heart, PlusCircle, Share2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import memes from '@/routes/memes';

type MemeCardProps = {
    title: string;
    imageUrl: string;
    likes: number;
    authorName: string;
    authorAvatarUrl?: string;
    templateUrl?: string;
    onLike?: () => void;
    onShare?: () => void;
};

export function MemeCard({
    title,
    imageUrl,
    likes,
    templateUrl,
    onLike,
    onShare,
}: MemeCardProps) {
    const handleCreateMeme = () => {
        if (!templateUrl) return;

        // Extract template ID from URL like https://api.memegen.link/templates/itss
        const templateId = templateUrl.split('/').pop();
        if (templateId) {
            router.get(memes.create({ query: { template: templateId } }).url);
        }
    };

    return (
        <Card className="gap-0 overflow-hidden border-violet-100 bg-gradient-to-b from-white/80 to-violet-50/40 p-0 shadow-sm">
            <CardContent className="group relative p-0">
                {/* Meme Image Display */}
                <div className="w-full bg-muted">
                    <img src={imageUrl} alt={title} className="h-auto w-full" />
                </div>

                {/* Overlay "Use Template" Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="h-9 gap-2 rounded-full border-none bg-white/90 px-4 text-purple-700 shadow-lg backdrop-blur-sm hover:bg-white"
                        onClick={handleCreateMeme}
                    >
                        <PlusCircle className="h-4 w-4" />
                        <span className="text-xs font-bold">Use Template</span>
                    </Button>
                </div>
            </CardContent>

            <CardFooter className="flex flex-col items-start gap-3 pt-3 pb-4">
                <div className="flex w-full items-center gap-3">
                    <div className="flex flex-col">
                        <CardTitle className="line-clamp-1 text-sm font-semibold">
                            {title}
                        </CardTitle>
                    </div>
                </div>

                {/* Interaction Buttons: Like and Share */}
                <div className="flex w-full items-center justify-between">
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex h-8 items-center gap-1.5 rounded-full px-0 text-pink-600 hover:bg-transparent hover:text-pink-700"
                        onClick={onLike}
                    >
                        <Heart className="h-4 w-4 fill-pink-500 text-pink-500" />
                        <span className="text-sm font-medium">{likes}</span>
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        className="flex h-8 cursor-pointer items-center gap-1.5 rounded-full border-violet-200 px-3 text-violet-700 hover:bg-violet-50"
                        onClick={onShare}
                    >
                        <Share2 className="h-3.5 w-3.5" />
                        <span className="text-xs font-medium">Share</span>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
