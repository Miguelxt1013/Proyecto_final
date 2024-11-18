# MERN E-commerce

## Descripción

Proyecto de sistema de comercio electrónico desarrollado con la pila MERN (MongoDB, Express, React, Node.js). Permite a los usuarios registrarse, autenticar, visualizar productos, gestionar el carrito de compras y realizar pedidos. Los administradores pueden gestionar productos y categorías.

## Características

- Registro y autenticación de usuarios con JWT.
- Gestión de productos y categorías (solo administradores).
- Carrito de compras en tiempo real.
- Procesamiento de órdenes de compra.
- Interfaz responsiva con React.

## Instalación

### Prerrequisitos

- Node.js y npm instalados.
- MongoDB Atlas o una instancia local de MongoDB.

### Backend

1. Navega a la carpeta `backend`:

    ```bash
    cd mern_ecommerce/backend
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Crea un archivo `.env` basado en `.env.example` y configura las variables de entorno:

    ```env
    MONGO_URI=tu_mongo_uri_aquí
    JWT_SECRET=tu_secreto_jwt
    PORT=5000
    ```

4. Inicia el servidor en modo desarrollo:

    ```bash
    npm run dev
    ```

### Frontend

1. Navega a la carpeta `frontend`:

    ```bash
    cd ../frontend
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Inicia la aplicación React:

    ```bash
    npm start
    ```

## Uso

1. Accede a la aplicación en `http://localhost:3000`.
2. Regístrate como nuevo usuario o inicia sesión si ya tienes una cuenta.
3. Explora los productos, añádelos al carrito y realiza pedidos.
4. Si eres administrador, puedes gestionar productos y categorías desde las rutas protegidas.

## Tecnologías

- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt.js
- **Frontend**: React, React Router, Axios
- **Control de Versiones**: GitHub

## Contribución

Si deseas contribuir a este proyecto, por favor crea un fork y realiza un pull request con tus mejoras.

## Licencia

Este proyecto está bajo la Licencia MIT.
