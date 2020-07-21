let arr_empty = []; //Mảng rỗng
let arr_numbers = [1, 2, 3, 4, 5, 6, 11];
let arr_string = ['A' , 'B', 'C ', 'D'];
let arr_mix = [ 1, 2, 3, 4, "T" , "C", true ] // k dùng 
console.log(arr_numbers);
// console.log(arr_numbers[arr_numbers.length - 1]); // lấy giá trị cuối cùng của mảng
//     let countOdd = 0;
//     let isLarger10 = false;
// for (let i = 0; i < arr_numbers.length ; i++) {
//     let element = arr_numbers[i];
//         if (element % 2 === 1 ){
//             countOdd++
//         }
//         if(element  > 10){

//             isLarger1010 = true;
//             break;
//         }

//     }
//         console.log(`có   ${countOdd} số lẻ` );
//     console.log(isLarger1010);
    // arr_numbers.push(7,8,9,33);
    // console.log(arr_numbers);
    // arr_numbers.unshift(1,5,3,2);
    // console.log(arr_numbers);
    // arr_numbers[17] = 10;
    // console.log(arr_numbers);
    console.log(arr_numbers);
    console.log(arr_numbers);
    let first = arr_numbers.shift();
    let last = arr_numbers.pop();
    let del = arr_numbers.splice(1,3)
    console.log(last);
    console.log(first);
    console.log(del);