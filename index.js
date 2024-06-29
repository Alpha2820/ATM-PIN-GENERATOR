function pinGenerator()
{
    var str = "";
    for(var i = 0 ; i<4 ; i++)
    {
        str+=Math.floor(Math.random()*10);
    }
    document.getElementById('atmPin').value = str;
}