
let globalIsSubmit=false

function validate(isSubmit)
{
    if(isSubmit){
        globalIsSubmit=true
    }
    let firstName=document.getElementById('first-name').value
    let lastName=document.getElementById('last-name').value
    let email=document.getElementById('email').value
    let password = document.getElementById('password').value
	let confirmPassword = document.getElementById('confirm-password').value

    let tnC=document.getElementById('t-and-c').checked
    // console.log(firstName, lastName ,email,city,zipcode,tnC);

    let error = false

    if(globalIsSubmit){
        if(firstName.length>=3){
            document.getElementById('first-name-valid').style.display = 'block'
            document.getElementById('first-name-invalid').style.display = 'none'
        }   
        else{
            error = true
            document.getElementById('first-name-invalid').style.display = 'block'
            document.getElementById('first-name-valid').style.display = 'none'
        }
    
        if(lastName.length>=3){
            document.getElementById('last-name-valid').style.display = 'block'
            document.getElementById('last-name-invalid').style.display = 'none'
        }   
        else{
            error = true
            document.getElementById('last-name-invalid').style.display = 'block'
            document.getElementById('last-name-valid').style.display = 'none'
        }
    
        if (
            email.includes("@") && 
            email.includes(".") && 
            email.indexOf("@") > 0 &&
            email.substr(email.lastIndexOf('.') + 1).length >= 2
        ) {
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-invalid").style.display = "none";
      } else {
            error = true
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
      }

      if(
        (password.includes("$") || password.includes("@") || password.includes("#")) && 
        (password.includes(0) || password.includes(1) || password.includes(2) ||
        password.includes(3) || password.includes(4)) && 
        password.length >= 8
      ) {
        document.getElementById("strongpassword").style.display = "block";
        document.getElementById("nostrongpassword").style.display = "none";
      } else {
        error = true
        document.getElementById("strongpassword").style.display = "none";
        document.getElementById("nostrongpassword").style.display = "block";
      
      }

      if(password !== confirmPassword && confirmPassword.length<8) {
		document.getElementById('confirm-password-invalid').style.display = 'block'

	} else {
		document.getElementById('confirm-password-invalid').style.display = 'none'
        error = false
	}
    
    if(tnC) {
        document.getElementById("tNC-invalid").style.display = "none"
    } else {
         error = true
        document.getElementById("tNC-invalid").style.display = "block"
    }

   
    	if(error ===  false) {
            
    		alert('Your details have been saved successfully!')
            resetFields()
    		
    	}
    
    }
}    

function resetFields(){
	document.getElementById('registration-form').reset()
	document.getElementById('first-name-valid').style.display = 'none'
    // document.getElementById('first-name').value=''
	document.getElementById('last-name-valid').style.display = 'none'
    // document.getElementById('last-name').value=''
	document.getElementById('email-valid').style.display = 'none'
    // document.getElementById('email').value=''

    document.getElementById('strongpassword').style.display = 'none'
    // document.getElementById('password').value=''
	document.getElementById('confirm-password-invalid').style.display = 'none'
    // document.getElementById('confirm-password').value=''
	document.getElementById('tNC-valid').style.display = 'none'
    // document.getElementsById('t-and-c').checked = false;
  
}
   