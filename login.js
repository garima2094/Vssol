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

// Reference messages collection
var ref = firebase.database().ref('username');


// Listen for form submit
document.getElementById('loginPage').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){

	console.log('insdie function');
  e.preventDefault();

  // Get values
  var username = getInputVal('username');
 var password = getInputVal('password');

console.log(username);

 ref.on('value',gotData,errData); 
  // Clear form
  document.getElementById('loginPage').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

function gotData(data)
{

var user=data.val();
var keys=Object.keys(user);
 var k=keys[0];
 var username=user[k].username;
 var  password=user[k].password;

      if(username=='vssoladmin')
      {
        console.log('inside if');
    console.log(username,password);
        
      }
      else
      {
        alert("login denied");
      }

  }


function errData(err)
{

  console.log('Error!');
  console.log(err);
}







 