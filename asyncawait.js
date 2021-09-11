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

 async function procesadorPeticion(datosUsuario){
     try{
         let respuesta = await conectarConNetflix(datosUsuario); 
         console.log(respuesta);

     }catch(error){
         console.log(error);

     }
 }

 procesadorPeticion(datosUsuario);