// // hooks/useUser.js

// import { useQuery } from "@tanstack/react-query";
// import supabase from "../supabase-client";

// const getUser = async () => {
//     const { data } = await supabase.auth.getUser();
//     return data.user;
// };

// export const useUser = () => {
//     return useQuery({
//         queryKey: ["user"],
//         queryFn: getUser,
//     });
// };