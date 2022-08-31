const fazzFood = (harga, voucher, jarak, pajak) => {
  let potonganHarga = 0;
  let ongkir = 0;
  let subTotal = 0;
  let tax = 0;

  if(voucher === "FAZZFOOD50"){
    if(harga >= 50000){
      potonganHarga = harga * 0.5; {
        if(potonganHarga > 50000){
          potonganHarga = 50000;
        }
      }
    } else {
      console.log("\nHarus minimal belanja 50000 untuk dapat menggunakan kode voucher ini")
    }
  }
  if(voucher === "DITRAKTIR60"){
    if(harga >= 25000){
      potonganHarga = harga * 0.6; {
        if(potonganHarga > 30000){
          potonganHarga = 30000;
        }
      }
    } else {
      console.log("\nHarus minimal belanja 25000 untuk dapat menggunakan kode voucher ini")
    }
  }
  if(jarak <= 2){
    ongkir = 5000;
  }
  if(jarak > 2){
    ongkir = 5000 + (jarak - 2) * 3000
  }
  if(pajak === true){
    tax = harga * 0.05
  }
  subTotal = harga - potonganHarga + ongkir + tax

  console.log(`\nHarga = Rp ${harga}`);
  console.log(`Potongan Harga = Rp ${potonganHarga}`);
  console.log(`Layanan Antar = Rp ${ongkir}`);
  console.log(`Pajak = Rp ${tax}`)
  console.log(`Jumlah Total = Rp ${subTotal}`);
}

fazzFood(75000,"FAZZFOOD50",5,true)
fazzFood(45000,"FAZZFOOD50",2,false)
fazzFood(45000,"DITRAKTIR60",12,true)
fazzFood(15000,"DITRAKTIR60",2,false)