const {Schema, model} = require('mongoose')

const TasksSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    task: {type: String, required: true}
})

module.exports = model('Tasks', TasksSchema)