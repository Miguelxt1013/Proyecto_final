import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        const fetchCart = async () => {
            const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            const { data } = await axios.get('/api/cart', config);
            setCart(data);
        };
        fetchCart();
    }, []);

    const removeFromCart = async (productId) => {
        const token = localStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const { data } = await axios.delete(`/api/cart/${productId}`, config);
        setCart(data);
    };

    if (!cart) return <div>Cargando...</div>;

    return (
        <div>
            <h2>Tu Carrito</h2>
            {cart.items.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <ul>
                    {cart.items.map(item => (
                        <li key={item.product._id}>
                            {item.product.name} - {item.quantity} x ${item.product.price}
                            <button onClick={() => removeFromCart(item.product._id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
