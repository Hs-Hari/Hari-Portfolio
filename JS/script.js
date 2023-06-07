function validate(){
    let name=document.getElementById("txt_name").value;
    let email=document.getElementById("txt_email").value;
    

    let nameptn="^[a-zA-Z]+$"
    let emailptn="^[a-z]+[a-z0-9]+@[a-z]+[.]+[a-z]{2,3}$"

    let namereg=new RegExp(nameptn)
    let emailreg=new RegExp(emailptn)

    if(namereg.test(name)){

        document.getElementById("nameMsg").innerHTML="";
    }
    else{

        document.getElementById("nameMsg").innerHTML="Enter a Valid Name !";
    }


    if(emailreg.test(email)){

        document.getElementById("emaiMsg").innerHTML="";
    }
    else{

        document.getElementById("emailMsg").innerHTML="Enter a Valid Email !";
    }
}
    