let seuNome = 'kleberson dos santos silva e muito bonitao e inteligente'
console.log(seuNome[5])

// template string, forma recomendada de usar a concatenacão
console.log(`${seuNome} seja bem vindo`)

// indexOF (serve para saber onde está essa palavra, onde ela começa)
console.log(seuNome.indexOf('santos'))

// procura a partir do index 4 a palavra 'dos'
console.log(seuNome.indexOf('dos',4))

// tamanho da string conta o tamamho dela
console.log(seuNome.length)

// splice fatia as palavras contidas na variavel, nesse caso eu fatiei por espaço, posso fatiar por letra também
console.log(seuNome.split(' '))

// nesse caso tudo que tem a some
console.log(seuNome.split('a'))

console.log(seuNome.split(' ',2))

