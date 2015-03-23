/* Overall add comments at the top here of this java script to explain what it does */

/*
 * Explain what this function does in detail, add comments here.
 */

function hideAllErrors() {
	document.getElementById("nameError").style.display = "none";
	document.getElementById("nameGroup").className="";	
	document.getElementById("emailError").style.display = "none";
	document.getElementById("emailGroup").className="";		
	document.getElementById("phoneError").style.display = "none";
	document.getElementById("phoneGroup").className="";
        document.getElementById("addressError").style.display = "none";
	document.getElementById("addressError").className="";
        
        document.getElementById("commentError").style.display = "none";
	document.getElementById("commentError").className="";
        
  }

/*
 * Explain what the checkForm function those, what parameter does it take etc.
 */
function checkForm(theForm) {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var comment = document.getElementById("comment").value;
	 
	//if the fields are blank display warning
	/*
	 * Add comments here to explain what is happening in the code below.
	 */
	if (name == "") {
		hideAllErrors();
		document.getElementById("nameError").style.display = "inline";
		document.getElementById("nameGroup").className="groupError";
		document.getElementById("name").select();
		document.getElementById("name").focus();	
		return false;
	} 
	/*
	 * Add comments here to explain what is happening in the code below.
	 */
	else if (email == "") {
		hideAllErrors();
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("emailGroup").className="groupError";	
		document.getElementById("email").select();
		document.getElementById("email").focus();
		return false;
	}
	/*
	 * Add comments here to explain what is happening in the code below.
	 */
	else if (phone == "") {
		hideAllErrors();
		document.getElementById("phoneError").style.display = "inline";
		document.getElementById("phoneGroup").className="groupError";	
		document.getElementById("phone").select();
		document.getElementById("phone").focus();
		return false;	
	}
        /*
	 * Add comments here to explain what is happening in the code below.
	 */
	else if (address == "") {
		hideAllErrors();
		document.getElementById("addressError").style.display = "inline";
		document.getElementById("addressGroup").className="groupError";	
		document.getElementById("address").select();
		document.getElementById("address").focus();
		return false;	
	}
        /*
	 * Add comments here to explain what is happening in the code below.
	 */
	else if (comment == "") {
		hideAllErrors();
		document.getElementById("commentError").style.display = "inline";
		document.getElementById("commentGroup").className="groupError";	
		document.getElementById("comment").select();
		document.getElementById("comment").focus();
		return false;	
	}
		return true;
}
 
