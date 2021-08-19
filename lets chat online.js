function Adduser() {
    user_name=document.getElementById("User_name").value;
    localStorage.setItem("Username",user_name);
    window.location="lets chat online_room.html";
}