"use server";
import * as z from 'zod';

import { LoginSchema } from '../../../schemas';
import { modifyPayload } from '@/utils/modifyPayload';

export const login = async (values: z.infer<typeof LoginSchema>) => {

    const validatedFields = LoginSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        cache: "no-store"
    })

    const userInfo = await res.json();
    return userInfo;
}