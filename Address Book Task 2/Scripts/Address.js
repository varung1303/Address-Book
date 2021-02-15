var editBtn = document.getElementById("editBtn");
var modal = document.getElementById("myModal");
var modalEdit = document.getElementById("myModalEdit")
var btn = document.getElementById("add");
var submitBtn = document.getElementById("adddetails");
var editbutton = document.getElementById("editdetails");
var addBookDiv = document.querySelector(".contact-list");
var form = document.querySelector('form');
var form1 = document.querySelectorAll('form')[1];
var editDltDiv = document.getElementById("editDltDiv");
var rightDisplayBtn = document.getElementById("rightDisplayBtn");
var mainDisplayContent = document.querySelector(".main-display-contact");
var nameInput = document.getElementById("name");
var mailInput = document.getElementById("email");
var mobileInput = document.getElementById("mobile");
var nameEditInput = document.getElementById("editname");
var mailEditInput = document.getElementById("editemail");
var mobileEditInput = document.getElementById("editmobile");
var watermark = document.getElementById("watermark");
var rank = 1;
var addressBook = [];
var id = "";
var i = 0;
var last="";



nameInput.onclick = function(){
	nameFieldDef();
}
mailInput.onclick = function(){
	mailFieldDef();
}
mobileInput.onclick = function(){
	mobileFieldDef();
}
submitBtn.onclick = function(event){
	handleSubmitServices(event);
};




function addDetails(){	
	
	hideModal();
	addBookDiv.innerHTML='';
	for(n in addressBook)
	{
		var str = '<div id="displayButton">';
		str +=  '<p class="contactdisp main-name" id="rightDisplayBtn' + addressBook[n].srno + '" style="font-size: 40px;font-family:"Candara"; text-decoration: none;" onclick="getName(this.id)">' + addressBook[n].name + '</p>';
		str += '<p class="contactdisp border-style"  style="font-family: "sans-serif";">' + addressBook[n].mail + '</p>';
		str += '<p class="contactdisp border-style borderbottom" style="font-family: "sans-serif";">+91 ' + addressBook[n].mobile + '</p></div>';
		addBookDiv.innerHTML += str;
		
		nameFieldDef();
		mailFieldDef();
		mobileFieldDef();
		clearForm();
		hideWatermark();
	}
}


editbutton.onclick = function(event){
	event.preventDefault();
	var nameEdit = document.getElementById("editname").value;
	var mailEdit = document.getElementById("editemail").value;
	var mobileEdit = document.getElementById("editmobile").value;
	var landlineEdit = document.getElementById("editlandline").value;
	var websiteEdit = document.getElementById("editwebsite").value;
	var address1Edit = document.getElementById("editaddress1").value;
	var address2Edit = document.getElementById("editaddress2").value;
	var address3Edit = document.getElementById("editaddress3").value;

	if(validation(nameEdit, mailEdit, mobileEdit)){
		for(n in addressBook){

			if(last==addressBook[n].srno){
				addressBook[n].name = nameEdit;
				addressBook[n].mail = mailEdit;
				addressBook[n].mobile = mobileEdit;
				addressBook[n].landline = landlineEdit;
				addressBook[n].website = websiteEdit;
				addressBook[n].address1 = address1Edit;
				addressBook[n].address2 = address2Edit;
				addressBook[n].address3 = address3Edit;

				var editedName = document.getElementById(id);

				editedName.innerHTML = nameEdit;
				editedName.nextElementSibling.innerHTML = mailEdit;
				editedName.nextElementSibling.nextElementSibling.innerHTML = "+91 " + mobileEdit;

				var lastDig = parseInt(id.charAt(id.length-1));
				var id1 = "A"+lastDig;
				var nextEdit = document.getElementById(id1);


				nextEdit.innerHTML = nameEdit;
				nextEdit.nextElementSibling.innerHTML ="Email: " +  mailEdit;
				nextEdit.nextElementSibling.nextElementSibling.innerHTML ="Mobile:+91 " + mobileEdit;
				nextEdit.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML ="Landline: " +  landlineEdit;
				nextEdit.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML ="Website: " +  websiteEdit;
				nextEdit.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML ="Address: " +  address1Edit;
				nextEdit.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML =address2Edit;
				nextEdit.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML =address3Edit;
				hideEditModal();
				addressBook.sort(compare);
				addDetails();

			}	
		}
	}
	
}



