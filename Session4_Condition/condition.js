var a = Number(prompt("Nhập vào số a"));
var b = Number(prompt("Nhập vào số b"));
var c = Number(prompt("Nhập vào số c"));
let chon = Number(prompt("Chọn bài tập"))
switch (chon) {
    case 1 :
        max();
        break;
    case 2 :
        sapxep();
        break;
    case 3 :
        BMI();
    case 4 :
        ngaythang();
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
        