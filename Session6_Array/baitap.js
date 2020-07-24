
function bai1(){
    var arr = [];
    var numEven = [];
    var large10 = [];
    let txt = arr.length;
    var countEven = 0;
    var isLarge10 = 0;
    txt = prompt("Nhập vào độ dài mảng")
    for (let i = 0; i < txt; i++) {
            arr.push(Number(prompt("Nhập vào các giá trị của mảng")));   
           if(arr[i] % 2 === 0)
           {
               countEven ++
                numEven = arr.filter(x => x % 2 == 0)
           }
           if(arr[i]  > 10){
           isLarge10++;
            large10 = arr.filter(x => x > 10);
           }
        }        
        
        console.log("Có " + countEven + " số chẵn và mảng số chẵn là: "), console.log(numEven);
        console.log(`Có ${isLarge10} số lớn hơn 10 và mảng số lớn hơn 10 là: `), console.log(large10);
        console.log(arr);
    }
    function bai2(){
        var arr = [];
        var txt = arr.length;
        var sum = Number(0);
        var dem = Number(0);
        var tbc = Number(0);
        txt = prompt("Nhập vào độ dài mảng");
            for (let i = 0; i < txt; i++) {
                arr.push(Number(prompt("Nhập vào các giá trị của mảng")));  
                dem++    
                sum += arr[i];
            }
            tbc = sum/dem;
            console.log("Tổng các phần tử của mảng:= " + sum);
            console.log("Trung bình cộng của mảng là := " + tbc);
    }

    function bai3() {
        var arr = [];
        var txt = arr.length;
        txt = Number(prompt("Nhập vào độ dài mảng"));
        for (let i = 0; i < txt; i++) {
            arr.push(Number(prompt("Nhập vào các giá trị của mảng")));  
        }
        console.log(arr);
        var newIndex = Number(prompt("Nhập vào  index mới"));
        while (newIndex > arr.length) {
            console.log("Index vừa nhập lớn hơn độ dài mảng, vui lòng nhập lai");
            newIndex = Number(prompt("Nhập vào  index mới"));
        }
        var newVal = Number(prompt("Nhập vào giá trị  mới"));
        arr[newIndex] = newVal
        console.log(arr);
    }
bai3();
function bai4() {
        var arr = [];
        var txt = arr.length;
        txt = prompt("Nhập vào độ dài mảng");
        for (let i = 0; i < txt; i++) {
            arr.push(Number(prompt("Nhập vào các giá trị của mảng")));  
        }
        console.log(arr);
        var Val = Number(prompt("Nhập vào giá trị "));
        var newArr = arr.filter(function(value, index, arr){
            return value > Val;
        })
        console.log(newArr);
    }
    