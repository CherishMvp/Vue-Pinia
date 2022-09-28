const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    username: String,
    password: String
})
const model = mongoose.model('custom', schema, 'custom')

//用户查询
function findAll(data)
{
    const { username, password } = data
    return model.find({ username, password })
}

// 用户注册
function insertCustom(data)
{
    const { username, password } = data
    return model.create({
        username,
        password
    })
}

module.exports = {
    findAll,
    insertCustom
}