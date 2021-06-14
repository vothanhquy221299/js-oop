var getEle = function (selector) {
    return document.querySelector(selector);
}
var tinhDTB = function (diemToan, diemVan) {
    var dtb = (parseFloat(diemToan) + parseFloat(diemVan)) / 2;
    return dtb;
}
var xepLoai = function () {
    var loai = "";
    if (dtb >= 8 && dtb <= 10) {
        loai = 'Giỏi';
    } else if (dtb >= 5 && dtb < 8) {
        loai = 'Khá';
    } else {
        loai = 'Yêú';
    }
    return loai;
}

var hienThiThongTin = function () {
    /**
     * Lấy thông tin từ người dùng nhập
     */
    var _maSV = getEle('#txtMaSV').value;
    var _tenSV = getEle('#txtTenSV').value;
    var _hoanCanh = getEle('#loaiSV').value;
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
        // có thể bỏ tham số truyền vào, vì 2 thuộc tính đó thuộc dói tượng sv rồi 
        tinhDTB() {
            console.log('this' + this);
            var dtb = (parseFloat(this.diemToan) + parseFloat(this.diemVan)) / 2;
            return dtb;
        },
        xepLoai(dtb) {
            var loai = "";
            if (dtb >= 8 && dtb <= 10) {
                loai = 'Giỏi';
            } else if (dtb >= 5 && dtb < 8) {
                loai = 'Khá';
            } else {
                loai = 'Yêú';
            }
            return loai;
        }

    }
    /**
     * Hiển thị thông tin
     */
    var dtb = sinhVien.tinhDTB();
    getEle('#spanTenSV').innerHTML = sinhVien.tenSV;
    getEle('#spanMaSV').innerHTML = sinhVien.maSV;
    getEle('#spanLoaiSV').innerHTML = sinhVien.hoanCanh;
    getEle('#spanDTB').innerHTML = dtb;
    getEle('#spanXepLoai').innerHTML = sinhVien.xepLoai(dtb);


}