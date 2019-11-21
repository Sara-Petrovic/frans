function validateForm() {
    var name = document.querySelector("#name").value;
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    //=== da li je i ista vrednost i tip promenljive
    if (name === "") {
        alert("Unesite ime.");
        return false;
    }
    for(let i = 0; i < numbers.length; i++){
        if(name.includes(numbers[i])){
            alert("Molim Vas, unesite pravo ime.");
            return false;
        }
    }

    var email = document.getElementById("email").value;
    if(email === ""){
        alert("Molim Vas, unesite email.");
        return false;
    }
    if(!email.includes("@") || !email.includes(".")){
        alert("Molm Vas, unesite ispravan email.");
        return false;
    }

    var telNum = document.querySelector("#tel-num").value;
    if(telNum === ""){
        alert("Molim Vas, unesite broj telefona.");
        return false;
    }
    if(parseInt(telNum) != telNum){
        alert("Molim Vas, unesite ispravan broj telefona.");
        console.log(parseInt(telNum));
        return false;
    }
}