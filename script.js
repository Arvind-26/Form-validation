const phoneInput = document.getElementById("InputTel");
const form = document.getElementById("formtag");
const passwordInput = document.getElementById("InputPassword");
const cnfpasswordInput = document.getElementById("InputCnfPassword");
const nameInput = document.getElementById("InputName");

form.addEventListener("submit", function validate(e) {
    const phoneNumber = phoneInput.value.trim();
    const password = passwordInput.value.trim();
    const name = nameInput.value.trim();
    const confirmPassword = cnfpasswordInput.value.trim();

    const phoneRegx = /^[0-9]{10}$/;
    const passwordRegx = /^.{8,}$/;

    phoneInput.classList.remove("is-valid", "is-invalid");
    passwordInput.classList.remove("is-valid", "is-invalid");
    cnfpasswordInput.classList.remove("is-valid", "is-invalid");

    if (!phoneRegx.test(phoneNumber) || phoneNumber === "1234567890") {
        phoneInput.classList.add("is-invalid");
        e.preventDefault();
    } else {
        phoneInput.classList.add("is-valid");
    }

    if (!passwordRegx.test(password) || password === "password" || password === name.split(" ")[0]) {
        passwordInput.classList.add("is-invalid");
        e.preventDefault();
    } else {
        passwordInput.classList.add("is-valid");
    }

    if (password !== confirmPassword) {
        passwordInput.classList.add("is-invalid");
        cnfpasswordInput.classList.add("is-invalid");
        e.preventDefault();
    } else if (passwordRegx.test(password)) {
        cnfpasswordInput.classList.add("is-valid");
    }
});