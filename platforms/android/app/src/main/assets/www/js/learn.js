$(document).ready(function(){
var wid=1;
$("img").effect("bounce",{times: 4},5000);


$(document).on("click","#close",function(){
	$("#overlay").remove();
	$('#bg').get(0).play();
	$("#speaker").attr('src','../img/speaker.png');


});
$(document).on("click","#mainsrc",function(){

val = $(this).attr("alt");
//arr = val.split(".");
//myval = arr[0];

	$("#myvoice").get(0).src = "../img/" + val + ".mp3";
$("#myvoice").get(0).play();


});


$(document).on("click",".clickme", function()
{
$('#bg').each(function(){
	this.pause(); // Stop playing
	$("#speaker").attr('src',"../img/speakerout.png");
 });
//$(this).hide(10);
$.fn.displayOverlay('<img align="right" id="close" src="../img/close-icon.png" width="100" height="100" style="position:absolute;" /><img style="max-width:100%;min-height:70%;" id="mainsrc" src="' + $(this).attr("src") + '"  />');
//$(this).show( "scale", {percent: 200, direction: 'horizontal' },2000 );
myval = $(this).attr("alt");
//arr = val.split(".");
//myval = arr[0];
$("#myvoice").get(0).src = "../img/" + myval + ".mp3";
$("#myvoice").get(0).play();

});

$.fn.displayOverlay = function (text) {
    $("<table id='overlay'><tbody><tr><td>" + text + "</td></tr></tbody></table>").css({
        "position": "fixed",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "background-color": "rgba(0,0,0,0.8)",
        "z-index": 10000,
        "vertical-align": "middle",
        "text-align": "center",
        "color": "#fff",
        "font-size": "30px",
        "font-weight": "bold",
        "cursor": "hand"
    }).appendTo("body");
}
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
function array_gen(varisai)
{
	var arr;
	switch(varisai)
	{
		case "ka":
			arr = ['ka','kaa','ki','kee','ku','kuu','kei','keei','kai','koo-o','kooooo','kow'];
		break;
		case "nga":
			arr = ['nga','ngaa','ngi2','ngii2','ngu','nguu','ngei','ngeei','ngaai','ngooo','ngoooii','ngow'];
		break;
		case "cha":
			arr = ['cha','chaa','chi','chii','chu','chooo','che','cheei','chai','cho','choooi','chow'];
		break;
		case "ngya":
			arr = ['ngya','ngyaa','ngi','ngii','zgu','zguuu','zge','zgeei','zgaai','zgoo','zgooooo','zgow'];
		break;
		case "da":
			arr = ['da','daa','de','dee','du','duuu','dei','deei','daai','do','doo','dow'];
		break;
		case "naa":
			arr = ['naa','naaa','ni','niii','nu','nuuu','ne','neeei','nai','no','noo','nowz'];
		break;
		case "tha":
			arr = ['tha','thaa','thi','thee','thu','thoo','thea','theei','thai','tho','thoe','thow'];
		break;
		case "na1":
			arr = ['na1','naa2','ni2','nii2','nu2','noo2','ne2','nee2','nai2','no2','no3','now2'];
		break;
		case "pa":
			arr = ['pa','paa','pi','pee','pu','poo','pea','peai','pai','po2','pooo2','pow'];
		break;
		case "ma":
			arr = ['ma','maa','mi','mee','mu','moo','may','maai','mai','mo2','moo2','mow'];
		break;
		case "ya":
			arr = ['ya','yaa','ye','yee','yu','yuu','yea','yeai','yai','yo','yoo','yow'];
		break;
		case "ra":
			arr = ['ra','raa','ri','rii','ru','roo','rei','reai','rai','ro','rooo','row'];
		break;
		case "la":
			arr = ['la','laa','li','lee','lu','loo','lea','leaa','lai','low','loww','love'];
		break;
		case "va":
			arr = ['va','vaa','vi','vii','vu','voo','vea','veeaa','vai','vo','voo','vow'];
		break;
		case "LLA":
			arr = ['LLA','LLAAA','LLI','LLEE','LOO2','LOOO','LLAI','LLEA','LEAAI','LLOW','LLOOW','LLOOVE'];
		break;
		case "llla":
			arr = ['llla','lllaaa','llli','lllee','lllu','llloo','lllea','llleaa','lllai','lllow','llloow','lllove'];
		break;
		case "tra":
			arr = ['tra','traa','tri','ttrree','tru','troo','trea','treaa','ttrrai','trroo','trrooo','trow'];
		break;
		case "nna":
			arr = ['nna','nnaa','nni','nnee','nnu','nnoo','nnea','nneaa','nnai','nnow','nnooww','nnoove'];
		break;
	}
	return arr;
}
function array_vertical_gen(varisai)
{
	var arr;
	switch(varisai)
	{
		case "ka":
			arr = ['ka','nga','cha','ngya','da','naa','tha','na1','pa','ma','ya','ra','la','va','LLA','llla','tra','nna'];
		break;
		case "kaa":
			arr = ['kaa','ngaa','chaa','ngyaa','daa','naaa','thaa','naa2','paa','maa','yaa','raa','laa','vaa','LLAAA','lllaaa','traa','nnaa'];
		break;
		case "ki":
			arr = ['ki','ngi2','chi','ngi','de','ni','thi','ni2','pi','mi','ye','ri','li','vi','LLI','llli','tri','nni'];
		break;
		case "kee":
			arr = ['kee','ngii2','chii','ngii','dee','niii','thee','nii2','pee','mee','yee','rii','lee','vii','LLEE','lllee','ttrree','nnee'];
		break;
		case "ku":
			arr = ['ku','ngu','chu','zgu','du','nu','thu','nu2','pu','mu','yu','ru','lu','vu','LOO2','lllu','tru','nnu'];
		break;
		case "kuu":
			arr = ['kuu','nguu','chooo','zguuu','duuu','nuuu','thoo','noo2','poo','moo','yuu','roo','loo','voo','LLOOO','llloo','troo','nnoo'];
		break;
		case "kei":
			arr = ['kei','ngei','che','zge','dei','ne','thea','ne2','pea','may','yea','rei','lea','vea','LLEA','lllea','trea','nnea'];
		break;
		case "keei":
			arr = ['keei','ngeei','cheei','zgeei','deei','neeei','theei','nee2','peai','maai','yeai','reai','leaa','veeaa','LEAAI','llleaa','treaa','nneaa'];
		break;
		case "kai":
			arr = ['kai','ngaai','chai','zgaai','daai','nai','thai','nai2','pai','mai','yai','rai','lai','vai','LLAI','lllai','ttrrai','nnai'];
		break;
		case "koo-o":
			arr = ['koo-o','ngooo','cho','zgoo','do','no','tho','no2','po2','mo2','yo','ro','low','vo','LLOW','lllow','trroo','nnow'];
		break;
		case "kooooo":
			arr = ['kooooo','ngoooii','choooi','zgooooo','doo','noo','thoe','no3','pooo2','moo2','yoo','rooo','loww','vooo','LLOOW','lllow','trrooo','nnooww'];
		break;
		case "kow":
			arr = ['kow','ngow','chow','zgow','dow','now','thow','now2','pow','mow','yow','row','love','vow','LLOOVE','lllove','trow','nnoove'];
		break;
		
	}
	return arr;
}