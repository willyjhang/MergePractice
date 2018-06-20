var mapArray,ctx,currentImgMainx,currentImagmainy;
var imgmoutain,imgmain,imgenemy;

$(document).ready(function()
{
    mapArray=[0,1,1,0,0,0,3,1,2];
    ctx=$("#mycanvas")[0].getContext("2d");
    
    
    imgmain = new Image();
    imgmain.src="simplerpg/images/spriteSheet.png";
    currentImgMainx=0;
    currentImagmainy=0;
    imgmain.onload=function()
    {
        ctx.drawImage(imgmain,0,0,80,130,currentImgMainx,currentImagmainy,200,200);
    };
    imgmoutain =new Image();
    imgmoutain.src="simplerpg/images/material.png";
    imgenemy =new Image();
    imgenemy.src="simplerpg/images/Enemy.png";
    imgmoutain.onload =function()
    {
        imgenemy.onload = function()
        {
            for(var x in mapArray)
            {
                if(mapArray[x]==1)
                {
                    ctx.drawImage(imgmoutain,32,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                }else if(mapArray[x]==3)
                {
                    ctx.drawImage(imgenemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
                
                }
            }

        };
    };
    
});


$(document).keydown(function(event){
    var targetimgmainx,targetimgmainy,targetblock,cutimagepositionx;
    
    event.preventDefault();
    switch(event.which)
    {
        case 37:
            targetimgmainx=currentImgMainx-200;
            
            targetimgmainy =currentImagmainy;
            cutimagepositionx =175;
            break;
        case 38:
            targetimgmainx=currentImgMainx;
            targetimgmainy =currentImagmainy-200;
            cutimagepositionx =355;
            break;
        case 39:
            targetimgmainx=currentImgMainx+200;
            targetimgmainy =currentImagmainy;
            cutimagepositionx =540;
            break;
        case 40:
            targetimgmainx=currentImgMainx;
            targetimgmainy =currentImagmainy+200;
            cutimagepositionx =0;
            break;
            
        default:
            return;
    }
    
    if (targetimgmainx<=400 && targetimgmainx>=0 && targetimgmainy<=400 && targetimgmainy>=0)
    {
        targetblock=targetimgmainx/200 + targetimgmainy/200*3;
    }
    else
    {
        targetblock=-1;
    }
    ctx.clearRect(currentImgMainx,currentImagmainy,200,200);
    if  (targetblock==-1||mapArray[targetblock]==1||mapArray[targetblock]==3)
    {
        
    }
    else
    {
        $("#talkBox").text("");
        currentImgMainx=targetimgmainx;
        currentImagmainy=targetimgmainy;
    }
        ctx.drawImage(imgmain,cutimagepositionx,0,80,130,currentImgMainx,currentImagmainy,200,200);
    
    switch(mapArray[targetblock])
        {
            case undefined:
                $("#talkBox").text("邊界");
            break;
            case 1:
                $("#talkBox").text("有山");
            break;
            case 2:
                $("#talkBox").text("抵達終點!");
            break;
            case 3:
                $("#talkBox").text("嗨");
            break;    
                
        }
    

});