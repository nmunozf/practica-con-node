//para proteger rutas que deben ver solo usuarios registrados
module.exports = {
    isLoggedIn (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/signin');
    },

    isNotLoggedIn(req,res,next){
        if( !req.isAuthenticated() ){
            return next();
        }else{
            return res.redirect('/profile');
        }
    }
};