"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DateTimeSchema } from "@/lib/schema";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function DateTimeForm() {
    const form = useForm<z.infer<typeof DateTimeSchema>>({
        resolver: zodResolver(DateTimeSchema),
        defaultValues: {
            modifyDate: "",
            dateTimeOriginal: "",
            createDate: "",
        },
    });

    function onSubmit(values: z.infer<typeof DateTimeSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="modifyDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Modified Date</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>
                                Last modified date of the file.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="dateTimeOriginal"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Orginal Date and Time</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>Date it was taken</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="createDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Creation Date</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
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
