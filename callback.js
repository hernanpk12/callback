console.log("iniciando...");

function ejertcutarPrograma(FinalizarPrograma){
    setTimeout(function(){
        console.log("procesando...");
     FinalizarPrograma();
    },5000);
}

ejertcutarPrograma(function(){
    console.log("terminando...")
})