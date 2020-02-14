const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

/*passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});*/

/**
 * Crea un usuario nuevo en la base de datos
 */
passport.use('local-signup', new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    session: false,
    // Con este parametro en true nos deja obtener los datos que vienen en el req
    passReqToCallback: true
}, async (req, username, password, done) => {
    await User.findOne( { email: req.body.email }, async (err, user) => {
        // Revisa si ocurrio un error en la consulta del find()
        if (err) { return done(err); }
        // Si el find() encuentra un usuario es que el correo ya esta siendo usuado 
        if (user) { return done(null, false, { message: "The email is already taken" }); }
        // Si no encontro nada todo esta en orden para registrarlo como nuevo usuario
        const newUser = new User(req.body);
        newUser.password = newUser.encryptPassword(req.body.password);
        await newUser.save((err, user) => {
            // Revisa si ocurrio un erro en la ejecucion del save()
            if (err) { console.log(err); return done(err); }
            // Si no el usuario fue registrado exitosamente returnando el usuario al userCtrl
            console.log(user.generateJwt());
            return done(null, user);
        });
    });
}));

passport.use('local-signin', new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    session: false,
    // Con este parametro en true nos deja obtener los datos que vienen en el req
    passReqToCallback: true
}, (req, username, password, done) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        // Revisa si ocurrio un error en la consulta del find()
        if (err) { return done(err); }
        // Si el find() no encuentra un usuario es que el correo ingresado no esta registrado
        if (!user) { return done(null, false, { message: "No User Found" }); }
        // Si existe el usuario valida si ingreso la contraseña correcta
        if(!user.comparePassword(req.body.password)) {
            return done(null, false, { message: "Incorrect Password" });
        }
        // Retorna el usuario si sus credenciales son correctas
        return done(null, user);
    });
}));

/*let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "123";
opts.algorithms = ["HS256"];*/

passport.use('jwt', new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "123",
    algorithms: ["HS256"]
}, (jwt_payload, done) => {    
    User.findOne({ _id: jwt_payload._id }, (err, user) => {
        console.log("Payload: ", jwt_payload);
        if(err) { console.log(err); return done(err, false); }
        if(!user) { console.log("!user"); return done(null, false); }
        return done(null, user);
    });    
}));