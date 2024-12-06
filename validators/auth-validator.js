const { z } = require('zod');

const signupSchema = z.object({
    username: z
        .string({ required_error: "Username is required" })
        .trim()
        .min(3, { message: "Username must be atleast of 3 character" })
        .max(225, { message: "Username must not be more than 225 character" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be atleast of 3 character" })
        .max(225, { message: "Email must not be more than 225 character" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be atleast of 10 character" })
        .max(10, { message: "Phone must not be more than 10 character" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(7, { message: "Password must be atleast of 7 character" })
        .max(1024, { message: "Password must not be more than 10 character" }),
});

module.exports = signupSchema;