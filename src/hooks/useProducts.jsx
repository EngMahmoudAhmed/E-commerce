import { useQuery } from '@tanstack/react-query';
import { fetchPublishedProducts } from '../api/Products';

export const useProducts = () => {
    return useQuery({
        queryKey: ['products', 'public'],
        queryFn: fetchPublishedProducts,
    });
};