// 4. Buatlah sebuah function yang menerima parameter hanya deret 
// Angka dan menghasilkan output seperti pada soal

const divideAndSort = (num) => {
  if (typeof num !== "number"){
    return"Data harus berupa number"
  }
  let angka = num.toString().split(0);                             
  let newNum = "";                                                 
  
  for (let i = 0; i < angka.length; i++) {
    newNum = newNum + angka[i].split("").sort().join("");      
  }
  return newNum
}
console.log(divideAndSort(5956560159466056));