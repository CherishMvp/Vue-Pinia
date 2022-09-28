const mongoose = require('mongoose')
async function main()
{
  // 连接mongoDb
  await mongoose.connect('mongodb://localhost/custom').then((res) =>
  {
    console.log('connect')
  })
}

main()
