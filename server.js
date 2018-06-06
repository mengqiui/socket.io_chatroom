var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

//注意socket.io是通过传递http（HTTP服务器）对象来初始化新实例
var io = require('socket.io')(http);

app.use('/',express.static(__dirname + '/www'));

io.on('connection',(socket)=>{

  //服务器接收到消息
  socket.on('sendMsg',function(data){
    console.log('message:'+data.msg);

    //广播接收到的消息
    socket.broadcast.emit('receiveMsg',{
      msg:data.msg
    });

    //接收消息
    socket.emit('receiveMsg',{
      msg:data.msg
    })
  });



});

http.listen(port,function(){
  console.log('listening on '+port+' port...')
});















