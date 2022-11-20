
function talk(){
    var know={
        "Hello":"Hey hi",
        "Who are you": "I'm a bot ",
        "How are you": " I'm fine",
        "by": " Byyy",
    };
    var user= document.getElementById("userbox").value;
    document.getElementById("chatlog").innerHTML=user+" <br>"
    if(user in know){
        document.getElementById("chatlog").innerHTML=know[user]+"<br>";
        
    }else{
        document.getElementById("chatlog").innerHTML="Sorry , Update library <br>";
    }

}
function a(){
    document.getElementById("chatlog").innerHTML="";  
    document.getElementById("userbox").value=null;
}
