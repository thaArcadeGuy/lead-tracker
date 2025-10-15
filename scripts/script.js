let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
// store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn");
// Grab the SAVE TAB button and store it in a tabBtn variable
const tabBtn = document.getElementById("save-tab");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// Check if leadsFromLocalStorage is truthy
// If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  })
})

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


// Listen for double clicks on the delete button
// When clicked, clear localStorage, myLeads, and the DOM
deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
}) 

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  console.log(localStorage.getItem("myLeads"));
})

/** ---------------------------------------------------------------- */

// function getFirst(arr) {
//   return arr[0];
// }

// console.log(getFirst([24, 10, "boy"]))



// const welcomeEl= document.getElementById("welcome-el");

// function greetUser(greeting, name, emoji) {
//   welcomeEl.textContent = `${greeting}, ${name} ${emoji}`;
// }

// greetUser("Hello", "Gilbert", "🔥");


// function add(a, b) {
//   return a + b;
// }


// console.log( add(5, 2));
// console.log( add(9, 102) )


// const recipient = "James";
// const sender = "Silver"

// const email = `
//   Hey ${recipient}! 
//   How is it going? 
//   Cheers 
//   ${sender}
// `;

// console.log(email);


// const containerDiv = document.getElementById("container");
// containerDiv.innerHTML = "<button onclick='buy()'>Buy Me</button>"

// function buy() {
//   containerDiv.innerHTML += "<p>Thank you for buying</p>";
// }
