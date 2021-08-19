var firebaseConfig = {
      apiKey: "AIzaSyDci5eSfwyLWIKwjR5gt4Tp4Iw820iRtxY",
      authDomain: "kwitter-chat-b296e.firebaseapp.com",
      databaseURL: "https://kwitter-chat-b296e-default-rtdb.firebaseio.com",
      projectId: "kwitter-chat-b296e",
      storageBucket: "kwitter-chat-b296e.appspot.com",
      messagingSenderId: "457524222611",
      appId: "1:457524222611:web:46cb39c8b166620f288b66"
    };
    firebase.initializeApp(firebaseConfig);
    function send(){
          msg=document.getElementById("Message").value;
          firebase.database().ref(room_name).push({
                name:User_name,
                message:msg,
                like:0
          });
          document.getElementById("Message").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
