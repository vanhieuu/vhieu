
let chon = Number(prompt("Chọn bài tập"))
switch (chon) {
    case 1 :
        var a = Number(prompt("Nhập vào số a"));
    var b = Number(prompt("Nhập vào số b"));
    var c = Number(prompt("Nhập vào số c"));
        max();
        break;
    case 2 :
        var a = Number(prompt("Nhập vào số a"));
        var b = Number(prompt("Nhập vào số b"));
    var c = Number(prompt("Nhập vào số c"));
        sapxep();
        break;
    case 3 :
        var a = Number(prompt("Nhập vào số a"));
        var b = Number(prompt("Nhập vào số b"));
        var c = Number(prompt("Nhập vào số c"));
        BMI();
    case 4 :
        ngaythang();
        break;
    case 5: 
        tamgiac();
        break;
    case 6:
        giadien();
        break;
        default:
            alert("Nhập sai bài tập, vui lòng chọn lại");
            break;
    
}    
function max(){
        let max = a;
        if (max < b) {
            max  = b ;
        }
        if (max < c){
            max = c
        }
        console.log("Số lớn nhất là " , max );
    }
    function sapxep(){
        if(a < b && a < c && b < c && a < c  ){
           console.log("Thứ tự sắp xếp tăng dần là " , a,b,c);    
    }
        else if( a >b && b < c && a > c ){
            console.log(("Thứ tự sắp xếp là : " , b,c,a));
        }
            else if ( a > c && a > b && b > c){
                console.log("Thứ tự sắp xếp là " , c,b,a);
            }
                else if ( a < b && a < c && b > c){
                    console.log("Thứ tự sắp xếp là :" , a,c,b);
                }
                    else if (b < a && b <c && a < c){
                        console.log("Thứ tự sắp xếp là " ,b,a,c);
                    }
                        else {
                            console.log("Thứ tự sắp xếp là := ",c,a,b);
                        }
                    }
        function BMI() {
            let cannang = parseFloat(prompt("Nhập vào cân nặng của bạn(kg)"));
            let chieucao = parseFloat(prompt("Nhập vào chiều cao của bạn (cm)"));
            let BMI = cannang*10000/(chieucao*chieucao);
            bmi = Math.round(BMI * 100) / 100;
                if (bmi < 18.5) {
                    console.log("Bạn đang dưới chuẩn " + " Chỉ số BMI của bạn là := " + bmi);
                }
                    else if (bmi <= 24.9){
                    console.log("Bạn bình thường " + " Chỉ số BMI của bạn là := " + bmi);   
                        }
                        else if ( bmi <= 29.9) {
                             console.log("Bạn đang thừa cân" + " Chỉ số BMI của bạn là := " + bmi);
                                 }
                            else if( bmi <=34.9){
                                console.log("Béo phì cấp độ I" + " Chỉ số BMI của bạn là := " + bmi);
                                    }
                                else if ( bmi <=39.9) {
                                    console.log("Béo phì cấp độ II" + " Chỉ số BMI của bạn là := " + bmi);
                                        }
                                    else {
                                        console.log("Béo phì cấp độ III" + " Chỉ số BMI của bạn là := " + bmi);
                                            }
                           }           
        
    function ngaythang(){
    let thang = Number(prompt("Nhập vào tháng "))
            switch(thang){
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    console.log("Tháng có 31 ngày ");
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    console.log("Tháng có 30 ngày ");
                    break;
                case 2:
                    let nam = Number(prompt("Nhập vào năm "))
                    if(nam % 4 == 0 ){
                        console.log("Tháng có 29 ngày ");
                    }
                        else {
                        console.log("Tháng có 28 ngày");
                }
                break;
                default:
                    alert("Nhập sai tháng ")
                    break;
                    
            }
        }
    function tamgiac(){
        let a = parseInt(prompt("Nhập vào độ dài cạnh a"));
        let b = parseInt(prompt("Nhập vào độ dài cạnh b"));
        let c = parseInt(prompt("Nhập vào độ dài cạnh c"));
        if (a + b > c && b + c > a && a + c > b ) {
                console.log("Đây là 1 tam giác ");
        }
        else {
            console.log("Đây không phải 3 cạnh của 1 tam giác");
        }
                 if ( b === c && b===a & c===a ){
                    console.log("Đây là tam giác đều ");
                }
                else if (b===c || b===a || a === c   ){
                    console.log("Đây là tam giác cân");
                }
                else if (c*c == a*a + b*b || a*a == b*b + c*c || b*b == a*a + c*c ){
                        console.log("Đây là tam giác vuông ");
                }
           
    }
    function giadien() {
        let sotien;
        let bac1 = 1678;
        let bac2 = 1734;
        let bac3 = 2014;
        let bac4 = 2536;
        let bac5 = 2834;
        let bac6 = 2927;
        let sdsd = parseFloat(prompt("Nhập vào số điện sử dụng:= "))
            if ( 0 <= sdsd && sdsd <=50) {
                let sotien = sdsd * 1678;
                console.log("Số điện sử dụng thuộc bậc 1:= " + bac1 + " Nghìn đồng," + " Số tiền phải trả là:= " + sotien );
                    }
                else if ( sdsd <= 100 ){
                    console.log("Số điện sử dụng thuộc bậc 2:= " + bac2 + " Nghìn đồng," +" Số tiền phải trả là:=  " + (bac2*sdsd)+ " Nghìn đồng" );
                }
                    else if (sdsd <= 200){
                        console.log("Số điện sử dụng thuộc bậc 3:= " + bac3 + " Nghìn đồng,"+ " Số tiền phải trả là:= " + (bac3*sdsd)+ " Nghìn đồng");
                    }
                        else if (sdsd <=300){
                            console.log("Số điện sử dụng thuộc bậc 4:= " + bac4 + " Nghìn đồng," +" Số tiền phải trả là:= " + (bac4*sdsd)+ " Nghìn đồng");
                        }
                        else if (sdsd <=400){
                            console.log("Số điện sử dụng thuộc bậc 5:= " + bac5 + " Nghìn đồng," +" Số tiền phải trả là:= " + (bac5*sdsd)+ " Nghìn đồng");
                        }   
                        else{
                            console.log("Số điện sử dụng thuộc bậc 6:= " + bac6 + " Nghìn đồng," +" Số tiền phải trả là:= " + (bac6*sdsd) + " Nghìn đồng");
                        }
                    }
                