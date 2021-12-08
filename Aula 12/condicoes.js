var hora = new Date()
var agora = hora.getHours()

if (agora < 6 || agora == 24) {
    console.log(`São ${agora} horas. Boa madrugada`)
} else if (agora < 12) {
    console.log(`São ${agora} horas. Bom dia`)
} else if (agora < 18) {
    console.log(`São ${agora} horas. Boa tarde`)    
} else if (agora < 24){
    console.log(`São ${agora} horas. Boa noite`)
} else {
    console.log(agora)
    console.log(`[ERRO]`)    
}