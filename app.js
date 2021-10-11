var input = document.querySelector("#txtinput")
var output = document.querySelector("#txtoutput")
var translate= document.querySelector("#txt_translate")

var url="https://api.funtranslations.com/translate/pirate.json";



translate.addEventListener("click",fetching)

function urlhand(text)
{
   
    return url+"?"+"text="+text
    //console.log(newurl)
}

function fetching()
{
    var text=input.value
    fetch(urlhand(text))
    .then (response => response.json())
    .then (json => {
        var trans=json.contents.translated;
        output.innerHTML=trans;
    })
    .catch(errorhandler)
}

function errorhandler(error)
{
    console.log("error occured ",error)
}