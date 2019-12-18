const http = require('http');

function urlCollect (url){
    let body = '';
    http.get(url, res =>{
        res.setEncoding('utf8');
        var dataArr = [];
        res.on('data', chunk =>{
            dataArr.push(chunk);        
        })
        res.on('end',() =>{
            let result = dataArr.join('');
            console.log(result);
        })
    })
    
}

module.exports = urlCollect;