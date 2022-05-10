class DabG{
    constructor(titular, destinatario, objeto){
        this.titular = titular;
        this.destinatario = destinatario;
        this. objeto = objeto;
    }
}

function update(){
    let titular = document.getElementById("idTitular").value;
    let destinatario = document.getElementById("idDestinatario").value;
    let objeto = document.getElementById("idObjeto").value;
    let dabg = new DabG(titular, destinatario, objeto);
    
    texto = "En el sentido que " + dabg.titular + 
    " tiene frente al "+ dabg.destinatario +
    " un derecho a " + dabg.objeto + ". El objeto del derecho " +
    dabg.objeto + " consiste en la conducta que el destinatario "+ 
    dabg.destinatario + " debe ejecutar.";

    document.getElementById("idTexto").innerHTML = texto;
}