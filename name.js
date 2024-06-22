// // //question number:1
function celsiusTOFahrenheit(celsius){
      
      var fahrenheit =(celsius *1.8)+32;
return fahrenheit;

};
console.log(celsiusTOFahrenheit(0));
console.log(celsiusTOFahrenheit(25));

// // //question number:2

// function isEvan(num){
//    var isEvan  =   num % 2 ==0;
//      return   isEvan;
// }

// console.log(isEvan(4));
// console.log(isEvan(7));

// // // question number:3

// function sum(a,b){
//       var sum =a + b;
//       return sum;
// }
// console.log(sum(3,4));
// console.log(sum(10,20));

// // // question number:4

// function findSmallestNum(arr){
      
//       var  findSmallestNum = Math.min.apply(null,arr);
//       return findSmallestNum;
// }
// console.log(findSmallestNum([3,5,1,9]));
// console.log(findSmallestNum([-1,-5,0,10]));

// // // question number:5


// function findSmallestNum(arr){
// var vowel_list ="aeiouAEIOU";
// var vowel_counts =0;
// for(var i=0;i<arr.length;i++){
//       if(vowel_list.indexOf(arr[i])!==-1){
//             vowel_counts +=1;
//       }
// }

// return vowel_counts;


// }

// console.log(findSmallestNum("hello world"));
// console.log(findSmallestNum("javascript"));


// //  // question number:6

//  function getFirstElement (arr){
//      return arr[0];
//  }
// console.log(getFirstElement([1,2,3]));
// console.log(getFirstElement(['"a"',"b","c"]));


// // // question number:7




// function isArray(arr){

//       return Array.isArray(arr);
// }
// console.log(isArray([]));
// console.log(isArray(1,2,3));



// // // question number:8

// function factorial(num){
//       if(num===0||num===1)return 1;
//       return num*factorial(num-1);
// }
// console.log(factorial(5));
// console.log(factorial(7));
// // // // question number :9

// function reverseString(str){
//    return str.split('').reverse().join('');

// }
// console.log("hello");
// console.log("world");

// // //question number:10
// function toLowerCast(str){
//       return str.toLowerCast();
// }
// console.log("HELLO WORLD");
// //question number:11
// function stringLength(str){
//       return str.length;
// }
// console.log(stringLength("hello"));
// console.log(stringLength("world"));


// // // // question number :12
// function margeArray(arr1,arr2){
//       return arr1.concat(arr2);
// }
// console.log(margeArray([1,2,3],[4,5,6]));
// console.log(margeArray(['a','b'],['c','d']));


// // //question number:13

// function getLastElement(arr){
//       if(arr.length ===0){
//             return undefined;
//       }


//       return arr[arr.length -1] ;
// }
// console.log(getLastElement([1,2,3]));
// console.log(getLastElement(['a','b','c']));


// //question number :14
// function getFirstChar(str){
//       if(str.length === 0){
//             return '';
//       }
//       return str[0];
// }
// console.log(getFirstChar("hello"));
// console.log(getFirstChar("world"));



// // // question number :15
//  function sumArray (arr){
//   return arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);

//  }

// console.log(sumArray([1,2,3,4]));
// console.log(sumArray([-1,-2,-3,-4]));
// console.log(sumArray([1.5,2.5,3.5]));




































































