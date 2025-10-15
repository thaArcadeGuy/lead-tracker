import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase,
         ref,
         push } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

import { firebaseConfig } from "../config.js";

console.log("Firebase Config:", firebaseConfig);

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads")

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
// store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn");


function render(leads) {
  let listItems = "";

  for(let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a href="${leads[i]}" target="_blank">
          ${leads[i]} 
        </a>
      </li>
    `
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function() {
  
}) 

inputBtn.addEventListener("click", function() {
  push(referenceInDB, inputEl.value);
  inputEl.value = "";
})
