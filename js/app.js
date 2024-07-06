
const letras = ['B', 'I', 'N', 'G', 'O'];
const B = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const I = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
const N = [37, 38, 39, 40, 41 ,42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54];
const G = [55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72];
const O = [73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

let B_mark = []
let I_mark = []
let N_mark = []
let G_mark = []
let O_mark = []

gerarTabela();

function gerarTabela(){
    zerarTabelas();
    let tabela = document.getElementById('tabela-conteudo');
    let conteudo = '';
    for(let i = 0; i < 5; i++){  
        conteudo += '<div style="display:flex;width:100%;justify-content: space-between;">'      
        for(let j = 0; j < letras.length; j++){           
            if(i === 2 && j === 2){
                conteudo += `<div class="nao__selecionado" style="color:#20c9bb">&otimes;</div>`;
            } else {
                let num = getNumero(letras[j]);
                conteudo += `<div id="${letras[j]+num}" onclick="marcarnumero('${letras[j]}','${num}');" class="nao__selecionado">${num}</div>`;
            }
        }     
        conteudo += '</div>'   
    }
    tabela.innerHTML = '';
    tabela.innerHTML = conteudo;
}

function marcarnumero(letra, numero) {
    
    let element = document.getElementById(`${letra+numero}`);
    
    if(element.classList.contains('nao__selecionado')){
        
        element.classList.remove('nao__selecionado');
        element.classList.add('selecionado');
    } else {
        
        element.classList.remove('selecionado');
        element.classList.add('nao__selecionado');
    }    
}

function getNumero(letra){
    
    if(letra == 'B'){
        return sorteaNumeroB();
    } else if(letra == 'I'){
        return sorteaNumeroI();
    } else if(letra == 'N'){
        return sorteaNumeroN();
    } else if(letra == 'G'){
        return sorteaNumeroG();
    } else{
        return sorteaNumeroO();
    }
}

function zerarTabelas(){
    B_mark = []
    I_mark = []
    N_mark = []
    G_mark = []
    O_mark = []
}

function sorteaNumeroB(){
    while(true) {
        if(B_mark.length == 5){ break;}
        let indice = parseInt(Math.random() * 17 + 1);    
        if(!B_mark.includes(B[indice])){
             B_mark.push(B[indice]);
            return B[indice];
        } 
    }
}

function sorteaNumeroI(){
    while(true) {
        if(I_mark.length == 5){ break;}
        let indice = parseInt(Math.random() * 17 + 1);
        if(!I_mark.includes(I[indice])){
            I_mark.push(I[indice]);
            return I[indice];
        } 
    }
}

function sorteaNumeroN(){
    while(true) {
        if(N_mark.length == 4){ break;}
        let indice = parseInt(Math.random() * 17 + 1);
        if(!N_mark.includes(N[indice])){
            N_mark.push(N[indice]);
            return N[indice];
        }
    }
}

function sorteaNumeroG(){
    while(true) {
        if(G_mark.length == 5){ break;}
        let indice = parseInt(Math.random() * 17 + 1);
        if(!G_mark.includes(G[indice])){
            G_mark.push(G[indice]);
            return G[indice];
        } 
    }
}

function sorteaNumeroO(){
    while(true) {
        if(O_mark.length == 5){ break;}
        let indice = parseInt(Math.random() * 17 + 1);
        if(!O_mark.includes(O[indice])){
            O_mark.push(O[indice]);
        return O[indice];
        } 
    }
}