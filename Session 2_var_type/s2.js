const pi= 3.14;
            let chon = prompt("Chọn bài tập")
                switch (chon) {
         case '1':
             tinhHinhTron()
             break;
         case '2':
            tinhHinhChuNhat();
            break;
        case '3': 
            tinhGTBT();
            break;
        case '4':
            quyDoiTien();
            break;
        case '5':
            tinhTongCacChuSo();
            break;
         default:
     }
     function tinhHinhTron(){
        var r = prompt("Nhập vào giá trị của r ");
         
                var S = pi*r*r;
                var C = 2*pi*r;
                console.log( ("Diện tích hình tròn là:= " + S));
                console.log( "Chu vi hình tròn là:= " + C);
     }
     tinhHinhTron();
     function tinhHinhChuNhat(){
        var cd = prompt("Nhập vào chiều dài của hình chữ nhật");
        var cr = prompt("Nhập vào chiều rộng của hình chữ nhật");
            var dt = cd * cr;
                console.log("Diện tích hình chữ nhật là :=" + dt);
     }
     tinhHinhChuNhat();
     function tinhGTBT(){
         var x = prompt("Nhập vào giá trị của x");
         var y1 = 4*(Math.pow(x,2) + 10*x*Math.sqrt(x) +3*x +1);
         var y2 = (Math.sin(pi*Math.pow(x,2)) + Math.sqrt((Math.pow(x,2) +1 ))/(Math.pow(Math.E,2*x)+ Math.cos((pi/4)*x)));
            console.log("Gía trị của biểu thức y1:= "+ y1);
            console.log("Gía trị của biểu thức y2:= " + y2); 
     }
     tinhGTBT();
     function quyDoiTien() {
        let t = parseInt(prompt("Nhập vào số tiền cần đổi"));
        let t100 = Math.floor(t/100000);
           t   -= 100000*t100;
       let t50 = Math.floor(t/50000);
             t  -= 50000*t50
       let t20 = Math.floor(t/20000);
            t  -=  20000*t20
       let  t10 = Math.floor(t/10000);
             t -=  10000*t10;
        console.log("Số tờ mệnh giá các loại là : ");
        console.log(t100 + " tờ 100000");
        console.log(t50 +  " Tờ 50000");
        console.log(t20 +  " Tờ 20000");
        console.log(t10 +  " Tờ 10000");
     }
     quyDoiTien();
     function tinhTongCacChuSo() {
        var n = parseInt(prompt("Nhập vào số n:= "));
        var s = 0;
        while(n!=0){
        var soDu = n % 10;
            s = s + soDu;
            n = Math.floor(n/10);
        }
                console.log("Tổng các chữ số := " + s);   
    }
            tinhTongCacChuSo();