function txt() //Fonction de vérification de date en utilisant un regex
{
    var txt = document.getElementById('txt255').value;
    var d = document.getElementById("messageErr6");
    var nbtxt = txt.length;
    document.getElementById('txt255').maxLength = 255;

    if (nbtxt < 255) 
    {
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
    var commentaire = document.getElementById('txt255').value;

    creerCookie("commentaire",commentaire,"15");

    document.location.href="fin.html";
}

function fill()
{
    document.getElementById('txt255').value = getCookieValue("commentaire");
}