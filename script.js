(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      else{
        document.getElementById("formCol").style.visibility = "hidden";
        document.getElementById("successPanel").style.visibility = "visible";
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

function replaceCHText(){
  let newText = document.getElementById('cardholderName').value

  document.getElementById("cName").innerHTML = newText;
}

function replaceCNText(){
  let newText = document.getElementById('cardNumber').value

  document.getElementById("cNumber").innerHTML = newText;
}

function replaceExpiryMText(){
  let newText = document.getElementById('month').value

  document.getElementById("cMM").innerHTML = newText;
}

function replaceExpiryYText(){
  let newText = document.getElementById('year').value

  document.getElementById("cYY").innerHTML = newText;
}

function replaceCvcText(){
  let newText = document.getElementById('cvc').value

  document.getElementById("cCvc").innerHTML = newText;
}
