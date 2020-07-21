let admin = prompt("Nhập tên đăng nhập");
let pass = Number(prompt ("Nhập vào mật khẩu "));
    while (!(admin = "admin" && pass == 123456)){
            alert("Bạn nhập sai tên tài khoản hoặc mật khẩu");
            alert("Vui lòng đăng nhập lại");
            admin = prompt("Nhập tên đăng nhập");
            pass = prompt("Nhập vào mật khẩu");
    }
    alert("Chào mừng admin");