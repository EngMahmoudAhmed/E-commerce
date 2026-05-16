// hooks/useGoogleAuth.js

import { useMutation } from "@tanstack/react-query";
import supabase from "../lib/supabase";

export const useGoogleAuth = () => {
    return useMutation({
        mutationFn: async () => {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    // redirectTo: `${window.location.origin}/home`,
                    redirectTo: "https://e-commerce-shopping-2.netlify.app/login",
                },
            });

            if (error) throw error;
        },
    });
};