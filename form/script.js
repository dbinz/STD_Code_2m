const clear = document.querySelector(".clear");
const submit = document.querySelector(".submit");
const nameInput = document.querySelector(".name");
const adrress = document.querySelector(".adrress");
const Password = document.querySelector(".Password");
const textErr = document.querySelector(".text-err");
console.log(textErr);

// let nameInputs;
// nameInput.addEventListener("change", (e)=>{
//     nameInputs = e.target.value
//     console.log(nameInputs);
// })

// tạo cho a 1 form có 3 field như hôm qua và làm cho a các chức năng sau
// th1: khi click sumbit ko điền value -> thông báo lỗi border đỏ + message như ảnh mẫ u
// th2: khi a changes value trong input nếu a điền xong a lại xóa hết value đi thì nó sẽ thông báo border đỏ + message lỗi của filed đấy
// th3: bắt user nhập đầy đủ tất cả các fled ko cần chỉ rõ là filed gì
// th4: khi 1 trong 3 filed có value thì hiện nút Clear nếu a lại xóa value cả 3 filed đều k có value đi thì nut Clear sẽ ẩn , click thì nó sẽ reset lại giá trị = ""
// th5: khi đầy đủ thông tin ấn sumbit thì sẽ hiện các thông tin fled bên cạnh form như ảnh mẫu thứ 2:

const formName = nameInput.value;
const formadrress = adrress.value;
const password = Password.value;

const objInput = {
  names: formName,
  form_adress: formadrress,
  password,
};

nameInput.addEventListener("change", (e) => {
  console.log(e.target.value);

  if (e.target.value != "") {
    nameInput.style.border = "1px solid black";
    textErr.style.display = "none";
  } else {
    nameInput.style.border = "1px solid red";
    textErr.style.display = "block";
  }
});

adrress.addEventListener("change", (e) => {
  console.log(e.target.value);
  if (e.target.value != "") {
    adrress.style.border = "1px solid black";
    textErr.style.display = "none";
  } else {
    adrress.style.border = "1px solid red";
    textErr.style.display = "block";
  }
});

password.addEventListener("change", (e) => {
  console.log(e.target.value);
  if (e.target.value != "") {
    Password.style.border = "1px solid black";
    textErr.style.display = "none";
  } else {
    Password.style.border = "1px solid red";
    textErr.style.display = "block";
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    objInput.names === "" &&
    objInput.form_adress == "" &&
    objInput.password == ""
  ) {
    nameInput.style.border = "1px solid red";
    adrress.style.border = "1px solid red";
    Password.style.border = "1px solid red";
  } else {
    nameInput.style.border = "1px solid black";
    adrress.style.border = "1px solid black";
    Password.style.border = "1px solid black";
    // alert(`ban da dk thanh cong voi ten la ${objInput.names}`);
  }
  console.log(objInput);
});

clear.addEventListener("click", (e) => {
  e.preventDefault();
});
