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
                        `${window.location.origin}/home`
                    //     "https://e-commerce-shopping-2.netlify.app/login",
                    // redirectTo: `${window.location.origin}/home`,

                },
            });

            if (error) throw error;
            return data;
        },
    });
};