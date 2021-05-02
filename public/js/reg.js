const form=document.getElementById("form");
const username=document.getElementById("username");
const rollno=document.getElementById("rno");
const password=document.getElementById("pwd");
const conpass=document.getElementById("cpwd");
const email=document.getElementById("email");

function check(){
    const uname=username.value.trim();
    const rno=rollno.value.trim();
    const em=email.value.trim();
    const pwd=password.value.trim();
    const cpwd=conpass.value.trim();
    let error=6;
    if(uname===""){
        setError(username,"Username cannot be empty");
        if(error===0){
            error++;
        }
    }else{
        error--;
        setSuccess(username);
    }
    if(rno===""){
        setError(rollno,"Rollno cannot be empty");
        if(error===0){
            error++;
        }
    }
    else if(!isrollno(rno)){
            setError(rollno,"Rollno should contain only numbers");
            if(error===0){
                error++;
            }
        }
    else{
        error--;
        setSuccess(rollno);
    }

    if(em==="")
    {
        setError(email,"Email cannot be empty");
        if(error===0){
            error++;
        }
    }else if(!isEmail(em)){
        setError(email,"Not an valid email");
        if(error===0){
            error++;
        }
    }else{
        error--;
        setSuccess(email);
    }

    if(pwd===""){
        setError(password,"password cannot be empty");
        if(error===0){
            error++;
        }
    }else{
        error--;
        setSuccess(password);
    }

    if(cpwd===""){
        setError(conpass,"confirm password cannot be empty");
        if(error===0){
            error++;
        }
    }else if(pwd != cpwd){
        setError(conpass,"password do not match");
        if(error===0){
            error++;
        }
    }
    else{
        error--;
        setSuccess(conpass);
    }
    var gender = document.getElementsByName('gen');
     var genValue = false;
     for(var i=0; i<gender.length;i++){
         if(gender[i].checked == true){
             genValue = true;    
         }
     }
     if(!genValue){
         alert("You must specify gender");
         return false;
     }
     else{
         error--;
     }

    if(error===0)
    {
        return true;
    }
    else{
        return false;
    }
}
function setError(input, message){
    const control=input.parentElement;
    const small=control.querySelector('small');

    small.textContent = message;
    console.log(small.textContent,message);
    control.className='control error';
}
function setSuccess(input){
    const control=input.parentElement;
    control.className='control success';
}
function isrollno(input){
       var numbers = /^[0-9]+$/;
       if(!(input.match(numbers)))
       {
        return false;
      }else{
          return true;
      }
}
function isEmail(input){
    return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);
}