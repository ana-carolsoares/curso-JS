var elementos = [];
var topo = -1;
const max = 10;

function push(num){
    if(topo < max){
        topo++;
        elementos[topo] = num;
    } else{
        console.log('Pilha está cheia!')
    }
}
function estaVazia(){
    return topo == -1
}

function pop(){
    if (topo != -1){
        let num = elementos[topo];
        topo--;
        return num;
    } else {
        console.log('Pilha está vazia!');
    }
}

// ---- parte do código que usa a pilha --- //

var numDecimal = 10;
var resto;

console.log('Hora de empilhar...');

while(numDecimal != 0){
    resto = parseInt(numDecimal % 2);
    push(resto);
    console.log(resto);
    numDecimal = parseInt(numDecimal / 2);
}

console.log('Desempilhando tudoooo....');

while(!estaVazia()){
    console.log(pop());
}