// hooks/useAdminProducts.js
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/products';

export const useAdminProducts = () => {
    return useQuery({
        queryKey: ['products', 'admin'],
        queryFn: fetchProducts,
    });
};
