'use client';

import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from "@/components/ui/form"
import { CardWrapper } from "./card-wrapper";
import { RegisterSchema } from '../../../schemas';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { register } from '../../services/actions/register';
import { useState, useTransition } from 'react';
import { modifyPayload } from '../../utils/modifyPayload';

export const RegisterForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: '',
            password: '',
            name: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        const res = await register(values)
        console.log(res);;

    }

    return (
        <CardWrapper
            headerLabel="Create an Account"
            backButtonLabel="Don't Have an Account?"
            backButtonHref="/auth/login"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='space-y-4'>
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field}
                                        disabled={isPending}
                                        placeholder='John Doe' type="name" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field}
                                        disabled={isPending}
                                        placeholder='john.doe@example.com' type="email" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />


                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending}
                                        {...field} placeholder='********' type="password" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                    <FormError message={error}></FormError>
                    <FormSuccess message={success}></FormSuccess>

                    <Button type="submit" disabled={isPending}
                        className='w-full'>Create an Account</Button>
                </form>
            </Form>
        </CardWrapper>
    );
};
