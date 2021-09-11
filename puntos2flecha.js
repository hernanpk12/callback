let  robarplano=(id,despegarnave)=>{
    if(id>0 && id<=10){
        console.log(`accedimos al plano"
        ${id}`);
        despegarnave(null);
    }else{
        console.log(`Accedimos al plano falso`)
        despegarnave("error");
    }
}

robarplano(15,error=>{
    if(error){
        console.log("devolvete papa")
    }else{
        console.log("arrancando la nave")
    }
}
)