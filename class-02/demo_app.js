var movieVillians=['Darth Vader','Scar', 'Ursula', 'Jafaar', 'Sid'];

//to check for villian within array
console.log(movieVillians[0], 'Darth Vader')

//to remove villian from the array
console.log(movieVillians.pop());

//to give the length of the villians
console.log(movieVillians.length);

//to add to the array
console.log(movieVillians.push('Voldemort'));

//to check to see if array contains name-- results will give true or false statement
console.log(movieVillians.includes('Red'));

//another way to check if array contains name -- results will give number if present
movieVillians.indexOf('Red',"0");
console.log(movieVillians);

//use splice if you want to put Sid as index one -- it replaces 0 elements at index 1
movieVillians.splice(1,0,'Sid');
movieVillians;

