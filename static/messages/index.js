const fs = require('fs')
console.log(fs)
// fs.readdir(process.cwd(), function (err, files) {
//   if (err) {
//     console.log(err)
//     return
//   }

//   var count = files.length
//   var results = {}
//   files.forEach(function (filename) {
//     fs.readFile(filename, function (data) {
//       results[filename] = data
//       count--
//       if (count <= 0) {
//         // 对所有文件进行处理
//       }
//     })
//   })
// })

const map = require('./library')
console.log(map)
export default map
