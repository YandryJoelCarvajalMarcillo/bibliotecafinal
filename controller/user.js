

const conexion = require('../databases/db');
function User() {};

User.prototype = {
    // Find the user data by id or username.
    find : function(user = null, callback)
    {
        // if the user variable is defind
        if(user) {
           
            // if user = number return field = id, if user = string return field = username.
         
        }
        // prepare the sql query
        let sql = `SELECT * FROM usuarios WHERE Correo = ?`;


        conexion.query(sql, user, function(err, result) {
            if(err) throw err

            if(result.length) {
                callback(result[0]);
            }else {
                callback(null);
            }
        });
    },

    
   

    login : function(username, password, callback)
    {
        // find the user data by his username.
        this.find(username, function(user) {
            // if there is a user by this username.
            if(user) {
                // now we check his password.
                console.log(password);
                if(password==user.CONTRASENA) {
                    console.log(user); 
                    // return his data.
                    callback(user);
                   
                    return user ;
                }  
            }
            // if the username/password is wrong then return null.
            callback(null);
        });
        
    }

}

module.exports = User;