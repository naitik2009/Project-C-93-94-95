//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDM2kdQLTEL5NcMkq8pBo3iwdJaglsXYYU",
      authDomain: "c-94-69827.firebaseapp.com",
      databaseURL: "https://c-94-69827-default-rtdb.firebaseio.com",
      projectId: "c-94-69827",
      storageBucket: "c-94-69827.appspot.com",
      messagingSenderId: "1098412460172",
      appId: "1:1098412460172:web:8ec6535edaabdc4f9b93a9"
};

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class = 'room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  //End code
            });
      });
}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_room.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_room.html";
}