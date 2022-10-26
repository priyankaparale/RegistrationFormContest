function validate() {
	let fullName = document.getElementById('full-name').value
	let gender = document.getElementById('gender').value
	let hobbies = document.getElementById('exampleCheck1').checked
	let error = false
    console.log(fullName, gender, hobbies)

	if(fullName.length >= 5) {
		document.getElementById('full-name-valid').style.display = 'block'
		document.getElementById('full-name-invalid').style.display = 'none'
	} else {
		document.getElementById('full-name-invalid').style.display = 'block'
		document.getElementById('full-name-valid').style.display = 'none'
		error = true
	}

	if(gender != 'None') {
		document.getElementById('gender-valid').style.display = 'block'
		document.getElementById('gender-invalid').style.display = 'none'
	} else {
		document.getElementById('gender-invalid').style.display = 'block'
		document.getElementById('gender-valid').style.display = 'none'
		error = true
	}

	if(hobbies) {
		document.getElementById('hobbies-invalid').style.display = 'none'
	} else {
		document.getElementById('hobbies-invalid').style.display = 'block'
		error = true
	}

	if(!error) {
		// alert('Your details have been saved successfully!')
        alert('Hobbies of $[fullName] ($[gender]) are ')

		document.getElementById('registration-form').reset()

		let validFeedbacks = document.getElementsByClassName('valid-feedback')
		for(let i = 0; i < validFeedbacks.length; i++) {
			validFeedbacks[i].style.display = 'none'
		}
		let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
		for(let i = 0; i < invalidFeedbacks.length; i++) {
			invalidFeedbacks[i].style.display = 'none'
		}
	}
} 
console.log('priyanka')