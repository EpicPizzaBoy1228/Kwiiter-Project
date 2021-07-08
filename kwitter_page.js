var firebaseConfig = {
      apiKey: "AIzaSyAdO11ZdDJi9wqP5z3umsSyStpkbMGJPUQ",
      authDomain: "c-93-62245.firebaseapp.com",
      databaseURL: "https://c-93-62245-default-rtdb.firebaseio.com",
      projectId: "c-93-62245",
      storageBucket: "c-93-62245.appspot.com",
      messagingSenderId: "501012541828",
      appId: "1:501012541828:web:eaf2af7587439af0972dd1"
    };
firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData; 
//Start code

//End code
      } });  }); }
getData();
function logout(){
      window.location = "kwitter_room.html";
}