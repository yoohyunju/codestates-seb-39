//import {onlyNumberAndEnglish, strongPassword} from './validator.js'

const inputUsername = document.querySelector('#username');
const successUsername = document.querySelector('.success-message');
const failureUsername = document.querySelector('.failure-message');
const inputPassword = document.querySelector('#password');
const inputPasswordCheck = document.querySelector('#password-retype');
const failurePasswordMsg = document.querySelector('.mismatch-message');

function isMoreThan4Length(value) {
  if(value.length >= 4){
    showMsg(failureUsername, successUsername, 'hide');
    changeBorderColor(inputUsername, 'border-blue', 'border-red');

  }else {
    showMsg(successUsername, failureUsername, 'hide');
    changeBorderColor(inputUsername, 'border-red', 'border-blue');
  }
}

function isMatch (password1, password2) {
  // 문자열 2개를 입력받고 boolean타입(true or false) 리턴
  // 일치 여부에 따른 시각적 피드백 제공
  // 비밀번호 확인 창에 keyup 이벤트 핸들러 존재해야 함
  // 비밀번호 확인창 값과 비밀번호 값이 서로 일치하는 경우 메시지가 더이상 보이지 않아야 함
  // 일치하지 않는 경우 불일치 메시지 표시
  if(password1 === password2){
    failurePasswordMsg.classList.add('hide');
    changeBorderColor(inputPasswordCheck, 'border-blue', 'border-red');
    return true;
  }else {
    failurePasswordMsg.classList.remove('hide');
    changeBorderColor(inputPasswordCheck, 'border-red', 'border-blue');
    return false;
  }
}

function showMsg (addSelector, removeSelector, className) {
  addSelector.classList.add(className);
  removeSelector.classList.remove(className);
}

function changeBorderColor (selector, addClassName, removeClassName) {
  selector.classList.add(addClassName);
  selector.classList.remove(removeClassName);
}

inputUsername.onkeyup = () => {
  console.log(inputUsername.value);
  // 만약 value의 길이가 4이상이면 success-message를 보이게 해준다.
  // 그렇지 않으면 성공 메시지를 가리고 failure-message를 보이게 해준다.
  isMoreThan4Length(inputUsername.value);
}

inputPasswordCheck.onkeyup = () => {
  isMatch(inputPassword.value, inputPasswordCheck.value);
}