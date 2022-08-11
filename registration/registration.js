import * as validator from '../Utils/validations.js'

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
    
   var fname = document.getElementById('nameid').value;
   var email = document.getElementById('emailid').value;
  var pass = document.getElementById('passid').value;
   var cpass = document.getElementById('cpassid').value;

   if(!validator.isValidEmail(email)){
    document.getElementById('emailalert').innerHTML = "Enter a valid email";
    document.getElementById('emailalert').style.display = "block";
   }
   else{
    document.querySelector('emailalert').style.display = "none"
   }

   if(pass != cpass){
    document.getElementById('cpassalert').innerHTML = "Password does'nt match";
    document.getElementById('cpassalert').style.display = "block";
   }

  //submit.addEventListener('click',validate);
}
submit.addEventListener('click',validate);