function inverterString(str) {
    let invertedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedStr += str[i];
    }
    return invertedStr;
}

// Exemplo de uso:
const minhaString = "Olá, mundo!";
const stringInvertida = inverterString(minhaString);
console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);
