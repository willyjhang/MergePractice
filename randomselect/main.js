$(document).ready(function()
{
    $("input").click(function()
                     {
        var numberoflist=$("#choice li").length;
        var randomnumber=Math.floor(Math.random()*numberoflist);
        //$("h1").text($("li").eq(1).text());
        $("h1").text($("#choice li").eq(randomnumber).text());
        
    });       
});