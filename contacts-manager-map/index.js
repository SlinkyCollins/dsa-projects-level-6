const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const addButton = document.getElementById("addBtn");
const contactsList = document.getElementById("contactsList");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const message = document.getElementById("message");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let contactMap = new Map(contacts);

addEventListener("load", () => {
  renderContacts();
});

addButton.addEventListener("click", () => {
  let name = nameInput.value.trim().toLowerCase();
  let phone = phoneInput.value.trim();

  if (!name || !phone) {
    message.style.color = "red";
    message.textContent = "Both fields are required";
    return;
  }

  contactMap.set(name, phone);
  localStorage.setItem("contacts", JSON.stringify(Array.from(contactMap)));
  renderContacts();
  message.style.color = "green";
  message.textContent = `${name}'s contact was added.`;
  nameInput.value = "";
  phoneInput.value = "";
});

renderContacts = () => {
  contactsList.innerHTML = "";

  contactMap.forEach((phone, name) => {
    const list = document.createElement("p");
    list.textContent = `${name}: ${phone}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      contactMap.delete(name);
      localStorage.setItem("contacts", JSON.stringify(Array.from(contactMap)));
      renderContacts();
    };

    list.appendChild(deleteBtn);
    contactsList.appendChild(list);
  });
};

searchBtn.addEventListener("click", () => {
  let name = searchInput.value.trim().toLowerCase();

  if (!contactMap.has(name)) {
    message.style.color = "teal";
    message.textContent = `${name} was not found in the contacts list.`;
    return;
  }

  message.textContent = `${name}: ${contactMap.get(name)}`;
});
