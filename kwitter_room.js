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
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!"
    function addRoom() { room_name = document.getElementById("room_name").value; 
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
    localStorage.setItem("room_name", room_name); 
    window.location = "kwitter_page.html"; }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname= "+Room_names)
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
      document.getElementById("output").innerHTML+=row
      });});}
getData();
      function redirectToRoomName (name){
            console.log(name)
            localStorage.setItem("room_name",name)
            window.location="kwitter_page.html"
      }
      function logout(){
            localStorage.removeItem("user_name")
            localStorage.removeItem("room_name")
            window.location="index.html"
      }