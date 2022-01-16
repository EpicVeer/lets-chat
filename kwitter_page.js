var firebaseConfig = {
      apiKey: "AIzaSyDCMSgNwkePZ21zF27L-OXve_Fpos0XINc",
      authDomain: "kwitter-21582.firebaseapp.com",
      databaseURL: "https://kwitter-21582-default-rtdb.firebaseio.com",
      projectId: "kwitter-21582",
      storageBucket: "kwitter-21582.appspot.com",
      messagingSenderId: "54478237837",
      appId: "1:54478237837:web:6287817e3f004b9271b2c4"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name")
    room_name=localStorage.getItem("room_name")


    function send(){
      msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value=""
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
