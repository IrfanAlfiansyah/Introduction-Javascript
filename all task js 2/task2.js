// //2. Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan 
// callback function. 

const searchName = (search, limit, cb) => {
  const names = ["Abigail", "Alexandra", "Alison", "Amanda",
  "Angela", "Bella", "Carol", "Caroline",
  "Carolyn", "Deirdre", "Diana", "Elizabeth",
  "Ella", "Faith", "Olivia", "Penelope"]

  const find = [];
  for (let i = 0; i < names.length; i++){
    if (find.length >= limit){
      break;
    }
    if (cb(search, names[i])){
      find.push(names[i]);
    }
  }
  return find;
};

const searchString = (search, name) => {
  let isFound = false;
  for (let i =0; i < name.length; i++){
    if (search.toLowerCase() === name.slice(i, i +  search.length).toLowerCase()){
      isFound = true;
      break;
    }
  }
  return isFound;
}
console.log(searchName("an", 3, searchString));