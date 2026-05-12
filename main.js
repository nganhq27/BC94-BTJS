function tinhDiemKhuVuc(khuVuc) {
  if (khuVuc === "A") {
    return 2;
  } else if (khuVuc === "B") {
    return 1;
  } else if (khuVuc === "C") {
    return 0.5;
  } else {
    return 0;
  }
}

function tinhDiemDoiTuong(doiTuong) {
  if (doiTuong === "1") {
    return 2.5;
  } else if (doiTuong === "2") {
    return 1.5;
  } else if (doiTuong === "3") {
    return 1;
  } else {
    return 0;
  }
}




document.getElementById("btnTinhTuyenSinh").onclick = function () {
  var diemChuan = Number(document.getElementById("diemChuan").value);
  var mon1 = Number(document.getElementById("mon1").value);
  var mon2 = Number(document.getElementById("mon2").value);
  var mon3 = Number(document.getElementById("mon3").value);
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value;
  var ketQua = document.getElementById("ketQuaTuyenSinh");

  if (isNaN(diemChuan) || isNaN(mon1) || isNaN(mon2) || isNaN(mon3)) {
    ketQua.innerHTML = "Vui lòng nhập đầy đủ dữ liệu";
    return;
  }

  var diemUuTien = tinhDiemKhuVuc(khuVuc) + tinhDiemDoiTuong(doiTuong);
  var tongDiem = mon1 + mon2 + mon3 + diemUuTien;

  if (mon1 === 0 || mon2 === 0 || mon3 === 0) {
    ketQua.innerHTML = "Rớt vì có môn 0 điểm";
  } else if (tongDiem >= diemChuan) {
    ketQua.innerHTML = "Đậu. Tổng điểm: " + tongDiem;
  } else {
    ketQua.innerHTML = "Rớt. Tổng điểm: " + tongDiem;
  }
};




document.getElementById("btnTinhTienDien").onclick = function () {
  var ten = document.getElementById("tenDien").value;
  var soKw = Number(document.getElementById("soKw").value);
  var ketQua = document.getElementById("ketQuaTienDien");
  var tienDien = 0;

  if (ten.trim() === "" || isNaN(soKw)) {
    ketQua.innerHTML = "Vui lòng nhập đầy đủ dữ liệu";
    return;
  }

  if (soKw <= 50) {
    tienDien = soKw * 500;
  } else if (soKw <= 100) {
    tienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }

  ketQua.innerHTML = "Họ tên: " + ten + "<br>Tiền điện: " + tienDien.toLocaleString("vi-VN") + " VND";
};




document.getElementById("btnTinhThue").onclick = function () {
  var ten = document.getElementById("hoTenThue").value;
  var tongThuNhap = Number(document.getElementById("tongThuNhap").value);
  var nguoiPhuThuoc = Number(document.getElementById("nguoiPhuThuoc").value);
  var ketQua = document.getElementById("ketQuaThue");
  var thuNhapChiuThue = tongThuNhap - 4000000 - nguoiPhuThuoc * 1600000;
  var thue = 0;

  if (ten.trim() === "" || isNaN(tongThuNhap) || isNaN(nguoiPhuThuoc)) {
    ketQua.innerHTML = "Vui lòng nhập đầy đủ dữ liệu";
    return;
  }

  if (thuNhapChiuThue <= 0) {
    ketQua.innerHTML = "Không phải đóng thuế";
    return;
  }

  if (thuNhapChiuThue <= 60000000) {
    thue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120000000) {
    thue = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue <= 210000000) {
    thue = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue <= 384000000) {
    thue = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue <= 624000000) {
    thue = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue <= 960000000) {
    thue = thuNhapChiuThue * 0.3;
  } else {
    thue = thuNhapChiuThue * 0.35;
  }

  ketQua.innerHTML =
    "Họ tên: " + ten +
    "<br>Thu nhập chịu thuế: " + thuNhapChiuThue.toLocaleString("vi-VN") + " VND" +
    "<br>Tiền thuế: " + thue.toLocaleString("vi-VN") + " VND";
};




function hienSoKetNoi() {
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  var ketNoiWrapper = document.getElementById("ketNoiWrapper");

  if (loaiKhachHang === "doanhNghiep") {
    ketNoiWrapper.classList.remove("hidden");
  } else {
    ketNoiWrapper.classList.add("hidden");
  }
}

document.getElementById("loaiKhachHang").onchange = hienSoKetNoi;
hienSoKetNoi();

document.getElementById("btnTinhTienCap").onclick = function () {
  var maKhachHang = document.getElementById("maKhachHang").value;
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  var soKetNoi = Number(document.getElementById("soKetNoi").value);
  var soKenhCaoCap = Number(document.getElementById("soKenhCaoCap").value);
  var ketQua = document.getElementById("ketQuaTienCap");
  var tongTien = 0;

  if (maKhachHang.trim() === "" || isNaN(soKenhCaoCap)) {
    ketQua.innerHTML = "Vui lòng nhập đầy đủ dữ liệu";
    return;
  }

  if (loaiKhachHang === "nhaDan") {
    tongTien = 4.5 + 20.5 + soKenhCaoCap * 7.5;
  } else {
    if (isNaN(soKetNoi)) {
      ketQua.innerHTML = "Vui lòng nhập số kết nối";
      return;
    }

    tongTien = 15 + 50 * soKenhCaoCap;

    if (soKetNoi <= 10) {
      tongTien = tongTien + 75;
    } else {
      tongTien = tongTien + 75 + (soKetNoi - 10) * 5;
    }
  }

  ketQua.innerHTML =
    "Mã khách hàng: " + maKhachHang +
    "<br>Tổng tiền cáp: " + tongTien.toFixed(2) + " $";
};
