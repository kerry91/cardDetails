function replaceCHText(){
  let newText = document.getElementById('cardholderName').value

  document.getElementById("cName").innerHTML = newText;
}

function replaceCNText(){
  let newText = document.getElementById('cardNumber').value

  document.getElementById("cNumber").innerHTML = newText;
}

function replaceExpiryMText(){
  let newText = document.getElementById('MM').value

  document.getElementById("cMM").innerHTML = newText;
}

function replaceExpiryYText(){
  let newText = document.getElementById('YY').value

  document.getElementById("cYY").innerHTML = newText;
}

function replaceCvcText(){
  let newText = document.getElementById('cvc').value

  document.getElementById("cCvc").innerHTML = newText;
}

function restart(){
  document.getElementById("formCol").style.visibility = "visible";
  document.getElementById("successPanel").style.visibility = "hidden";
}


// Targetting all classes & id from HTML

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let chn = id("cardholderName"),
  cn = id("cardNumber"),
  m = id("month"),
  y = id("year"),
  cvc = id("cvc"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

// Adding the submit event Listener

cardDetails.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(chn, 0, "Cardholder Name cannot be blank");
  engine(cn, 1, "Card Number cannot be blank");
  engine(m, 2, "Month and Year cannot be blank");
  engine(y, 2, "Month and Year cannot be blank");
  engine(cvc, 3, "Can't be blank");
});

// engine function which will do all the works

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "0";

    document.getElementById("formCol").style.visibility = "hidden";
    document.getElementById("successPanel").style.visibility = "visible";

  }

};