function getName(clicked){

	id=clicked;
	last = id.charAt(id.length-1);
	console.log(last);
	mainShow();
	//var contactToBeDisp = document.getElementById(id);
	//var nameToBeCheck = contactToBeDisp.innerHTML;
	
	mainDisplayContent.innerHTML='';
	for(n in addressBook)
	{
		
		if(last==addressBook[n].srno){
			var str = '<div id="editDltDiv" style="width: 170px; height:50px; margin-left: 0%; float: right;min-width: 170px;"><img src="Images/edit1.jpg" style="width: 9%; float:left; margin-left:20px; margin-top: 5px;"><button href="#" id="editBtn" onclick="prepopulate()"  style="background-color: white; float:left; margin-right: 10px;border: none; outline: none; cursor:pointer; margin-top: 5px;">EDIT</button><img src="Images/delete2.png" style="width: 10%; float:left; margin-right:-5px; margin-top: 5px;"><button  href="#" onclick="deleteContact()" style="background-color: white; margin-right: 0px; border: none; outline: none;cursor:pointer; margin-top: 5px; ">DELETE</button></div>';
			str +=  '<p class="displayName" style="font-family: Calibri, sans-serif;font-size: 40px;margin: 0;margin-left: 10px;font-weight: 400;color: #4f4f4f;white-space: nowrap;overflow:hidden;text-overflow:ellipsis;" id="A' + id.charAt(id.length-1) + '">' + addressBook[n].name + '</p>';
			str += '<p class="subdivision commonstyle"  style="margin-top: 10px;">Email: ' + addressBook[n].mail + '</p>';
			str += '<p class="subdivision">Mobile: +91 ' + addressBook[n].mobile + '</p>';
			str += '<p class="subdivision commonstyle" style="margin-top: 0px;">Landline:    ' + addressBook[n].landline + '</p>';
			str += '<p class="subdivision commonstyle">Website: ' + addressBook[n].website + '</p>';
			str += '<p class="subdivision commonstyle" style="margin-bottom:0;">Address: ' + addressBook[n].address1 + '</p>';
			str += '<p class="subdivision" style="margin-left: 83px; margin-top: 0;">' + addressBook[n].address2 + '</p>';
			str += '<p class="subdivision" style="margin-left: 83px;margin-top: 0;">' + addressBook[n].address3 + '</p>';

			mainDisplayContent.innerHTML += str;
		}
	}

}


function deleteContact(){
	console.log(id);
	mainHide();
	
	var remove = parseInt(id.charAt(id.length-1));
	var id2 = "A"+remove;
	var deleteName = document.getElementById(id);
	var x="";
	for(x in addressBook){
		if(last==addressBook[x].srno)
			break;
	}		

	
	addressBook.splice(x,1);
	console.log(addressBook);
	
	deleteName.nextElementSibling.nextElementSibling.remove();
	deleteName.nextElementSibling.remove();
	deleteName.remove();
	
	var mainDeleteName = document.getElementById(id2);
	
	mainDeleteName.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.remove();
	mainDeleteName.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.remove();
	mainDeleteName.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.remove();
	mainDeleteName.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.remove();
	mainDeleteName.nextElementSibling.nextElementSibling.nextElementSibling.remove();
	mainDeleteName.nextElementSibling.nextElementSibling.remove();
	mainDeleteName.nextElementSibling.remove();
	mainDeleteName.remove();
	alert("Contact Deleted");
	rank--;
	if(rank==1)
		showWatermark();
	addressBook.sort(compare);
	addDetails();p
}




function prepopulate() {
	nameFieldDef();
	mailFieldDef();
	mobileFieldDef();
	modalEdit.style.display = "block";
	//var contactToBeEdit = document.getElementById(id);
	//var nameToBeEdit = contactToBeEdit.innerHTML;

	for(n in addressBook)
	{
		if(last==addressBook[n].srno){
			var nameField = document.getElementById("editname");
			var emailField = document.getElementById("editemail");
			var mobileField = document.getElementById("editmobile");
			var landlineField = document.getElementById("editlandline");
			var websiteField = document.getElementById("editwebsite");
			var add1Field = document.getElementById("editaddress1");
			var add2Field = document.getElementById("editaddress2");
			var add3Field = document.getElementById("editaddress3");
			let personEdit = addressBook[n];
			i = n;


			nameField.value = personEdit.name;
			emailField.value = personEdit.mail;
			mobileField.value = personEdit.mobile;
			landlineField.value = personEdit.landline;
			websiteField.value = personEdit.website;
			add1Field.value = personEdit.address1;
			add2Field.value = personEdit.address2;
			add3Field.value = personEdit.address3;
		}
	}

}



function hideModal(){
	modal.style.display = "none";
	nameFieldDef();
	mailFieldDef();
	mobileFieldDef();
	clearForm();
}

function hideEditModal(){
	nameFieldDef();
	mailFieldDef();
	mobileFieldDef();
	modalEdit.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal || event.target == modalEdit) {
		modal.style.display = "none";
		modalEdit.style.display = "none";
		nameFieldDef();
		mailFieldDef();
		mobileFieldDef();
		
		clearForm();
	}


}



btn.onclick = function() {
	modal.style.display = "block";
}
function hideEditDlt(){
	mainDisplayContent.style.display = "none";
	clearForm();
}	

function mainShow(){
	mainDisplayContent.style.display = "block";

}


function mainHide(){
	mainDisplayContent.style.display = "none";
	clearForm();
}

function clearForm(){
	var frm = document.querySelectorAll(".form-fields");
	for(var x in frm){
		frm[x].value = '';
	}

}

function nameField(){
	nameInput.style.backgroundColor = "#cf987a";
	nameEditInput.style.backgroundColor = "#cf987a";

}

function mailField(){
	mailInput.style.backgroundColor = "#cf987a";
	mailEditInput.style.backgroundColor = "#cf987a";
}

function mobileField(){
	mobileInput.style.backgroundColor = "#cf987a";
	mobileEditInput.style.backgroundColor = "#cf987a";
}

function nameFieldDef(){
	nameInput.style.backgroundColor = "";
	nameEditInput.style.backgroundColor = "";
}

function mailFieldDef(){
	mailInput.style.backgroundColor = "";
	mailEditInput.style.backgroundColor = "";
}

function mobileFieldDef(){
	mobileInput.style.backgroundColor = "";
	mobileEditInput.style.backgroundColor = "";
}

function hideWatermark(){
	watermark.style.display = "none";
}

function showWatermark(){
	watermark.style.display = "block";
}















