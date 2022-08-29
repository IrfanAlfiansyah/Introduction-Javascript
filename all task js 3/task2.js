//2. Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map

const getMonth = (callback) => {
  setTimeout(() => {
    let error = false
    let month = ["januari", "februari", "maret", "april", "mei", "juni",
      "juli", "agustus", "september", "oktober", "november", "desember"]
    if (!error) {
      callback(null, month)
    } else {
      callback(new Error("Sorry data not found"), [])
    }
  }, 100);
}

const showMonth = (error, month) => {         //deklarasi callback function dengan nama showMonth
  if (error !== null) {                       //jika error tidak sama dengan null, maka akan menampilkan error message
    console.log(error.message)
    return;
  } month.map(getMonth => {                      //mengeksekusi method .map
    console.log(getMonth);
  })
}

getMonth(showMonth);