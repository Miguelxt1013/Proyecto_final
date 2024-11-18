const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Crear una orden
const createOrder = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id }).populate('items.product', 'price');
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: 'Carrito vacío' });
        }

        const total = cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
        const order = new Order({
            user: req.user.id,
            products: cart.items.map(item => ({
                product: item.product._id,
                quantity: item.quantity,
            })),
            total,
        });

        await order.save();
        // Vaciar el carrito
        cart.items = [];
        await cart.save();

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear orden', error: error.message });
    }
};

// Obtener todas las órdenes del usuario
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate('products.product', 'name price');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener órdenes', error: error.message });
    }
};

// Obtener detalles de una orden específica
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('products.product', 'name price');
        if (order && order.user.toString() === req.user.id) {
            res.json(order);
        } else {
            res.status(404).json({ message: 'Orden no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener orden', error: error.message });
    }
};

module.exports = { createOrder, getOrders, getOrderById };
