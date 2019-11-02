function creerCookie(nom,valeur,jours) //nom du cookie / valeur à memoriser / nb de jours à garder cookie
{
    if(jours){
        var date = new Date();
        date.setTime(date.getTime()+(jours*24*60*60*1000)); //date convertit en j 
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = nom+"="+valeur+expires+"; path=/";
}

function recupererCookie(nom) //recuper le cookie par nom 
{
    var nomRC = nom + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i<cookie.split;i++){
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nomRC) ==0) return c.substring(nomRC.length,c.length); //retours la valeur de cookie si succès
    }
    return "inconnu"; //sinon retourne, peut etre mit a nul
}