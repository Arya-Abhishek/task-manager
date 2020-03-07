const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // console.log('Hi I am form index.js')

    // const task = await Task.findById('5e5f67a1f0191642cf242d7c')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // const user = await User.findById(task.owner)
    // console.log(user)
    // Now this is the way we can fetch our owner who created the task but we wont do it this way offcourse

    // const user = await User.findById('5e61596b15b2034cd0a4d04c')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
}
   
main()