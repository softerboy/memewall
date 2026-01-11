import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
    AlignCenter,
    AlignLeft,
    AlignRight,
    Bold,
    Download,
    Save,
    Type,
} from 'lucide-react';
import { useState } from 'react';

export default function MemeMakerTool() {
    const [topText, setTopText] = useState('TOP TEXT');
    const [bottomText, setBottomText] = useState('BOTTOM TEXT');
    const [fontSize, setFontSize] = useState(40);
    const [textAlign, setTextAlign] = useState('center');
    const [fontWeight, setFontWeight] = useState('bold');
    const [textColor, setTextColor] = useState('#ffffff');

    const colors = [
        '#ffffff', // White
        '#000000', // Black
        '#ef4444', // Red
        '#facc15', // Yellow
        '#22c55e', // Green
        '#3b82f6', // Blue
        '#a855f7', // Purple
    ];

    // Placeholder image for the meme source
    const [sourceImage] = useState(
        'https://placehold.co/600x400/9333ea/ffffff?text=Meme+Template',
    );

    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left Card: Preview */}
            <Card className="flex flex-col overflow-hidden border-purple-100 shadow-sm lg:col-span-2">
                <CardHeader className="bg-purple-50/50 pb-4">
                    <CardTitle className="text-lg font-semibold text-purple-900">
                        Meme Preview
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 items-center justify-center p-6">
                    <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                        <img
                            src={sourceImage}
                            alt="Meme Source"
                            className="max-h-[400px] w-full object-contain"
                        />

                        {/* Overlay Text */}
                        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4">
                            <h2
                                className="break-words uppercase"
                                style={{
                                    fontSize: `${fontSize}px`,
                                    textAlign: textAlign as
                                        | 'left'
                                        | 'center'
                                        | 'right',
                                    fontWeight:
                                        fontWeight === 'bold' ? '900' : '400',
                                    color: textColor,
                                    textShadow:
                                        '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 2px 0 0 #000, -2px 0 0 #000',
                                    lineHeight: '1.2',
                                }}
                            >
                                {topText}
                            </h2>
                            <h2
                                className="break-words uppercase"
                                style={{
                                    fontSize: `${fontSize}px`,
                                    textAlign: textAlign as
                                        | 'left'
                                        | 'center'
                                        | 'right',
                                    fontWeight:
                                        fontWeight === 'bold' ? '900' : '400',
                                    color: textColor,
                                    textShadow:
                                        '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 2px 0 0 #000, -2px 0 0 #000',
                                    lineHeight: '1.2',
                                }}
                            >
                                {bottomText}
                            </h2>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex gap-3 bg-purple-50/50 pt-4">
                    <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                        <Download className="mr-2 h-4 w-4" />
                        Download Meme
                    </Button>
                    <Button
                        variant="outline"
                        className="flex-1 border-purple-200 text-purple-700 hover:bg-purple-50"
                    >
                        <Save className="mr-2 h-4 w-4" />
                        Save To Meme Wall
                    </Button>
                </CardFooter>
            </Card>

            {/* Right Card: Controls */}
            <Card className="border-purple-100 shadow-sm">
                <CardHeader className="bg-purple-50/50 pb-4">
                    <CardTitle className="text-lg font-semibold text-purple-900">
                        Instruments
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                    {/* Text Inputs */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label
                                htmlFor="top-text"
                                className="text-sm font-medium text-gray-700"
                            >
                                Top Text
                            </Label>
                            <Input
                                id="top-text"
                                placeholder="Enter top text"
                                value={topText}
                                onChange={(e) => setTopText(e.target.value)}
                                className="border-purple-100 focus-visible:ring-purple-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="bottom-text"
                                className="text-sm font-medium text-gray-700"
                            >
                                Bottom Text
                            </Label>
                            <Input
                                id="bottom-text"
                                placeholder="Enter bottom text"
                                value={bottomText}
                                onChange={(e) => setBottomText(e.target.value)}
                                className="border-purple-100 focus-visible:ring-purple-500"
                            />
                        </div>
                    </div>

                    <hr className="border-purple-50" />

                    {/* Styling Tools */}
                    <div className="space-y-4">
                        <h3 className="flex items-center text-sm font-semibold text-gray-900">
                            <Type className="mr-2 h-4 w-4 text-purple-600" />
                            Text Styling
                        </h3>

                        {/* Text Color */}
                        <div className="space-y-2">
                            <Label className="text-xs font-medium text-gray-600">
                                Text Color
                            </Label>
                            <div className="flex flex-wrap gap-2">
                                {colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setTextColor(color)}
                                        className={`h-6 w-6 rounded-full border border-gray-200 transition-transform hover:scale-110 ${
                                            textColor === color
                                                ? 'ring-2 ring-purple-500 ring-offset-2'
                                                : ''
                                        }`}
                                        style={{ backgroundColor: color }}
                                        title={color}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Font Size */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <Label className="text-xs font-medium text-gray-600">
                                    Font Size
                                </Label>
                                <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-bold text-purple-600">
                                    {fontSize}px
                                </span>
                            </div>
                            <input
                                type="range"
                                min="10"
                                max="100"
                                value={fontSize}
                                onChange={(e) =>
                                    setFontSize(parseInt(e.target.value))
                                }
                                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-purple-100 accent-purple-600"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Alignment */}
                            <div className="space-y-2">
                                <Label className="text-xs font-medium text-gray-600">
                                    Alignment
                                </Label>
                                <ToggleGroup
                                    type="single"
                                    value={textAlign}
                                    onValueChange={(value) =>
                                        value && setTextAlign(value)
                                    }
                                    className="justify-start"
                                >
                                    <ToggleGroupItem
                                        value="left"
                                        aria-label="Align left"
                                        className="data-[state=on]:bg-purple-100 data-[state=on]:text-purple-700"
                                    >
                                        <AlignLeft className="h-4 w-4" />
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                        value="center"
                                        aria-label="Align center"
                                        className="data-[state=on]:bg-purple-100 data-[state=on]:text-purple-700"
                                    >
                                        <AlignCenter className="h-4 w-4" />
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                        value="right"
                                        aria-label="Align right"
                                        className="data-[state=on]:bg-purple-100 data-[state=on]:text-purple-700"
                                    >
                                        <AlignRight className="h-4 w-4" />
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </div>

                            {/* Font Weight */}
                            <div className="space-y-2">
                                <Label className="text-xs font-medium text-gray-600">
                                    Weight
                                </Label>
                                <ToggleGroup
                                    type="single"
                                    value={fontWeight}
                                    onValueChange={(value) =>
                                        setFontWeight(value || 'normal')
                                    }
                                    className="justify-start"
                                >
                                    <ToggleGroupItem
                                        value="bold"
                                        aria-label="Bold"
                                        className="data-[state=on]:bg-purple-100 data-[state=on]:text-purple-700"
                                    >
                                        <Bold className="h-4 w-4" />
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </div>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
