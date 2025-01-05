import { z } from "zod";

// Localized Data Schema
export const LocalizedDataSchema = z.object({
  title: z.string().min(1, "Title is required").nonempty(),
  description: z.string().min(1, "Description is required").nonempty(),
  neighborhood: z.string().optional(),
  services: z.array(z.string()).default([]).optional(),
});

// Project Schema
export const ProjectSchema = z.object({
  data: z.object({
    en: LocalizedDataSchema,
    ar: LocalizedDataSchema,
  }),
  startingPrice: z
    .number()
    .nonnegative("Starting price must be a non-negative number")
    .min(1, "Starting price must be at least 1"),
  area: z
    .number()
    .nonnegative("Area must be a non-negative number")
    .min(1, "Area must be at least 1 square meter"),
  rooms: z
    .number()
    .nonnegative("Rooms must be a non-negative number")
    .min(1, "A project must have at least 1 room"),
  baths: z
    .number()
    .nonnegative("Baths must be a non-negative number")
    .min(1, "A project must have at least 1 bath"),
  floors: z
    .number()
    .nonnegative("Floors must be a non-negative number")
    .min(1, "A project must have at least 1 floor"),
  status: z.enum(["ongoing", "completed"]).default("ongoing"),
  developer: z.string().min(1, "Developer is required").nonempty(),
  numberOfProperties: z
    .number()
    .nonnegative("Number of properties must be a non-negative number")
    .min(1, "A project must have at least 1 property"),
  images: z.array(z.string()).default([]).optional(),
  coverImage: z.string().min(1, "Cover image is required").nonempty(),
});

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please provide a valid email address." }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long. " })
    .max(100, { message: "Password cannot exceed 100 characters." }),
});

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .max(30, { message: "Username cannot exceed 30 characters." })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores.",
    }),

  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(50, { message: "Name cannot exceed 50 characters." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces.",
    }),

  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please provide a valid email address." }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(100, { message: "Password cannot exceed 100 characters." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    }),
});

export const UserSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." }),
  email: z.string().email({ message: "Please provide a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }), // Add password
  bio: z.string().optional(),
  image: z.string().url({ message: "Please provide a valid URL." }).optional(),
  location: z.string().optional(),
  portfolio: z
    .string()
    .url({ message: "Please provide a valid URL." })
    .optional(),
  reputation: z.number().optional(),
});

export const AccountSchema = z.object({
  userId: z.string().min(1, { message: "User ID is required." }),
  name: z.string().min(1, { message: "Name is required." }),
  image: z.string().url({ message: "Please provide a valid URL." }).optional(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(100, { message: "Password cannot exceed 100 characters." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    })
    .optional(),
  provider: z.string().min(1, { message: "Provider is required." }),
  providerAccountId: z
    .string()
    .min(1, { message: "Provider Account ID is required." }),
});
