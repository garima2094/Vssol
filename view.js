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

// Submit form
function submitBook(e) {
    e.preventDefault();
    getBook();
}
// Submit form
function submitContact(e){
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

function gotDataBook(data) {
    var book=data.val();
    var keys=Object.keys(book);
    var table = document.createElement("TABLE");
    jQuery(table).addClass('table table-bordered table-striped');
    //Add the header row.
    var row = table.insertRow(-1);
    var headerCell1 = document.createElement("TH");
    headerCell1.innerHTML = "NAME";
    var headerCell2 = document.createElement("TH");
    headerCell2.innerHTML = "EMAIL";
    var headerCell3 = document.createElement("TH");
    headerCell3.innerHTML = "PHONE";
    var headerCell4 = document.createElement("TH");
    headerCell4.innerHTML = "COUNTRY";
    var headerCell5 = document.createElement("TH");
    headerCell5.innerHTML = "CITY";
    var headerCell6 = document.createElement("TH");
    headerCell6.innerHTML = "BOOKING DATE";
    var headerCell7 = document.createElement("TH");
    headerCell7.innerHTML = "SERVICES";
    var headerCell8 = document.createElement("TH");
    headerCell8.innerHTML = "MODE";
    var headerCell9 = document.createElement("TH");
    headerCell9.innerHTML = "PAYMENT";

    row.appendChild(headerCell1);
    row.appendChild(headerCell2);
    row.appendChild(headerCell3);
    row.appendChild(headerCell4);
    row.appendChild(headerCell5);
    row.appendChild(headerCell6);
    row.appendChild(headerCell7);
    row.appendChild(headerCell8);
    row.appendChild(headerCell9);

    for(var i=0;i<keys.length;i++) {
        var k=keys[i];
        var name=book[k].name;
        var country=book[k].country;
        var city=book[k].city;
        var email=book[k].email;
        var phone=book[k].phone;
        var bookingDate=book[k].bookingDate;
        var services=book[k].services;
        var modes=book[k].modes;
        var payment_mode=book[k].payment_mode;
        console.log(name,modes);
        row = table.insertRow(-1);
        var cell1 = row.insertCell(-1);
        cell1.innerHTML = name;
        var cell2 = row.insertCell(-1);
        cell2.innerHTML = email;
        var cell3 = row.insertCell(-1);
        cell3.innerHTML = phone;
        var cell4 = row.insertCell(-1);
        cell4.innerHTML = country;
        var cell5 = row.insertCell(-1);
        cell5.innerHTML = city;
        var cell6 = row.insertCell(-1);
        cell6.innerHTML = bookingDate;
        var cell7 = row.insertCell(-1);
        cell7.innerHTML = services;
        var cell8 = row.insertCell(-1);
        cell8.innerHTML = modes;
        var cell9 = row.insertCell(-1);
        cell9.innerHTML = payment_mode;
    }
    var dvTable = document.getElementById("foundation");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}
function gotDataContact(data) {
    var contact=data.val();
    var keys=Object.keys(contact);
    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    var h3 = document.createElement("H3");
    h3.innerHTML = "Contacts Details"
    jQuery(table).addClass('table table-bordered table-striped');
    //Add the header row.
    var row = table.insertRow(-1);
    var headerCell1 = document.createElement("TH");
        headerCell1.innerHTML = "NAME";
    var headerCell2 = document.createElement("TH");
        headerCell2.innerHTML = "EMAIL";
    var headerCell3 = document.createElement("TH");
        headerCell3.innerHTML = "PHONE";
    var headerCell4 = document.createElement("TH");
        headerCell4.innerHTML = "SUBJECT";
    var headerCell5 = document.createElement("TH");
        headerCell5.innerHTML = "MESSAGE";
        row.appendChild(headerCell1);
        row.appendChild(headerCell2);
        row.appendChild(headerCell3);
        row.appendChild(headerCell4);
        row.appendChild(headerCell5);
    for(var i=0;i<keys.length;i++) {
        var k=keys[i];
        var name=contact[k].name;
        var email=contact[k].email;
        var phone=contact[k].phone;
        var subject=contact[k].subject;
        var message=contact[k].message;
        row = table.insertRow(-1);
        var cell1 = row.insertCell(-1);
        cell1.innerHTML = name;
        var cell2 = row.insertCell(-1);
        cell2.innerHTML = email;
        var cell3 = row.insertCell(-1);
        cell3.innerHTML = phone;
        var cell4 = row.insertCell(-1);
        cell4.innerHTML = subject;
        var cell5 = row.insertCell(-1);
        cell5.innerHTML = message;
    }
    var dvTable = document.getElementById("basic");
    dvTable.innerHTML = "";
    dvTable.appendChild(h3);
    dvTable.appendChild(table);
}

function errData(err)
{

  console.log('Error!');
  console.log(err);
}

  $(document).on("click", function(e){
      if($(e.target).is("#contact")){
          $("#basic").show();
          submitContact(e);
          $("#foundation").hide();

      }else if($(e.target).is("#book")){
          $("#foundation").show();
          submitBook(e);
          $("#basic").hide();
      }
  });




 