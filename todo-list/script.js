// first code
// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask() {
//   if (inputBox.value === "") {
//     alert("you must write something!");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);
//     let span = document.createElement("span");
//     span.innerHTML = "\u00D7";
//     li.appendChild(span);
//   }
//   inputBox.value = "";
//   saveData();
// }
// listContainer.addEventListener(
//   "click",
//   function (e) {
//     if (e.target.tageName === "LI") {
//       e.target.classList.toggle("checked");
//       saveData();
//     } else if (e.target.tageName === "SPAN") {
//       e.target.parentElement.remove();
//       saveData();
//     }
//   },
//   false
// );

// function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
// }
// function showTask() {
//   listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();

// inputBox.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     addTask();
//   }
// });

// second code
document.addEventListener("DOMContentLoaded", function () {
  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");

  function addTask() {
    if (inputBox.value === "") {
      alert("You must write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00D7"; // Close button
      li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
  }

  listContainer.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Correctly toggle class
        saveData();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the li element
        saveData();
      }
    },
    false
  );

  function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
  }

  function showTask() {
    const data = localStorage.getItem("data");
    listContainer.innerHTML = data ? data : ""; // Set default to empty string
  }

  showTask(); // Show tasks on page load

  // Optional: Add an event listener to handle adding tasks
  inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
