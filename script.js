function validateFname(){
    let text = document.getElementById("fname").value
    let regex=/^[A-Za-z]+\s?$/
    if(regex.test(text)){
        document.getElementById("warning-fname").innerHTML = ""
        document.getElementById("warning-fname").style.color= "green"
        return true
    }else{
        document.getElementById("warning-fname").innerHTML = "enter your first name";
        document.getElementById("warning-fname").style.color= "red"
        return false
    }
}
function validateLname(){
    let text = document.getElementById("lname").value
    let regex=/^[A-Za-z]+\s?$/
    if(regex.test(text)){
        document.getElementById("warning-lname").innerHTML = ""
        document.getElementById("warning-lname").style.color= "green"
        return true
    }else{
        document.getElementById("warning-lname").innerHTML = "enter your last name";
        document.getElementById("warning-lname").style.color= "red"
        return false
    }
}
function validateMail(){
    let mail = document.getElementById("email").value;
    let regex =/^[A-Za-z0-9_]+@[a-zA-z0-9]+(\.[a-zA-Z]+)$/
    if(regex.test(mail)){
        document.getElementById("warning-mail").innerHTML = ""
        document.getElementById("warning-mail").style.color= "green"
        return true
    }else{
        document.getElementById("warning-mail").innerHTML = "enter valid email id";
        document.getElementById("warning-mail").style.color = "red"
        return false
    }
}
function validateNum(){
    let num = document.getElementById("num").value
    let regex =/^[0-9]{10}$/
    if(regex.test(num)){
        document.getElementById("warning-num").innerHTML =""
        document.getElementById("warning-num").style.color= "green"
        return true
    }else{
        document.getElementById("warning-num").innerHTML ="enter valid number";
        document.getElementById("warning-num").style.color = "red" 
        return false
    }
}
function validateAll(){
    validateFname()
    validateLname()
    validateMail()
    validateNum() 
    if(validateFname() && validateLname() && validateMail() && validateNum()){
        return true
    }else{
        document.getElementById("warning-num").innerHTML ="enter phone number";
        document.getElementById("warning-num").style.color = "red"
        document.getElementById("warning-mail").innerHTML = "enter email id";
        document.getElementById("warning-mail").style.color = "red"
        document.getElementById("warning-lname").innerHTML = "enter your last name";
        document.getElementById("warning-lname").style.color= "red"
        document.getElementById("warning-fname").innerHTML = "enter your first name";
        document.getElementById("warning-fname").style.color= "red"
        return false
    }  
}