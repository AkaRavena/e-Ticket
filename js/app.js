function comprar (){

    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);

    let ingressoPista = parseInt(document.getElementById("qtd-pista").textContent);
    let ingressoCadeiraSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    let ingressoCadeiraInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    if (tipoIngresso == "pista" && quantidade <= ingressoPista){
        document.getElementById("qtd-pista").textContent = ingressoPista - quantidade;
    } else if (tipoIngresso == "inferior" && quantidade <= ingressoCadeiraInferior){
        document.getElementById("qtd-inferior").textContent = ingressoCadeiraInferior - quantidade;
    }else if (tipoIngresso == "superior" && quantidade <= ingressoCadeiraSuperior){
        document.getElementById("qtd-superior").textContent = ingressoCadeiraSuperior - quantidade;
    } else{
        alert ("Infelizmente não há ingressos suficientes para adicionar a sua compra");
    }

    document.getElementById("qtd").value = "";

}