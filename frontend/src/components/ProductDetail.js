import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${id}`);
            setProduct(data);
        };
        fetchProduct();
    }, [id]);

    const addToCart = async () => {
        // Lógica para añadir al carrito
        // Debes manejar la autenticación y enviar el token en las cabeceras
    };

    if (!product) return <div>Cargando...</div>;

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Categoría: {product.category.name}</p>
            <p>Stock: {product.stock}</p>
            <button onClick={addToCart}>Añadir al Carrito</button>
        </div>
    );
};

export default ProductDetail;
