var express= require('express');

// student

var connection= require('../../model/database')
const router=express.Router();

router.get('/',function(req,res){
    res.render("dashboard");
})

router.get('/login',function(req,res){
    console.log("Going to login page");
res.render("login",{er:"Login page does not exist"});
})

router.post('/validate',function(req,res){
     var email=req.body.email; 
     var pwd=req.body.password;
     console.log("value submitted");
     //res.send('<h1>Hi!welcome to the page</h1>');
     //res.send(`Your Email:${email},<br>Your Password:${pwd}`);
     //console.log(email);
     //console.log(pwd);

     connection.query('select password,email from student where email = ? and password = ?',[email,pwd],(err,results)=>{
        if (err) throw err;
        if(results){
            if(results.length>0){
                connection.query('select marksheet_details.*,student.email from marksheet_details join student on student.rollno=marksheet_details.rollno where student.email = ?',[email],(err,resdata)=>{
                    res.render("displaymarksheet",{userData:resdata,userName:resdata[0].name});
                    console.log(resdata.name);
                    console.log(resdata);
                })
            }
        }
        else{
            res.render("login",{err:"Email or password is not correct"});
        }
    })

 })
router.get('/signup',function(req,res){
    console.log("Going to Signup page");
    res.render("register");
}) 

router.use('/signupValidate',function(req,res){
console.log('validated');
var username= req.body.username;
var email=req.body.email;
var rollno=req.body.rno;
var pwd=req.body.pwd;
// console.log(username);
// console.log(rollno);
// console.log(pwd);
// console.log(email);

connection.query('insert into student values(?,?,?,?)',[username,rollno,email,pwd],(err,results)=>{
    if(err) throw err;
    if(results){
        console.log("Values Inserted");
        res.render("login");
    }
})

//res.sendFile(__dirname +'/views/login.html');
})

//admin

router.get('/admin_register',function(req,res){
    console.log("Going to admin signup page");
    res.render("admin_register");
})

router.get('/admin_login',function(req,res){
    console.log("Going to admin login page");
    res.render("admin_login");
})

router.use('/admin_signupValidate',function(req,res){
    console.log('validated');
    var username= req.body.username;
    var email=req.body.email;
    var pwd=req.body.pwd;
    // console.log(username);
    // console.log(rollno);
    // console.log(pwd);
    // console.log(email);
    
    connection.query('insert into admin values(?,?,?)',[username,email,pwd],(err,results)=>{
        if(err) throw err;
        if(results){
            console.log("Values Inserted");
            res.render("admin_login");
        }
    })
})
var stname,strno;
router.post('/admin_validate',function(req,res){
    //var stname,strno;
    var aemail=req.body.email; 
    var apwd=req.body.password;
    //console.log(aemail);
    //console.log(apwd);
    console.log("value submitted");
    connection.query('select password,email from admin where email = ? and password = ?',[aemail,apwd],(err,results)=>{
        if (err) throw err;
        if(results){
            res.render("marksheet_entry.ejs");
        }
        else{
            res.render("admin_login",{err:"Email or password is not correct"});
        }
    })
    router.use('/student_details',function(req,res){
            stname=req.body.sname;
            strno=req.body.srno;
           res.render("marksheet_entry1");
    })
    router.use('/mark_details',function(req,res){
            var edate=req.body.edate;
            var e1=req.body.e1;
            var e2=req.body.e2;
            var e3=req.body.e3;
            console.log(stname);
            console.log(strno);
            console.log(edate);
            console.log(e1);
            console.log(e2);
            console.log(e3);
            connection.query('insert into marksheet_details values(?,?,?,?,?,?)',[stname,strno,edate,e1,e2,e3],(err,results)=>{
                if(err) throw err;
                if(results){
                    console.log("Values Inserted");
                    res.send('<h1>Marks entered</h1>');
                }
            })   
        });
    })
// router.get('/details',function(req,res){
//     res.render("marksheet_entry1.ejs");
// })
module.exports=router;