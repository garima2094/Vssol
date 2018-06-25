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
var messagesRef = firebase.database().ref('bookNow');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){

	console.log('insdie function');
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
 var country = getInputVal('country');
 var city = getInputVal('city');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var bookingDate = getInputVal('bookingDate');
 var ourServices = document.getElementsByName('services[]');
 var modes = document.getElementsByName('modes[]');
var vals = "";
for (var i=0, n=ourServices.length;i<n;i++) 
{
    if (ourServices[i].checked) 
    {
        vals += ","+ourServices[i].value;
    }
}
  // Save message
  saveMessage(name, country, city, email, phone,bookingDate,vals);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, country, city, email, phone,bookingDate,vals){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
   name:name,
   country:country,
   city:city,
   email:email,
   phone:phone,
   bookingDate:bookingDate,
   services:vals
  });
} 
