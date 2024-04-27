const { z } = require("zod");

const SignupSchema = z.object({
    username: z.string({ required_error: "Name is required" })
        .min(3, { message: "Name must be at least 3 characters" })
        .max(255, { message: "Name must not exceed 255 characters" })
        .trim(),
    email: z.string({ required_error: "Email is required" })
        .min(5, { message: "Email must be at least 5 characters" })
        .max(255, { message: "Email must not exceed 255 characters" })
        .trim(),
    phone: z.string({ required_error: "Phone number is required" })
        .min(10, { message: "Phone number must be at least 10 characters" })
        .max(15, { message: "Phone number must not exceed 15 characters" })
        .trim(),
    password: z.string({ required_error: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters" })
        .max(255, { message: "Password must not exceed 255 characters" })
        .trim(),
});

module.exports = SignupSchema;
