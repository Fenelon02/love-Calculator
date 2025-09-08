function calculate(){
    var username = document.getElementById("userName").value 
    var loverName = document.getElementById("loverName").value 
    var errorMensage = document.getElementById("errorMensage")
    errorMensage.innerHTML = ""

    if(username.trim() !== "" && loverName.trim() !== ""){
        var percentage = Math.floor(Math.random() * 101)
        var result = document.getElementById("lovePercentage")
        var textAnswer  = document.getElementById("textAnswer")

        result.innerHTML = percentage.toFixed(0) + " %"
        if(percentage <= 20){
            textAnswer.innerHTML = username + " "+ loverName + ", looks like destiny has other plans."
        } else if( percentage >= 21 && percentage < 40){
            textAnswer.innerHTML = username + " "+ loverName + ", not perfect, but still a chance for sweet moments."
        } else if(percentage >= 40 && percentage < 60){
            textAnswer.innerHTML = username + " "+ loverName + ", a promising connection — could be something special."
        } else if(percentage  >= 60 && percentage < 80){
            textAnswer.innerHTML = username + " "+ loverName + ", a story of affection and harmony is unfolding."
        } else{
            textAnswer.innerHTML = username + " "+ loverName + ", your hearts beat as one — pure magic!"
        }
    } else{
        errorMensage.innerHTML = "Error! Type your name and your lover name."
    }
}