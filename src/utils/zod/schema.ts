import { z } from 'zod/v4';

export const signupSchema = z.object({
    email: z.string().min(1, { error: 'Email is required' }).endsWith('@gmail.com', { error: 'Email must be a gmail account' }),

    password: z.string()
    .min(1, { error: 'Password is required' })
    .min(8, { error: 'Password must be at least 8 characters' })
    .max(50, { error: 'Password must be less than 50 characters' }),

    confirmPassword: z.string()
    .min(1, { error: 'Confirm password is required' })
    .min(8, { error: 'Confirm password must be at least 8 characters' })
    .max(50, { error: 'Confirm password must be less than 50 characters' }),
})

export const loginSchema = z.object({
    email: z.email()
    .endsWith('@gmail.com', { error: 'Email must be a gmail account' }),

    password: z.string()
    .min(1, { error: 'Password is required' })
    .min(8, { error: 'Password must be at least 8 characters' })
    .max(50, { error: 'Password must be less than 50 characters' }),
})

export const resetPasswordSchema = z.object({
    email: z.email({ error: 'Email is invalid' })
    .endsWith('@gmail.com', { error: 'Email must be a gmail account' })
    .min(1, { error: 'Email is required' }),
})