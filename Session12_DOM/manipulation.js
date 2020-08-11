// console.dir(document.getElementById("welcome")); // Trả về 1 dom hướng về thẻ h1
// console.dir(document.getElementById("welcome").innerHTML);
// let h1 = document.getElementById("welcome");
//         console.log(h1.innerHTML)
//         h1.innerHTML = "xin chào"
        // console.log(h1.innerHTML);
    //  let h2timer = document.getElementById("timer");
    //  var h = new Date();
    //  h2timer.innerHTML = h
// console.log(h);

//   let h2 = document.getElementById("name");
//   h2.innerHTML = "xin chào " + prompt("Nhập tên của bạn");

// let h3 = document.getElementsByClassName("welcome1")
// h3.innerHTML = "Xin chào";
// h3.innerHTML = "10000000000000000000000000"
// console.log(h3.innerHTML);

// document.getElementsByName("This-is-my-name").innerHTM = "Văn Hiêu"




// let pContent = document.getElementsByClassName("content");
//         for (let i = 0; i < pContent.length; i++){
//                     var listPContent = pContent[i];
//                     listPContent.innerHTML = "Đây là một DOM";
//                     console.dir(listPContent.innerHTML);
//         }



// let divName = document.getElementsByTagName("div");
// for (let i = 0 ; i < divName.length ; i++){
//         var listDivName = divName[i];
//         listDivName.innerHTML = "Hello from tagname "
// }

// let listDvName = document.getElementsByName("div");
//     for (let i = 0; i < listDvName.length; i++) {
//         let divName = listDvName[i];
//         divName.innerHTML = "Hello from another side"
        
//     }
// let listMenu =[
//     "Phở Thìn",
//     "Bún Cá",
//     "Com Rang ",
//     "Đậu Phộng"
// ];
// let listFood = document.getElementsByClassName("food");
//         for (let i = 0; i < listFood.length; i++){
//                     var food = listFood[i];
//                 food.innerHTML = listMenu[i];
//             }
                   
var listMenu =[
    "Phở Thìn",
    "Bún Cá",
    "Cơm Rang ",
    "Đậu Phộng",
    "Bún đậu"
];

function printMenu(menu){
        
    var domMenu = document.getElementById("food-menu");
    domMenu.innerHTML = ""; //xóa dữ liệu cũ
    for (let i = 0; i < menu.length; i++) {
        const food = menu[i];
            domMenu.innerHTML += `<li>${food}</li>`;
    }

}

        // printMenu(listMenu);
        // //Bài tập : Hỏi người dùng tên 1 món ăn \, rồi push món đó vào bên dưới 
        // let newFood = prompt("Nhập vào món ăn mới")
        //     listMenu.push(newFood);
        //     printMenu(listMenu);

    // printMenu(listMenu);
    function onClickWelcome(){
        alert("bạn vừa click vào welcome");
    }
    // addEventListener("click", onClickWelcome());

   function onClick() {
       document.getElementById("onClickWelcome").innerHTML = "Xin chào" + "~~~~~~~~~~~~~~~~~~~~Hello World~~~~~~~~~~~~~~~~~~~`"
   }
   //tạo thêm button mỗi khi click button là có thời gian hiện tại