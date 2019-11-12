var dateVerifie = 0;
var nbVerifie = 0;
var urlVerifie = 0;


function verifDate() //verif de la date dans le bon format
{

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var vrai = 1;

    today = dd + '/' + mm + '/' + yyyy;
    
    var chaine = document.getElementById('datea').value; //date en variable
    var regdate = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g; //regex de la date

    
    var ddChaine = chaine.substr(0,2);
    var mmChaine = chaine.substr(3,2);
    var aaaaChaine = chaine.substr(6,4);

    /*
    var nbf = 0;

    var verif = 1;

    var j = parseInt(ddChaine);
    var m = parseInt(mmChaine);
    var a = parseInt(aaaaChaine);
    */

    /*  Verif de la inferieur à celle du jours  */
    if (aaaaChaine == yyyy)
    {
        if (mmChaine == mm)
        {
            if (ddChaine >= dd)
            {
                vrai = 0;
            }
        }
        else if (mmChaine > mm)
        {
            vrai = 0;
        }
    }
    else if (aaaaChaine > yyyy)
    {
        vrai = 0;
    }
    else
    {
        vrai = 1;
    }

    /*  Verif de la date genre fevrier  */
    /*
    if (a%4 ==0 && a %100 !=0 || a%400==0)
    {
        nbf = 29;
    }
    else 
    {
        nbf=28;
    }
    switch(m)
    {
        case 1 : case 3 : case 5 : case 7 : case 8 : case 10 : case 12 : 
        if (j<0 || j>31)
            {
                verif = 0;
            }
            else 
            {
                verif = 1;
            }
            break;
        case 4 : case 6 : case 9 : case 11  :
            if (j<0 || j>30)
                {
                    verif = 0;
                }
                else
                {
                    verif = 1;
                }
        case 2 : 
            if(j<0 || j>nbf)
                {
                    verif = 0;
                }
                else 
                {
                    verif = 1;
                }
                break;

                default : verif = 0;
                break;
                
    }
    */

    var a = document.getElementById("err");

    if (chaine.match(regdate) && vrai == 1) //Si il n'y a que jj/mm/aaaa
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

        dateVerifie = 0; //variable globale
    }

    if (chaine == "") //Si le champs est vide
    {
        document.getElementById('datea').style.borderWidth = "3px"; //Meme chose que le else
        document.getElementById('datea').style.borderColor = "red";
        document.getElementById('datea').style.color = "red";

        document.getElementById("err").style.color = "red";
        a.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        dateVerifie = 0; //variable globale
    }
}


function verifNbj()
{
    var chaine = document.getElementById('nbj').value; //date en variable
    var regdate = /^[0-9]*$/g ; //regex de la date

    var a = document.getElementById("err2");

    if (chaine.match(regdate) && chaine < 31 && chaine > 0) //Si il n'y a que jj/mm/aaaa
    {
        document.getElementById('nbj').value = chaine;

        document.getElementById('nbj').style.borderWidth = "3px"; //On augmente la taille du bord du champs html
        document.getElementById('nbj').style.borderColor = "green"; //On change la couleur du champs en vert pour dire que tout va bien
        document.getElementById('nbj').style.color = "green"; //Pareil pour la police

        document.getElementById("err2").style.color = "green";
        a.innerHTML = "Le format est valide &nbsp; <i class='fas fa-check'></i>";

        nbVerifie = 1; //variable globale
    }
    else //sinon
    {
        document.getElementById('nbj').style.borderWidth = "3px"; //On augmente la taille du bord du champs html
        document.getElementById('nbj').style.borderColor = "red"; //On change la couleur du champs en rouge pour indiquer que le format n'est pas le bon
        document.getElementById('nbj').style.color = "red"; //Pareil pour la police

        document.getElementById("err2").style.color = "red";
        a.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        nbVerifie = 0; //variable globale
    }

    if (chaine == "") //Si le champs est vide
    {
        document.getElementById('nbj').style.borderWidth = "3px"; //Meme chose que le else
        document.getElementById('nbj').style.borderColor = "red";
        document.getElementById('v').style.color = "red";

        document.getElementById("err2").style.color = "red";
        a.innerHTML = "Insérez un nombre &nbsp; <i class='fas fa-times'></i>";

        nbVerifie = 0; //variable globale
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

        urlVerifie = 1; //variable globale
    }
    else //sinon
    {
        document.getElementById('url').style.borderWidth = "3px"; //On augmente la taille du bord du champs html
        document.getElementById('url').style.borderColor = "red"; //On change la couleur du champs en rouge pour indiquer que le format n'est pas le bon
        document.getElementById('url').style.color = "red"; //Pareil pour la police

        document.getElementById("err3").style.color = "red";
        a.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        urlVerifie = 0; //variable globale
    }

    if (chaine == "") //Si le champs est vide
    {
        document.getElementById('url').style.borderWidth = "3px"; //Meme chose que le else
        document.getElementById('url').style.borderColor = "red";
        document.getElementById('url').style.color = "red";

        document.getElementById("err3").style.color = "red";
        a.innerHTML = "Le format est invalide &nbsp; <i class='fas fa-times'></i>";

        urlVerifie = 0; //variable globale
    }
}

function verifBouton()
{
    var e = document.getElementById("error");

    if (document.getElementById('url').value == "" || document.getElementById('nbj').value == "" || document.getElementById('datea').value == "") //Si un champs ou plus est vide
    {
        e.innerHTML = "<i class='fas fa-times'></i> &nbsp; Un des champs est vide !";
    }
    else if (dateVerifie == 0 || nbVerifie == 0 || urlVerifie == 0) //On check si une variable globale est à 0
    {
        e.innerHTML = "<i class='fas fa-times'></i> &nbsp; Vous n'avez pas respecté tous les formats !";
    }
    else if (dateVerifie == 1 || nbVerifie == 1 || urlVerifie == 1)
    {
        document.location.href="page4.html";
    }
}


