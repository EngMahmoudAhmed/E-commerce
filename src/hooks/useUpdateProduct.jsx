import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateProduct } from "../api/Products";

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['products']});
        },
    });
};