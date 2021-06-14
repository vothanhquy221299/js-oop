var getEle = function(selector){
    return document.querySelector(selector);
} 
var tinhDTB = function(diemToan, diemVan){
    var dtb = (parseFloat(diemToan) + parseFloat(diemVan))/2;
    return dtb;
}
var xepLoai = function(){
    var loai = "";
    if(dtb >= 8 && dtb <=10){
        loai  = 'Giỏi';
    } else if(dtb >= 5 && dtb<8){
        loai = 'Khá';
    } else{
        loai = 'Yêú';
    }
    return loai;
}
 
var hienThiThongTin = function(){
    /**
     * Lấy thông tin từ người dùng nhập
     */
    var _maSV = getEle('#txtMaSV').value;
    var _tenSV = getEle('#txtTenSV').value;
    var _hoanCanh =  getEle('#loaiSV').value;
    var _diemToan = getEle('#txtDiemToan').value;
    var _diemVan = getEle('#txtDiemVan').value;

    /**
     * Khởi tạo đối tượng sv
     */
    var sinhVien = {
        maSV: _maSV,
        tenSV: _tenSV,
        hoanCanh: _hoanCanh,
        diemToan: _diemToan,
        diemVan: _diemVan,

        //Phương thức
        tinhDTB(diemToan, diemVan){
            var dtb = (parseFloat(diemToan) + parseFloat(diemVan))/2;
            return dtb;
        },
        xepLoai(){
            var loai = "";
            if(dtb >= 8 && dtb <=10){
                loai  = 'Giỏi';
            } else if(dtb >= 5 && dtb<8){
                loai = 'Khá';
            } else{
                loai = 'Yêú';
            }
            return loai;
        }
         
    }
    /**
     * Hiển thị thông tin
     */
    var dtb = tinhDTB(diemToan, diemVan);
    getEle('#spanTenSV').innerHTML = tenSV;
    getEle('#spanMaSV').innerHTML = maSV;
    getEle('#spanLoaiSV').innerHTML = hoanCanh;
    getEle('#spanDTB').innerHTML = dtb;
    getEle('#spanXepLoai').innerHTML = xepLoai(dtb);
    
    
}