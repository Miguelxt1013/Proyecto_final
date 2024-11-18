const admin = (req, res, next) => {
    if (req.user && req.user.role === 'administrador') {
        next();
    } else {
        res.status(403).json({ message: 'Acceso prohibido: Administrador solo' });
    }
};

module.exports = { admin };
