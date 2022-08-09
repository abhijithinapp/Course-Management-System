import * as validator from '../Utils/validations.js'

console.log('hi')
var submit = document.getElementById('submit')
var inputs = Array.prototype.slice.call(document.querySelectorAll('.input'))
var accountExistsAlert = document.getElementById('accountexistalert')
var emailAlert = document.getElementById('emailalert')
var email = document.querySelector('input[name = "email"]')
function validate(){
    inputs.forEach(input => { 
    var inputvalue = input.querySelector('input').value
    if( validator.findIfEmpty(inputvalue))
    {
    input.querySelector('p').innerHTML = "This field cannot be empty" 
    input.querySelector('p').style.display = "block"
    }
    else
    input.querySelector('p').style.display = "none"
    
  });
    var email = document.querySelector('input[name = "email"]').value
    console.log(email)
    if(!validator.isValidEmail(email))
        {emailAlert.innerHTML = "Please enter a valid email ID"
        emailAlert.style.display = "block"}
    else
        emailAlert.style.display = "none"
  }
  submit.addEventListener('click',validate)