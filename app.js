let cat = {
    positionFromTop: 0,
    positionFromLeft: 0,
}
const express = require("express");
const server = express();
const url = require("url");

server.get("", function(req, res){
    let reqURL = req.url;
    let queryObj = url.parse(reqURL, true).query;
    let top = +queryObj.top;
    let left = +queryObj.left;
    
    let catTop = cat.positionFromTop;
    let catleft = cat.positionFromLeft;
    if(queryObj.top !== undefined && queryObj.left !== undefined){
        cat.positionFromTop += top-1;
        cat.positionFromLeft += left-1;
    }

    res.writeHead(200, {"Content-Type": "text/html"});
    let text = "<html><head><title>Muk</title></head><body><h1>texasharjir mkany</h1><table border='1px'>"
    for(let i = 0; i <= 6; i++){
        text += "<tr  height='100px' >";
        for(let j = 0; j <= 6; j++){
            text += "<td width='100px'>";
            if(i === catTop && j === catleft){
                text += "<img src='https://bavnews.am/wp-content/uploads/2018/08/Hovik-Abrahamyan.jpg' width='100%'>"
            }
            text += "</td>";
        }
        text += "</tr>"
    }

    text += "</table></body></html>"

    res.write(text);
    res.end();
})

server.listen(2222);