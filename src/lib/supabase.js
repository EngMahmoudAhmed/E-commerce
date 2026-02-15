import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseKEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseURL || !supabaseKEY) {
  console.error("Supabase ENV:", import.meta.env);
  throw new Error("Supabase env variables are missing");
}

const supabase = createClient(supabaseURL, supabaseKEY);


export default supabase;
