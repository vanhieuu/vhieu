// var arr = [];
// arr[0]  = prompt("Nhập vào giá trị thứ nhất của mảng");
// arr[1] = prompt("Nhập vào giá trị thứ 2 của mảng ");
// arr[2] = prompt("Nhập vào giá trị thứ 3 của mảng");
// arr[3] = prompt("Nhập vào giá trị thứ 4 của mảng");
// arr[4] = prompt("Nhập vào giá trị thứ 5 của mảng");
// arr = prompt("Nhập vào giá trị cho mảng ", arr.join());
// for (var i = 0; i < arr.length ; i++){
    
// }
//     console.log(arr[i]);

// var mangSo = [10];
// nhapSo = Number(prompt("Nhập vào số lượng giá trị cho mảng" ));
// for (let i = 0; i < nhapSo; i++) {
//     var element = mangSo[i];
//         element = Number(prompt("Nhập vào các phần từ của mảng"));
      
// }
// console.log(mangSo[i]);
// var mangSo = [];
// var soLuong = prompt("Nhập vào số lượng phần tử của mảng");
//     for (let i = 0; i < soLuong; i++) {
//         var element = mangSo[i];
//             element = prompt("Nhập các phần tử của mảng");
//             console.log(element);
//     }
function soChan() {
    var soChan = [];
var soLuongMang = Number(prompt("Nhập vào số lượng phần tử của mảng"));
var countEven  = Number(0);
var isLarge10 = false;
    for (let i = 0; i < soLuongMang; i++) {
        var element = Number(soChan[i]);
        element = Number(prompt("Nhập các phần tử của mảng"));
        if (element % 2 === 0) {
                countEven++;
        }
        console.log(element);
       
    }
    console.log("Có " + countEven + " số chẵn");

}
soChan();