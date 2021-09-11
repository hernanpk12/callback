let datosUsuario= {
    usuario:"pedro",
    password: "123"
}

function conectarConNetflix(datos){
    console.log("procesando la peticion");


    let promesa = new Promise(function(resolve,reject){
        setTimeout(function(){       
            if(datos.usuario==="pedro" && datos.password==="123"){
                resolve ("Bienvenido a neflixt");
               }else{
                  reject("estas Registrado, suscribete");
               }
           },5000)
    })  
    return promesa;


 }
 conectarConNetflix(datosUsuario)
.then(function(respuesta){
    console.log(respuesta);
})
.catch(function(mensaje){
    console.log(mensaje);

})