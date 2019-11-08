//Variables globales permettant de vérifier si toutes les conditions sont remplies quand on appuie sur le bouton (Si une des variables est à 0, une condition n'est pas remplie)
var nomVerifie = 0; 
var prenomVerifie = 0;
var mailVerifie = 0;
var dateNaissVerifie = 0;

function normaliserNom () //Vérification nom
{   
    var chaine = document.getElementById('nom').value; //on affecte la variable chaine au champs nom dans le form html
    var reg = "^[a-zA-ZéâêèîôçÉÊÈÇÂÎÔ]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"; //Minuscules et majuscules autorisés, é , è , â, - et espaces autorisés

    var a = document.getElementById("messageErr");

    if (chaine.match(reg)) //Si il n'y a que majuscules, minuscules, é , è , â
    {
        chaine = chaine.toUpperCase(); //On met toute notre chaine en majuscule

        document.getElementById('nom').value = chaine;

        document.getElementById('nom').style.borderWidth = "3px"; //On augmente la taille du bord du champs html
        document.getElementById('nom').style.borderColor = "green"; //On change la couleur du champs en vert pour dire que tout va bien
        document.getElementById('nom').style.color = "green"; //Pareil pour la police

        document.getElementById("messageErr").style.color = "green";
        a.innerHTML = "Le format est valide &nbsp; <i class='fas fa-check'></i>";

        nomVerifie = 1; //variable globale
    }
    else //sinon
    {
        document.getElementById('nom').style.borderWidth = "3px"; //On augmente la taille du bord du champs html
        document.getElementById('nom').style.borderColor = "red"; //On change la couleur du champs en rouge pour indiquer que le format n'est pas le bon
        document.getElementById('nom').style.color = "red"; //Pareil pour la police

        document.getElementById("messageErr").style.color = "red";
        a.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        nomVerifie = 0; //variable globale
    }

    if (chaine == "") //Si le champs est vide
    {
        document.getElementById('nom').style.borderWidth = "3px"; //Meme chose que le else
        document.getElementById('nom').style.borderColor = "red";
        document.getElementById('nom').style.color = "red";

        document.getElementById("messageErr").style.color = "red";
        a.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        nomVerifie = 0; //variable globale
    }
}

function normaliserPrenom () //Vérification prénom (même chose que pour nom, on met seulement la première lettre en majuscule ici *)
{   
    var pre = document.getElementById('prenom').value;
    var regex = "^[a-zA-ZéâêèîôçÉÊÈÇÂÎÔ]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"; //Minuscules et majuscules autorisés, é , è , â, - et espaces autorisés

    var b = document.getElementById("messageErr2");

    if (pre.match(regex))
    {
        pre = pre.charAt(0).toUpperCase() + pre.substring(1).toLowerCase(); // *

        document.getElementById('prenom').value = pre;

        document.getElementById('prenom').style.borderWidth = "3px";
        document.getElementById('prenom').style.borderColor = "green";
        document.getElementById('prenom').style.color = "green";

        document.getElementById("messageErr2").style.color = "green";
        b.innerHTML = "Le format est valide &nbsp; <i class='fas fa-check'></i>";

        prenomVerifie = 1; //variable globale
    }
    else
    {
        document.getElementById('prenom').style.borderWidth = "3px";
        document.getElementById('prenom').style.borderColor = "red";
        document.getElementById('prenom').style.color = "red";

        document.getElementById("messageErr2").style.color = "red";
        b.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        prenomVerifie = 0; //variable globale
    }

    if (pre == "")
    {
        document.getElementById('prenom').style.borderWidth = "3px";
        document.getElementById('prenom').style.borderColor = "red";
        document.getElementById('prenom').style.color = "red";

        document.getElementById("messageErr2").style.color = "red";
        b.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        prenomVerifie = 0; //variable globale
    }
}

function bandeau ()
{
    var bande = document.getElementById('bandeau');
    document.getElementById('bandeau').style.display = 'none';
}

function verifEmail() //Fonction verif mail vue en cours
{
    var mail = document.getElementById('email').value;

    var cpt1 = 0;
    var cpt2 = 0;

    var c = document.getElementById("messageErr3");

    for(var i = 0; i < mail.length ; i++)
    {
        if(mail.charAt(i) == '@') cpt1++;
        else if (mail.charAt(i) == '.') cpt2++;
    } 

    if(cpt1 == 1 && cpt2 >= 1)
    {
        document.getElementById('email').value = mail;

        document.getElementById('email').style.borderWidth = "3px";
        document.getElementById('email').style.borderColor = "green";
        document.getElementById('email').style.color = "green";

        document.getElementById("messageErr3").style.color = "green";
        c.innerHTML = "Le format est valide &nbsp; <i class='fas fa-check'></i>";

        mailVerifie = 1; //variable globale
    }
    else if (mail == "")
    {
        document.getElementById('email').style.borderWidth = "3px";
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('email').style.color = "red";

        document.getElementById("messageErr3").style.color = "red";
        c.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        mailVerifie = 0; //variable globale
    }
    else
    {
        document.getElementById('email').style.borderWidth = "3px";
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('email').style.color = "red";

        document.getElementById("messageErr3").style.color = "red";
        c.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        mailVerifie = 0; //variable globale
    }
}

function dateVerif() //Fonction de vérification de date en utilisant un regex
{
    var dateN = document.getElementById('dateNaiss').value;
    var d = document.getElementById("messageErr4");

    var reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    if (dateN.match(reg)) 
    {
        document.getElementById('dateNaiss').style.borderWidth = "3px";
        document.getElementById('dateNaiss').style.borderColor = "green";
        document.getElementById('dateNaiss').style.color = "green";

        document.getElementById("messageErr4").style.color = "green";
        d.innerHTML = "Le format est valide &nbsp; <i class='fas fa-check'></i>";

        dateNaissVerifie = 1; //variable globale
    }
    else 
    {
        document.getElementById('dateNaiss').style.borderWidth = "3px";
        document.getElementById('dateNaiss').style.borderColor = "red";
        document.getElementById('dateNaiss').style.color = "red";

        document.getElementById("messageErr4").style.color = "red";
        d.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        dateNaissVerifie = 0; //variable globale
    }
    return marche;
}

function verifBouton()
{
    var e = document.getElementById("err");

    if (document.getElementById('dateNaiss').value == "" || document.getElementById('email').value == "" || document.getElementById('prenom').value == "" || document.getElementById('nom').value == "") //Si un champs ou plus est vide
    {
        e.innerHTML = "<i class='fas fa-times'></i> &nbsp; Un des champs est vide !";
    }
    else if (dateNaissVerifie == 0 || mailVerifie == 0 || nomVerifie == 0 || prenomVerifie == 0) //On check si une variable globale est à 0
    {
        e.innerHTML = "<i class='fas fa-times'></i> &nbsp; Vous n'avez pas respecté tous les formats !";
    }
    else if (dateNaissVerifie == 1 || mailVerifie == 1 || nomVerifie == 1 || prenomVerifie == 1)
    {
        var nom = document.getElementById('nom').value;
        var prenom = document.getElementById('prenom').value;
        var mail = document.getElementById('email').value;
        var dateNaiss = document.getElementById('dateNaiss').value;
        var civilite = document.getElementById('civilite').value;
        
        creerCookie("nom",nom,"15");
        creerCookie("email",mail,"15");
        creerCookie("dateNaiss",dateNaiss,"15");
        creerCookie("prenom",prenom,"15");
        creerCookie("civilite",civilite,"15");

        document.location.href="page1.html";
    }
}