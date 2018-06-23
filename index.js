var name=document.getElementById("name");
var email=document.getElementById("email");
var phone=document.getElementById("phone");
var bookingDate=document.getElementById("bookingDate");
var time=document.getElementById("time");
var services=document.getElementByName("services[]");
var modes=document.getElementByName("modes[]");


var submitBtn=document.getElementById("submitBtn");

function submitClick() {
window.alert("Inside function");
window.alert(name);
window.alert(email);
window.alert(phone);
window.alert(bookingDate);
window.alert(time);
window.alert(services);
}