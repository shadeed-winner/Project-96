// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDGxjATQB0iAysICdVGNonBv1fxJQOmtN4",
        authDomain: "letschat-e3070.firebaseapp.com",
        databaseURL: "https://letschat-e3070-default-rtdb.firebaseio.com",
        projectId: "letschat-e3070",
        storageBucket: "letschat-e3070.appspot.com",
        messagingSenderId: "372924479337",
        appId: "1:372924479337:web:e941aa8016986d749beff8",
        measurementId: "G-L7EHJSK4D6"
      };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}