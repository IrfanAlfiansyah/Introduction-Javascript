//3. Buatlah fungsi dengan parameter yang diberikan seperti pada soal.

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (typeof nilaiAwal !== "number", typeof nilaiAkhir !== "number"){
    return "Input harus berupa number"
  }
  if (!Array.isArray(dataArray)){
    return "Nilai harus berupa array"
  }
  if (nilaiAwal > nilaiAkhir){
    return "Nilai akhir harus lebih besar daripada nilai awal"
  }
  if (dataArray.length < 5){
    return "Jumlah angka dalam data array harus lebih dari 5"
  }
  const search = dataArray.filter(function (element){
    if (element > nilaiAwal && element < nilaiAkhir){
      return true;
    }
    return false;
  });
  const urutSearch = search.sort((a, b) => a - b)
  return urutSearch;
}
console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(4, 17, [2, 25, 4]));
console.log(seleksiNilai(5, 20,[1, 13, 6, 14, 10, 9, 11]));