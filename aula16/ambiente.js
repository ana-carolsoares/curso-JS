let num = [1,5,9,4]

num.push(65)
num.length
num.sort()
console.log(`O vetor tem ${num.length} posições` )
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(num)
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else {
    console.log(`O valor 8 está na posição ${pos}`)
}
