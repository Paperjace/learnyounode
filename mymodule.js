const fs = require('fs');
const path = require('path');

module.exports = function (dir,ext,result){    
    fs.readdir(dir,'utf8',(err,data) => {
        if(err) {return result(err)};
        dataArr = [];
        data.filter(fileExt =>{
            if (path.extname(fileExt) == `.${ext}`){
                dataArr.push(fileExt);
            }
        });
        return result(null,dataArr);
    });
};
