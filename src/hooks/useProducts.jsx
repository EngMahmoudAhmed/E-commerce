// hooks/useProducts.js
import { useQuery } from '@tanstack/react-query';
import { fetchPublishedProducts } from '../api/Products';
// import { fetchPublishedProducts } from '../api/products';

export const useProducts = () => {
    return useQuery({
        queryKey: ['products', 'public'],
        queryFn: fetchPublishedProducts,
    });
};