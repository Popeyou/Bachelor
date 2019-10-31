function normaliser ()
{   
    var chaine = document.getElementById('nom').value;
    var reg = "^[a-zA-Z-éè]{0,100}$";
    if (chaine.match(reg))
    {
        
    }
    else
    {
        document.getElementById('nom').style.borderWidth = "3px";
        document.getElementById('nom').style.borderColor = "red";
        document.getElementById('nom').style.color = "red";
    }

    chaine = chaine.toUpperCase();


    document.getElementById('nom').value = chaine;
}