import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/Products';

export const useAdminProducts = () => {
    return useQuery({
        queryKey: ['products', 'admin'],
        queryFn: fetchProducts,
    });
};
