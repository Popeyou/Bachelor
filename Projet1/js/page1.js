function verifButton ()
{
    var radio1 = document.querySelector('input[name="radio1"]:checked').value;
    var radio2 = document.querySelector('input[name="radio2"]:checked').value;

    creerCookie("radio1",radio1,"15");
    creerCookie("radio2",radio2,"15");

    document.location.href="page2.html";
}
