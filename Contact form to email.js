function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;

	var messageSub = "Subject: " + subject;

	var messageBody = "Name: " + userName +
	"<br/> Phone:  " + phone +
	"<br/> Message:  " + message +
	"<br/> Email:  " + email;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "divyanshjindal360@gmail.com",
    Password : "3C889E1D728EEF6FFBB0916E559B009EE747",
    To : 'dmwish6@gmail.com',
    From : "divyanshjindal360@gmail.com",
    Subject : messageSub,
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}