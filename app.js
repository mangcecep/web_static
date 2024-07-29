const buttonSubmit = document.getElementById('submit')
const toDoList = document.getElementById('to_do_list')
const toDoListInput = document.getElementById('to_do_list_input')
const deleteButton = document.getElementById('text-delete')

let toDoListData = []

function deleteFunction(idx) {
    toDoListData = toDoListData.filter((_, id) => id != idx)
    let newData = toDoListData.filter((_, c) => c !== idx).map((res, idx) => {
        return `<li>${res} <a href="#" class="text-danger ml-4" onclick="deleteFunction('${idx}')">x</a></li>`
    }).join('')
    toDoList.innerHTML = newData
}

buttonSubmit.addEventListener('click', function () {

    console.log(`VALUE INPUT ${toDoListInput.value}`)

    if (toDoListInput.value === '') {
        alert(`Input tidak boleh kosong!`)
        return
    }

    toDoListData?.push(toDoListInput.value)
    let data = toDoListData?.map((res, idx) => {
        return `<li>${res} <a href="#" class="text-danger ml-4" onclick="deleteFunction('${idx}')">x</a></li>`
    }).join('')

    console.log(data)

    toDoList.innerHTML = `${data}`
})



window.addEventListener('load', function () {
    if (toDoListData?.length === 0) {
        toDoList.innerHTML = '<li>Belum Ada data TO Do List</li>'
    }
})