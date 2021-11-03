
const {Schema,model} = require('mongoose')



const role = Schema({
    value: {type: String, unique: true, default: 'USER'}
})

module.exports = model('role', role)
