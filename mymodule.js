const fs = require('fs');
const path = require('path');

module.exports = function (dir,ext,result){    
    fs.readdir(dir,'utf8',(err,data) => {
        if(err) {return result(err)};
        
        var filterArray = [];
        var filterExt = `.${ext}`;   
        for(i=0;i<=data.length;i++){
            if(data[i] != undefined){
                if(path.extname(data[i]) == filterExt){
                    filterArray.push(data[i]);
                    console.log(data[i]);                     
                }   
            } else if (data[i] == undefined) {
                console.log("");
            }
        }
        return result(null,filterArray);
    });
};
