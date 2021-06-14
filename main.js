/**
 * Khởi tạo đối tượng   
 */
var person = {
    //Định nghĩa thuộc tính key:value
    //key: tên thuộc tính, value: giá trị của thuộc tính
    // Đối tượng có 2 thành phần là thuộc tính và phương thức  
    // Thuộc tính của person
    name : 'Quy',
    age : 22,
    height: 170,

    // Phương thức của person
    greeting : function(){
        console.log('hello')
    }

};

//Truy xuất đối tượng
//Cách 1
console.log(person.age); 
console.log(person.greeting());

//Cách 2
var _name = 'name';
console.log(person['name'])
console.log(person[_name]);

//Thay đổi giá trị thuộc tính

person.age = 18;

console.log(person)

//Thêm thuộc tính mới vào object 
person.weigth  = 65;
console.log(person);

//Xóa thuộc tính trong object
delete person.weigth;
console.log(person);
delete person['age'];
console.log(object)

console.log(typeof new Array());


var nhanVien = {
    //Thuộc tính
    ma : '1234',
    ten : 'Vo Thanh Quy',
    cmnd : '1234567',
    email : 'quy@gmail.com',

    //Phương thức
    tinhLuong : function(){},
    tinhTongGioLam : function(){},

    //Phương thức (shorthand)
    tinhTongNgayNghi(){
        console.log('Short hand method');
    }
}

nhanVien.tinhTongNgayNghi();
