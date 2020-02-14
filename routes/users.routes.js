const router = require('express').Router();

const userCtrl = require('../controllers/users.controller');
const customMdw = require('../middleware/custom');


router.post('/signup', userCtrl.createUser);
router.post('/signin', userCtrl.loginUser);
router.get('/logout', userCtrl.logoutUser);
router.put('/put_avatar', userCtrl.put_avatar);
router.get('', customMdw.ensureAuthenticated, userCtrl.getUsers);

/*
router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
}));

router.get('/logout', (req, res, next) => {
    req.logout();
    //res.redirect('/');
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    //res.redirect('/')
}
*/

module.exports = router;