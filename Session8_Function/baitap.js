let arrPhone = [{ 'name' : 'SamSung Galaxy Note 10 Lite',
                  'price'             : 11e6,
                  'brand'            : 'SamSung'
                },
                {
                    'name' : 'Iphone XSMmax',
                    'price'             : 12e6,
                    'brand'       :      'Apple',
                  },
                  { 'name' : 'Xiaomi Redmi note 5A Prime',
                  'price'             : 354e4,
                  'brand'       :      'Xiaomi' ,
                  }]
                  console.log(arrPhone);

                  for (let i = 0; i < arrPhone.length; i++) {
                    const phone = arrPhone[i];  // Để duyệt obj trong arr
                    console.log(`#${i+1}`);//
                    for (const key in phone) {//
                                const val = phone[key];//
                                console.log(`${key} : ${val}`);///
                            }
                  }
                  function print(){
                    for (let i = 0; i < arrPhone.length; i++) {
                        const phone = arrPhone[i];  // Để duyệt obj trong arr
                        console.log(`#${i+1}`);//
                        for (const key in phone) {//
                                    const val = phone[key];//
                                    console.log(`${key} : ${val}`);///
                                }
                      }
                  }
let txt = arrPhone.length
txt = Number(prompt("Nhập vào số lượng "))
    for (let i = 0; i < txt; i++) {
       
        
    
                        let name = prompt("Nhập vào tên điện thoại mới");
                        let price = Number(prompt("Nhập vào giá "));
                        let brand = prompt("Nhập vào nhà sản xuất")
                        let newPhone = {
                                'Tên điện thoại' : name,
                                'Gía'          : price,
                                'brand'          : brand,
                        }
                        arrPhone.push(newPhone);
                    }

  console.log(arrPhone);

                  for (let i = 0; i < arrPhone.length; i++) {
                    const phone = arrPhone[i];  
                    console.log(`#${i+1}`);
                   print()
                  }
for (let i = 0; i < txt ; i++) {
    const phone = arrPhone[i];
    console.log(`#${i+1}`);
    if (10e6 < phone.price   && phone.price  < 20e6) {
        for (const key in phone) {
                const value = phone[key];
                console.log(`${key} : ${value}`);
                }
            
        }
}             
let search = prompt("Nhập vào điện thoại muốn tìn ")
for (let i = 0; i < txt ; i++) {
    const phone = arrPhone[i];
    // console.log(`#${i+1}`);
    if (phone.name.toLowerCase()
                                .includes(search.toLowerCase())) {
        for (const key in phone) {
                const value = phone[key];
                console.log(`${key} : ${value}`);
                }
            console.log(phone);
        }
    }
    var  stt = Number(prompt("Nhập vị trí muốn sửa ") );
         stt = stt - 1;
    // for (let i = 0; i < txt ; i++) {
    //     const phone = arrPhone[i];
    //     console.log(`#${i+1}`);
        while (  stt > txt) {
    prompt("Nhập lại")
        }
         arrPhone[stt].name = prompt("Nhập tên mới ");
         arrPhone[stt].price = Number(prompt("Nhập giá mới "));
         arrPhone[stt].brand = prompt("Nhập hãng mới ");
    
///

         let max = arrPhone[0]
    for (let i = 0; i < txt ; i++) {
        const phone = arrPhone[i];
        console.log(`#${i+1}`);
        if (max.price < phone.price) {
            max = phone;
        }
    }
            for (const key in phone) {
                 const value = phone[key];
                console.log(`${key} : ${value}`);
                }

        // for (const key in phone) {
        //      const value = phone[key];
        //     console.log(`${key} : ${value}`);
        //     }
        // }
        // console.log(max.name);
    