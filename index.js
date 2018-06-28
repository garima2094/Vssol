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
var vals_services = "";
var vals_modes="";
var payment=getInputVal('payment1');
for (var i=0, n=ourServices.length;i<n;i++) 
{
    if (ourServices[i].checked) 
    {
        vals_services += ","+ourServices[i].value;
    }
}
for (var i=0, n=modes.length;i<n;i++) 
{
    if (modes[i].checked) 
    {
        vals_modes += ","+modes[i].value;
    }
}
  // Save message
  saveMessage(name, country, city, email, phone,bookingDate,vals_services,vals_modes,payment);
  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, country, city, email, phone,bookingDate,vals_services,vals_modes,payment){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
   name:name,
   country:country,
   city:city,
   email:email,
   phone:phone,
   bookingDate:bookingDate,
   services:vals_services,
   modes:vals_modes,
   payment_mode:payment
  });
var ref=firebase.database().ref('bookNow');
ref.on('value',gotData,errData); 

} 


function gotData(data)
{

var book=data.val();
var keys=Object.keys(book);
for(var i=0;i<keys.length;i++)
{
  var k=keys[i];
 var name=book[k].name;
 var  country=book[k].country;
  var city=book[k].city;
   var email=book[k].email;
   var phone=book[k].phone;
   var bookingDate=book[k].bookingDate;
   var services=book[k].services;
   var modes=book[k].modes;
   var payment_mode=book[k].payment_mode; 
    console.log(name,modes);


  }
}

function errData(err)
{

  console.log('Error!');
  console.log(err);
}







 