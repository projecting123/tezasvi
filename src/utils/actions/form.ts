"use server"

import { createClient } from "@/utils/supabase/server";
import { loginSchema, resetPasswordSchema, signupSchema } from "../zod/schema";
import { ZodError } from "zod/v4";

export const resetPassword = async (state: any, formData: FormData) => {
    const supabase = await createClient()
    const email = formData.get('email') as string;
    try {
        const validatedEmail = resetPasswordSchema.parse({ email })
        const { error } = await supabase.auth.resetPasswordForEmail(validatedEmail.email, {
            redirectTo: 'https://tezasvi.vercel.app/reset-password'
        })
        if(error) throw new Error(error.message);
        return { message: 'Check your email for a reset link' }
    } catch (error) {
        if(error instanceof ZodError) {
            return { message: error.issues[0].message }
        }
    }
}

export const signup = async (state: any, formData: FormData) => {
    const supabase = await createClient()
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    try {
        if(password !== confirmPassword) throw new Error('Passwords do not match');
        const validatedSignup = signupSchema.parse({ email, password, confirmPassword })
        const { data, error } = await supabase.auth.signUp({
            email: validatedSignup.email,
            password: validatedSignup.password,
            options: {
                emailRedirectTo: 'https://tezasvi.vercel.app',
            },
        })
        if(error) throw new Error(error.message);
        return { message: 'Check your email for a verification link' }
    } catch (error) {
        if(error instanceof ZodError) {
            return { message: error.issues[0].message }
        }
    }
}

export const login = async (state: any, formData: FormData) => {
    const supabase = await createClient()
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    try {
        const validatedLogin = loginSchema.parse({ email, password })
        const { error } = await supabase.auth.signInWithPassword({
            email: validatedLogin.email,
            password: validatedLogin.password,
        })
        if(error) throw new Error(error.message);
        return { message: 'Logged in successfully' }
    } catch (error) {
        if(error instanceof ZodError) {
            return { message: error.issues[0].message }
        }
    }
}

