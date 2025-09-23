let radioBtns = document.querySelectorAll(".sponsorship-buttons input");

for (let btn of radioBtns){
    btn.onclick=function(){
        if(document.querySelector(".sponsorship-buttons .selected") != null){
            document.querySelector(".sponsorship-buttons .selected").classList.remove("selected");
        }
        if (this.classList.contains("btn-other")){
            btn.classList.add("selected");
            btn.parentElement.classList.add("level-selected");
        } else {
            btn.parentElement.classList.add("selected");
            btn.parentElement.parentElement.classList.add("level-selected");
        }
        donationAmt = this.value;
    }
    btn.oninput=function(){
        donationAmt = this.value;
    }
}