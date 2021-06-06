// BÀI 1
var btnBai1 = function () {
    var nhapNgay = document.getElementById('nhapNgay').valueAsNumber;
    var nhapThang = document.getElementById('nhapThang').valueAsNumber;
    var nhapNam = document.getElementById('nhapNam').valueAsNumber;
    var ketQuaNgayThangNamTruoc = document.getElementById('ketQuaNgayThangNamTruoc')
    var ketQuaNgayThangNamSau = document.getElementById('ketQuaNgayThangNamSau');
    var inNgaySau = 0;
    var inThangSau = 0;
    var inNamSau = 0;

    var inNgayTruoc = 0;
    var inThangTruoc = 0;
    var inNamTruoc = 0;

    if (isNaN(nhapNgay) || isNaN(nhapThang) || isNaN(nhapNam)) {
        alert('Bạn phải nhập đủ ngày tháng năm');
    }
    else if (nhapNgay < 0 || nhapThang < 0 || nhapNam < 0) {
        alert('Bạn không được nhập ngày/tháng/năm có chứa số âm');
    }
    else if (Number.isInteger(nhapNgay) && Number.isInteger(nhapThang) && Number.isInteger(nhapNam)) {
        inNgaySau = nhapNgay + 1;
        inThangSau = nhapThang;
        inNamSau = nhapNam;

        inNgayTruoc = nhapNgay - 1;
        inThangTruoc = nhapThang;
        inNamTruoc = nhapNam;
        if ((nhapThang == 1 || nhapThang == 3 || nhapThang == 5 || nhapThang == 7 || nhapThang == 8 || nhapThang == 10 || nhapThang == 12) && nhapNgay > 0 && nhapNgay <= 31) {
            if (nhapNgay == 31 && nhapThang != 12) {
                inNgaySau = 1;
                inThangSau = nhapThang + 1;
            }
            else if (nhapNgay == 31 && nhapThang == 12) {
                inNgaySau = 1;
                inThangSau = 1;
                inNamSau = nhapNam + 1;
            }
            else if (nhapNgay == 1) {
                inNgayTruoc = 30;
                inThangTruoc = nhapThang - 1;
                if (nhapThang == 3 && ((nhapNam % 400 == 0) || (nhapNam % 100 != 0 && nhapNam % 4 == 0))) {
                    inNgayTruoc = 29;
                }
                else if (nhapThang == 3) {
                    inNgayTruoc = 28;
                }
                else if (nhapThang == 1) {
                    inNgayTruoc = 31;
                    inThangTruoc = 12;
                    inNamTruoc = nhapNam - 1;
                }
                else if (nhapThang == 8) {
                    inNgayTruoc = 31;
                }
            }
            ketQuaNgayThangNamTruoc.innerHTML = 'Ngày/tháng/năm trước là: ' + inNgayTruoc + '/' + inThangTruoc + '/' + inNamTruoc;
            ketQuaNgayThangNamSau.innerHTML = 'Ngày/tháng/năm sau là: ' + inNgaySau + '/' + inThangSau + '/' + inNamSau;
        }
        else if ((nhapThang == 4 || nhapThang == 6 || nhapThang == 9 || nhapThang == 11) && nhapNgay > 0 && nhapNgay <= 30) {
            if (nhapNgay == 30) {
                inNgaySau = 1;
                inThangSau = nhapThang + 1;
            }
            else if (nhapNgay == 1) {
                inNgayTruoc = 31;
                inThangTruoc = nhapThang - 1;
            }
            ketQuaNgayThangNamTruoc.innerHTML = 'Ngày/tháng/năm trước là: ' + inNgayTruoc + '/' + inThangTruoc + '/' + inNamTruoc;
            ketQuaNgayThangNamSau.innerHTML = 'Ngày/tháng/năm sau là: ' + inNgaySau + '/' + inThangSau + '/' + inNamSau;
        }
        else if (nhapThang == 2 && ((nhapNam % 400 == 0) || (nhapNam % 100 != 0 && nhapNam % 4 == 0)) && nhapNgay > 0 && nhapNgay <= 29) {
            if (nhapNgay == 29) {
                inNgaySau = 1;
                inThangSau = nhapThang + 1;
            }
            else if (nhapNgay == 1) {
                inNgayTruoc = 31
                inThangTruoc = nhapThang - 1;
            }
            ketQuaNgayThangNamTruoc.innerHTML = 'Ngày/tháng/năm trước là: ' + inNgayTruoc + '/' + inThangTruoc + '/' + inNamTruoc;
            ketQuaNgayThangNamSau.innerHTML = 'Ngày/tháng/năm sau là: ' + inNgaySau + '/' + inThangSau + '/' + inNamSau;
        }
        else if (nhapThang == 2 && (nhapNgay > 0 && nhapNgay <= 28)) {
            if (nhapNgay == 28) {
                inNgaySau = 1;
                inThangSau = nhapThang + 1;
            }
            else if (nhapNgay == 1) {
                inNgayTruoc = 31
                inThangTruoc = nhapThang - 1;
            }
            ketQuaNgayThangNamTruoc.innerHTML = 'Ngày/tháng/năm trước là: ' + inNgayTruoc + '/' + inThangTruoc + '/' + inNamTruoc;
            ketQuaNgayThangNamSau.innerHTML = 'Ngày/tháng/năm sau là: ' + inNgaySau + '/' + inThangSau + '/' + inNamSau;
        }
        else {
            alert('Làm gì có: ' + nhapNgay + '/' + nhapThang + '/' + nhapNam);
            ketQuaNgayThangNamTruoc.innerHTML = ' ';
            ketQuaNgayThangNamSau.innerHTML = ' ';
        }
    }
    else {
        alert('Bạn không được nhập số thập phân');
    }
}
// BÀI 2
var btnBai2 = function () {
    var nhapVaoThang = document.getElementById('nhapVaoThang').valueAsNumber;
    var nhapVaoNam = document.getElementById('nhapVaoNam').valueAsNumber;
    var ketQuaBai2 = document.getElementById('ketQuaBai2');
    var inNgay = 0;
    if (isNaN(nhapVaoNam) || isNaN(nhapVaoThang)) {
        alert('Bạn phải nhập đủ tháng/năm');
    }
    else if (nhapVaoThang < 0 || nhapVaoNam < 0) {
        alert('Bạn không được nhập số âm');
    }
    else if (Number.isInteger(nhapVaoThang) && Number.isInteger(nhapVaoNam)) {
        if (nhapVaoThang == 1 || nhapVaoThang == 3 || nhapVaoThang == 5 || nhapVaoThang == 7 || nhapVaoThang == 8 || nhapVaoThang == 10 || nhapVaoThang == 12) {
            inNgay = 31;
            ketQuaBai2.innerHTML = 'Tháng ' + nhapVaoThang + ' Năm ' + nhapVaoNam + ' có ' + inNgay + ' ngày';
        }
        else if (nhapVaoThang == 4 || nhapVaoThang == 6 || nhapVaoThang == 9 || nhapVaoThang == 11) {
            inNgay = 30;
            ketQuaBai2.innerHTML = 'Tháng ' + nhapVaoThang + ' năm ' + nhapVaoNam + ' có ' + inNgay + ' ngày';
        }
        else if (nhapVaoThang == 2) {
            if ((nhapVaoNam % 400 == 0) || (nhapVaoNam % 100 != 0 && nhapVaoNam % 4 == 0)) {
                inNgay = 29;
                ketQuaBai2.innerHTML = 'Tháng ' + nhapVaoThang + ' Năm ' + nhapVaoNam + ' có ' + inNgay + ' ngày';
            }
            else {
                inNgay = 28;
                ketQuaBai2.innerHTML = 'Tháng ' + nhapVaoThang + ' Năm ' + nhapVaoNam + ' có ' + inNgay + ' ngày';
            }
        }
        else {
            alert('Không có tháng ' + nhapVaoThang + ' năm ' + nhapVaoNam)
        }
    }
    else {
        alert('Bạn không được nhập số thập phân');
    }
}

