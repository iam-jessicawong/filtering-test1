function checkArrayString(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const same = [];
  
  for ( let item of set1 ) {
    if ( set2.has(item) ) {
      set1.delete(item);
      set2.delete(item);
      same.push(item);
    }
  }
  
  const different = [...set1, ...set2];
  console.log("Same = ", same);
  console.log("Different = ", different);
}

const array1 = ["Mangga", "Apel", "Melon", "Pisang", "Sirsak", "Tomat", "Nanas", "Nangka", "Timun", "Mangga"];
const array2 = ["Bayam", "Wortel", "Kangkung", "Mangga", "Tomat", "Kembang Kol", "Nangka", "Timun"];

checkArrayString(array1, array2);