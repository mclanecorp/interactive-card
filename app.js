const inputName = document.getElementById("name");
inputName.addEventListener("change", Name);

const inputCArd = document.getElementById("number");
inputCArd.addEventListener("change", Number);

const month = document.getElementById("month");
month.addEventListener("change", Month);

const years = document.getElementById("years");
years.addEventListener("change", Years);

const cvc = document.getElementById("cvc");
cvc.addEventListener("change", Cvc);

const inputForm = [inputName, inputCArd, month, years, cvc];

const nameCard = document.getElementById("name-card");
const numberCard = document.getElementById("number-card");
const monthCard = document.getElementById("date-card-month");
const yearsCard = document.getElementById("date-card-years");
const cvcCard = document.getElementById("cvc-card");

const thankYou = document.getElementById("thank-you");
const form = document.getElementById("container-form");

const alertName = document.getElementById("alert-name");
const alertCard = document.getElementById("alert-card");
const alertDate = document.getElementById("alert-date");

function Name() {
  nameCard.innerText = this.value;
}
function Number() {
  numberCard.innerText = this.value;
}
function Month() {
  monthCard.innerText = this.value;
}
function Years() {
  yearsCard.innerText = this.value;
}
function Cvc() {
  cvcCard.innerText = this.value;
}
function checkName() {
  if (inputName.value === "") {
    console.log("pasbon");
    alertName.style.display = "block";
    return false;
  } else {
    alertName.style.display = "none";
    return true;
  }
}
function checkCard() {
  let wTest = new RegExp(/^[0-9]+$/);
  if (!wTest.test(inputCArd.value) && inputCArd.length != 16) {
    alertCard.style.display = "block";
    return false;
  } else {
    alertCard.style.display = "none";
    return true;
  }
}
function checkDateCvc() {
  if (month.value === "" || years.value === "" || cvc.value === "") {
    console.log("pasbon");
    alertDate.style.display = "block";
    return false;
  } else {
    alertDate.style.display = "none";
    return true;
  }
}

function validate() {
  if (checkName() === true && checkCard() === true && checkDateCvc() === true) {
    thankYou.style.display = "block";
    form.style.display = "none";
  }

  console.log(checkName());
}

function restart() {
  thankYou.style.display = "none";
  form.style.display = "flex";
  nameCard.innerText = "JANE APPLESEED";
  numberCard.innerText = "0000 0000 0000 0000";
  monthCard.innerText = "00";
  yearsCard.innerText = "00";
  cvcCard.innerText = "000";
  for (element of inputForm) {
    element.value = "";
  }
}
console.log(restart());
