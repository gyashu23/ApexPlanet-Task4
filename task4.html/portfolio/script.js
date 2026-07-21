const navLinks=document.querySelectorAll(".nav-links a");
navLinks.forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault();
        const target=document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior:"smooth"
        });
    });
});

const form=document.getElementById("contactForm");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let message=document.getElementById("message").value.trim();

    let namePattern=/^[a-zA-Z\s]+$/;
    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name===""){
        alert("Please enter your name.");
        return;
    }
    if(!namePattern.test(name)){
        alert("Please enter a valid name.");
        return;
    }
    if(email===""){
        alert("Please enter your email.");
        return;
    }
    if(!emailPattern.test(email)){
        alert("Please enter a valid email.");
        return;
    }
    if(message===""){
        alert("Please enter your message.");
        return;
    }
    alert("Thank you for contacting me!");
    form.reset();
});

window.addEventListener("scroll",function(){
    let current="";
    document.querySelectorAll("section").forEach(section=>{
        const sectionTop=section.offsetTop-100;
        if(pageYOffset>=sectionTop){
            current=section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")==="#"+current){
            link.classList.add("active");
        }
    });
});