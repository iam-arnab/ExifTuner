import { z } from "zod";

const DateTimeSchema = z.object({
  modifyDate: z.string().datetime({ message: "Invalid Date and Time format" }),
  dateTimeOriginal: z
    .string()
    .datetime({ message: "Invalid Date and Time format" }),
  createDate: z.string().datetime({ message: "Invalid Date and Time format" }),
});

const LocationSchema = z.object({
  latitude: z.number({ message: "Invalid latitude" }),
  longitude: z.number({ message: "Invalid longitude" }),
  altitude: z.number({ message: "Invalid altitude" }),
});

const CameraSchema = z.object({
  make: z.string(),
  model: z.string(),
});

export { DateTimeSchema, LocationSchema, CameraSchema };
