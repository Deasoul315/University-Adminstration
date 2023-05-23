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
    document.getElementsByClassName("hiddeninput")[1].value = x;
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

function search_by_id() {
    document.getElementById("srch-form").submit();
}

function edit(e) {
    //let form = document.getElementById("edit-form").elements["edit"];
    return false;
    /*
    let error = false 
    
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let gpa = document.getElementById("gpa").value;
    let lv = document.getElementById("lv").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let active = document.getElementById("active").checked;
    let inactive = document.getElementById("inactive").checked;

    if (id === "" || id.length > 8 || !(/^[0-9]*$/.test(id))) {
        document.getElementById("id").style.border = "4px solid #ff3333";
        document.getElementById("eid").style.display = "inline-block";
        error = true;
    } else {
        document.getElementById("id").style.border = "4px solid rgb(21, 221, 21)";
        document.getElementById("eid").style.display = "none";
    }

    if (name === "" || !(/^[A-Za-z ]*$/.test(name))) {
        document.getElementById("name").style.border = "4px solid #ff3333";
        document.getElementById("ename").style.display = "inline-block";
        error = true;
    } else {
        document.getElementById("name").style.border = "4px solid rgb(21, 221, 21)";
        document.getElementById("ename").style.display = "none";
    }

    // if (dob === "" || get_age(dob) < 18) {
    //     document.getElementById("dob").style.border = "4px solid #ff3333";
    //     document.getElementById("edob").style.display = "inline-block";
    //     error = true;
    // } else {
    //     document.getElementById("dob").style.border = "4px solid rgb(21, 221, 21)";
    //     document.getElementById("edob").style.display = "none";
    // }

    if (gpa === "" || !(/[+-]?([0-9]*[.])?[0-9]/.test(gpa)) || (to_float(gpa) > 4.0 || to_float(gpa) < 0.0)) {
        document.getElementById("gpa").style.border = "4px solid #ff3333";
        document.getElementById("egpa").style.display = "inline-block";
        error = true;
    } else {
        document.getElementById("gpa").style.border = "4px solid rgb(21, 221, 21)";
        document.getElementById("egpa").style.display = "none";
    }

    if(email !== ""){
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            document.getElementById("email").style.border = "4px solid #ff3333";
            document.getElementById("eemail").style.display = "inline-block";
            error = true;
        } else {
            document.getElementById("email").style.border = "4px solid rgb(21, 221, 21)";
            document.getElementById("eemail").style.display = "none";
        }
    }
    
    if(mobile !== ""){
        if(!(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(mobile))){
            document.getElementById("mobile").style.border = "4px solid #ff3333";
            document.getElementById("emobile").style.display = "inline-block";
            error = true;
        } else {
            document.getElementById("mobile").style.border = "4px solid rgb(21, 221, 21)";
            document.getElementById("emobile").style.display = "none";
        }
    }

    if (female === false && male === false) {
        document.getElementById("male").style.outline = "4px solid #ff3333";
        document.getElementById("female").style.outline = "4px solid #ff3333";
        document.getElementById("egender").style.display = "inline-block";
        error = true;
    } else {
        document.getElementById("male").style.outline = "4px solid rgb(21, 221, 21)";
        document.getElementById("female").style.outline = "4px solid rgb(21, 221, 21)";
        document.getElementById("egender").style.display = "none";
    }

    if (active === false && inactive === false) {
        document.getElementById("active").style.outline = "4px solid #ff3333";
        document.getElementById("inactive").style.outline = "4px solid #ff3333";
        document.getElementById("estatus").style.display = "inline-block";
        error = true;
    } else {
        document.getElementById("active").style.outline = "4px solid rgb(21, 221, 21)";
        document.getElementById("inactive").style.outline = "4px solid rgb(21, 221, 21)";
        document.getElementById("estatus").style.display = "none";
    }

    let is_lv_valid = (lv === "" || !(/[+-]?([0-9]*[.])?[0-9]/.test(lv)) || to_float(lv)%1 !== 0 || (to_float(lv) > 4.0 || to_float(lv) < 0.0));
    if (is_lv_valid) {
        document.getElementById("lv").style.border = "4px solid #ff3333";
        document.getElementById("elv").style.display = "inline-block";
        error = true;
    } else {
        document.getElementById("lv").style.border = "4px solid rgb(21, 221, 21)";
        document.getElementById("elv").style.display = "none";
    }

    if(!error){
        document.getElementById("edit-form").submit();
    }
    */
}

function delete_request() {
    var x = window.confirm("Are you sure that you want to delete this student?");
    if(x){
        document.getElementById("edit-form").submit();
    }
}

