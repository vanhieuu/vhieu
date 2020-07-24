let obj_empty = {};
let myInfo = {
        'name' : prompt("Nhập tên"),
         age : 21, 
         'school' : 'ĐHKDVCNHN',
         "favorite" :['playing', "Reading"],
         'class' : {
                'name' : ' C4EJS88',
                'Teacher' : 'Nguyễn Xuân Hùng '
         }
};
console.log(myInfo);
// Thêm mới
myInfo['Country'] = 'VN';
myInfo.birthday = 1999;
// Update
myInfo['age'] = 21.5;
myInfo.class = 'UTC' 
// Xóa
delete myInfo['age']
delete myInfo.favorite
console.log(myInfo);
// Truy vấn 
for (const key in myInfo) {
    // if (myInfo.hasOwnProperty()(key)) {
    const element = myInfo[key];
    // console.log(element);
    // console.log(key);
    console.log(`${key}:${element}`);// Hiển thị cho dễ nhìn
}
// }