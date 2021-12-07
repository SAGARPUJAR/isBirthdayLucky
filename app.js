const dateofBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberBtn = document.querySelector("#check-number");

function isLuckyBirthday() {
  if (dateofBirth.value != "" && luckyNumber.value != "") {
    const sum = calculateSum(dateofBirth.value);
    comparevalues(sum, luckyNumber.value);
  } else {
    alert("Please Select Both Inputs !!");
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

function comparevalues(sum, luckyNumber) {
  if (sum % luckyNumber == 0) {
    alert("Your Birthday is Lucky ");
  } else {
    alert("Your Birthday is not Lucky");
  }
}

checkNumberBtn.addEventListener("click", isLuckyBirthday);
