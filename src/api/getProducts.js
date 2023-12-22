import axios from 'axios';
import { useState } from 'react';

const useProducts = () => {
    const [loading, setLoading] = useState(false);
    const [productList, setProductList] = useState(false);

    const getProducts = async () => {
        try {
            setLoading(true);

            const {data} = await axios.get('https://fakestoreapi.com/products');
            setProductList(data)
            setLoading(false);

            return data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }

    return { loading, getProducts, productList, setProductList };
}

export default useProducts;
