let nome = ['kleberson', 'kaw', 'cleusa', 'kleber', 'thor']
nome [4] = 'bolinha'
nome[5] = 'thor'

// exibe todos os elementos do vetor
// console.log(nome)

// console.log(nome[1])

// tamanho do vetor
// console.log('tamanho do vetor' + nome.length)

//inserindo elemento na ultima posicao do vetor
nome.push('kaique')
nome.push('sonic')
nome.push('lendario')

//inserindo elementos no inicio da lista
nome.unshift('luiza')
nome.unshift('carla')

//retirada de elemento, ultimo, o bom é que da para guardar a variavel, removida
let removido = nome.pop()

// remove do inicio
let primeiraRemocao =  nome.shift()

//removendo elento do vetor com indice
delete nome[2]

console.log(nome)