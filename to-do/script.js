let taskli = JSON.parse(localStorage.getItem("taskli")) || []
console.log("task list", taskli);

let taskbtn = document.getElementById("btn-todo");
taskbtn.addEventListener("click", () => {
    let data = document.getElementById("input-box").value;
    if (!data) return alert("please enter your task")
    taskli.unshift(data);
    localStorage.setItem("taskli", JSON.stringify(taskli));
    getdata();
    alert("successfully added");
    return document.getElementById("input-box").value;

})

function getdata() {
    let list = document.getElementById("listam")
    if (!taskli.length) {
        list.style.display = "none";

    }
    list.innerHTMl = taskli.map((el) => {
        return `<li>${el}</li>`
    })
}