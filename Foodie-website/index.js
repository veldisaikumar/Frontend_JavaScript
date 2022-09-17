let USERS_DB = []

function goToHomePage () {
	document.getElementById('home').style.display = 'flex'
	document.getElementById('login-form').style.display = 'none'
	document.getElementById('signup-form').style.display = 'none'

	document.getElementById('home-link').classList.add('active')
	document.getElementById('login-link').classList.remove('active')
	document.getElementById('signup-link').classList.remove('active')
}

function goToSignUpPage() {
	document.getElementById('home').style.display = 'none'
	document.getElementById('login-form').style.display = 'none'
	document.getElementById('signup-form').style.display = 'block'

	document.getElementById('signup-link').classList.add('active')
	document.getElementById('home-link').classList.remove('active')
	document.getElementById('login-link').classList.remove('active')
}

function goToLoginPage() {
	document.getElementById('home').style.display = 'none'
	document.getElementById('login-form').style.display = 'block'
	document.getElementById('signup-form').style.display = 'none'

	document.getElementById('login-link').classList.add('active')
	document.getElementById('signup-link').classList.remove('active')
	document.getElementById('home-link').classList.remove('active')
}

function signup() {
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let phoneNumber = document.getElementById('phone-number').value
	let password = document.getElementById('password').value
	let confirmPassword = document.getElementById('confirm-password').value

	let error = false

	if(password !== confirmPassword) {
		document.getElementById('confirm-password-invalid').style.display = 'block'
		error = true
	} else {
		document.getElementById('confirm-password-invalid').style.display = 'none'
	}

	if(!error) {
		let userDetails = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    }
		USERS_DB.push(userDetails)
		alert('Your details have been saved successfully!')
		document.getElementById('signup-form-id').reset()
		console.log(USERS_DB)
	}
}

function login () {
	let loginEmail = document.getElementById('login-email').value
	let loginPassword = document.getElementById('login-password').value

	if(USERS_DB.find(user => user.email === loginEmail && user.password === loginPassword)) {
		alert('Access granted')
	} else {
		alert('Access denied')
	}
}


// 1. Whether any user exists in USERS_DB with the entered email (loginEmail)
// 2. If user exists, then whether the password for that user matches with the entered password


/* 
	Project Task for Hiatus (14 Sept - 16th Sept): Submission on 17th Sept
	- Create any popular website (with different sections) using existing HTML, CSS, Bootstrap and JS logic (Shopping site, Online delivery, Library management, etc.)
	- [Mandatory] Attach authentication logic (Sign up +  Login) to that website
	- [Mandatory] Any forms used should be validated
*/