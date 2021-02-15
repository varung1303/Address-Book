function validation(name, mail, mobile){
		var mobileP = /^\d{10}$/;
		var mailP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if(name!='' && mail.match(mailP) && mobile.match(mobileP))
			return true;
		else if(name==''){
			nameField();
			alert("Name cannot be Empty");
		}
		else if(!mail.match(mailP) && mail!=''){
			mailField();
			alert("Please check the Email-Id Entered");
		}
		else if(!mobile.match(mobileP)){
			mobileField();
			alert("Please enter a 10 digit number");
		}
		else if(mail==''){
			mailField();
			alert("Email-Id field cannot be Empty");
		}
		
}