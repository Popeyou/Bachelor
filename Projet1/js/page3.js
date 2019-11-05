var dateVerifie = 0; 
var x = document.cookie;
document.write(x);
function verifDate() //verif de la date dans le bon format
{
    var chaine = document.getElementById('datea').value; //date en variable
    var regdate = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g; //regex de la date

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


function verifNbj()
{
    var chaine = document.getElementById('nbj').value; //date en variable
    var regdate = /^[0-9]*$/g ; //regex de la date

    var a = document.getElementById("err2");

    if (chaine.match(regdate) && chaine < 31 ) //Si il n'y a que jj/mm/aaaa
    {
        document.getElementById('nbj').value = chaine;

        document.getElementById('nbj').style.borderWidth = "3px"; //On augmente la taille du bord du champs html
        document.getElementById('nbj').style.borderColor = "green"; //On change la couleur du champs en vert pour dire que tout va bien
        document.getElementById('nbj').style.color = "green"; //Pareil pour la police

        document.getElementById("err2").style.color = "green";
        a.innerHTML = "Le format est valide &nbsp; <i class='fas fa-check'></i>";

        dateVerifie = 1; //variable globale
    }
    else //sinon
    {
        document.getElementById('nbj').style.borderWidth = "3px"; //On augmente la taille du bord du champs html
        document.getElementById('nbj').style.borderColor = "red"; //On change la couleur du champs en rouge pour indiquer que le format n'est pas le bon
        document.getElementById('nbj').style.color = "red"; //Pareil pour la police

        document.getElementById("err2").style.color = "red";
        a.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        nomVerifie = 0; //variable globale
    }

    if (chaine == "") //Si le champs est vide
    {
        document.getElementById('nbj').style.borderWidth = "3px"; //Meme chose que le else
        document.getElementById('nbj').style.borderColor = "red";
        document.getElementById('v').style.color = "red";

        document.getElementById("err2").style.color = "red";
        a.innerHTML = "Insérez un nombre &nbsp; <i class='fas fa-times'></i>";

        nomVerifie = 0; //variable globale
    }
}


function verifUrl()
{
    var chaine = document.getElementById('url').value; //date en variable
    var regdate = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g ; //regex de la date

    var a = document.getElementById("err3");

    if (chaine.match(regdate)) //Si il n'y a que jj/mm/aaaa
    {
        document.getElementById('url').value = chaine;

        document.getElementById('url').style.borderWidth = "3px"; //On augmente la taille du bord du champs html
        document.getElementById('url').style.borderColor = "green"; //On change la couleur du champs en vert pour dire que tout va bien
        document.getElementById('url').style.color = "green"; //Pareil pour la police

        document.getElementById("err3").style.color = "green";
        a.innerHTML = "Le format est valide &nbsp; <i class='fas fa-check'></i>";

        dateVerifie = 1; //variable globale
    }
    else //sinon
    {
        document.getElementById('url').style.borderWidth = "3px"; //On augmente la taille du bord du champs html
        document.getElementById('url').style.borderColor = "red"; //On change la couleur du champs en rouge pour indiquer que le format n'est pas le bon
        document.getElementById('url').style.color = "red"; //Pareil pour la police

        document.getElementById("err3").style.color = "red";
        a.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        nomVerifie = 0; //variable globale
    }

    if (chaine == "") //Si le champs est vide
    {
        document.getElementById('url').style.borderWidth = "3px"; //Meme chose que le else
        document.getElementById('url').style.borderColor = "red";
        document.getElementById('url').style.color = "red";

        document.getElementById("err3").style.color = "red";
        a.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        nomVerifie = 0; //variable globale
    }
}
