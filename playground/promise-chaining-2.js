require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5e4f5892d71db146a53e93f1').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: true })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})