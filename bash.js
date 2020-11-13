const newCat = require('./cat')

const newPwd = require('./pwd')
// newPwd();

const newLs = require('./ls')
// newLs();

// //output a prompt
process.stdout.write("prompt >")

// //
process.stdin.on('data', (data) => {
    // const userData = Array.from(data);
    data = data.toString().trim();
    const cmd = data.split(' ')[0];
    const arg = data.split(' ')[1];

    console.log(cmd, arg, 'cmd + arg')

    if(cmd === 'cat'){
        newCat(arg);
    }

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

