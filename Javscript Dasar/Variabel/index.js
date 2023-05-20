// Var
// var a = 5;
// console.log(a);
// a = 6;
// console.log(a);
// var a = 6;
// console.log("ini adalah nilai a", a);
// // Let
// let b = 7;
// console.log(b);
// b = 100;
// console.log(b);
// console.log(a * b);
// b = 6;
// console.log("ini adalah nilai b", b);
// // Const
// const c = 8;
// console.log("ini adalah nilai c", c);
// c = 9;

// Perbedaan Var, Let, Const
// Scope Var
// let b = 6;
// if (b === 6) {
//   var a = 5;
// } else {
//   var a = 6;
// }
// var a = 5;
// console.log("ini adalah nilai a", a);

// Scope Let
// let b = 6;
// if (b === 6) {
//   let a = 5;
// } else {
//   let a = 6;
// }
// console.log("ini adalah nilai a", a);

// Array
// let nilai = [90, 80, 70, 100, 85];
// nilai.push(90);
// console.log(nilai.length);

// Object
const siswa = {
  nama: "John",
  umur: 17,
  jurusan: "RPL",
  nilai: [90, 80, 70, 100, 85],
  alamat: {
    jalan: "Jl. Arnold Mononutu",
    kota: "Minahasa Utara",
    provinsi: "Sulawesi Utara",
  },
  //   avg: function () {
  //     let total = 0;
  //     for (let i = 0; i < this.nilai.length; i++) {
  //       total += this.nilai[i];
  //     }
  //     return total / this.nilai.length;
  //   },
};
// siswa.nama = "John Doe";
// console.log("Alamat = ", siswa.nama);
// console.log(siswa.avg());
