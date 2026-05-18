function main(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    // verificar
    if(nome == "" || altura == "" || peso == ""){
        alert("CONFIRA OS DADOS!!");
    }else{
        const resultado = document.getElementById('resultado');
        const imc = (peso / (altura * altura)).toFixed(2);

        resultado.innerHTML = `${nome} seu IMC é de: ${imc}`;
    }
}







