//3. Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1

//A. penggunaan .then .catch

const anggotaWeb7 = (nama) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataAnggota = ["Dhohir", "Bill", "Ikram", "Dwiki", "Aziz", "Fadil",
        "Irfan", "Made", "Vito", "Fahmi", "Rosid", "Rizky","Abdul","Kevin","Ridho","Wahyudi"]
      let cek = dataAnggota.find((item) => {
        return item === nama
      })
      if (cek) {
        resolve(`Benar, ${cek} adalah anggota Web - 10`)
      } else {
        reject(new Error("Bukan Anggota Web - 10"))
      }
    }, 100)
  })
}

anggotaWeb7("irfan")
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

//B. penggunaan try catch  

const buahBuahan = (buah) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataBuah = ["anggur", "jeruk", "pisang", "semangka", "kelapa", "nanas", "alpukat", "melon", "mangga"]
      let cek = dataBuah.find((item) => {
        return item === buah
      })
      if (cek) {
        resolve(`Ya, ${buah} adalah jenis buah-buahan`)
      } else {
        reject(new Error("Bukan Buah-buahan"))
      }
    }, 100)
  })
}

const masukanBuah = async (buah) => {
  try {
    const resultBuah = await buahBuahan(buah);
    console.log(resultBuah);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Proses selesai")
  }
};
masukanBuah("nanas");