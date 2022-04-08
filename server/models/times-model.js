const {Schema, model} = require('mongoose')

const TimesSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    date: {type: String, required: true},
    task: {type: String, required: true},
    hours: {type: Number},
    minutes: {type: Number},
    details: {type: String}
})

module.exports = model('Times', TimesSchema)