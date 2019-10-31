function normaliserNom ()
{   
    var chaine = document.getElementById('nom').value;
    var reg = "^[a-zA-Z-éè]{0,100}$";
    if (chaine.match(reg))
    {
        chaine = chaine.toUpperCase();

        document.getElementById('nom').value = chaine;

        document.getElementById('nom').style.borderWidth = "3px";
        document.getElementById('nom').style.borderColor = "green";
        document.getElementById('nom').style.color = "green";
    }
    else
    {
        document.getElementById('nom').style.borderWidth = "3px";
        document.getElementById('nom').style.borderColor = "red";
        document.getElementById('nom').style.color = "red";
    }

    if (chaine == "")
    {
        document.getElementById('nom').style.borderWidth = "3px";
        document.getElementById('nom').style.borderColor = "red";
        document.getElementById('nom').style.color = "red";
    }
}

function normaliserPrenom ()
{   
    var pre = document.getElementById('prenom').value;
    var regex = "^[a-zA-Z-éè]{0,100}$";
    if (pre.match(regex))
    {
        pre = pre.charAt(0).toUpperCase() + pre.substring(1).toLowerCase(); 

        document.getElementById('prenom').value = pre;

        document.getElementById('prenom').style.borderWidth = "3px";
        document.getElementById('prenom').style.borderColor = "green";
        document.getElementById('prenom').style.color = "green";
    }
    else
    {
        document.getElementById('prenom').style.borderWidth = "3px";
        document.getElementById('prenom').style.borderColor = "red";
        document.getElementById('prenom').style.color = "red";
    }

    if (pre == "")
    {
        document.getElementById('prenom').style.borderWidth = "3px";
        document.getElementById('prenom').style.borderColor = "red";
        document.getElementById('prenom').style.color = "red";
    }
}