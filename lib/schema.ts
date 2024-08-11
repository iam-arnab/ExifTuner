import { z } from 'zod';

const DateTimeSchema = z.object({
    dateTimeOriginal: z
        .string()
        .datetime({ message: 'Invalid Date and Time format' }),
    createDate: z
        .string()
        .datetime({ message: 'Invalid Date and Time format' }),
});

const LocationSchema = z.object({
    latitude: z.coerce.number({ message: 'Invalid latitude' }),
    longitude: z.coerce.number({ message: 'Invalid longitude' }),
    altitude: z.coerce.number({ message: 'Invalid altitude' }),
});

const CameraSchema = z.object({
    make: z.string(),
    model: z.string(),
});

export { DateTimeSchema, LocationSchema, CameraSchema };
