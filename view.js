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

// Listen for form submit
document.getElementById('bookForm').addEventListener('submit', submitBook);
document.getElementById('contactForm').addEventListener('submit', submitContact);


// Submit form
function submitBook(e){

console.log('Inside the submit book');
  e.preventDefault();

  getBook();
}

// Submit form
function submitContact(e){


console.log('Inside the submit contact');
  e.preventDefault();

  getContact();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function getBook(){

var messagesRef_booknow = firebase.database().ref('bookNow');
messagesRef_booknow.on('value',gotDataBook,errData); 

} 

// Save message to firebase
function getContact(){

var messagesRef_contact = firebase.database().ref('contactDetails');

messagesRef_contact.on('value',gotDataContact,errData); 

} 


function gotDataBook(data)
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
function gotDataContact(data)
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









 