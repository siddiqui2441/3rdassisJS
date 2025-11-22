var nameInput = document.getElementById("name");
var fatherInput = document.getElementById("fatherName");
var emailinput = document.getElementById("email");
var passwordinput = document.getElementById("password");
var ageInput = document.getElementById("age");
var nicInput = document.getElementById("nic");







var errorName = document.getElementById("errorName");
var errorFather = document.getElementById("errorFather");
var erroremail =document.getElementById ("erroremail");
var errorpassword = document.getElementById("errorpassword");
var errorAge = document.getElementById("errorAge");

// NIC unique rakhne ke liye array
var nicArray = [];

// 11 digit ka unique NIC generate karne ka function
function generateNIC() {

    while (true) {
        var nic = "";

        // 11 digit bnana
        for (var i = 0; i < 13; i++) {
            nic += Math.floor(Math.random() * 10).toFixed(0)
              var newCnic = nic.toString().substring(0,4)+"-"+nic.toString().substring(4,12)+"-"+nic.toString().substring(12)
             nicInput.value=newCnic.toString()
        }

        // duplicate NIC na ho
        if (!newCnicewnicArray.includes(nicArray)) {
            nicArray.push(nicArray);
            return nicArray;
        }
    }
}

function submitForm() {

    // purane errors ko clear karo
    errorName.innerText = "";
    errorFather.innerText = "";
    errorAge.innerText = "";
   erroremail.innerText="";
   errorpassword.innerText="";
    

    // Validation
    if (nameInput.value.trim() === "") {
        errorName.innerText = "Please enter your name";
        return;
    }

    if (fatherInput.value.trim() === "") {
        errorFather.innerText = "Please enter father name";
        return;
    }

    if (emailinput.value === "") {
        erroremail.innerText = "Please enter email";
        return;
    }
    if (passwordinput.value === "") {
        errorpassword.innerText = "Please enter password";
        return;
    }
    if (ageInput.value === "") {
        errorAge.innerText = "Please enter age";
        return;
    }

    var age = Number(ageInput.value);

    // Age check
    if (age < 18) {
        nicInput.value = "You are not eligible";
    } 
    else {
        // Agar eligible hai to NIC generate karo
        var newNIC = generateNIC();
        nicInput.value = newNIC;
        console.log("Generated NIC: " + newNIC);
    }
}
