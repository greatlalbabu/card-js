const userData = JSON.parse( localStorage.getItem("userData"));

let nameTag = document.getElementById("name") ;
let lastname = document.getElementById("lastName");
let counTry= document.getElementById("country");
let num = document.getElementById("number")
let staTe = document.getElementById("state");
let vill = document.getElementById("village");

if(userData){
    console.log("data is saved");
    console.log("userData" , userData);

    nameTag.innerText = userData.firstName ;
    lastname.innerText = userData.lastName ;
    counTry.innerText = userData.country ;
    num.innerText = userData.phoneNum ;
    staTe.innerText = userData.state ;
    vill.innerText = userData.village ;

}else{

    const firstName  = prompt("Enter First Name")
    const lastName  = prompt("Enter Last Name")
    const country  = prompt("Enter Country Name")
    const phoneNum  = prompt("Enter Phone Number")
    const state  = prompt("Enter State Name")
    const village  = prompt("Enter Village Name")

    const data = {
        "firstName" : firstName ,
        'lastName' : lastName,
        'country': country,
        "phoneNumber" : phoneNum,
        'state': state,
        'village': village 
    }

    nameTag.innerText = firstName ;
    lastname.innerText = lastName ;
    counTry.innerText = country ;
    num.innerText = phoneNum ;
    staTe.innerText = state ;
    vill.innerText = village ;

    localStorage.setItem('userData' , JSON.stringify(data)) ;
}