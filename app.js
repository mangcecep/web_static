const button = document.getElementById("submit")
const input = document.getElementById("to_do_list_input");
const todoList = document.getElementById("to_do_list")

let data = [];
let id = 0;

button.addEventListener("click", function () {

    let valueInput = input.value

    if (valueInput === '') {
        alert("Input tidak boleh kosong!")
        return
    }

    data.push({
        id: id++,
        value: valueInput
    });

    console.log(data)

    let newData = data.map(d => `<li>${d.value} <a href="#" class="text-danger" onclick="hapusData(${d.id})">x</a></li>`).join("")
    todoList.innerHTML = newData
    console.log(`value input ${newData}`)
})

function hapusData(id) {
    let newData = data.filter(value => value.id != id)
    data = newData
    todoList.innerHTML = data.map(d => `<li>${d.value} <a href="#" class="text-danger" onclick="hapusData(${d.id})">x</a></li>`).join("")
}