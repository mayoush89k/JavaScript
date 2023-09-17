let password = "1234abcd";

// 1. if else conditional
if(password.length > 7 ){
    console.log("Password is Strong");
}else
if(password.length < 7 ){

    console.log("Password is Weak");
}

// 2. Ternaries conditional
let result = password.length < 7 ? "Password is Weak" : "Password is Strong";
console.log(result);

// 3. use && logical
if(password.includes('1') && password.includes('a')){
    console.log("Password has number 1");
}else{
    console.log("Password has character a");
}

// 4. advanced password 
console.log(RegExp('(?=.{7,})') ? (RegExp('(?=.*[A-Z])') ? "Very Strong" : "Strong") : "Weak" );
