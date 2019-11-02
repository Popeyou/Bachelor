var dateVerifie = 0; 

function verifDate() //verif de la date dans le bon format
{
    var chaine = document.getElementById('datea').value; //date en variable
    var regdate = "^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$"; //regex de la date

    var a = document.getElementById("err");

    if (chaine.match(regdate)) //Si il n'y a que jj/mm/aaaa
    {
        document.getElementById('datea').value = chaine;

        document.getElementById('datea').style.borderWidth = "3px"; //On augmente la taille du bord du champs html
        document.getElementById('datea').style.borderColor = "green"; //On change la couleur du champs en vert pour dire que tout va bien
        document.getElementById('datea').style.color = "green"; //Pareil pour la police

        document.getElementById("err").style.color = "green";
        a.innerHTML = "Le format est valide &nbsp; <i class='fas fa-check'></i>";

        dateVerifie = 1; //variable globale
    }
    else //sinon
    {
        document.getElementById('datea').style.borderWidth = "3px"; //On augmente la taille du bord du champs html
        document.getElementById('datea').style.borderColor = "red"; //On change la couleur du champs en rouge pour indiquer que le format n'est pas le bon
        document.getElementById('datea').style.color = "red"; //Pareil pour la police

        document.getElementById("err").style.color = "red";
        a.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        nomVerifie = 0; //variable globale
    }

    if (chaine == "") //Si le champs est vide
    {
        document.getElementById('datea').style.borderWidth = "3px"; //Meme chose que le else
        document.getElementById('datea').style.borderColor = "red";
        document.getElementById('datea').style.color = "red";

        document.getElementById("err").style.color = "red";
        a.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        nomVerifie = 0; //variable globale
    }
}

