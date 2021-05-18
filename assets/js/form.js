let radioBtns = document.querySelectorAll(".sponsorship-buttons input");
let emailInput = document.getElementById("emailaddress");
let firstNameInput = document.getElementById("firstname");
let lastNameInput = document.getElementById("lastname");
let donateBtn = document.getElementById("donate-form--donate-btn");
let payByCheckBtn = document.getElementById("btnPayByCheck");
let payByPaypalBtn = document.getElementById("btnPaypal");
let viewPaypal = document.getElementById("view-paypal");
let viewPayByCheck = document.getElementById("view-pay-by-check");
let first, last, email, submitUrl, donationAmt;

viewPayByCheck.style.display="none";

emailInput.oninput=function(){
    email = encodeURI(emailInput.value);
}
firstNameInput.oninput=function(){
    first = encodeURI(firstNameInput.value);
}
lastNameInput.oninput=function(){
    last = encodeURI(lastNameInput.value);
}

for (let btn of radioBtns){
    btn.oninput=function(){
        if(document.querySelector(".sponsorship-buttons label.selected") != null){
            document.querySelector(".sponsorship-buttons label.selected").classList.remove("selected");
        }
        btn.parentElement.classList.add("selected");
        btn.parentElement.parentElement.classList.add("level-selected");

        donationAmt = this.value;
    }
}

donateBtn.onclick=function(){
    // console.log(email, first, last, donationAmt)
    // submitUrl = `https://www.paypal.com/donate/?business=director%40bwaf.org&first_name=${first}&last_name=${last}&email=${email}&amount=${donationAmt}&item_name=Donate&no_shipping=1&shipping=0&no_note=1&currency_code=USD&charset=UTF-8&custom=15156&rm=2&return=https%3A%2F%2Fwww.bwaf.org%2Fdonation-confirmation%2F%3Fpayment-confirmation%3Dpaypal%26payment-id%3D15156&cancel_return=https%3A%2F%2Fwww.bwaf.org%2Ftransaction-failed%2F&notify_url=https%3A%2F%2Fwww.bwaf.org%2Findex.php%3Fgive-listener%3DIPN&page_style=PayPal&cbt=Beverly+Willis+Architecture+Foundation&cmd=_donations`
    // console.log(submitUrl)
    window.open(submitUrl, "_blank");
}

payByCheckBtn.onclick=function(){
    payByPaypalBtn.classList.remove("active")
    this.classList.add("active");
    viewPaypal.style.display="none";
    viewPayByCheck.style.display="block";
}
payByPaypalBtn.onclick=function(){
    payByCheckBtn.classList.remove("active")
    this.classList.add("active");
    viewPaypal.style.display="block";
    viewPayByCheck.style.display="none";
}