// arrow function và các hàm hay dùng của mảng

// cách viết thường
function sumz(a, b){
    return a+b;
}
// arrow function
const sum = (a,b)=>{
    return a +b
}

// ((a,b)=>{
//     console.log(a+b);
// })(1,5)

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

// for (let index = 0; index < subjects.length; index++) {
//     // console.log(subjects[index]);
//     return subjects[index]
// }

// forEach giống vòng lặp for ko trả về đc
// subjects.forEach((item, i)=>{
    
// })

// nó cũng là vòng lặp for và trả về 1 mảng mới
// input subjects out put ["Giải tích 1", "Vật lý đại cương"]
// ["Giải tích 1 TS. Nguyễn Văn A", "Vật lý đại cương"]
const newArray = subjects.map((item, i)=>{
    
})
console.log(newArray);

