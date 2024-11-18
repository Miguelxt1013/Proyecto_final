
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

// Ruta por defecto
app.get('/', (req, res) => {
    res.send('API de E-commerce funcionando...');
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));


const mongoose = require('mongoose');
require('dotenv').config(); 

// Obtener la URL de conexión desde el archivo .env
const mongoURI = process.env.MONGO_URI;

// Conectar a MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true, // Parámetros de configuración recomendados
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Conexión exitosa a MongoDB");
})
.catch((err) => {
  console.log("Error de conexión a MongoDB:", err);
});

