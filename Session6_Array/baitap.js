
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
            const value = arr[i];
           if(arr[i] % 2 === 0)
           {
        //        console.log(arr[i]);
                    // countEven++;
                    numEven.push(arr[i]);
            }
           if(value > 10){
        //    isLarge10++;
            large10.push(value);
           }
        }        
        // numEven = arr.filter(x => x % 2 == 0) 
        // large10 = arr.filter(x => x > 10);
        console.log("Có " + numEven.length + " số chẵn và mảng số chẵn là: "), console.log(numEven);
        console.log("Có " + large10.length  +" số lớn hơn 10 và mảng số lớn hơn 10 là: "), console.log(large10);
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
            console.log(`#${i+1} :${arr[i]}`);
        }
        console.log(arr);
        // var newIndex = Number(prompt("Nhập vào  index muốn sửa ")) - 1;
        // while (newIndex > arr.length || newIndex < 0) {
        //     console.log("Index vừa nhập lớn hơn độ dài mảng, vui lòng nhập lai");
        //     newIndex = Number(prompt("Nhập vào  index cần sửa ")) -1;
        // }
        // var newVal = Number(prompt("Nhập vào giá trị  mới"));

        let index = parseInt(prompt("Nhập vị trí muốn sửa")) - 1;
        if (index >= 0 && index < arr.length) {
            arr[index] = Number(prompt("Nhập giá trị mới"));
        
            console.log("=========== Cập nhật thành công ===========");
            for (let i = 0; i < arr.length; i++) {
                const value = arr[i];
                console.log(`#${i + 1}: ${value}`);
            }
        } else {
            console.log(`Sai vị trí`);
        }
}
function bai7(){
    let arr = [];
    let totalNumber = arr.length;
    for (let i = 0; i < totalNumber; i++) {
        let n = Number(prompt("Nhập 1 số"));
        arr.push(n);
    }
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        console.log(`#${i + 1}: ${value}`);
    }
    let index = parseInt(prompt("Nhập vị trí muốn sửa")) - 1;
    if (index >= 0 && index < arr.length) {
        arr[index] = Number(prompt("Nhập giá trị mới"));
    
        console.log("=========== Cập nhật thành công ===========");
        for (let i = 0; i < arr.length; i++) {
            const value = arr[i];
            console.log(`#${i + 1}: ${value}`);
        }
    } else {
        console.log(`Sai vị trí`);
    }
}
  bai7();
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
    function bai5() {
        var arr = [];
        var txt = arr.length;
        txt = prompt("Nhập vào độ dài mảng");
        let number = Number(prompt("Nhập vào 1 số "));
        for (let i = 0; i < txt; i++) {
            const element = arr[i] ;
            arr.push(Number(prompt("Nhập vào các giá trị của mảng"))); 
          
                if(element < number){
                    arr.splice(i,1);
                    i--;
                }
            }
            console.log(arr);

    }
 function bai6() {
    var arr = [];
    var txt = arr.length;
    var min = arr[0];
    var max = arr[0];
    txt = prompt("Nhập vào độ dài mảng");
    for (let i = 1; i < txt; i++) {
        arr.push(Number(prompt("Nhập vào các giá trị của mảng"))); 
        var value = arr[i] ;
           if ( min  > value){
            min  = element;
        }
            if ( max < value)
            {
                max  = value;
            }
        
        console.log(`Gía trị nhỏ nhất ${min}`); 
        console.log(`Gía trị lớn nhất ${max}`); 
    }
}
    

// sắp xếp 2 vòng lặp 