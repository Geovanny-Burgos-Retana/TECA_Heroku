const User = require('../models/user');
const Estudiante = require('../models/estudiante');
const Docente = require('../models/docente');
const passport = require('passport');

userCtrl = {};

/**
 * El controlador de la creacion de un nuevo usuario con passport
 */
userCtrl.createUser = (req, res, next) => {
    // (err, user, info) son datos que son retornados desde el "passport.use('local-signup'" con el done()
    console.log(req.body);
    passport.authenticate('local-signup', { session: false }, (err, user, info) => {
        // Si en el primer paramentro retornado del done() no es null es que hubo un error
        if (err) { return res.status(501).json(err); }
        // Luego si el primer y segundo paramentro son null es por que hubo un con el correo ingresado
        if (!user) { return res.status(501).json(info); }
        // Si el segundo paramentro es un usuario es porque fue registrado exitosamente en la base de datos
        if(user.tipo == 'Estudiante') {
            Estudiante.findById(user.idUsuario, (err, estudiante) => {
                if(err) { console.log(err); return res.status(501).json(err); }
                return res.status(200).json( { "token": user.generateJwt(estudiante.nombre, estudiante.sexo, estudiante.fechaNacimiento, estudiante.grado, null) });
            });
        } else {
            Docente.findById(user.idUsuario, (err, docente) => {
                if(err) { console.log(err);return res.status(501).json(err); }
                return res.status(200).json( { "token": user.generateJwt(docente.nombre, docente.sexo, docente.fechaNacimiento, null, docente.especialidad) });
            });
        }
    })(req, res, next);
}

userCtrl.put_avatar = async (req, res, next) => {
    console.log(req.body);
    await User.findByIdAndUpdate(req.body._id, { $set: {avatar: req.body.avatar}}, (err, user) => {
        if (err) { return res.status(501).json(err); }
        return res.status(200).json({ message: "Avatar User Saved", "token": user.generateJwt(), "user": user });
    });
}

userCtrl.loginUser = (req, res, next) => {
    passport.authenticate('local-signin', { session: false }, (err, user, info) => {
        // Si en el primer paramentro retornado del done() no es null es que hubo un error
        if(err) { return res.status(501).json(err); }
        // Luego si el primer y segundo paramentro son null es por credenciales incorrectas
        if(!user) { return res.status(501).json(info); }
        // Si el segundo paramentro es un usuario es porque las credenciales son correctasuser.generateJwt();
        if(user.tipo == 'Estudiante') {
            Estudiante.findById(user.idUsuario, (err, estudiante) => {
                if(err) { console.log(err); return res.status(501).json(err); }
                return res.status(200).json( { "token": user.generateJwt(estudiante.nombre, estudiante.sexo, estudiante.fechaNacimiento, estudiante.grado, null) });
            });
        } else {
            Docente.findById(user.idUsuario, (err, docente) => {
                if(err) { console.log(err);return res.status(501).json(err); }
                return res.status(200).json( { "token": user.generateJwt(docente.nombre, docente.sexo, docente.fechaNacimiento, null, docente.especialidad) });
            });
        }
    })(req, res, next);
}

userCtrl.getUsers = async (req, res, next) => {
    await User.find((err, users) => {
        if(err) { console.log(err); return res.status(501).json(err) }
        return res.status(200).json(users);
    });
}

userCtrl.logoutUser = (req, res, next) => {
    req.logout();
    res.status(200).json({ message: "Logout Success" });
}

module.exports = userCtrl;