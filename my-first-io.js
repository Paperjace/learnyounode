const fs = require('fs');

const fileText = fs.readFileSync(process.argv[2],'utf8');

console.log(fileText.split('\n').length-1);