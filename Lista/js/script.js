let data = [{
    id: 1,
    title: 'Estudar HTML5'
},
{
    id: 2,
    title: 'Estudar CSS3'
}, {
    id: 3,
    title: 'Estudar JavaScript'
}, {
    id: 4,
    title: 'Estudar PHP'
}]

data.forEach(task => {
    let li = document.createElement('li')
    li.innerHTML = 
    `
    <input type="checkbox" id="task-${task.id}">
    <label for="task-${task.id}">${task.title}</label>
    </input>
    `
    document.querySelector('.todo').append(li)
})
