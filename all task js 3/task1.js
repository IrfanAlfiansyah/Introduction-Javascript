//1. Buatlah samungan program menggunakan then catch dan try catch

const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"]
      let cek = dataDay.find((item) => {
        return item === day
      })
      if (cek) {
        resolve(cek)
      } else {
        reject(new Error("Hari ini bukan hari kerja"))
      }
    }, 3000)
  })
}

//a. penggunaan .then .catch
cekHariKerja("minggu")
  .then((result) => console.log(`Hari ${result} adalah hari kerja`))
  .catch((error) => console.log(error.message)); 


//b. penggunaan try catch
const masukanHari = async (day) => {
    try {
      const resultDay = await cekHariKerja(day);
      console.log(`Hari ${resultDay} adalah hari kerja`);
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log("Proses selesai")
    }
  };
masukanHari("selasa");

/* Pada promise terdapat parameter resolve, dan reject, resolve akan menangkap hasil yang terpenuhi,
 sedangkan rejected akan menangkap hasil error.
*result pada resolve akan diteruskan ke .then dan try untuk dieksekusi
*result pada rejcet akan diteruskan ke .catch dan catch untuk menampilkan pesan errror. 
*async digunakan untuk membuat fungsi asynchronous seolah olah berjalan synchronous
*await akan menunggu doAsync berubah menjadi nilai resolve atau nilai reject
*finally akan menjalankan apapun yang terjadi pada blok try, baik itu error atau tidak */