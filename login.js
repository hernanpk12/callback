let datosUsuario= {
    usuario:"pedro",
    password: "123"
}

function conectarConNetflix(datos,generarRespuesta){
   setTimeout(function(){
       
    if(datos.usuario==="pedro" && datos.password==="123"){
        generarRespuesta(200);
       }else{
           generarRespuesta(204);
       }
   },5000)
}

conectarConNetflix(datosUsuario,function(codigo){
    if(codigo==200){
        console.log("bienvenido a netflix");
        console.log("cargando peliculas");
    }else{
        console.log("no estas Registrado")
    }
})





/*
function netflix(usuario,password){
   if(usuario==datos.usuario && password==datos.password){
        console.log("inicio de sesion valido")
    }else{
        console.log("error")
    }
 }

console.log(netflix("pedro@gmail.com","123"))

*/
