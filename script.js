 const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("email");
 const loginTab = document.getElementById("login-tab");

 // //signup form direct
 
 const signupTab = document.getElementById("signup-tab");
 
 
 const signupLink = document.getElementById("signup-link");

 const loginLink = document.getElementById("login-link");

loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginTab.click();
});

signupLink.addEventListener("click", function (event) {
    event.preventDefault();
    signupTab.click();
});



//Login Password Validation
const loginPassword = document.getElementById("password");

loginPassword.addEventListener("input", function() {
    const password = loginPassword.value;
    const errorMessage = loginPassword.parentElement.nextElementSibling;
    if (password.trim() === "") {
        errorMessage.textContent = "Password is required!";
        errorMessage.style.display = "block";
    } else {
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
    }
});

//Login button


loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();
    const emailError = loginEmail.nextElementSibling;
    const passwordError = loginPassword.parentElement.nextElementSibling;
    const loginButton = loginForm.querySelector('button[type="submit"]');

    // Clear previous errors
    emailError.textContent = "";
    emailError.style.display = "none";
    passwordError.textContent = "";
    passwordError.style.display = "none";

    if (email === "") {
        emailError.textContent = "Email is required!";
        emailError.style.display = "block";
    }

    if (password === "") {
        passwordError.textContent = "Password is required!";
        passwordError.style.display = "block";
    }

    if (email === "" || password === "") {
        return;
    }

    loginButton.textContent = "Loading...";
    loginButton.disabled = true;

    setTimeout(function() {
    loginButton.textContent = "Login";
    loginButton.disabled = false;
    alert("Welcome back!");
}, 1000);
});





const terms = document.getElementById("terms");
 const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    function showError(input, message) {
        const error = input.parentElement.classList.contains("password-input-wrapper")
            ? input.parentElement.nextElementSibling
            : input.nextElementSibling;

        error.textContent = message;
        error.style.display = "block";
        error.style.color = "red";
        isValid = false;
    }

    function clearError(input) {
        const error = input.parentElement.classList.contains("password-input-wrapper")
            ? input.parentElement.nextElementSibling
            : input.nextElementSibling;

        error.textContent = "";
        error.style.display = "none";
    }

    [fullname, signupEmail, phone, signupPassword, confirmPassword]
        .forEach(clearError);

    const name = fullname.value.trim();
    const email = signupEmail.value.trim();
    const phoneNumber = phone.value.trim();
    const password = signupPassword.value;
    const confirm = confirmPassword.value;

    if (name === "") {
        showError(fullname, "Name is required!");
    } else if (/[0-9]/.test(name)) {
        showError(fullname, "Name should not contain numbers!");
    }

    if (email === "") {
        showError(signupEmail, "Email is required!");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError(signupEmail, "Enter a valid email address!");
    }

    if (phoneNumber === "") {
        showError(phone, "Phone number is required!");
    } else if (!/^[0-9]{10}$/.test(phoneNumber)) {
        showError(phone, "Enter a valid 10-digit phone number!");
    }

    if (password === "") {
        showError(signupPassword, "Password is required!");
    } else if (password.length < 8) {
        showError(signupPassword, "Password must be at least 8 characters!");
    }

    if (confirm === "") {
        showError(confirmPassword, "Please confirm your password!");
    } else if (confirm !== password) {
        showError(confirmPassword, "Passwords do not match!");
    }

    if (!terms.checked) {
        alert("Please accept the Terms & Conditions!");
        isValid = false;
    }

    if (!isValid) return;

    const signupButton = signupForm.querySelector('button[type="submit"]');
    signupButton.disabled = true;
    signupButton.textContent = "Creating account...";

    setTimeout(function() {
        alert("Account created! (Demo only)");
        signupButton.disabled = false;
        signupButton.textContent = "Signup";
    }, 1000);
});



const signupPassword = document.getElementById("signup-password");
const strengthFill = document.querySelector(".strength-fill");
const strengthText =document.querySelector(".password-strength small");
const passwordStrength = document.querySelector(".password-strength");

//fullName validation
const fullname = document.getElementById("fullname");

fullname.addEventListener("input", function() {
    const name = fullname.value;
    const errorMessage = fullname.nextElementSibling;

    if (name.trim() === "") {
        errorMessage.textContent = "Name is required!";
        errorMessage.style.color = "red";
        errorMessage.style.display = "block";
    } else if (/[0-9]/.test(name)) {
        errorMessage.textContent = "Name should not contain numbers!";
        errorMessage.style.color = "red";
        errorMessage.style.display = "block";
    } else {
        errorMessage.textContent = "";
        errorMessage.style.display="none";
    }
});


//Email validation
const signupEmail =document.getElementById("signup-email");

signupEmail.addEventListener("input" , function(){
    const email = signupEmail.value;
    const errorMessage = signupEmail.nextElementSibling;

    if(email.trim()===""){
        errorMessage.textContent="Email is required!";
        errorMessage.style.display ="block";
         } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMessage.textContent = "Enter a valid email address!";
        errorMessage.style.display = "block";
    }else{
        errorMessage.textContent="";
        errorMessage.style.display="none";
    }
    
});

