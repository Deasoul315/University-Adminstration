function selectdept(){
    c = document.getElementsByClassName("dropdowndept")[0];
    c.getElementsByTagName("ul")[0].style.display = "none";
}

function openlist(){
    c = document.getElementsByClassName("dropdowndept")[0];
    c.getElementsByTagName("ul")[0].style.display = "block";
}

function collapselist(){
    c = document.getElementsByClassName("dropdowndept")[0];
    c.getElementsByTagName("ul")[0].style.display = "none";
}

function setdept(x){
    document.getElementById("spdropdown").getElementsByTagName("h3")[0].innerText = x;
}

function setspid(x){
    document.getElementById("spid").value = x;    
}

function setacid(x){
    document.getElementById("acid").value = x;
}

function register(){
    error = false

    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let gpa = document.getElementById("gpa").value;
    let lv = document.getElementById("lv").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let active = document.getElementById("active").value;
    let inactive = document.getElementById("inactive").value;
    let dept = document.getElementById("dept").innerText;
    
    if (id === "") {
        document.getElementById("id").style.border = "4px solid #ff3333";
        document.getElementById("eid").style.display = "inline-block";
        error = true
    }
    if (name === "") {
        document.getElementById("name").style.border = "4px solid #ff3333";
        document.getElementById("ename").style.display = "inline-block";
        error = true
    }
    if (dob === "") {
        document.getElementById("dob").style.border = "4px solid #ff3333";
        document.getElementById("edob").style.display = "inline-block";
        error = true
    }
    if (gpa === "") {
        document.getElementById("gpa").style.border = "4px solid #ff3333";
        document.getElementById("egpa").style.display = "inline-block";
        error = true
    }
    if (email === "" && mobile ==="") {
        document.getElementById("mobile").style.border = "4px solid #ff3333";
        document.getElementById("email").style.border = "4px solid #ff3333";
        document.getElementById("eemail").style.display = "inline-block";
        document.getElementById("emobile").style.display = "inline-block";
        error = true
    }
    if (female === false && male === false) {
        document.getElementById("male").style.outline = "4px solid #ff3333";
        document.getElementById("female").style.outline = "4px solid #ff3333";
        document.getElementById("egender").style.display = "inline-block";
        error = true
    }
    if (lv === "") {
        document.getElementById("lv").style.border = "4px solid #ff3333";
        document.getElementById("elv").style.display = "inline-block";
        error = true
    }
    if(!error){
        document.getElementById("addform").submit();
    }
}

function error_message(x){
    window.alert(x);
}

