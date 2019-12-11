const http = require('http');

http.get(process.argv[2], res =>{
    res.setEncoding('utf8');
    var dataArr = [];
    res.on('data', chunk =>{
        dataArr.push(chunk);        
    })
    res.on('end',() =>{
        let result = dataArr.join('');
        console.log(result.length);
        console.log(result);
    })
})