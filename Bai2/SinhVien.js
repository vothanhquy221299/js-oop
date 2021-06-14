function SinhVien(_ten, _ma, _email, _matKhau, _ngaySinh , _khoaHoc, _diemToan, _diemLi, _diemHoa){
    // Thuộc tính
    this.ten = _ten;
    this.ma = _ma;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngaySinh = _ngaySinh;
    this.khoaHoc = _khoaHoc;
    this.diemToan = _diemToan;
    this.diemLi = _diemLi;
    this.diemHoa = _diemHoa;
    
    //Phuowng thuwcs
    this.tinhDTB = function(){
        var dtb = (parseFloat(this.diemToan) + parseFloat(this.diemLi) + parseFloat(diemHoa))/3; 
        return dtb;
    }

}
// Khởi tạo đối tượng sv từ lớp đói tượng SinhVen 
// var sv1 = new SinhVien('Quy', '123', 'quy@gmail.com', '12345', '22/12', 'bc12', 8, 9, 7);                        
// console.log(sv1);
// // new operatỏr(4 bước)
//     // b1: tạo ra một object rỗng (empty object => [)
//     // b2: gán object được tạo ở bước 1 vào bién thís
//         // b3:    Gọi function     SinhVien(lớp đối tượng)
//         // b4: return vè obj được tạo ở bước 1
// var _SinhVien = function(ten, ma, lop){
//         var emptyObj = {};
//         var _this = emptyObj;
//     _this.ten = 'a';
//     _this.ma = 'b';
//     _this.lop = 'c';
//     return emptyObj;
// } 
// var _sv = _SihVien   ('quy', 'a', 'bc12');

