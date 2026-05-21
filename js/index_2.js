let intervalo = null;

function vermelho(){
    const img = document.getElementById('img');
    const img_vermelho = '../img/vermelho.png';
    img.src = img_vermelho;        
}

function amarelo(){
    const img = document.getElementById('img');
    const img_amarelo = '../img/amarelo.png';
    img.src = img_amarelo;
}

function verde(){
    const img = document.getElementById('img');
    const img_verde = '../img/verde.png';
    img.src = img_verde;   
}

function auto(){
        
    const img = document.getElementById('img');

    let cores = [
        '../img/vermelho.png',
        '../img/amarelo.png',
        '../img/verde.png'
    ];


    let i = 0;
    intervalo = setInterval(() => {
        img.src = cores[i];
        
        i++;
        if(i >= cores.length){
            i = 0;
        }
    }, 1000);
}

function pararAuto(){

    clearInterval(intervalo);

    intervalo = null;
}
// 