
const button = document.querySelector("#btn")
const parentBtn = document.querySelector(".parent-btn")
const p_text = document.querySelector(".p-text")
// call back function


// parentBtn.addEventListener("click", (event)=>{
//     console.log("parent btn");
    
// })
// p_text.style.display = "none"
button.addEventListener("click", (event)=>{
    // event.stopPropagation()
    // console.log(p_text.getAttribute("id"));

    // p_text.setAttribute("class", "test")
    // console.log(p_text.getAttribute("class"));

})

// - UI lớn - headerUI xong -> pr->a (check)
// classList, textContent, innerText, innerHtml
// textContent lấy ra tất cả text trong thẻ cả thẻ con
// inneText set lại giá trị content
// innerHtml get ra content nhưng nó lấy ra những cả cấu trúc thẻ html nếu có
// p_text.innerText = "ok"
// console.log(parentBtn.innerHTML);
// p_text.classList.add("red")
// classList thao tác với class
// add - thêm class
// remove - xóa class
// toggle - bật tắt (thêm xóa class) (lúc đầu phải đc add trong class)
// style trong js
// p_text.style.backgroundColor = "red"
// p_text.style.color = "green"
// atribuite - get lấy ra value của actribute, set - set ghi đè lại giá trị
