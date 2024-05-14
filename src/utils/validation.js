import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z.string().min(3, "Fullname must be at least 3 characters long"),
    lastName: z.string().min(3, "Fullname must be at least 3 characters long"),
    email: z.string().email(),
    phone: z.string(),
    password: z.string().min(6, "password must be 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password doesnt match confirm password",
    path: ["confirmPassword"],
  });

// export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "password must be 6 characters"),
});

// export type TLoginSchema = z.infer<typeof loginSchema>;

export const feedbackSchema = z.object({
  feedback: z.string().min(3, "Kindly a feedback"),
});

// export type TEmailSchema = z.infer<typeof emailSchema>;

// const validatePhoneNumber = (phoneNumber: string) => {
//   const phoneNumberPattern = /^\d{10}$/; // Validates a 10-digit phone number

//   return phoneNumberPattern.test(phoneNumber);
// };

// export const passwordSchema = z
//   .object({
//     password: z.string().min(8, "password must be 8 characters"),
//     confirm: z.string(),
//   })
//   .refine((data) => data.password === data.confirm, {
//     message: "password doesnt match confirm password",
//     path: ["confirmPassword"],
//   });

// export type TPasswordSchema = z.infer<typeof passwordSchema>;




// export const createDishSchema = z.object({
//   // picture: z.custom<File | string>().nullable(),
//   picture: z.custom<File>(),
//   name: z.string().min(6, "Dish must be 6 characters").max(50),
//   category: z.string().min(1),
//   availability: z.string().min(1),
//   size: z.string().min(2, "password must be 6 characters"),
//   price: z.string().min(3, "password must be 6 characters"),
// });

// export type TCreateDishSchema = z.infer<typeof createDishSchema>;




// interfaces

// export interface Dish {
//   availability: string;
//   category: string;
//   createdAt: string;
//   name: string;
//   picture: string;
//   price: number;
//   size: number;
//   updatedAt: number;
//   vendorId: number;
//   _id: string;
// }



