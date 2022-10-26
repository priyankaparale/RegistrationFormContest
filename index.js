let globalIsSubmitted = false 

function validate(isSubmitted = false) {
	let fullName = document.getElementById('full-name').value
	let gender = document.getElementById('gender').value
	// let hobbies = document.getElementById('hobbies').checked
	let error = false

    var hobby = document.forms[0]
    var get_Hobbies = ""
    for (let i=0; i<hobby.length; i++){
        if(hobby[i].checked){
           get_Hobbies = get_Hobbies + hobby[i].value + " and "
        }
    }
    // console.log(str)
    // console.log(fullName, gender, hobbies)

    if(isSubmitted) {``
		globalIsSubmitted = true
	}

    if(globalIsSubmitted) {
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

        if(get_Hobbies != "") {
            document.getElementById('hobbies-invalid').style.display = 'none'
            document.getElementById('hobbies-valid').style.display = 'block'
        } else {
            document.getElementById('hobbies-invalid').style.display = 'block'
            document.getElementById('hobbies-valid').style.display = 'none'
            error = true
        }

        if(!error && isSubmitted) {
            const msg = `Hobbies of ${fullName} (${gender}) are ${get_Hobbies}.`
            alert(msg)

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
} 
console.log('priyanka')