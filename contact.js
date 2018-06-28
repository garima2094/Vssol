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
var messagesRef = firebase.database().ref('contactDetails');

// Listen for form submit
document.getElementById('contactDetails').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){

	console.log('insdie function');
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var subject = getInputVal('subject');
 var msg = getInputVal('msg');
 
  saveMessage(name, email, phone, subject, msg);
  // Clear form
  document.getElementById('contactDetails').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, subject, msg){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
   name:name,
   email:email,
   phone:phone,
   subject:subject,
   msg:msg
  });

var ref=firebase.database().ref('contactDetails');
ref.on('value',gotData,errData); 

} 


function gotData(data)
{

var contact=data.val();
var keys=Object.keys(contact);
for(var i=0;i<keys.length;i++)
{
  var k=keys[i];
 var name=contact[k].name;
   var email=contact[k].email;
   var phone=contact[k].phone;
   var subject=contact[k].subject;
   var message=contact[k].message;
    console.log(name,email);


  }
}

function errData(err)
{

  console.log('Error!');
  console.log(err);
}







 