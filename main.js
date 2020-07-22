function test() {
  /*------------------USER NAME------------------*/
  //let textUser;
   userValue= document.getElementById("user").value;
  if (userValue.match (/^(?=.{3,20}$)(?![_.])(?![0-9])[a-zA-Z0-9._]+(?<![_.])$/)) {
    textUser="";
    
  } else {
    textUser= "نام کاربری باید با حروف الفبا شروع و حداقل سه کاراکتر باشد";
  }
  
  document.getElementById("message-user").innerHTML=textUser;


  /*--------------National code------------------*/
  // let nationalLength , text;
  // nationalLength = document.getElementById("code").value;
  // let size=nationalLength.toString().length;
  // if (size>10 || size<10 || isNaN(nationalLength)) {
  //   text = "کد ملی تا معتبر است";
  // } else {
  //   text="";
  // }
  // //console.log((size));
  // document.getElementById("message-code").innerHTML=text;


 /*--------------National code------------------*/
   nationalCode= document.getElementById("code").value;
   var text;
  if (!/^\d{10}$/.test(nationalCode) || nationalCode=='0000000000'
    || nationalCode=='1111111111'
    || nationalCode=='2222222222'
    || nationalCode=='3333333333'
    || nationalCode=='4444444444'
    || nationalCode=='5555555555'
    || nationalCode=='6666666666'
    || nationalCode=='7777777777'
    || nationalCode=='8888888888'
    || nationalCode=='9999999999') {
    text="کد ملی باید ۱۰ رقم و معتبر باشد" ;
  } else {
    var check = parseInt(nationalCode[9]);
    var sum = 0;
    var i;
    for (i = 0; i < 9; ++i) {
        sum += parseInt(nationalCode[i]) * (10 - i);
    }
    sum %= 11;
  
    if ((sum < 2 && check == sum) || (sum >= 2 && check + sum == 11)) {
      text="";
    } else {
      text="کد ملی نا معتبر است";
    }
  }
  document.getElementById("message-code").innerHTML=text;



  /*-------------PHONE NUMBER-------------------*/
   phoneValue= document.getElementById("phone").value;
   phoneno = /^\(?([0]{1})\)?([9]{1})?([0-9]{9})$/;

  if(phoneValue.match(phoneno)) {
	  textPhone= "";      
	} else {
    textPhone= "شماره نا معتبر است";
  }
    document.getElementById("phone-messsage").innerHTML=textPhone;

    
  /*------------------------PASSWORD----------------*/
   inputPwd=document.getElementById("pwd").value;
  //let textPassword;
    if (inputPwd.match ( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)) {
      textPassword="";
    } else {
      textPassword="رمز عبور باید حداقل ۸ کاراکتر و شامل حروف کوچک بزرگ و عدد باشد"
    }
    document.getElementById("password-messsage").innerHTML=textPassword;

  /*------------------------CONFIRM PASSWORD----------------*/ 
  confirmPwd=document.getElementById("confirm-pwd").value;
  //let textConfirmPwd;
  if (inputPwd===confirmPwd) {
    textConfirmPwd="";
  } else {
    textConfirmPwd="رمز عبور صحیح را وارد نمایید" ;
  }
  document.getElementById("confirm-messsage").innerHTML=textConfirmPwd;

  
}

/*----------CLEAR FUNCTION--------------*/
function cleardata() {
  document.getElementById("user").value=null;
  document.getElementById("code").value=null;
  document.getElementById("phone").value=null;
  document.getElementById("pwd").value=null;
  document.getElementById("confirm-pwd").value=null;
}


    function DrawCaptcha() {
        var a = Math.ceil(Math.random() * 9)+ '';
        var b = Math.ceil(Math.random() * 9)+ '';       
        var c = Math.ceil(Math.random() * 9)+ '';  
        var d = Math.ceil(Math.random() * 9)+ '';  
        var e = Math.ceil(Math.random() * 9)+ '';  
        var f = Math.ceil(Math.random() * 9)+ '';  
        var g = '10';  
        var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
        document.getElementById("txtCaptcha").value = code
    }
    function ValidCaptcha() { // valida los numeros ingresados
        var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
        var str2 = removeSpaces(document.getElementById('txtInput').value);
        if (str1 == str2){
            return true; } 
        else {
            return false; } 
    }
    function removeSpaces(string) { 
        return string.split(' ').join('');
    } 