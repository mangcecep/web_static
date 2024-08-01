const input = document.getElementById('to_do_list_input')
const button = document.getElementById('submit')
const toDoList = document.getElementById('to_do_list')

let taskList = [];

button.addEventListener('click', function () {
    let inputValue = input.value
    // inputValue === '' ? alert('tidak boleh kosong') : console.log(`${inputValue}`)

    if (inputValue === '') {
        alert('tidak boleh kosong')
        return
    }

    taskList.push(inputValue)
    // console.log(taskList)
    let newVal = taskList.map(v => `<li>${v}</li>`).join('')
    // console.log(newVal)
    toDoList.innerHTML = newVal
})