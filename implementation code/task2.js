// 2. Mengubah huruf vokal 

const ubahHurufVokal = (string) => {
  if(string === "number" || string === null || string === undefined){
    return `Masukan harus berupa kata`
  }
  const newString = string.toLowerCase().replace(/["a,i,u,e,o"]/g, "o")
    return newString;
  }

console.log(ubahHurufVokal("Jakarta")) 