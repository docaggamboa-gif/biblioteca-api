const authorize = (requiredPermission) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                message: "Usuario no autenticado"
            });
        }

        const permisos = req.user.permisos || [];

        const tienePermiso = requiredPermission.some((permiso) =>
            permisos.includes(permiso)
        );
        if (!tienePermiso) {
            return res.status(403).json({
                message: "No tiene permisos para realizar esta acción"
            });
        }
        /*
        if (!permisos.includes(requiredPermission)) {
            return res.status(403).json({
                message: "No tiene permisos para realizar esta acción"
            });
        }*/
        next();
    };
};

module.exports = authorize;