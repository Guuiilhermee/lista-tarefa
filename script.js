let botaoAdd = document.getElementById('btn')
let input = document.getElementById('input-tarefa')
let tarefas = document.getElementById('tarefas')
let marcado = false

botaoAdd.addEventListener('click', function () {
    if (input.value !== '') {
        let tarefa = document.createElement('p')
        tarefa.innerText = '- ' + input.value
        tarefas.appendChild(tarefa)
        input.value = ''

        tarefa.addEventListener('click', function () {
            if (tarefa.style.textDecoration === 'line-through') {
                tarefa.style.textDecoration = 'none'
            } else {
                tarefa.style.textDecoration = 'line-through'
            }
        })

        tarefa.addEventListener('dblclick', function () {
            tarefas.removeChild(tarefa)
        })
    }
})