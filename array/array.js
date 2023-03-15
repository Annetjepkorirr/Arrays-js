// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]

const arr1 = [3,7,34,90,12];
const arr2 = [true,"green","where",12,56];
let a = arr1[arr1.length -1];
let b = arr2[arr2.length-1];
console.log(a);
console.log(b);

// Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Bird", "Snake", "Dog"];
const myPets = ["Cow","Bird","Snake","Dog"];
const pets = myPets.join()
console.log(pets)

// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [-5,-9,5,3,2,-3,6,8,4,1];
var y = arr3.sort();
console.log(y)

// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
var categories = [...new Set(arr)];
console.log(categories)

var duplicate = arr => arr.filter((item,index)=>arr.indexOf(item)!==index)
var findDupli = duplicate(arr);
console.log(findDupli);

// Write a JS script to search for the following word in the array.
// "way"
// If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4];
 var arr4 = arr5.indexOf("way")
if(arr5.indexOf("way")!==-1)
{
    console.log(arr4)
}
else
{
    console.log("the search word was not found")
}


// Write a JS script to sort the following string
let word = "sevink"
console.log(word.split(``).sort().join(``))


