function txt() //Fonction de vérification de date en utilisant un regex
{
    var txt = document.getElementById('txt255').value;
    var d = document.getElementById("messageErr6");
    var nbtxt = txt.length;
    document.getElementById('txt255').maxLength = 255;

    if (nbtxt < 255) 
    {
        document.getElementById('txt255').style.borderWidth = "3px";
        document.getElementById('txt255').style.borderColor = "green";
        document.getElementById('txt255').style.color = "green";

        document.getElementById("messageErr6").style.color = "green";
        d.innerHTML = "Le format est valide &nbsp; <i class='fas fa-check'></i>";
        document.getElementById('btn1').disabled = false;
    }
    else 
    {
        document.getElementById('btn1').disabled = true;
        document.getElementById('txt255').style.borderWidth = "3px";
        document.getElementById('txt255').style.borderColor = "red";
        document.getElementById('txt255').style.color = "red";

        document.getElementById("messageErr6").style.color = "red";
        d.innerHTML = "Vous devez entrer moins de 255 caractères &nbsp; <i class='fas fa-times'></i>";
    }
}

function pageSuivante ()
{
    document.location.href="fin.html";
}