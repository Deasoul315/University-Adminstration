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

function get_age(x){
    var now = Date.now();/*gets time from 1970 up till now*/
    var then = new Date(x);
    var month_diff = new Date(now - then.getTime());
    var year = Math.abs(month_diff.getUTCFullYear() - 1970);
    console.log(year);
    return year;
}

function to_float(x) {
    var y = parseFloat(x);
    return y;
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
    
    if (id === "" || id.length > 8 || !(/^[0-9]*$/.test(id))) {
        document.getElementById("id").style.border = "4px solid #ff3333";
        document.getElementById("eid").style.display = "inline-block";
        error = true;
    }

    if (name === "" || !(/^[A-Za-z]*$/.test(name))) {
        document.getElementById("name").style.border = "4px solid #ff3333";
        document.getElementById("ename").style.display = "inline-block";
        error = true;
    }

    if (dob === "" || get_age(dob) < 18) {
        document.getElementById("dob").style.border = "4px solid #ff3333";
        document.getElementById("edob").style.display = "inline-block";
        error = true;
    }

    if (gpa === "" || !(/[+-]?([0-9]*[.])?[0-9]/.test(gpa)) || (to_float(gpa) > 4.0 || to_float(gpa) < 0.0)) {
        document.getElementById("gpa").style.border = "4px solid #ff3333";
        document.getElementById("egpa").style.display = "inline-block";
        error = true;
    }

    if(email !== ""){
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            document.getElementById("email").style.border = "4px solid #ff3333";
            document.getElementById("eemail").style.display = "inline-block";
            error = true;
        }
    }
    
    if(mobile !== ""){
        if(!(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(mobile))){
            document.getElementById("mobile").style.border = "4px solid #ff3333";
            document.getElementById("emobile").style.display = "inline-block";
            error = true;
        }
    }

    if (female === false && male === false) {
        document.getElementById("male").style.outline = "4px solid #ff3333";
        document.getElementById("female").style.outline = "4px solid #ff3333";
        document.getElementById("egender").style.display = "inline-block";
        error = true;
    }

    let is_lv_valid = (lv === "" || !(/[+-]?([0-9]*[.])?[0-9]/.test(lv)) || to_float(lv)%1 !== 0 || (to_float(lv) > 4.0 || to_float(lv) < 0.0));
    if (is_lv_valid) {
        document.getElementById("lv").style.border = "4px solid #ff3333";
        document.getElementById("elv").style.display = "inline-block";
        error = true;
    }
    
    if(dept !== "" && !is_lv_valid && to_float(lv) < 3){
        document.getElementById("spdropdown").style.border = "4px solid #ff3333";
        document.getElementById("edept").style.display = "inline-block";
        error = true;
    }

    if(!error){
        document.getElementById("addform").submit();
    }
}

function error_message(x){
    var error = ""; 
    if(x.id === "eid"){
        error = "ID mustn't be empty, alphapeteical or longer than 8 digits";
    }
    
    if(x.id === "ename"){
        error = "name mustn't contain digits or be empty";
    }

    if(x.id === "edob"){
        error = "date of birth mustn't be empty or less than 18 years";
    }

    if(x.id === "egpa"){
        error = "GPA mustn't be empty, non number or out of range of 0-4";
    }

    if(x.id === "egender"){
        error = "Gender must be selected";
    }

    if(x.id === "elv"){
        error = "Level mustn't be empty, non number or out of range of 0-4";
    }

    if(x.id === "eemail"){
        error = "email must be example@domain.com";
    }

    if(x.id === "emobile"){
        error = "mobile must be in format of +XXX-XXX-XXXX[X]{0,2}";
    }

    if(x.id === "edept"){
        error = "cannot specialize student whose Level is less than 2";
    }
    window.alert(error);
}

