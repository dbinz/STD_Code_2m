// function, return, let , const, var, for, if else

// hôm nay học về các kiêu dữ liệu trong js và arrow function

//  number, string, array, object, underfine, null, big int, 
//  NAN giá trị 
// type - kiểu dữ liệu

// undefined
let x;
// console.log(x);

// null
let y =10;
y= null


function convertNumberToString(number){
    return String(number)
}

const a = 10;
const b = convertNumberToString(a)

// tạo 1 hàm check number ( convert string sang number , check xem giá trị number 
//  xem có giá trị xác định hay ko nếu có thì return true, ko thì false)
//  == so sánh giá trị
// === so sánh cả kiểu giữ liệu và giá trị

const stringa = "hello"
stringa.toString()

// function checkNumberToString(a){
//     const numberx = Number(a)
    
//     if(!isNaN(numberx)){
//         return true
//     }
//     return false
// }

// object
const hocsinh = {
    name: "nguyen van a",
    age: 19,
    sex: "girl",
    getName(){
        return this.age
    }
}

// console.log(hocsinh.getName());



// Array
const arr = ["1", 2, 5.5, { name: "nguyen van c", adress: "ha noi",age: 19, }]

// 
const subjects = [
  {
    id: "MTH101",
    name: "Giải tích 1",
    credits: 3,
    teacher: "TS. Nguyễn Văn A",
    room: "A201",
    schedule: "Thứ 2 (7:30 - 9:30)"
  },
  {
    id: "PHY102",
    name: "Vật lý đại cương",
    credits: 4,
    teacher: "ThS. Trần Thị B",
    room: "B105",
    schedule: "Thứ 3 (9:45 - 11:45)"
  },
  {
    id: "CSE103",
    name: "Nhập môn lập trình",
    credits: 3,
    teacher: "ThS. Lê Văn C",
    room: "C302",
    schedule: "Thứ 4 (13:00 - 15:00)"
  },
  {
    id: "ENG104",
    name: "Tiếng Anh 1",
    credits: 2,
    teacher: "Cô Phạm Thu D",
    room: "D110",
    schedule: "Thứ 5 (7:30 - 9:00)"
  },
  {
    id: "HIS105",
    name: "Lịch sử Đảng",
    credits: 2,
    teacher: "TS. Hoàng Minh E",
    room: "A103",
    schedule: "Thứ 6 (9:45 - 11:15)"
  }
];

// if else , for,
// ==, !, ||, &&

for (let i = 0; i < subjects.length; i++) {
  if (
    subjects[i].name === "Nhập môn lập trình" ||
    subjects[i].name === "Tiếng Anh 1" ||
    subjects[i].name === "Lịch sử Đảng"
  ) {
    console.log(subjects[i].name);
    
  }
}

