var socket = io();
function enterMessage(e){
    var theEvent = e || window.event;
    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if(code == 13){
        sendMsg();
    }
}

function sendMsg(){
    //发送消息
    if($(".textMsg").val()==''){
        alert('请输入内容！');
        return false;
    }
    socket.emit('sendMsg',{
        msg:$(".textMsg").val()
    });


    $(".textMsg").val('');
    return false;

}


//接收消息
socket.on('receiveMsg',(obj)=>{
    console.log(obj);
    $(".contentBox").append('<p>'+obj.msg+'</p>')
});






















