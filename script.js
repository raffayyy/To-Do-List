function addToDo() {
  let input = document.getElementById("taskInput").value;
  if (input.trim() === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  let content = document.createTextNode(input);
  li.appendChild(content);

  let done = document.createElement("button");
  done.innerHTML = "Done";
  done.className = "donebtn";

  let remove = document.createElement("button");
  remove.innerHTML = "Remove";
  remove.className = "removebtn";

  let span = document.createElement("span");
  span.className = "badge";
  span.appendChild(done);
  span.appendChild(remove);

  li.appendChild(span);
  document.getElementById("taskList").appendChild(li);

  document.getElementById("taskInput").value = "";

  done.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });

  remove.addEventListener("click", function () {
    li.style.display = "none";
  });
}
function clearList() {
  document.getElementById("taskList").innerHTML = "";
}
document.getElementById("clear").addEventListener("click", clearList);
document.getElementById("addTaskButton").addEventListener("click", addToDo);
// window.onload
