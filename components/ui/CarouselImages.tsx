import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function CarouselImages({
    dataUrls,
    className,
}: {
    dataUrls: string[];
    className?: string;
}) {
    return (
        <Carousel
            opts={{
                align: 'start',
            }}
            className={`w-full max-w-sm ${className}`}
        >
            <CarouselContent>
                {dataUrls.map((dataUrl, index) => (
                    <CarouselItem key={index} className="basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <Image
                                        src={dataUrl}
                                        alt="Image"
                                        width={400}
                                        height={400}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
