// function duplicateCount(text) {
//       let arry = text.toLowerCase().split("");
//       const findDups = (arry) =>
//         arry.filter((item, index) => arry.indexOf(item) != index);
//       let dups = findDups(arry);
//       let finalDups = new Set(dups)
//       console.log(finalDups.size);
// }
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
    // console.log(text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }

// console.log(
//     duplicateCount("Indivisibilities")
// )

//-------------------------------//
//  Unique In Order //
var uniqueInOrder=function(iterable){
    // console.log([...iterable])
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

// var uniqueInOrder=function(iterable){
//     let orderedArr = []
//         if (Array.isArray(iterable) ){
//             let arr = iterable
//             for( let i = 0; i<arr.length; i++){
//                 if(arr[i] != arr[i+1]){
//                     orderedArr.push(arr[i])
//                 }
//             }
//         } else {
//             let arr = iterable.split('')
//             for( let i = 0; i<arr.length; i++){
//                 if(arr[i] != arr[i+1]){
//                     orderedArr.push(arr[i])
                    
//                 }
//             }
//         }
//         return orderedArr
//   }
console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1,2,2,3,3]))
