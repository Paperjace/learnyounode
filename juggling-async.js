const http = require('http');

var resultArr = [];

// Get urls from command line arguments
var urls = process.argv.slice(2);

// Counter is equal to number of URLs entered in CLI
var counter = urls.length;

//Loop through each URL one at a time, and GET each URL's data. After data is completely retrived, add the data to the resultArr array based on index of the forEach loop.  Subtract 1 from counter.  When counter equal to 0, loop through the resultArr and log the data for each index.
urls.forEach((element,index) =>{
    http.get(element, res =>{
        res.setEncoding('utf8');
        var dataArr = [];
        res.on('data', chunk =>{
            dataArr.push(chunk);        
        })
        res.on('end',() =>{
            let result = dataArr.join('');
            resultArr[index] = result;
            counter--;

            if(counter == 0){
                return resultArr.forEach(url =>{
                    console.log(url);
                })
            }
        })
    })
})