// BÀI 3
var btnBai3 = function () {
    var nhapSoNguyen = document.getElementById('nhapSoNguyen').valueAsNumber;
    var ketQuaBai3 = document.getElementById('ketQuaBai3');
    var hangTram = parseInt(nhapSoNguyen / 100);
    var hangChuc = parseInt((nhapSoNguyen % 100) / 10);
    var hangDonVi = parseInt((nhapSoNguyen % 100) % 10);
    if (isNaN(nhapSoNguyen)) {
        alert('Bạn phải nhập vào số nguyên');
        debugger
    }
    else if (Number.isInteger(nhapSoNguyen)) {
        if ((nhapSoNguyen >= 100 && nhapSoNguyen <= 999) || (nhapSoNguyen <= -100 && nhapSoNguyen >= -999)) {
            switch (hangTram) {
                case -1:
                    hangTram = 'Âm ' + 'một'
                    break;
                case -2:
                    hangTram = 'Âm ' + 'hai'
                    break;
                case -3:
                    hangTram = 'Âm ' + 'ba'
                    break;
                case -4:
                    hangTram = 'Âm ' + 'bốn'
                    break;
                case -5:
                    hangTram = 'Âm ' + 'năm'
                    break;
                case -6:
                    hangTram = 'Âm ' + 'sáu'
                    break;
                case -7:
                    hangTram = 'Âm ' + 'bảy'
                    break;
                case -8:
                    hangTram = 'Âm ' + 'tám'
                    break;
                case -9:
                    hangTram = 'Âm ' + 'chín'
                    break;
                case 1:
                    hangTram = 'Một';
                    break;
                case 2:
                    hangTram = 'Hai';
                    break;
                case 3:
                    hangTram = 'Ba';
                    break;
                case 4:
                    hangTram = 'Bốn';
                    break;
                case 5:
                    hangTram = 'Năm';
                    break;
                case 6:
                    hangTram = 'Sáu';
                    break;
                case 7:
                    hangTram = 'Bảy';
                    break;
                case 8:
                    hangTram = 'Tám';
                    break;
                case 9:
                    hangTram = 'Chín';
                    break;
            }
            switch (hangChuc) {
                case 0:
                    hangChuc = 'linh ';
                    break;
                case 1: case -1:
                    hangChuc = 'mười ';
                    break;
                case 2: case -2:
                    hangChuc = 'hai';
                    break;
                case 3: case -3:
                    hangChuc = 'ba';
                    break;
                case 4: case -4:
                    hangChuc = 'bốn';
                    break;
                case 5: case -5:
                    hangChuc = 'năm';
                    break;
                case 6: case -6:
                    hangChuc = 'sáu';
                    break;
                case 7: case -7:
                    hangChuc = 'bảy';
                    break;
                case 8: case -8:
                    hangChuc = 'tám';
                    break;
                case 9: case -9:
                    hangChuc = 'chín';
                    break;
            }
            switch (hangDonVi) {
                case 0:
                    hangDonVi = 'mười '
                    break;
                case 1: case -1:
                    hangDonVi = 'một';
                    break;
                case 2: case -2:
                    hangDonVi = 'hai';
                    break;
                case 3: case -3:
                    hangDonVi = 'ba';
                    break;
                case 4: case -4:
                    hangDonVi = 'bốn';
                    break;
                case 5: case -5:
                    hangDonVi = 'năm';
                    break;
                case 6: case -6:
                    hangDonVi = 'sáu';
                    break;
                case 7: case -7:
                    hangDonVi = 'bảy';
                    break;
                case 8: case -8:
                    hangDonVi = 'tám';
                    break;
                case 9: case -9:
                    hangDonVi = 'chín';
                    break;
            }
            if (hangChuc == 'linh ' && hangDonVi == 'mười ') {
                ketQuaBai3.innerHTML = hangTram + ' trăm ';
            }
            else if (hangChuc == 'mười ' && hangDonVi == 'mười ') {
                ketQuaBai3.innerHTML = hangTram + ' trăm ' + hangChuc;
            }
            else if ((hangChuc == 'mười ' || hangChuc == 'linh ') && hangDonVi != 'mười ') {
                ketQuaBai3.innerHTML = hangTram + ' trăm ' + hangChuc + hangDonVi;
            }
            else if ((hangChuc == 'hai' || hangChuc == 'ba' || hangChuc == 'bốn' || hangChuc == 'năm' || hangChuc == 'sáu' || hangChuc == 'bảy' || hangChuc == 'tám' || hangChuc == 'chín') && hangDonVi == 'một') {
                hangDonVi = 'mốt';
                ketQuaBai3.innerHTML = hangTram + ' trăm ' + hangChuc + ' mươi ' + hangDonVi;
            }
            else {
                ketQuaBai3.innerHTML = hangTram + ' trăm ' + hangChuc + ' mươi ' + hangDonVi;
            }
        }
        else {
            alert('Bạn phải nhập đúng 3 số nguyên');
        }
    }
    else {
        alert('Bạn không được nhập số thập phân');
    }
}
// BÀI 4
var btnBai4 = function () {
    var xSinhVien1 = document.getElementById('xSinhVien1').valueAsNumber;
    var ySinhVien1 = document.getElementById('ySinhVien1').valueAsNumber;
    var xSinhVien2 = document.getElementById('xSinhVien2').valueAsNumber;
    var ySinhVien2 = document.getElementById('ySinhVien2').valueAsNumber;
    var xSinhVien3 = document.getElementById('xSinhVien3').valueAsNumber;
    var ySinhVien3 = document.getElementById('ySinhVien3').valueAsNumber;
    var ketQuaBai4 = document.getElementById('ketQuaBai4');
    var xTruong = 0;
    var yTruong = 0;
    var khoangCachSinhVien1 = Math.sqrt(Math.pow(xSinhVien1 - xTruong, 2) + Math.pow(ySinhVien1 - yTruong, 2));
    var khoangCachSinhVien2 = Math.sqrt(Math.pow(xSinhVien2 - xTruong, 2) + Math.pow(ySinhVien2 - yTruong, 2));
    var khoangCachSinhVien3 = Math.sqrt(Math.pow(xSinhVien3 - xTruong, 2) + Math.pow(ySinhVien3 - yTruong, 2));
    if (isNaN(xSinhVien1) || isNaN(ySinhVien1) || isNaN(xSinhVien2) || isNaN(ySinhVien2) || isNaN(xSinhVien3) || isNaN(ySinhVien3)) {
        alert('Bạn phải nhập đủ toạ độ của 3 sinh viên');
    }
    else {
        if (khoangCachSinhVien1 > khoangCachSinhVien2 && khoangCachSinhVien1 > khoangCachSinhVien3) {
            ketQuaBai4.innerHTML = 'Sinh viên thứ nhất xa trường nhất';
        }
        else if (khoangCachSinhVien2 > khoangCachSinhVien1 && khoangCachSinhVien2 > khoangCachSinhVien3) {
            ketQuaBai4.innerHTML = 'Sinh viên thứ hai xa trường nhất';
        }
        else if (khoangCachSinhVien3 > khoangCachSinhVien1 && khoangCachSinhVien3 > khoangCachSinhVien2) {
            ketQuaBai4.innerHTML = 'Sinh viên thứ ba xa trường nhất';
        }
        else if (khoangCachSinhVien1 == khoangCachSinhVien2 && khoangCachSinhVien1 == khoangCachSinhVien3) {
            ketQuaBai4.innerHTML = 'Không có sinh viên nào xa nhất';
        }
    }
}
