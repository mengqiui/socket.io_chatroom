var socket = io();
function enterMessage(e){
    var theEvent = e || window.event;
    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if(code == 13){
        sendMsg();
    }
}

function sendMsg(){
    //������Ϣ
    if($(".textMsg").val()==''){
        alert('���������ݣ�');
        return false;
    }
    socket.emit('sendMsg',{
        msg:$(".textMsg").val()
    });


    $(".textMsg").val('');
    return false;

}


//������Ϣ
socket.on('receiveMsg',(obj)=>{
    console.log(obj);
    $(".contentBox").append('<p>'+obj.msg+'</p>')
});






















