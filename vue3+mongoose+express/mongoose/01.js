// 1.安装依赖包
// pnpm i mongoose -D
// 2.引入依赖
var MDB = require("mongoose")
// 3.连接数据库
MDB.connect("mongodb://127.0.0.1/test3", {
    useNewUrlParser: true
})
// 4.监听数据库连接
const db = MDB.connection //新建连接实例对象
db.once("open", function ()
{
    console.log('connected')
})
// db.on('error', console.error.bind(console, 'connection error:'));
// MDB.disconnect()
// 5.监听断开连接,一般不需要断开。关系型数据库每次操作都需要重新连接，MongoDB不需要。只需要连接一次
db.once("close", function ()
{
    console.log('disconnected')
})

// 调用 Schema
var Schema = MDB.Schema;

//创建Schema对象（约束）:类似于vue3的defineProps和ts的类型声明
var stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: 'female',
    },
    addr: String,

}, { timestamps: true });

// 在Schema定以后添加字段时需要使用 add() 方法,如在stuSchema后添加一个
stuSchema.add({ stuId: Number, })

//将stuSchema映射到一个MongoDB collection中并定义这个文档的构成
var stuModel = MDB.model('student', stuSchema)

// 向MongoDB的collection（student）中插入数据
// stuModel.create({
//     stuId: 1,
//     name: 'cherish',
//     age: 18,
//     addr: 'fujian',
// }, (err, result) => { if (!err) console.log('插入成功' + result) })

// 查找
console.log('start')
stuModel.find((err, result) => { if (!err) console.log(result) })


/**
 * 模式（Schemas）
 * 每个 schema 都会映射到一个 MongoDB collection 并定义这个collection里的文档结构
 *  支持的字段类型
 *      类型	作用
        String	定义字符串
        Number	定义数字
        Date	定义日期
        Buffer	定义二进制
        Boolean	定义布尔值
        Mixed	定义混合类型
        ObjectId	定义对象ID
        Array	定义数组
 *  
 **/

/**
 * 【timestamps】
当在实例化Schema对象(schema)中设置timestamps为 true 时，即定义类型的时候。
schema映射的文档 document 会自动添加 createdAt 和 updatedA t这两个字段，代表创建时间和更新时间：
 { timestamps:true }
 **/

/**
 * 【_id】
当未定义_id字段时 mongoose 会为每一个文档自动添加一个不重复的_id，
类型为ObiectId（在查询语句中需要通过 findById() 才能查询）
 **/

/**
 * find(),findById()
 **/
stuModel.find((err, result) => { if (!err) console.log(result) })