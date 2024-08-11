'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LocationSchema } from '@/lib/schema';
import { modifyLocationData } from '@/lib/modifyExif';
import downloadImage from '@/lib/downloadImage';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import fileNameExtract from '@/lib/fileNameExtract';

interface LocationFormProps {
    dataUrl: string;
}

export default function LocationForm({ dataUrl }: LocationFormProps) {
    const form = useForm<z.infer<typeof LocationSchema>>({
        resolver: zodResolver(LocationSchema),
        defaultValues: {
            latitude: undefined,
            longitude: undefined,
            altitude: 0,
        },
    });

    function onSubmit(values: z.infer<typeof LocationSchema>) {
        console.log(values);
        const modifiedImage = modifyLocationData(
            dataUrl,
            values.latitude,
            values.longitude,
            values.altitude
        );
        downloadImage(modifiedImage, fileNameExtract(dataUrl));
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="latitude"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Latitude</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>
                                Latitude of Location
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="longitude"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Longitude</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>
                                Longitutde of Location
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="altitude"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Altitude</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>
                                Altitude of Location
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
