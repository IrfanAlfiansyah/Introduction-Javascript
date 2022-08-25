//Task 1. Buat dan jelaskan method bawaan javascript built-in function beserta contoh penggunaannya.

//1. method Pop. yakni method yang digunakan untuk menghapus item terakhir dari sebuah array.
const id = ["Saya", "belajar", "javascript"];
id.pop();
console.log(id);

//2. method unshift. yakni method yang digunakan untuk menambah item baru diawal sebuah array.
const id2 = ["Saya", "belajar", "javascript"];
id2.unshift("sekarang");
// console.log(id2);

//3. method shift. yakni method yang berkebalikan dari method unshift, digunakan untuk menghapus item
// pertama dari sebuah array.
const id3 = ["Saya", "belajar", "javascript"];
id3.shift();
// console.log(id3);

//4. method slice. yakni method yang digunakan untuk memilih satu atau beberapa item dari sebuah array. 
// cara menggunakannya yakni dengan memasukan 2 parameter (indexAwal, indexAkhir). dimana indexAwal merupakan
// item pertama yang ingin disalin, dan indexAkhir merupakan batas akhir dalam pemilihan namun tidak disertakan.  
const fruits = ["apel", "mango", "orange", "watermelon"];
const newFruits = fruits.slice(1,3);
// console.log(newFruits);

//5. method splice. yakni method yang digunakan untuk menambahkan, menghapus atau mereplace item kesebuah array
// cara menggunakannya yakni dengan memasukan 2 parameter (index, jumlahItem) dimana index merupakan item ke-x
// yang ingin dieksekusi, sedangkan jumlahItem merupakan banyaknya item yang ingin dieksekusi
const fruits2 =["apel", "mango", "orange", "watermelon"];
fruits2.splice(1,3);
// console.log(fruits2);
const fruits3 =["apel", "mango", "orange", "watermelon"];
fruits3.splice(2, 1, "strawberry")
// console.log(fruits3);

/*6. method find. yakni method yang digunakan untuk mencari item tertentu 
di dalam array yang sesuai dengan fungsi pengujian yang disediakan.*/
const users = [
  {
    name : "Budi",
    age : 20,
    gender : "male",
  },{
   name : "Andi",
   age : 17,
   gender : "male",
  },{
   name : "Dina",
    age : 23,
    gender : "female",
  } 
 ]
 const search = users.find((user) => user.gender === "female" );
//  console.log(search);
 
 /*7. method every. yakni method array yang digunakan untuk menguji semua item 
 didalam array mengembalikan nilai truthy. */
  const siswa = [
  {
    name : "Budi",
    nilai : 90,
  },{
    name : "Andi",
    nilai : 80,
  },{
    name : "Dina",
    nilai : 100,
  } 
 ]
 const siswaLulus = siswa.every((siswa) => siswa.nilai >=80)
//  console.log(siswaLulus);
 
 /*8. method forEach. yakni method array yang digunakan untuk mengeksekusi fungsi 
 yang disediakan sekali untuk setiap elemen array.*/
 const numbers = [1,3,4,6,5,9]
 numbers.forEach((elemen, i) => {numbers[i] = elemen * 2});
//  console.log(numbers);
 
 /*9. includes. yakni method array yang digunakan untuk mengecek apakah 
 sebuah array mengandung nilai tertentu atau tidak, mengembalikan nilai true jika ya, false jika tidak.*/
 const fruits4 = ["mangga", "jeruk", "apel", "nanas"]
 const adaNanas = fruits4.includes("nanas") 
 const adaMelon = fruits4.includes("melon")
//  console.log(adaNanas);
//  console.log(adaMelon);
 
 /*10. concat. yakni method array yang digunakan untuk menggabungkan dua array 
 atau lebih menjadi satu array baru.*/
 const vegetables = ["Bayam", "Sawi", "Kubis"]
 const foods = vegetables.concat("Apel", "Cokelat", "kentang");
//  console.log(foods);