
document.getElementById("mysubmit").onclick=function(){
    let username=document.getElementById("mytext").value;
    localStorage.setItem("guestName",username);
    window.location.href="bims1.html";
};