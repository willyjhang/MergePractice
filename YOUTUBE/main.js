var player;
var currentplay=0;

function onYouTubeIframeAPIReady(){ 
    player =new YT.Player("player",{
        height:"390",
        width:"640",
        videoId:playList[currentplay],
        playerVars:{
        
            "autoplay":0,
            "controls":0,
            "start":playTime[currentplay][0],
            "end":playTime[currentplay][1],
            "showinfo":0,
            "rel":0,
            "iv_load_policy":3
            
        },
        events:{
        
            "onReady":onPlayerReady,
            "onStateChange":onPlayerStateChange
        }
    });

}
function onPlayerReady(event){
    $("#playButton").click(function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}
function onPlayerStateChange(event){

    if(event.data==1&&(Math.floor(player.getCurrentTime())==playTime[currentplay][1]))
    {
    
        if(currentplay<playList.length-1)
        {
            currentplay++;
            player.loadVideoById({
                "videoId":playList[currentplay],
                "startSeconds":playTime[currentplay][0],
                "endSeconds":playTime[currentplay][1],
                "suggestedQuality":"large"
            });
        }
    }
    if(player.getVideoLoadedFraction()>0)
    {
        $("h2").text(player.getVideoData().title);
    }    
}

