const jwt = require('jsonwebtoken');

const generateJWT = ( uid , name  ) =>{

    return new Promise((resolve, reject) => {
        
        if( !uid || !name ){
            reject('el uid o el name no han sido enviados')
        }

        const payload = {uid , name};

        jwt.sign(payload , process.env.PRIVATE_KEY , { expiresIn : '2h'} , ( error , token ) => {
            
            if(error){
                console.log(error);
                reject('No se pudo generar el token');
            
            }else{

                resolve(token);
            }

        })

    })

}

module.exports = {
    generateJWT
}