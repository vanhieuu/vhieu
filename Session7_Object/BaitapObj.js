
   let obj={};
    obj['name'] = prompt("Nhập vào Tên ");
    obj['age'] = prompt("Nhập vào Tuổi ");
    obj.school = prompt("Nhập vào Trường bạn đang học");
    console.log(obj);
    for (const key in obj) {
            const value = obj[key];
            console.log(`${key}: ${value}`);
        }

        ///
    let editKey = prompt("Nhập thông tin muốn sửa ")
    if(obj.hasOwnProperty(editKey)){
    
        obj[editKey] = prompt("Nhập giá trị mới ") // viết như này để code hiểu đây là 1 biến
            console.log(`=======Cập nhật thông tin thành công=======`);
            for (const key in obj) {
                const value = obj[key];
                console.log(`${key}: ${value}`);
            }
    }else{
    alert("Nhập sai ")
    }

    //Nhập Value xóa Key
    let valueDelete = prompt("Nhập giá trị muốn xóa")
        for (const key in obj) {
                const value = obj[key];
                     if ( value === valueDelete){
                     delete obj[key];   
                     }
                     console.log(`${key}: ${value}`);
            }
        
///
function sua() {            
let sua = Number(prompt("1: Sửa Tên, 2: Sửa Tuổi, 3: Sửa Trường"));
 switch (sua) {
     case 1:
            obj.name = prompt("Nhập tên mới");
         break;
     case 2:
         obj.age = prompt("Nhập tuổi mới ")
         break;
     case 3:
         obj['school'] = prompt("Nhập vào Trường mới")
     default:
         alert("Sai giá trị ")
         return sua;
         
 }
 console.log(obj);
   for (const key in obj) {
           const value = obj[key];
           console.log(`${key}: ${value}`);
   }
}

function xoa() {            
    let sua = Number(prompt("1: Xóa Tên, 2: Xóa Tuổi, 3: Xóa Trường"));
     switch (sua) {
         case 1:
                delete obj.name; 
             break;
         case 2:
             delete obj[age ] ;
             break;
         case 3:
             delete obj.school;
         default:
             break;
     }
     console.log(obj);
     for (const key in obj) {
        const value = obj[key];
        console.log(`${key}: ${value}`);
}
    }
    