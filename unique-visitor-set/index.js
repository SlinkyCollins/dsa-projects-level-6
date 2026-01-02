const addVisitorBtn = document.getElementById("addVisitorBtn");
const visitorList = document.getElementById("visitorList");
const visitorInput = document.getElementById("visitorInput");
const errorMsg = document.getElementById("errorMsg");
const visitorCount = document.getElementById("visitorCount");

let storedVisitors = JSON.parse(localStorage.getItem("visitors")) || [];
let visitorSet = new Set(storedVisitors);

addEventListener("load", () => {
  visitorCount.textContent = visitorSet.size;
  renderVisitors();
});

addVisitorBtn.addEventListener("click", () => {
  const visitorID = visitorInput.value.trim().toLowerCase();
  if (visitorID == "") {
    errorMsg.style.color = "red";
    errorMsg.textContent = "Please enter a valid visitor ID.";
    return;
  }
  const beforeSize = visitorSet.size;
  visitorSet.add(visitorID);

  if (visitorSet.size === beforeSize) {
    errorMsg.style.color = "red";
    errorMsg.textContent = "Visitor already exists.";
    return;
  }
  localStorage.setItem("visitors", JSON.stringify(Array.from(visitorSet)));
  renderVisitors();
  let count = visitorSet.size;
  console.log(visitorSet, count);
  visitorCount.textContent = count;
  visitorInput.value = "";
  errorMsg.textContent = "";
  errorMsg.style.color = "green";
  errorMsg.textContent = `Visitor ${visitorID} added successfully.`;
});

renderVisitors = () => {
  visitorList.innerHTML = "";

  visitorSet.forEach((visitor) => {
    const list = document.createElement("p");
    list.textContent = visitor;
    visitorList.appendChild(list);
  });
};