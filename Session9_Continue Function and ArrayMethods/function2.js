 
 var array = [];
 var length = array.length;
 length = Number(prompt('Nhập vào độ dài mảng'));
     for (var i = 0; i < length; i++) {
         array.push(Number(prompt("Nhập vào các giá trị của mảng")));
     }
 
 function tinhGiaiThua(n) {
    let result = n;
        if ( n == 0 || n == 1)
    {
        return 1;
    }
    while (n > 1 ) {
      n--;
      result *= n;  
    }
    return result;
}
// let GT = tinhGiaiThua(5);
// console.log(GT);

function tongMang(array){
    var tong = 0;
     for (var i = 0; i < length; i++) {
         const values = array[i]; 
        tong  += values;
    }   
    return tong ;
}
tongMang(array);

function minArray(array) {
    
        let minArr = array[0];
        for (let i = 0; i < length; i++) {
            const values = array[i];
            
                if (minArr > values) {
                    minArr = values;
                }
            }
            console.log(`${minArr}`);
             return minArr;
        }
// let minArray = minArray(array)
// console.log("Số nhỏ nhất trong mảng" + minArr);
minArray(array);
function maxArray(array) {
    
    let maxArr = array[0];
    for (let i = 0; i < length; i++) {
        const values = array[i];
        
            if (maxArr < values) {
                maxArr = values;
            }
        }
        console.log(`${maxArr}`);
         return maxArr;
    }
maxArray(array);
function delArray(array) {
   
    var Val = Number(prompt("Nhập vào giá trị "));
    var newArr = array.filter(function(value, index, arr){
        return value > Val;
    })
    console.log(newArr);
    return newArr;
}
// delArray(array);
function chuanHoa(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g,function(l){
            return l.toUpperCase();
    });
}
console.log(chuanHoa("I'm a liTTle tEa POt"));

///
function gT(n) {
    if (n == 1){
    return 1;
    }
    return n*gT(n-1);
}
console.log(gT(10));