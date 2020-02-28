require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e4f5892d71db146a53e93f1').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: true })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const incompleteTasks = await Task.countDocuments({ completed: false })
    return {
        task: task,
        incompleteTasks: incompleteTasks
    }
}

deleteTaskAndCount('5e4f58b5af4b3946b685a090').then((result) => {
    console.log(result)
    console.log(result.incompleteTasks)
}).catch((e) => {
    console.log(e)
})