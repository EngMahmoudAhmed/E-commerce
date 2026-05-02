// hooks/useGoogleAuth.js

import { useMutation } from "@tanstack/react-query";
import supabase from "../lib/supabase";

export const useGoogleAuth = () => {
    return useMutation({
        mutationFn: async () => {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: `${window.location.origin}/home`,
                },
            });

            if (error) throw error;
        },
    });
};