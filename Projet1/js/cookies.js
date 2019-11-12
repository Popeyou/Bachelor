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

function getCookieValue(a) 
{
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

function deleteBandeau()
{
    document.getDocumentById("bandeau").style.visibility="collapse";
}

function deleteAllCookies() 
{
    document.cookie.split(";").forEach(function(c) 
    {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
    });
    document.location.href="index.html";
}



