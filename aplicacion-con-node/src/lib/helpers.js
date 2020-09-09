const bcrypt = require('bcryptjs');

helpers = {};
helpers.encriptarContraseña = async(contraseña)=>{
    try {
        const salt = await bcrypt.genSaltSync(10);
        const contraseñaFinal = await bcrypt.hash(contraseña,salt);
        return contraseñaFinal;
        
    } catch (error) {
        console.log(error);
    }
};

helpers.compararContraseña = async(contraseña,contraseñaGuar)=>{
    try {
        
        return await bcrypt.compare(contraseña,contraseñaGuar);
    } catch (error) {
        console.log(error);
    }
};

module.exports = helpers;