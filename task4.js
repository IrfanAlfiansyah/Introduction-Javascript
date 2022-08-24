// 4.  a. mengubah suatu data dengan spread operator 
//     b. Mengambil data "street dan city" menggunakan destructuring    


let data = {
  id: 1,
  name: "leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

let newData = {
  ...data,
  name: "Irfan Alfiansyah",
  email: "irfan.alfiansyah1995@gmail.com",
  hobby: ["Badminton", "Swimming", "Games"],
};
console.log(newData);

let { street, city} = data.address;
console.log(street);
console.log(city);
