// // 1-masala
// {
//     function num(arr) {
//         const len = arr.length;
//         if (len % 2 === 1) {
//             return arr[Math.floor(len / 2)];
//         } else {
//             const n = arr[len / 2 - 1];
//             const n2 = arr[len / 2];
//             return (n + n2) / 2;
//         }
//     }
    
//     console.log(num([1, 2, 3, 4, 5])); 
//     console.log(num([1, 2, 3, 4]));    
// }
// // 2-masala
// {
//     let produc = [
//         {id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//         {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
//         {id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//         {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
//       ];
      
//       let pro = produc.filter(product => product.id !== 4);
      
//       console.log(pro);      
// }
// // 3-masala
// {
//     function str(str) {
//         return /^[A-Za-z]+$/.test(str);
//       }
      
//       console.log(str("Hello"));  
// }
// // 4-masala
// {
//     const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// function words(arr) {
//   const result = {};
  
//   arr.forEach(animal => {
//     result[animal] = (result[animal] || 0) + 1;
//   });
  
//   return result;
// }

// console.log(words(animals));
// }
// // 5-masala
// {
//     function length(str) {
//         return str.split(' ').map(word => word.length);
//       }

//       console.log(length("Hello world"));   
// }
// // 6-masala
// {
//     function hasSpace(str) {
//         return str.split('').some(char => char === ' ');
//       }
      
//       console.log(hasSpace("salom dunyo"));
//       console.log(hasSpace("salomdunyo"));  
// }
// // 7-masala
// {
//     const obj = { a: 2, b: 5, c: 7 };

// function keyValueConcat(obj) {
//   return Object.entries(obj).map(([key, value]) => key + value);
// }

// console.log(keyValueConcat(obj));
// }
// // 8-masala
// {
//     const pupils = [
//         { name: "Elbek", protcent: 95 },
//         { name: "Zafar", protcent: 78 },
//         { name: "Aziz", protcent: 83 },
//         { name: "Jasur", protcent: 88 },
//         { name: "Bobur", protcent: 66 },
//         { name: "Kamron", protcent: 75 },
//       ];
      
//       function foo(pupils) {
//         return pupils.reduce(
//           (acc, pupil) => {
//             if (pupil.protcent >= 80) {
//               acc.passed += 1;
//             } else {
//               acc.failed += 1; 
//             }
//             return acc;
//           },
//           { passed: 0, failed: 0 }
//         );
//       }
      
//       const result = foo(pupils);
//       console.log(result); 
// }
// // 9-masala
// {
//     var num = function(nums1, nums2) {
//         const merged = [...nums1, ...nums2];
        
//         merged.sort((a, b) => a - b);
        
//         const len = merged.length;
        
//         if (len % 2 === 1) {
//             return merged[Math.floor(len / 2)];
//         } 
//         else {
//             const mid1 = merged[len / 2 - 1];
//             const mid2 = merged[len / 2];
//             return (mid1 + mid2) / 2;
//         }
//     };
    
//     let nums1 = [1, 2];
//     let nums2 = [3, 4];
//     console.log(num(nums1, nums2)); 
// }
// // 10-masala
// {
//     var searchMatrix = function(matrix, target) {
//         for (let i = 0; i < matrix.length; i++) {
//             for (let j = 0; j < matrix[i].length; j++) {
//                 if (matrix[i][j] === target) {
//                     return true; 
//                 }
//             }
//         }
//         return false;
//     };
    
//     let matrix1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
//     let target1 = 3;
//     console.log(searchMatrix(matrix1, target1));
    
//     let matrix2 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
//     let target2 = 13;
//     console.log(searchMatrix(matrix2, target2));
    
// }