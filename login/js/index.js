var $password = $("#password");
var $login = $("#Email");
$("#span").hide();

function isPasswordValid() {
//  return $password.val() == db file
}

function isLoginValid() {
// return $login.val() == db file
}


function canSubmit() {
  return isPasswordValid() && isLoginValid();
}

function passwordEvent(){
    //Find out if password is valid
    if(isPasswordValid()) {
      if(isLoginValid())
      {
        $("#span").hide();
      }else{
        $("#span").show();
      }
}
/*
function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint
    $confirmPassword.next().show();
  }
}
*/
function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
