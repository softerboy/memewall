// resources/js/components/meme-card.tsx
import { Heart, Share2 } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
} from '@/components/ui/card';

type MemeCardProps = {
    title: string;
    imageUrl: string;
    likes: number;
    authorName: string;
    authorAvatarUrl?: string;
    onLike?: () => void;
    onShare?: () => void;
};

export function MemeCard({
    title,
    imageUrl,
    likes,
    onLike,
    onShare,
}: MemeCardProps) {
    return (
        <Card className="overflow-hidden border-violet-100 bg-gradient-to-b from-white/80 to-violet-50/40 p-0 gap-0 shadow-sm">
            <CardContent className="p-0">
                {/* Meme Image Display */}
                <div className="w-full bg-muted">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="h-auto w-full"
                    />
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
                        className="flex h-8 rounded-fulls items-center gap-1.5 px-0 text-pink-600 hover:bg-transparent hover:text-pink-700"
                        onClick={onLike}
                    >
                        <Heart className="h-4 w-4 fill-pink-500 text-pink-500" />
                        <span className="text-sm font-medium">{likes}</span>
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        className="cursor-pointer flex h-8 items-center gap-1.5 rounded-full border-violet-200 px-3 text-violet-700 hover:bg-violet-50"
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
