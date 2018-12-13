$(document).ready(function(){
  /*Open login menu */
  $("#link-open-login").click(function(){
    $("#wrap-login").slideToggle(500);
    $("#wrap-register").hide(500);
    $("#wrap-password-redefinition").hide(500);
  });

  /*Open register menu */
  $("#link-open-register").click(function(){
    $("#wrap-register").slideToggle(500);
    $("#wrap-login").hide(500);
    $("#wrap-password-redefinition").hide(500);
  });

  /*Open password redefinition */
  $("#link-open-password-redefinition").click(function(){
    $("#wrap-password-redefinition").slideToggle(500);
    $("#wrap-login").hide(500);
    $("#wrap-register").hide(500);
   });
});
