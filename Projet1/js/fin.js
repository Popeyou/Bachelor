function afficher ()
{
    var prenom = getCookieValue("prenom");
    var nom = getCookieValue("nom");
    var civilite = getCookieValue("civilite");
    var radio1 = parseInt(getCookieValue("radio1"));
    var radio2 = parseInt(getCookieValue("radio2"));
    var acces = parseInt(getCookieValue("acces"));
    var verifDateNaiss = getCookieValue("dateNaiss");

    var a = document.getElementById("titre");
        
    var b = document.getElementById("resultat"); 

    var c = document.getElementById("smiley"); 

    var res = radio1 + radio2 + acces;

    
    a.innerHTML = "Merci "+civilite+" "+nom+" !";

    if (res >= 10)
    {
        b.innerHTML = "Vous avez globalement été satisfait !";
        c.innerHTML = "<img style='width:10%;' src='doc/smiley1.png'>"
    }
    else if (res >= 5 && res < 10)
    {
        b.innerHTML = "Vous avez été moyennement satisfait !";
        c.innerHTML = "<img style='width:10%;' src='doc/smiley2.png'>"
    }
    else if (res < 5)
    {
        b.innerHTML = "Vous n'avez pas été satisfait !";
        c.innerHTML = "<img style='width:10%;' src='doc/smiley3.png'>"
    }
}