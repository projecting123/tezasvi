import { z } from 'zod/v4';

export const signupSchema = z.object({
    name: z.string().min(1, { error: 'Name is required' })
        .max(50, { error: 'Name must be less than 50 characters' }),

    email: z.string().min(1, { error: 'Email is required' }).endsWith('@gmail.com', { error: 'Email must be a gmail account' }),

    password: z.string()
        .min(1, { error: 'Password is required' })
        .min(6, { error: 'Password must be at least 6 characters' })
        .max(50, { error: 'Password must be less than 50 characters' }),

    confirmPassword: z.string()
        .min(1, { error: 'Confirm password is required' })
        .min(6, { error: 'Confirm password must be at least 6 characters' })
        .max(50, { error: 'Confirm password must be less than 50 characters' }),
})

export const loginSchema = z.object({
    email: z.string()
        .min(1, { error: 'Email is required' })
        .endsWith('@gmail.com', { error: 'Email must be a gmail account' }),
    password: z.string()
        .min(1, { error: 'Password is required' })
        .min(6, { error: 'Password must be at least 6 characters' })
        .max(50, { error: 'Password must be less than 50 characters' }),
})

export const resetPasswordSchema = z.object({
    email: z.string()
        .min(1, { error: 'Email is required' })
        .endsWith('@gmail.com', { error: 'Email must be a gmail account' })
})

export const updatePasswordSchema = z.object({
    password: z.string()
        .min(1, { error: 'Password is required' })
        .min(6, { error: 'Password must be at least 6 characters' })
        .max(50, { error: 'Password must be less than 50 characters' }),

    confirmPassword: z.string()
        .min(1, { error: 'Confirm password is required' })
        .min(6, { error: 'Confirm password must be at least 6 characters' })
        .max(50, { error: 'Confirm password must be less than 50 characters' }),
})
