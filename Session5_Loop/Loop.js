function bai1(){
    let  dem = parseInt(prompt("Bắt đầu in"));
        while (dem <= 100) {
            console.log(dem);
            dem ++;
        }
}
function bai2(){
    let dem = parseInt(prompt("Bắt đầu in từ "));
    while ( 0 <= dem && dem <= 100 ){
        console.log("In " + dem );
        dem--;
    }
}
function bai3(){
     let dem = parseInt(prompt("Bắt đầu in từ "));
        for (dem = 0; dem <= 100; dem ++){
            if (dem % 2 == 0 ){
                console.log("số chẵn:= " + dem);
            }
            else {
                console.log("Số lẻ:= " + dem );
            }
}
}
function bai4(){
    let dem = parseInt(100);
        for (dem = 100;  dem >=0; dem-- ){
            if (dem % 2 == 0 ){
                console.log("Số chẵn:= " + dem);
            }
            else {
            console.log("Số lẻ:= " + dem )
        }
        }
}

function bai5() {
    var n = parseInt(prompt("Nhập vào n"));
    let tong = parseInt(0);
    for (let i = 0; i <= n; i++) {
        tong = tong + i;
    }
        console.log("Tổng các phần tử := " + tong);
}
function bai6(){
    var n = parseInt(prompt("Nhập N "));
    let tong = parseInt(0);
    for (let i = 0 ; i <= n ; i++){
        tong = tong + (2*i + 1);
    }
        console.log("Tổng:= " + tong);
}
bai6();