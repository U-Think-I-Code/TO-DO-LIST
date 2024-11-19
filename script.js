let inputBox = document.querySelector("#input");
let container = document.querySelector("#list-container")

function addItems() {
  if (inputBox.value === '') {
    alert("You have write must")
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    container.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)
  }
  inputBox.value = "";
  saveData();
}

container.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked")
    saveData()
  }
  else if ( e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveData()
    }
 })

 function saveData(){
  localStorage.setItem("data", container.innerHTML)
 }
 
 function showData(){
  container.innerHTML = localStorage.getItem("data");
 }
 showData();
 