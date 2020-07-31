// function Hello(){
// console.log("Hello World");
// }
// Hello();
function Hello(s){
    console.log(s);
}
let xinChao = "Welcome C4EJS88"
// Hello(xinChao)
function tinhtong(a,b) {
   let c = a + b;
   console.log(c);
}
// tinhtong(Number(prompt("Nhập a")),Number(prompt("Nhập b")))

function tinhHieu(a,b) {
    let c = a - b;
    console.log(c);
 }
//  tinhHieu(Number(prompt("Nhập a")),Number(prompt("Nhập b")))

 function tinhTich(a,b) {
    let c = a * b;
    console.log(c);
 }
//  tinhTich(Number(prompt("Nhập a")),Number(prompt("Nhập b")))

 function tinhThuong(a,b) {
    if ( a < 0 || b < 0)
    {
        prompt("Nhập lại")
    }
    else{

        return  c = a / b;
    }
}
 
//  tinhThuong(Number(prompt("Nhập a")),Number(prompt("Nhập b")))
 function giaiPTB1() {
     let a = parseFloat(prompt("Nhập vào tham số a "));
     let b = parseFloat(prompt("Nhập vào tham số b"))
        if ( b === 0 && a === 0 ){
                console.log("Phương trình có vô số nghiệm");
        }
            else if (a === 0 && b != 0)
                console.log("Phương trình vô nghiệm");
    
    { 
        let x = parseFloat((-b)/a) ;
        console.log(`Phương trình có 1 nghiệm duy nhất x = ${x}`);
    }
}

function kiemtraSNT(n)
{
   
    var kiemtra = true;
    if (n < 2){
        kiemtra = false;
    }
    else if (n === 2){
        kiemtra = true;
    }
    else if (n % 2 === 0){
      kiemtra = false;
    }
    else{
        for (let i = 3; i < Math.sqrt(n); i+=2)
        {
            if (n % i === 0){
                kiemtra = true;
                break;
            }
        }
    }
 
    if (kiemtra == true){
        console.log(n + " là số nguyên tố ");
    }
    else{
       console.log(n + " không phải là số nguyên tố ");
    }
}

kiemtraSNT(Number(prompt("Nhập n")));


function tinhTong2(a,b) {
    let c = a + b;
    return c;
}
let tongMoi = tinhTong2(10,2);
console.log(tongMoi);
console.log(`Trung bình cộng = ${tongMoi/2}`);

function tongdayso(n) {
    let sum = 0
    for (let i = 1 ; i <= n; i++) {
            sum = sum + i;
    }
    return sum;
}
let newTong = tongdayso(3)
console.log(newTong);