document.getElementById("add-form").addEventListener("click", function(event){
    event.preventDefault()

  });
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
    let active = document.getElementById("active").checked;
    let inactive = document.getElementById("inactive").checked;
    let dept = document.getElementById("dept").innerText;
    
    if (id === "" || id.length > 8 || !(/^[0-9]*$/.test(id))) {
        document.getElementById("id").style.border = "4px solid #ff3333";
        document.getElementById("eid").style.display = "inline-block";
        error = true;
    } else {
        document.getElementById("id").style.border = "4px solid rgb(21, 221, 21)";
        document.getElementById("eid").style.display = "none";
    }

    if (name === "" || !(/^[A-Za-z ]*$/.test(name))) {
        document.getElementById("name").style.border = "4px solid #ff3333";
        document.getElementById("ename").style.display = "inline-block";
        error = true;
    } else {
        document.getElementById("name").style.border = "4px solid rgb(21, 221, 21)";
        document.getElementById("ename").style.display = "none";
    }

    // if (dob === "" || get_age(dob) < 18) {
    //     document.getElementById("dob").style.border = "4px solid #ff3333";
    //     document.getElementById("edob").style.display = "inline-block";
    //     error = true;
    // } else {
    //     document.getElementById("dob").style.border = "4px solid rgb(21, 221, 21)";
    //     document.getElementById("edob").style.display = "none";
    // }

    if (gpa === "" || !(/[+-]?([0-9]*[.])?[0-9]/.test(gpa)) || (to_float(gpa) > 4.0 || to_float(gpa) < 0.0)) {
        document.getElementById("gpa").style.border = "4px solid #ff3333";
        document.getElementById("egpa").style.display = "inline-block";
        error = true;
    } else {
        document.getElementById("gpa").style.border = "4px solid rgb(21, 221, 21)";
        document.getElementById("egpa").style.display = "none";
    }

    if(email !== ""){
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            document.getElementById("email").style.border = "4px solid #ff3333";
            document.getElementById("eemail").style.display = "inline-block";
            error = true;
        } else {
            document.getElementById("email").style.border = "4px solid rgb(21, 221, 21)";
            document.getElementById("eemail").style.display = "none";
        }
    }
    
    if(mobile !== ""){
        if(!(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(mobile))){
            document.getElementById("mobile").style.border = "4px solid #ff3333";
            document.getElementById("emobile").style.display = "inline-block";
            error = true;
        } else {
            document.getElementById("mobile").style.border = "4px solid rgb(21, 221, 21)";
            document.getElementById("emobile").style.display = "none";
        }
    }

    if (female === false && male === false) {
        document.getElementById("male").style.outline = "4px solid #ff3333";
        document.getElementById("female").style.outline = "4px solid #ff3333";
        document.getElementById("egender").style.display = "inline-block";
        error = true;
    } else {
        document.getElementById("male").style.outline = "4px solid rgb(21, 221, 21)";
        document.getElementById("female").style.outline = "4px solid rgb(21, 221, 21)";
        document.getElementById("egender").style.display = "none";
    }

    if (active === false && inactive === false) {
        document.getElementById("active").style.outline = "4px solid #ff3333";
        document.getElementById("inactive").style.outline = "4px solid #ff3333";
        document.getElementById("estatus").style.display = "inline-block";
        error = true;
    } else {
        document.getElementById("active").style.outline = "4px solid rgb(21, 221, 21)";
        document.getElementById("inactive").style.outline = "4px solid rgb(21, 221, 21)";
        document.getElementById("estatus").style.display = "none";
    }

    let is_lv_valid = (lv === "" || !(/[+-]?([0-9]*[.])?[0-9]/.test(lv)) || to_float(lv)%1 !== 0 || (to_float(lv) > 4.0 || to_float(lv) < 0.0));
    if (is_lv_valid) {
        document.getElementById("lv").style.border = "4px solid #ff3333";
        document.getElementById("elv").style.display = "inline-block";
        error = true;
    } else {
        document.getElementById("lv").style.border = "4px solid rgb(21, 221, 21)";
        document.getElementById("elv").style.display = "none";
    }
    
    if(dept !== "Choose Department" && !is_lv_valid && to_float(lv) < 3){
        document.getElementById("spdropdown").style.border = "4px solid #ff3333";
        document.getElementById("edept").style.display = "inline-block";
        error = true;
    } else {
        document.getElementById("spdropdown").style.border = "4px solid rgb(21, 221, 21)";
        document.getElementById("edept").style.display = "none";
        if (dept == "Choose Department")
            dept = ""
        document.getElementsByClassName("hiddeninput")[0].value = dept;
    }

    if(!error){
        return true;
    }

    return false;
}

function assign() {
    let error = false;
    let dept = document.getElementById("dept").innerText;
    let lv = document.getElementById("lv").placeholder;
    let is_lv_valid = (lv === "" || !(/[+-]?([0-9]*[.])?[0-9]/.test(lv)) || to_float(lv)%1 !== 0 || (to_float(lv) > 4.0 || to_float(lv) < 0.0));
    if(dept === "Choose Department" || (!is_lv_valid && to_float(lv) < 3)){
        document.getElementById("spdropdown").style.border = "4px solid #ff3333";
        document.getElementById("edept").style.display = "inline-block";
        error = true;
    } else {
        document.getElementById("spdropdown").style.border = "4px solid rgb(21, 221, 21)";
        document.getElementById("edept").style.display = "none";
    }

    if(!error) {
        document.getElementById("assign-form").submit();
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


function specialize() {
    id = document.getElementById("spid").value;
    if(id === ""){
        document.getElementById("spid").style.border = "4px solid #ff3333";
        document.getElementById("eid").style.display = "inline-block";
    } else {
        var form = document.getElementById("sp-form");
        form.action = "assignment.html";
        form.method = "GET";
        form.submit();
    }
}