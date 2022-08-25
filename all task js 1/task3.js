//3. Membuat program dengan perintah printSquare dengan output persegi yang bolong ditengahnya.


function printSquare(num) {
  let kotak = "";
  if (typeof num !== "number") {
    console.log("Data harus number");
  }
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i === 0 || j === 0 || i === num - 1 || j === num - 1) {
        kotak += "* ";
      } else {
        kotak += "  ";
      }
    }
    kotak += "\n";
  }
  return console.log(kotak);
}
printSquare(5);
