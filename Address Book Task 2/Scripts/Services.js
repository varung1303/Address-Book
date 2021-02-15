var rank = 1;
var addressBook = [];
var id = "";
var i = 0;

function handleSubmitServices(event) {
		event.preventDefault();

		var nameForm = document.getElementById("name");
		var mailForm = document.getElementById("email");
		var mobileForm = document.getElementById("mobile");
		var landlineForm = document.getElementById("landline");
		var websiteForm = document.getElementById("website");
		var address1Form = document.getElementById("address1");
		var address2Form = document.getElementById("address2");
		var address3Form = document.getElementById("address3");


		let value = {};
		if(validation(nameForm.value, mailForm.value, mobileForm.value))
		{
			value["name"]=nameForm.value;
			value["mail"]=mailForm.value;
			value["mobile"]=mobileForm.value;
			value["landline"]=landlineForm.value;
			value["website"]=websiteForm.value;
			value["address1"]=address1Form.value;
			value["address2"]=address2Form.value;
			value["address3"]=address3Form.value;
			value["srno"] = rank;
			rank++;
			
			addressBook.push(value);
			addressBook.sort(compare);
			console.log(addressBook);
			addDetails();
		}
}

function compare(a,b){
	const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}







	
