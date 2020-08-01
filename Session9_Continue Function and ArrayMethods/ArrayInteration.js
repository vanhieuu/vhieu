//Array Interation
var arr =[ 1,3,4,5,456,234,23,78,64, 21,12];

// let index = arr.findIndex(function(value,index,arr){
//     return value === 100;
// });
// console.log(index);

// arr.findIndex(function (v,i,a){

// })
// function giatriBang6(value, index, arr){
//         return v === 6;
// }
//  let index = arr.findIndex(giatriBang6)

// Bài 1 : value lớn hơn 20
function bai1() {
function timGiatrilonhon20(value, index, arr){
    return value > 20;
}
    let value = arr.find(timGiatrilonhon20);
    console.log(value);
}

// Bài 2: Mảng giá trị lớn hơn 10
function bai2() {
let Val = prompt("Nhập vào giá trị ")
function mangLonHon10(value, index,arr){
    return value > Val;
};
let newArr = arr.filter(mangLonHon10);
console.log(newArr);
}

//Bài 3 Mảng gồm số chẵn 
function bai3() {
    function mangChan(value,index, arr) {
        if (value % 2 == 0){
            return value;
        }
        // return value % 2 === 0;
    }
    let newArr = arr.filter(mangChan);
    console.log(newArr);
}

//Bài 4: Mảng ban đầu có số lớn hơn 10 hay không?
function bai4() {
    function isLarge10(value,index,arr) {
        return value > 10;
    }
    if (arr.some(isLarge10) )
    {
                console.log("Mảng ban đầu có giá trị lớn hơn 10");
    }
    else{
        console.log("Mảng ban đầu k có giá trị lớn hơn 10");
    }
}

//Bài 5: Mảng ban đàu có số chẵn hay không ?
function bai5() {
    function isEven(value, index, arr) {
        return value % 2 === 0;
    }
    if (arr.some(isEven) )
    {
        console.log("Mảng ban đầu có số chẵn");
    }
    else{
        console.log("Mảng ban đầu không có số chẵn");
    }
}

//Bài 6: Tất cả giá trị của mảng có phải là số lẻ hay không ? 
 function  bai6() {
     function allisOdd(value, index, arr) {
         return value % 2 === 1;
     }
        if (arr.every(allisOdd)){
            console.log("Tất cả giá trị của mảng đều là số lẻ");
        }
        else  {
            console.log("Mảng có số chẵn");
 }
}

//  var phones = ['iPhone X',
//                 'Galaxy Note 10',
//                 'Xperia 2 ' ];
                // Không phân biệt hoa thường
                // Tìm điện thoại có chứa chữ 'a';
                // Tìm các điện thoại có chữa chữ 'g';
                // Tìm các điện thoại có tên dài hơn 8 kí tự
                // Tìm 1 điện thoại tên bắt đầu bằng chữ X 
 


var phones = [
    {
        'name': 'Iphone 11',
        'price': 23e6,
        'brand': 'Apple'
    },
    {
        'name' : 'Samsung Note 10 Lite',
        'price': 11e6 + 450e3,
        'brand': 'SamSung'
    },
    {
        'name': 'Xperia 2',
        'price': 15e6,
        'brand': "Sony"
    },
    {
        'name' : 'Samsung Galaxy A71',
        'price': 8e6 + 7e5,
        'brand': 'SamSung'
    },
    {
        'name' : 'Iphone X 256G',
        'price': 19e6,
        'brand': 'Apple'
    },
    {
        'name': 'Xperia XZ1 Factory',
        'price': 12e6,
        'brand': "Sony"
    },                    
];
//1. Tìm điện thoại tên có chứa chữ 'Iphone'
//2. Tìm đt có giá lớn hơn 18 triệu
//3. Tìm điện thoại có giá trong khoảng 10 -> 20tr
//4. Có điện thoại nào có giá < 18 triệu không
//5. Tìm điện thoại của hãng Apple
//6. Tìm điện thoại có giá thấp nhất, cao nhất
//7. Tính tổng giá trị của các điện thoại
//8. Có bao nhiêu đt của hãng Sony
//9. Sắp xếp đt theo tên a-z
//10. Sắp xếp đt theo giá cao -> thấp

// 
function print(phones) {
    for (var i = 0; i < phones.length ; i++) {
        const phone = phones[i];
        console.log(`#${i+1}`);
            for (const key in phone) {
                    const value = phone[key];
                    console.log(`${key} : ${value}`)
}
        }
    }
    //Function chuẩn hóa chuỗi
    function chuanHoa(str) {
        return str.toLowerCase().replace(/(^|\s)\S/g,function(l){
                return l.toUpperCase();
        });
    }

    // Tìm điện thoại tên có giá lớn hơn 18tr
function baitap1() {
   let largeThan18 = phones.filter(function(phone,index,arr) {
           return phone.price > 18e6;
})
print(largeThan18);
}

// Tìm điện thoại tên có chứa chữ Iphone
function baitap2() {
        function isIphone(phone) {
            return phone.name === chuanHoa("IPhone")
            
        }
        let result = phones.filter(isIphone)
           print(result);
    }

//3. Tìm điện thoại có giá trong khoảng 10 -> 20tr

function baitap3() {
    let searchPhone = phones.filter(function(phone,index,arr) {
            return phone.price >= 10e6 && phone.price <= 20e6;
 })
 print(searchPhone);
}

//4. Có điện thoại nào có giá < 18 triệu không
function baitap4() {
    function hasLessthan18(phone) {
        return phone.price <= 18e6;
    }
    let result = phones.filter(hasLessthan18)
    if (phones.some(hasLessthan18))
    {
        print(result)
    }
    else {
        console.log("Không có kết quả thỏa mãn");
    }
}

//5. Tìm điện thoại của hãng Apple
function baitap5() {
    function applePhone(phone) {
        return phone.brand === chuanHoa("apple");
    }
    let result = phones.filter(applePhone)
    print(result);
}

//6a. Tìm điện thoại có giá cao nhất

function baitap6a() {
    let sortPhone = phones.sort(function(a,b){
                return a.price - b.price;
    })
    let txt = sortPhone.length;
    let max = sortPhone[txt-1]
    for (let key in max){
        let value = max[key]
        console.log(`${key} : ${value}`)
    }
    }
//6b. Tìm điện thoại có giá thấp nhất
function baitap6b() {
    let sortPhone = phones.sort(function(a,b){
                return a.price - b.price;
    })
     let min = sortPhone[0]
    for (let key in min){
        let value = min[key]
        console.log(`${key} : ${value}`)
    }
    }

//7. Tính tổng giá trị của các điện thoại
function baitap7() {
   var tong = 0;
   for (let i = 0; i < phones.length; i++) {
    const phone = phones[i]
                let price = phone.price;
                tong += price
        }
        console.log(tong);           
}  
//8. Có bao nhiêu đt của hãng Sony
function baitap8() {
        var dem = 0;
        for (let i = 0 ; i < phones.length; i++){
            const phone = phones[i];
            if(phone.brand === chuanHoa("Sony")){
                dem ++
            }
        }
        console.log(`có ${dem} điện thoại của hãng Sony`);   
}
