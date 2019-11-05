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