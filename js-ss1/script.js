

// int x = 10 c++ int - số nguyên
// private int x =10 java

// js có 3 cách khai báo biến 
// var
// let
// const

// var biến global - dùng toàn cục 
var x;
var x = 10;
// console.log(x);
// - khó debug
// - không bảo mật
// - ghi đè giá trị

// ko tạo đc biến trùng tên
// được khai báo có hoặc không gắn giá trị
// được gán lại giá trị
// bảo mật hơn
// let x = 10;
// x = 20
// console.log(x);

// ko tạo đc biến trùng tên
// khi tạo biến phải gán giá trị cho nó
// ko gán lại được giá trị
// const a = 10;
// console.log(a);

//  chức anwng tính điểm thi học sinh
// let b = 10;
// let c = 20;
// let d;
// b = c ++;
// c = b++;
// d = b+c
// console.log(d);

// tính điểm  cửa từng cặp học sinh
function caculate(i) {
//   let b = a;
//   let c = z;
//   let d;
//   b = c++;
//   c = b++;
//   d = b + c;
//   console.log(d);
    console.log(i*2);
    
}
// x y 50 10
// m n 30 20
// function + tên hàm 
// for (let i = 1; i <= 1000; i++){
//     caculate(i)
// }

// funcition - chia ra mỗi chức năng làm hàm - tái sử dụng 
// - gọn gàng dễ nhìn , dễ debug


// hoc sinh a
// toan  =8 
// van = 7
// anh =4

function TB(x,y,z){
    let a = x;
    let b =y;
    let c = z;
    console.log((a+b+c) /3);
}
TB(8,7,4)
TB(10,10,6)