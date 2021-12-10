const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");
const modal_text = document.querySelector(".modal_text");
const submit_btn = document.querySelector(".submit_btn");
const input1 = document.querySelector(".input1");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const close2 = document.getElementById("close2");

window.addEventListener("DOMContentLoaded", e => {
  setTimeout(() => {
    open.click();
  }, 1000);
});
open.addEventListener("click", () => {
  modal_container.classList.add("show");
});
close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
close2.addEventListener("click", () => {
  modal_container.classList.remove("show");
  modal.classList.remove("hide_modal");
  modal2.classList.remove("show_modal2");
});
input1.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    e.preventDefault();
    submit_btn.click();
  }
});
submit_btn.addEventListener("click", () => {
  modal.classList.add("hide_modal");
  modal2.classList.add("show_modal2");
});
