// 1. Deteksi palindrom

const cekPalindrom = (string) => {
  let len = string.length
  for (i = 0; i < len; i++){
    if(string[i].toLowerCase() !== string[len - 1 - i].toLowerCase())
      return `${string} Bukan Palindrom`
  }
  return `${string} merupakan palindrom`
} 
console.log(cekPalindrom("malaM")); 
