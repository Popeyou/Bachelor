function txt255() //Fonction de vérification de date en utilisant un regex
{
    var txt = document.getElementById('txt255').value;
    var d = document.getElementById("messageErr6");
    var nbtxt = txt.length;

    if (nbtxt < 255) 
    {
        document.getElementById('dateNaiss').style.borderWidth = "3px";
        document.getElementById('dateNaiss').style.borderColor = "green";
        document.getElementById('dateNaiss').style.color = "green";

        document.getElementById("messageErr6").style.color = "green";
        d.innerHTML = "Le format est valide &nbsp; <i class='fas fa-check'></i>";
    }
    else 
    {
        document.getElementById('dateNaiss').style.borderWidth = "3px";
        document.getElementById('dateNaiss').style.borderColor = "red";
        document.getElementById('dateNaiss').style.color = "red";

        document.getElementById("messageErr6").style.color = "red";
        d.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

    }
}