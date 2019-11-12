function verifButton ()
{
    var cadre = document.getElementById('cadre').value;
    var voyage = document.getElementById('voyage').value;
    var acces = document.getElementById('acces').value;

    creerCookie("cadre",cadre,"15");
    creerCookie("voyage",voyage,"15");
    creerCookie("acces",acces,"15");

    document.location.href="page3.html";
}

function fill()
{
    document.getElementById('cadre').value = getCookieValue("cadre");
    document.getElementById('voyage').value = getCookieValue("voyage");
    document.getElementById('acces').value = getCookieValue("acces");
    document.getElementById('accesOutput').value = getCookieValue("acces");

    if (getCookieValue("cadre") == "")
    {
        document.getElementById('cadre').value = "Professionnel";
    }
    if (getCookieValue("voyage") == "")
    {
        document.getElementById('voyage').value = "Avion";
    }
    if (getCookieValue("acces") == "")
    {
        document.getElementById('acces').value = "5";
    }
}