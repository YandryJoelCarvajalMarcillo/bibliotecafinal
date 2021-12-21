const express = require('express');
const crud = require('./controller/crud.js');
const User = require('./controller/user.js');
const user = new User();
const router = express.Router();
const path = require('path');
const notifier = require('node-notifier');
const fs = require('fs');
const json_books = fs.readFileSync('datos.json', 'utf-8');
let books = JSON.parse(json_books);


const conexion = require('./databases/db');

router.get('/', (req, res)=>{     
    
    res.sendFile(path.join(__dirname, '/index.html'));
})
/**
 * Ruta de html
 *  */
router.get('/registro.html', (req,res)=>{
    res.sendFile(path.join(__dirname, './registro.html'));
    
})
router.get('https://kit.fontawesome.com/41bcea2ae3.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '.https://kit.fontawesome.com/41bcea2ae3.js'));
    console.log("registro");
})
router.get('/inicio.html', (req,res)=>{
    res.sendFile(path.join(__dirname, '/inicio.html'));
    
})
router.get('/sesion.html', (req,res)=>{
    res.sendFile(path.join(__dirname, '/sesion.html'));
   
})
router.get('/quienes.html', (req,res)=>{
    res.sendFile(path.join(__dirname, '/quienes.html'));
    
   
})
router.get('/index.html', (req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
    
   
})
router.get('/formu.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/formu.html'));
  });
  router.get('/rlibro.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/rlibro.html'));
  });
  router.get('/ficha.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/ficha.html'));
  });
  router.get('/libro.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/libro.html'));
  });
  router.get('/somos.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/somos.html'));
  });
  router.get('/blog.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/blog.html'));
  });

/**
 * Ruta de css
 *  */
router.get('/css/principal.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/principal.css'));
   
})
router.get('/css/principal2.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/principal2.css'));
   
})
router.get('/css/articulos.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/articulos.css'));
 
})
router.get('/css/perfil.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/perfil.css'));
 
})
router.get('/css/blog.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/blog.css'));
 
})
router.get('/css/ficha.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/ficha.css'));
 
})
router.get('/css/icons.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/icons.css'));
 
})
router.get('/css/book-container.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/book-container.css'));
 
})
router.get('/css/navbar.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/navbar.css'));
 
})
router.get('/css/reset.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/reset.css'));
 
})
router.get('/css/rlibro.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/rlibro.css'));
 
})
router.get('/css/somos.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/somos.css'));
 
})
router.get('/css/styles_ficha.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/styles_ficha.css'));
 
})
router.get('/css/style.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/style.css'));
 
})
router.get('/css/styles_ini.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/styles_ini.css'));
 
})
router.get('/css/cookie.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/cookie.css'));
    
    
    router.get('/css/Inicio.css', (req,res)=>{
        res.sendFile(path.join(__dirname, '/css/Inicio.css'));
       
    })
    
    router.get('/css/diseño.css', (req, res) => {
        res.sendFile(path.join(__dirname, '/css/diseño.css'));
      });
      router.get('/css/grupo.css', (req, res) => {
        res.sendFile(path.join(__dirname, '/css/grupo.css'));
      });
    
    
})



/**
 * Ruta de javascript
 *  */
router.get('/js/mostar.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '/js/mostar.js'));
    
})
router.get('/js/Inicio.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '/js/Inicio.js'));
   
})

router.get('/js/form.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '/js/form.js'));
    
   
})
router.get('/js/rlibro.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '/js/rlibro.js'));
    
   
})
router.get('/js/somos.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '/js/somos.js'));
    
   
})
router.get('/js/script.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '/js/script.js'));
    
   
})
router.get('/js/transaccion.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '/js/transaccion.js'));
    
   
})
router.get('/js/buscar.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '/js/buscar.js'));
   
})
/**
 * Ruta de imagenes
 *  */
 router.get('/img/1.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/1.jpg'));
   
})
router.get('/img/2.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/2.jpg'));
   
})
router.get('/img/3.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/2.jpg'));
   
})
router.get('/img/4.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/4.jpg'));
   
})
router.get('/img/5.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/5.jpg'));
   
})
router.get('/img/6.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/6.jpg'));
   
})
router.get('/img/7.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/7.jpg'));
   
})

router.get('/img/img6.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/img6.jpg'));
   
})
router.get('/img/img5.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/img5.jpg'));
   
})
router.get('/img/img4.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/img4.jpg'));
   
})
router.get('/img/img3.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/img3.jpg'));
   
})
router.get('/img/img2.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/img2.jpg'));
   
})
router.get('/img/img1.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/img1.jpg'));
   
})
router.get('/img/img1.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/img1.jpg'));
   
})
router.get('/img/avatar.png', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/avatar.png'));
   
})

router.get('/img/a1.png', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/a1.png'));
   
})
router.get('/img/a2.png', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/a2.png'));
   
})
router.get('/img/StudetMaleAvatar.png', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/StudetMaleAvatar.png'));
   
})
router.get('/img/a3.png', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/a3.png'));
   
})

router.get('/img/close.png', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/close.png'));
   
})






router.get('/app', function (req, res) {
    res.render('app', { 
        usuario: req.session.user
    });
});
router.get('/formu.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/formu.html'));
  });
 
  

  router.post('/formu.html', (req, res) => {

    const { cedula, nombre, apellido, telefono, comentarios,email,contraseña,contraseña_a } = req.body;
  
    if (!cedula || !nombre || !apellido || !telefono || !email) {
        notifier.notify('¡Falta campo para guardar en el Json!');
        res.sendFile(path.join(__dirname, '/formu.html'));
      return;
    }
  
    var newBook = {
     
        cedula,
        nombre,
        apellido,
        telefono,
        comentarios,
        email,
        contraseña,
        contraseña_a
    };
  
    // add a new book to the array
    books.push(newBook);
  
    // saving the array in a file
    const json_books = JSON.stringify(books);
    console.log(json_books);
    fs.writeFileSync('datos.json', json_books, 'utf-8');
  
    res.redirect('/');
    notifier.notify('Se guardo los datos en el Json');
  });










router.post('/save', crud.save);
router.post('/login', (req, res, next) => {
    // The data sent from the user are stored in the req.body object.
    // call our login function and it will return the result(the user data).
    
    user.login(req.body.Correo, req.body.contraseña, function(result) {
       
        if(result) {
            // Store the user data in a session.
           
            notifier.notify('¡Sesion iniciado correctamente!');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            
            // redirect the user to the home page.
            res.sendFile(path.join(__dirname, '/index.html'));
           
        }else {
            // if the login function returns null send this error message back to the user.
            notifier.notify('Username/Password incorrect!');
            res.sendFile(path.join(__dirname, '/sesion.html'));
        }
    })

});


module.exports = router;