// let chon = parseInt(prompt("Chọn bài tập"));
//     switch (chon){
//         case 1 : 
//                 bai1();
//                 break;
//         case 2:
//                 bai2();
//                 break;
//         case 3:
//                 bai3();
//                 break;
//         case 4:
//                 bai4();
//                 break;
//         case 5:
//                 bai5();
//                 break;
//         case 6:
//                 bai6();
//                 break;
//         case 7:
//                 bai7();
//                 break;
//         case 8: 
//                 bai8();
//                 break;
//         case 9:
//                 bai9();
//                 break;
//         case 10:
//                 bai10();
//                 break;
//         case 11:
//                 bai11();
//             default:
            
//                 break;
//                  }
                
// function bai1(){
//     let  dem = parseInt(prompt("Bắt đầu in"));
//         while (dem <= 100) {
//             console.log(dem);
//             dem ++;
//         }
// }
// function bai2(){
//     let dem = parseInt(prompt("Bắt đầu in từ "));
//     while ( 0 <= dem && dem <= 100 ){
//         console.log("In " + dem );  
//         dem--;
//     }
// }
// function bai3(){
//      let dem = parseInt(prompt("Bắt đầu in từ "));
//         for (dem = 0; dem <= 100; dem ++){
//             if (dem % 2 == 0 ){
//                 console.log("số chẵn:= " + dem);
//             }
//         }
// }
// function bai4(){
//     let dem = parseInt(100);
//         for (dem = 100;  dem >=0; dem-- ){
//             if (dem % 2 == 0 ){
//                 console.log("Số chẵn:= " + dem);
//             }
//             else {
//             console.log("Số lẻ:= " + dem )
//         }
//         }
// }

// function bai5() {
//     var n = parseInt(prompt("Nhập vào n"));
//     let tong = parseInt(0);
//     for (let i = 0; i <= n; i++) {
//         tong = tong + i;
//     }
//         console.log("Tổng các phần tử := " + tong);
// }
// function bai6(){
//     var n = parseInt(prompt("Nhập N "));
//     let tong = parseInt(0);
//     for (let i = 0 ; i <= n ; i++){
//         tong = tong + (2*i + 1);
//     }
//         console.log("Tổng:= " + tong);
// }
// function bai7(){
//     var n = parseInt(prompt("Nhập N"))
//     let tong = parseInt(0);
//         for (let i = 0; i <=n ; i++) {
//             tong = tong + 2*i;
//         }
//             console.log("Tổng:= " + tong);
// }
// function bai8(){
//     var n = parseInt(prompt("Nhập N"));
//     let tong = parseInt(0);
//         while (n < 0){
//            prompt("Nhập lại n " );
//             }
//             for (let i = 1; i <=n ; i++) {
//                 tong += 1/i;
//             }
//             console.log("Tổng:= " + tong);
//         }
// function bai9() {
//     var n = parseInt(prompt("Nhập N"));
//     let tong = parseInt(0);
//         while (n < 0) {
//             prompt("Nhập lại N");
//         }
//             for (let i = 1;i <= n; i++){
//                 let gt = i*(i+1)
//                 tong += 1/gt;
               
//             }
//             console.log("Tổng:= " + tong);    
// }
// function fibonacci() {
//     let x = 0;
//     let y = 1;
//     let z = 0;
//     return function getNext() {
//         z = x + y;
//         x = y;
//         y = z;
//         return z;
//     }
// }
// function bai10() {
    
// var fun = fibonacci();
// var n = parseInt(prompt("Nhập vào n"));
// for (let i = 0; i < n; i++) {
//     console.log(fun());
//     }
// }
function bai11() {
   
   
    let a = Number(prompt("Nhap vao a"));
    let b = Number(prompt("Nhap vao b "));
        for( i = 1;i < a; i++ ){    
            for ( j = 1; j < b ; j++) {
             console.log("*");
            }
                console.log("\n");
    }   
}
/////////////
function baitap() {
    
    let n = Number(prompt("Nhập vào n"))
        while ( n < 8){
            n = Number(prompt("Nhập vào n > 8"));
        }    
            console.log(n);
    }
function bai2(){
     let n = prompt("Nhap vao chuoi ky tu");
     var txt = n.length;
      while (txt <= 8) {
           n = prompt("Nhập lại chuỗi");
           txt = n.length;  
      }
        
            console.log(n);
    }
//yêu cầu ng dùng nhập 2 số 1 âm 1 dương, nếu thỏa mãn thì in ra
function amduong(){
    let a = Number(prompt("Nhập  số "));
    let b = Number(prompt("Nhập  số "));
        while ( !(a > 0 && b < 0))
        {   
            a = Number(prompt("Nhập lại số âm hoặc dương "));
            b = Number(prompt("Nhập lại số còn lại"));
        }
            console.log(a);
            console.log(b);
}

//Nhập mật khẩu chứa @ và dài hơn 8 kí tự
    function matkhau(){
        let str = prompt("Nhập mật khẩu > 8 kí tự và chứa @");
        // str.includes('@');
        // b = '@';
        // str.matches(b);
        //  str.test("@")
            while(!(str.length > 8 && str.includes("@")))
                {
                       str = prompt("Nhap lai mat khau")
                }
                    console.log(str);
    }
   ///
   while(true){
       n = Number(prompt("Nhập vào n"));
       if(n >8){
           break;
       }    
   }
   console.log(n);