const fs = require('fs')


// module.exports = () =>{
//      addCat: function(file){
//         process.stdout.write(file)
//     }
// }

module.exports = (arg) =>{
    
    fs.readFile(process.cwd(arg),  (err, data) => {
        // if (err) throw err;
        console.log(data);
      });
    // console.log('hello world', arg)
    
} 
