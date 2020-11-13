
const newPwd = require('./pwd')
// newPwd();

const newLs = require('./ls')
// newLs();
// //output a prompt
process.stdout.write("prompt >")

// //
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    
    if(cmd === 'ls'){
        newLs();
    }
    if(cmd === 'pwd'){
        newPwd()
    }
//     console.log(`${process.cwd()}`);
//     // process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt > ')
    
});

