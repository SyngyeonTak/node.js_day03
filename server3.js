/*
ejs를 이해해보자

ejs란?
-오직 node.js 서버특에서만 해석 및 실행될 수 있는 파일
-js의 문접 사용이 가능(if, for... 변수선언)
-다른 서버측 스크립트 언어인(php, jsp, asp와 같은 목적)
-파일이 수정되더라도 서버를 재가동할 필요가 없다.
-디자인단을 분리하여 분업을 효율적으로 하기위해 파일을 분리해 놓는다.
*/ 

//복습5
var http = require("http");
var fs = require("fs");
var ejs = require("ejs");

var server = http.createServer(function(request, response){
    
    fs.readFile("./list.ejs", "utf-8", function(error, data){
        if(error){
            console.log("읽기실패", error);
        }else{
            response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
            response.end(ejs.render(data));//ejs파일의 <%%> 코드 영역을 서버에서 수행시킨 후
            //응답 정보를 구성하여 클라이언트에게 보낸다.
        }
    });
    
    
});

server.listen(7979, function(){
    console.log("My Server is runnint at 7979 port...");
})