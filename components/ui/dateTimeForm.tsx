'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { DateTimeSchema } from '@/lib/schema';
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
import { modifyDateTimeData } from '@/lib/modifyExif';
import fileNameExtract from '@/lib/fileNameExtract';
import downloadImage from '@/lib/downloadImage';

interface DateTimeFormProps {
    dataUrl: string;
}

export default function DateTimeForm({ dataUrl }: DateTimeFormProps) {
    const form = useForm<z.infer<typeof DateTimeSchema>>({
        resolver: zodResolver(DateTimeSchema),
        defaultValues: {
            dateTimeOriginal: '',
            createDate: '',
        },
    });

    function onSubmit(values: z.infer<typeof DateTimeSchema>) {
        console.log(values);
        const modifiedImage = modifyDateTimeData(
            dataUrl,
            values.dateTimeOriginal,
            values.createDate
        );
        downloadImage(modifiedImage, fileNameExtract(dataUrl));
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="dateTimeOriginal"
                    render={({ field }) => (
                        <>
                            <p className="text-red-500">
                                Note: T and Z are required in the format.
                            </p>
                            <FormItem>
                                <FormLabel>Orginal Date and Time</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="YYYY-MM-DDTHH:mm:ssZ"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Date it was taken
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        </>
                    )}
                />
                <FormField
                    control={form.control}
                    name="createDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Creation Date</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="YYYY-MM-DDTHH:mm:ssZ"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Date the image was created
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
