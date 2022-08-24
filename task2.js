//2. membuat program menghitung rata-rata nilai UN


const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 180;

let rata_rata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

if (
  typeof mtk !== "number" ||
  typeof bahasaIndonesia !== "number" ||
  typeof bahasaInggris !== "number" ||
  typeof ipa !== "number"
) {
  console.log("Input harus berupa angka");
} else if (rata_rata < 0 || rata_rata > 100) {
  console.log("Input nilai salah");
} else if (rata_rata >= 90 && rata_rata <= 100) {
  console.log(`Rata-rata ${rata_rata} 
  Grade = A`);
} else if (rata_rata >= 80 && rata_rata <= 89) {
  console.log(`Rata-rata ${rata_rata} 
  Grade = B`);
} else if (rata_rata >= 70 && rata_rata <= 79) {
  console.log(`Rata-rata ${rata_rata} 
  Grade = C`);
} else if (rata_rata >= 60 && rata_rata <= 69) {
  console.log(`Rata-rata ${rata_rata} 
  Grade = D`);
} else if (rata_rata >= 0 && rata_rata <= 59) {
  console.log(`Rata-rata ${rata_rata} 
  Grade = E`);
}
