let a="admin@gmail.com";
        let b="123admin";
        function check(){
            let emails=document.getElementById("email").value;
            let pass=document.myform.password.value;
            //console.log(emails);
            //console.log(pass);
            if(emails.match(a))
            {
                if(pass.match(b))
                {
                    return true;
                }
                else{
                    alert("password do not match");
                    return false;
                }
            }
                else{
                    alert("login denied:check the email entered");
                    return false;
                }
        }