$(document).ready(function()
{
    var currentquiz =null;
    
    $("#startButton").click(function()
    {
        if(currentquiz==null)
        {
            currentquiz=0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            for (var x=0; x<questions[0].answers.length;x++)
            {
                $("#options").append("<input name ='options' type='radio' value="
                    +x+">"+"<label>"+questions[0].answers[x][0]+
                    "</label><br><br>");
                            
            }
            $("#startButton").attr("value","Next");
        }
        else
        {
            $.each($(":radio"),function(i,val)
            {
                if(val.checked)
                {
                    if(isNaN(questions[currentquiz].answers[i][1]))
                    {
                        var finalresult = questions[currentquiz].answers[i][1];
                        $("#question").text(finalAnswers[finalresult][0]);
                        $("#options").empty();
                        $("#options").append(finalAnswers[finalresult][1]+"<br><br>");
                        currentquiz=null;
                        $("#startButton").attr("value","重新開始");
                    }
                    else
                    {
                        currentquiz=questions[currentquiz].answers[i][1]-1;
                        $("#question").text(questions[currentquiz].question);
                        $("#options").empty();
                        for(var x=0;x<questions[currentquiz].answers.length;x++)
                        {
                            $("#options").append(
                                "<input name ='option' type='radio' value="+x+">"+"<label>"+questions[currentquiz].answers[x][0]+"</label><br><br>");
                            
                        }
                    }
                 return false;
                }
             });
        }
        
        
     });
});