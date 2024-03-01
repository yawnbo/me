

function isValid() {
    if (firstName() &&
        checkLastName() && 
        checkEmail() &&
        checkPhone() &&
        checkUsername() &&
        checkPassword() && 
        checkAddress() &&
        checkCity() && 
        checkState() && 
        checkCountry()
    ) {
        if (showZipCode()) {
            var check = checkZip();
            if (!check) {
                document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
                event.preventDefault();
            }
        } else 
            return true;
    } else {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
    }
}

// FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };

    //4) Send error message to HTML
    document.getElementById("error").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};

// lastName.addEventListener('blur', checkLastName, false);
function checkLastName(){
    //1) Create variable
    var validLastname=false;

    //2) read value from HTML
    var lastname = document.getElementById("lastName").value;
    var errorMessage = "";

    //3) Do validation
    if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
        errorMessage += "<p>The last name is required and cannot be greater than 50 characters</p>";
        console.log("Last name invalid — length")
    } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
        errorMessage += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
        console.log("Last name invalid — bad characters")
    } else {
        validLastname = true;
        console.log("Last name valid")
    }
    //4) Send error message to HTML
    document.getElementById("error").innerHTML += errorMessage;
    //5) return status of each field
    return (validLastname);
};

function checkEmail() {
    
    var validEmail=false;
    var userEmail = document.getElementById("email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    var errorMessage = "";

    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
        errorMessage += "<p>Invalid email address</p>";
        validEmail = false;
        console.log("Email invalid")
    } else {
        console.log("Email valid")
        validEmail = true;
    }

    document.getElementById("error").innerHTML += errorMessage; 
    return (validEmail);
};

function checkFormatedPhone() {
    var phone = document.getElementById("phone").value;
    phone = phone.replace(/\D/g, '');
    var dashPos = [3, 6];
    var errorMessage = "";
    var isValid = true;
    
    if (phone.length != 10 || phone === null || phone === "") {
        errorMessage += "<p>Invalid phone number</p>";
        console.log("Phone Number invalid");
        isValid = false;
    }
    
    for (var i = 0; i < phone.length; i++) {
        if (dashPos.includes(i)) {
            i++;
        }            
        if (isNaN(phone[i])) {
            errorMessage += "<p>Invalid phone number</p>";
            console.log("Phone Number invalid");
            isValid = false;
            break;
        }
    }
    if (isValid) {
        console.log("Phone Number valid");
    }
    document.getElementById("error").innerHTML += errorMessage;
    return isValid;
}

function checkPhone(){
    var phone = document.getElementById("phone").value;
    var errorMessage = "";
    var isValid = false;

    if (isNaN(phone) || phone.lenght >15 || phone===null || phone===""){
        //send error message. For example errorMessages = "<p>Invalid phone number </p>";
        errorMessage += "<p>Invalid phone number</p>";
        console.log("Phone Number invalid");

    }else { 
        console.log("Phone Number length valid");
        isValid = true;
    }
    document.getElementById("error").innerHTML += errorMessage;
    return isValid;
}

function checkUsername(){
    var username = document.getElementById("username").value;
    var errorMessage = "";
    var isValid = false;

    if (username.length > 12 || username === null || username === ""){
        errorMessage += "<p>Username must be less than 13 characters</p>";
        console.log("Username invalid");
    } else {
        console.log("Username valid");
        isValid = true;
    }
    document.getElementById("error").innerHTML += errorMessage;
    return isValid;
}

