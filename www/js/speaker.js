$(document).ready(function(){

$("#speaker").click(function(){
	if($("#bg").get(0).paused == false)
	{
		$("#bg").get(0).pause();
		$(this).attr('src',"../img/speakerout.png");
	}
	else {
		$("#bg").get(0).play();
		$(this).attr('src',"../img/speaker.png");
	}	
});

});