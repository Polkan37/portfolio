import { PATTERNS } from "../../constants/form.constants"

function setInputBorder(title, status) {
  status
    ? (document.getElementById(title).style.border = "1px solid #00856f")
    : (document.getElementById(title).style.border = "1px solid red");
}

const formValidation = ({ name: title, value}, fieldValidaitonStatus) => {
  setInputBorder(title, PATTERNS[title].test(value));
  fieldValidaitonStatus[title] = PATTERNS[title].test(value);
    return fieldValidaitonStatus;
};

export default formValidation;
