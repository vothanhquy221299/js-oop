// Khởi tạo một mảng để lưu trữ danh sách sinh viên
var danhSachSV  = [];

var hienThiDanhSachSV  = function(){
    //Clear tbody
    document.getElementById('tbodySinhVien').innerHTML='';
    for(i=0; i<=danhSachSV.length; i++){
        //Tạo dòng
        var tagTr = document.createElement('tr');

        //Tạo cột
        var tagTdMa = document.createElement('td');
        var tagTdTen = document.createElement('td');
        var tagTdEmail = document.createElement('td');
        var tagTdNgaySinh = document.createElement('td');
        var tagTdKhoaHoc = document.createElement('td');
        var tagTdDiemTrungBinh = document.createElement('td');

        //Gan noi dung cho cot
        tagTdMa.innerHTML = danhSachSV[i].ma;
        tagTdTen.innerHTML =  danhSachSV[i].ten;
        tagTdEmail.innerHTML = danhSachSV[i].email;
        tagTdNgaySinh.innerHTML = danhSachSV[i].ngaySinh;
        tagTdKhoaHoc.innerHTML = danhSachSV[i].khoaHoc;
        tagTdDiemTrungBinh.innerHTML = danhSachSV[i].tinhDTB();

        //Gan 5 cot vao dong: appendChild: gan con vao cha
        tagTr.appendChild(tagTdMa);
        tagTr.appendChild(tagTdTen);
        tagTr.appendChild(tagTdEmail);
        tagTr.appendChild(tagTdNgaySinh);
        tagTr.appendChild(tagTdKhoaHoc);
        tagTr.appendChild(tagTdDiemTrungBinh);

        //Gan cot vao tBody
        document.getElementById('tbodySinhVien').appendChild(tagTr);
    }
}

  
var themSinhVien = function(){
    /**
     * Lay thong tin tu nguoi dung nhap vao
     */
    var maSV = document.getElementById('txtMaSV').value;
    var tenSV = document.getElementById('txtTenSV').value;
    var email = document.getElementById('txtEmail').value;
    var matKhau = document.getElementById('txtPass').value;
    var ngaySinh = document.getElementById('txtNgaySinh').value;
    var khoaHoc = document.getElementById('khSV').value;
    var diemToan = document.getElementById('txtDiemToan').value;
    var diemLy = document.getElementById('txtDiemLy').value;
    var diemHoa = document.getElementById('txtDiemHoa').value;

    /**
 * Khoi tao doi tuong sv tu lop doi tuong SV va them sv moi vao mang dssv
 */
     var sv = new SinhVien(maSV, tenSV, email, matKhau, ngaySinh, khoaHoc, diemToan, diemLy, diemHoa);
     danhSachSV.push(sv);
    //  console.log(danhSachSV); 

    hienThiDanhSachSV();
     
}   
