var input = document.querySelector("#txtinput")
var output = document.querySelector("#txtoutput")
var translate= document.querySelector("#txt_translate")

var url = "https://api.funtranslations.com/translate/pirate.json?text="+input.value
// console.log(url)
// function language(textvalue)
// {
// return (url + "?" + "text="+ textvalue)
// }
function urlhandler(text){
var textvalue=input.value
var urlnew = url +"?"+"text=" +textvalue 
}


    function fetching(){
    fetch(urlhandler(url))
    .then (response => response.json())
    .then (json => console.log(json))

    }


translate.addEventListener("click",()=>{
    console.log("button is clciekd " + input.value)
    var newvalue = input.value
    fetching()
//     var url = "https://api.funtranslations.com/translate/pirate.json?text="+input.value
// console.log(url)
    // console.log(language())
    //fetching()
   // output.innerHTML = input.value
})