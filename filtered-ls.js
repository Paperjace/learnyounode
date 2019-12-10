const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2],'utf8',(err,data) =>{
    if(err) throw err;
    var filterExt = `.${process.argv[3]}`;
    data.forEach(el =>{
        if(path.extname(el) == filterExt){            
            console.log(el);
        }
    });
    //console.log(data);
});