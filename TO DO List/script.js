"use strict";
const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function doThis() {
  if (input.value === "") {
    // input.ariaPlaceholder=""
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    console.log(e);
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    }
    //
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "Enter") {
    doThis();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