function checkPassword(){
    var password = document.getElementById("password").value;
    var errorMessage = "";
    var isValid = true;

    var containsDigit = false;
    var containsUpper = false;
    var containsLower = false;
    var containsSpecial = false;

    for (var i = 0; i < password.length; i++){
        if (!containsDigit && password[i].match(/[0-9]/)){
            containsDigit = true;
        }
        if (!containsUpper && password[i].match(/[A-Z]/)){
            containsUpper = true;
        }
        if (!containsLower && password[i].match(/[a-z]/)){
            containsLower = true;
        }
        if (!containsSpecial && password[i].match(/[^0-9A-Za-z]/)){
            containsSpecial = true;
        }
    }

    if (!containsDigit || !containsUpper || !containsLower || !containsSpecial){
        errorMessage += "<p>Password must contain at least one digit, one uppercase letter, one lowercase letter, and one special character</p>";
        console.log("Password invalid");
        isValid = false;
    }
    if (password.length > 7 || password === null || password === ""){
        errorMessage += "<p>Password must not be empty and must be less than 8 characters</p>";
        console.log("Password invalid");
        isValid = false;

    } else if (isValid){
        console.log("Password valid");
    }
    document.getElementById("error").innerHTML += errorMessage;
    return isValid;
}

function checkAddress(){
    var address = document.getElementById("address").value;
    var errorMessage = "";
    var isValid = false;

    if (address === null || address === ""){
        errorMessage += "<p>Must include address</p>";
        console.log("Address invalid");
    } else {
        console.log("Address valid");
        isValid = true;
    }
    document.getElementById("error").innerHTML += errorMessage;
    return isValid;
}

function checkCity(){
    var city = document.getElementById("city").value;
    var errorMessage = "";
    var isValid = false;

    if (city === null || city === ""){
        errorMessage += "<p>Must include city</p>";
        console.log("City invalid");
    } else {
        console.log("City valid");
        isValid = true;
    }
    document.getElementById("error").innerHTML += errorMessage;
    return isValid;
}

function checkState(){
    errorMessage = "";
    if (document.getElementById("stateDropdown").value === "Select state"){
        errorMessage += "<p>Must include state</p>";
        console.log("State invalid");
        document.getElementById("error").innerHTML += errorMessage;
        return false;
    }
    console.log("State valid");
    return true;
}

function checkCountry(){
    errorMessage = "";
    if (document.getElementById("countryDropdown").value === ""){
        errorMessage += "<p>Must include country</p>";
        console.log("Country invalid");
        document.getElementById("error").innerHTML += errorMessage;
        return false;
    }
    return true;
}
function checkZip(){
    var zip = document.getElementById("zipInput").value;
    var errorMessage = "";
    var isValid = false;

    // I know there is a better way to check for this using substrings or literally anything else but i don't know the syntax
    // and this only breaks if someone puts a - at index 4
    if (zip === null || zip === "" || zip.length !== 5){
        errorMessage += "<p>Must include zip code</p>";
        console.log("Zip invalid");
    } else {
        console.log("Zip valid");
        isValid = true;
    }
    document.getElementById("error").innerHTML += errorMessage;
    return isValid;
}

function stateDropdown() {
    var dropdown = document.getElementById("stateDropdown");
    var states = ["Select state","Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "Washington D.C."];
    dropdown.innerHTML = "";
    

    states.forEach(function(state) {
        var option = document.createElement("option");
        option.text = state;
        dropdown.add(option);
    });
}

function countryDropdown() {
    var countries = [
        "Canada", "United Kingdom", "Australia", "Germany", "France",
        "Japan", "China", "India", "Brazil", "Mexico", "South Korea",
        "Italy", "Spain", "Netherlands", "Russia", "Switzerland",
        "Sweden", "Norway", "Denmark", "Finland", "New Zealand",
        "Singapore", "United Arab Emirates", "Saudi Arabia"
    ];
    var dropdown = document.getElementById("countryDropdown");

    // Add new options without replacing existing ones
    countries.forEach(function(country) {
        var option = document.createElement("option");
        option.text = country;
        dropdown.appendChild(option); // Append option to dropdown
    });
}

function showZipCode() {
    var selectedCountry = document.getElementById("countryDropdown").value;

    if (selectedCountry === "USA") {
        zipInput.style.display = "block";
        return true;
    } else {
        zipInput.style.display = "none"; 
        zipInput.value = "";
        return false;
    }
}


document.getElementById("countryDropdown").addEventListener("change", showZipCode);

stateDropdown();
countryDropdown();
