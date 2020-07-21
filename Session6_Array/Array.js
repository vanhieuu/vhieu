let arr_empty = []; //Mảng rỗng
let arr_numbers = [1, 2, 3, 4, 5, 6];
let arr_string = ['A' , 'B', 'C ', 'D'];
let arr_mix = [ 1, 2, 3, 4, "T" , "C", true ] // k dùng 
console.log(arr_mix);
// console.log(arr_numbers[arr_numbers.length - 1]); // lấy giá trị cuối cùng của mảng
for (let i = 0; i < arr_numbers.length ; i++) {
    const element = arr_numbers[i];
        if (element % 2 == 0 ){
    console.log(element);
        }
}