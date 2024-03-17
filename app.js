function encriptar (){
    var texto = document.querySelector("#texto-encriptador").value;

    var textoEncriptado = texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");

    document.querySelector(".encriptado").value = textoEncriptado;
    document.querySelector("#texto-encriptador").value;

}

var btnEn = document.querySelector("#btn-encriptar"); 
btnEn.onclick = encriptar;

function desencriptar (){

    var texto = document.querySelector("#texto-encriptador").value;

    var textoEncriptado = texto.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u"); 

    document.querySelector(".encriptado").value = textoEncriptado;
    document.querySelector("#texto-encriptador").value;



}

var btnDe = document.querySelector("#btn-desencriptar"); 
btnDe.onclick = desencriptar;   
