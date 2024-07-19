function addToDo() {
  let input = document.getElementById("taskInput").value;
  if (input.trim() === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  let content = document.createTextNode(input);
  li.appendChild(content);

  document.getElementById("taskList").appendChild(li);
  console.log(input);

  document.getElementById("taskInput").value = "";
}

document.getElementById("addTaskButton").addEventListener("click", addToDo);
// window.onload