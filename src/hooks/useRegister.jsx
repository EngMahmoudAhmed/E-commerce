// hooks/useRegister.js

import { useMutation } from "@tanstack/react-query";
import supabase from "../lib/supabase";

export const useRegister = () => {
    return useMutation({
        mutationFn: async ({ email, password }) => {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo:
                        "https://e-commerce-shopping-2.netlify.app/login",
                },
            });

            if (error) throw error;
            return data;
        },
    });
};