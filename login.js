  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDFPGtJrAr6n8j_uoB5Xl2814heOqfmUSc",
    authDomain: "vssolweb.firebaseapp.com",
    databaseURL: "https://vssolweb.firebaseio.com",
    projectId: "vssolweb",
    storageBucket: "vssolweb.appspot.com",
    messagingSenderId: "515253475505"
  };
  firebase.initializeApp(config);

// Listen for form submit
document.getElementById('loginPage').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){

  e.preventDefault();

  // Get values
  var uname = getInputVal('username');
  var pass = getInputVal('password');
 
  saveMessage();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(){

var ref=firebase.database().ref('userDetails');

ref.on('value',gotData,errData); 

} 


function gotData(data)
{

var user_data=data.val();
console.log(user_data);
var keys=Object.keys(user_data);
  var k=keys[0];
 var uname_data=user_data[k].username;
   var pass_data=user_data[k].password;
    console.log(uname_data,pass_data);
    

}


function errData(err)
{

  console.log('Error!');
  console.log(err);
}


function errData(err)
{

  console.log('Error!');
  console.log(err);
}







 