//Phone Number Validation
const phone =document.getElementById("phone");

phone.addEventListener("input", function(){
    const phoneNumber = phone.value;
    const errorMessage=phone.nextElementSibling;

    if(phoneNumber.trim()===""){
         errorMessage.textContent="phone Number is required!";
        errorMessage.style.display ="block";
    }else if(!/^[0-9]{10}$/.test(phoneNumber)) {
        errorMessage.textContent = "Enter a valid 10-digit phone number!";
        errorMessage.style.display = "block";
    }else{
        errorMessage.textContent="";
        errorMessage.style.display="none";

    }
});




console.log(strengthFill, strengthText);

signupPassword.addEventListener("input", function(){
    console.log("Password typed!");
    const password = signupPassword.value;
    passwordStrength.style.display = "block";
    let strength =0;
    if (password.length >= 8){
        strength++;
    }
    if( /[A-Z]/.test(password)){
        strength++;
    }
    if( /[0-9]/.test(password)){
        strength++;
    }
    if ( /[^A-Za-z0-9]/.test(password)){
        strength++;
    }
    if (strength <=1){
        strengthText.textContent ="Weak";
        strengthFill.style.width ="25%";
         strengthFill.style.backgroundColor ="#e74c3c";
    }else if (strength <=3){
        strengthText.textContent = "Medium";
        strengthFill.style.width = "60%";
        strengthFill.style.backgroundColor = "#f39c12";
    } else {
        strengthText.textContent = "Strong";
        strengthFill.style.width = "100%";
        strengthFill.style.backgroundColor = "#2ecc71";
    
    }
});

const signupEye = signupPassword.nextElementSibling;
const confirmPassword =document.getElementById("confirm-password");
const confirmEye =confirmPassword.nextElementSibling;
const loginPasssword = document.getElementById("password")
const loginEye =loginPasssword.nextElementSibling;

console.log(signupPassword, signupEye);

signupEye.addEventListener("click", function(){
   if(signupPassword.type== "password"){
    signupPassword.type = "text";
   }else{
    signupPassword.type = "password";
   }
});

confirmEye.addEventListener("click", function(){
    if(confirmPassword.type == "password"){
        confirmPassword.type ="text";
    }else{
        confirmPassword.type ="password";
    }
});

loginEye.addEventListener("click", function(){
    if(loginPasssword.type == "password"){
        loginPasssword.type = "text";
    }else{
        loginPasssword.type ="password";
    }
});
loginTab.addEventListener("click", function () {
    loginForm.style.transform = "translateX(0)";
    signupForm.style.transform = "translateX(100%)";
});

signupTab.addEventListener("click", function () {
    loginForm.style.transform = "translateX(-100%)";
    signupForm.style.transform = "translateX(0)";
});

//Confirm Password Matching Validation.

confirmPassword.addEventListener("input", function() {
    const password = signupPassword.value;
    const confirm = confirmPassword.value;
    const errorMessage = confirmPassword.parentElement.nextElementSibling;

    if (confirm === "") {
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
    } else if (confirm !== password) {
        errorMessage.textContent = "Passwords do not match!";
        errorMessage.style.color = "red";
        errorMessage.style.display = "block";
    } else {
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
    }
    
});
signupPassword.addEventListener("input", function() {
    if (confirmPassword.value !== "") {
        confirmPassword.dispatchEvent(new Event("input"));
    }
});



//i Forgot Password

const forgotModal = document.getElementById("forgot-modal");
const forgotLink = document.getElementById("forgot-password");
const closeForgot = document.getElementById("close-forgot");
const forgotForm = document.getElementById("forgot-form");
const forgotEmail = document.getElementById("forgot-email");
const forgotMessage = document.getElementById("forgot-message");

// Forgot Password link par click
forgotLink.addEventListener("click", function (event) {
    event.preventDefault();
    forgotModal.classList.add("show");
    forgotEmail.value = "";
    forgotMessage.textContent = "";
});

// Close button par click
closeForgot.addEventListener("click", function () {
    forgotModal.classList.remove("show");
});

// Popup ke bahar click karne par band ho
forgotModal.addEventListener("click", function (event) {
    if (event.target === forgotModal) {
        forgotModal.classList.remove("show");
    }
});

// Reset form submit
forgotForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = forgotEmail.value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        forgotMessage.textContent = "Please enter a valid email address.";
        return;
    }

    forgotMessage.style.color = "green";
    forgotMessage.textContent =
        "Demo successful! Password reset is not actually sent.";
});

//Remember me
const rememberCheckbox = document.getElementById("remember");

// Saved preference ko load karo
rememberCheckbox.checked =
    localStorage.getItem("rememberMe") === "true";

// Checkbox ki state save karo
rememberCheckbox.addEventListener("change", function () {
    localStorage.setItem(
        "rememberMe",
        rememberCheckbox.checked
    );
});

