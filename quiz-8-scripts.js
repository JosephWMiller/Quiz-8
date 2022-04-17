const data1=document.getElementById("data1");
const data2=document.getElementById("data2");
const serverresponse=document.getElementById("serverresponse");

function send(opcode){
    console.log(opcode)
    let request = new XMLHttpRequest();
    request.open("GET","https://us-central1-quiz-8-project.cloudfunctions.net/quiz-8-function?operation="+opcode+"&data1="+data1.value+"&data2="+data2.value,true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(null);
    request.onreadystatechange=function(){
        if(this.readyState==0){
            serverresponse.innerText="Not initialized connection";
            break;
        } else if(this.readyState==1){
            serverresponse.innerText="Server connection established";
            break;
        } else if(this.readyState==2){
            serverresponse.innerText="Server recieved the request";
            break;
        } else if(this.readyState==3){
            serverresponse.innerText="Server is processing the request";
            break;
        } else if(this.readyState==4){
            if(request.status!=200){
                serverresponse.innerText="Server gave the error "+request.status+": "+this.responseText;
            }else{
                serverresponse.innerText=this.responseText;
            }
            break;
        }
    }
}

function add(){
    send("add");
}
function sub(){
    send("sub");
}
function mul(){
    send("mul");
}
function div(){
    send("div");
}
