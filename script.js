const reg=document.getElementById("register");
reg.addEventListener("click",registr);
function registr(){
let name,email,password;
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    const student={"name":name,"email":email,"password":password};
    //Ajax post method
    const xhr=new XMLHttpRequest();
    xhr.open("POST","https://jsonplaceholder.typicode.com/posts",true);
     xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
   // xhr.open("POST","",true);
    //xhr.setRequestHeader("content-type","application/json");
    xhr.send(JSON.stringify(student));
    xhr.onload=()=>{
        if(xhr.status===201||xhr.status===200){
            var student_data=JSON.stringify(student);
            localStorage.setItem("student",student_data);
            alert("registration successfull");
            window.location.href="disply.html";
        }
    };
    
    //xhr.send();
}


function disp(){
alert("This is student data");
            const display_data=localStorage.getItem("student");
            const student=JSON.parse(display_data);
            document.getElementById("data").innerHTML=student.name +" || "+ student.email+" || "+ student.password; 
}