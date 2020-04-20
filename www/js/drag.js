$(document).ready(function(){
var defaultOptions = {
      colors : ['#2DE7F0', '#FA5C46'],
      num_sprites: 22,
      lifespan: 1000,
      radius: 300,
      sprite_size: 10,
      shape: 'circle',
      gravity: 'false',
    }
var opts = $.extend({}, defaultOptions, opts);


    var $target = this,
    num_sprites = opts.num_sprites,
    colors = opts.colors,
    allSprites = [],
    radius = opts.radius,
    sprite_size = opts.sprite_size,
    shape = opts.shape.toLowerCase(),
    gravity = opts.gravity,
    image = opts.image,
    lifespan = opts.lifespan,
    fadetoOpacity = 100;

function makeSprites(centerX, centerY){
    for (var i=0; i < num_sprites; i++){
      //make a div
      var newsprite = document.createElement('div');
      var rotateDeg = Math.random()*360

      if (gravity == "true" || gravity == true){
        var radSpread = Math.random() * (radius*2 - radius/4) + radius/4

      } else {
        var radSpread = Math.random() * (radius + radius) -radius
      }

      if (image){

        $(newsprite).css({
          "background-size":"contain",
          backgroundImage: "url("+image+")"
        });

      };

      //give the div css, based on client's parameters
      if (shape == 'circle'){

      $(newsprite).css({
          backgroundColor: colors[i % colors.length],
          left: centerX,
          top: centerY,
          width: sprite_size,
          height: sprite_size,
          borderRadius: "100%",
          position: "absolute"

        });

      } else if (shape == 'square'){
        $(newsprite).css({
            backgroundColor: colors[i % colors.length],
            left: centerX,
            top: centerY,
            width: sprite_size,
            height: sprite_size,
            borderRadius: "0px",
            position: "absolute"
          });

      } else if (shape == "triangle"){
        fadetoOpacity = 0;

        $(newsprite).css({
            width: '0px',
            height: '0px',
            "border-top": sprite_size + "px solid transparent",
            "border-right": sprite_size+ "px solid transparent",

            "border-top":sprite_size +"px solid "+ colors[i % colors.length],

            left: centerX,
            top: centerY,

            position: "absolute",
            "-webkit-transform": "rotate("+rotateDeg+"deg)",
            "-moz-transform": "rotate("+rotateDeg+"deg)",
            "-o-transform": "rotate("+rotateDeg+"deg)",
            "-ms-transform": "rotate("+rotateDeg+"deg)",
            "transform": "rotate("+rotateDeg+"deg)"
          });

      } else {
        if (i==0){

          console.log("the shape chosen on this object is invalid. Try 'circle', 'triangle', or 'square'")

        }

      }



        $(newsprite).animate({
          opacity: [ fadetoOpacity, "swing" ],
          left : centerX + Math.random() * (radius + radius) -radius,
          top : centerY + radSpread,
          width: [0,"easeInQuart"],
          height: [0,"easeInQuart"]
        }, lifespan, 'easeOutQuad' ,function() {

          document.body.removeChild(this)


        });

      document.body.appendChild(newsprite);

    }


  }

  



    $( "#draggable2" ).draggable({ revert: "invalid" });
$(" #draggable1" ).draggable({ revert: "invalid" });
$(" #draggable3" ).draggable({ revert: "invalid" });
$(" #draggable4 " ).draggable({ revert: "invalid" });
$(" #draggable5 " ).draggable({ revert: "invalid" });
$(" #draggable6 " ).draggable({ revert: "invalid" });
$(" #draggable7 " ).draggable({ revert: "invalid" });
$(" #draggable8 " ).draggable({ revert: "invalid" });
$(" #draggable9 " ).draggable({ revert: "invalid" });
$(" #draggable10 " ).draggable({ revert: "invalid" });
$(" #draggable11 " ).draggable({ revert: "invalid" });
$(" #draggable12 " ).draggable({ revert: "invalid" });

$("#help").click(function(){
	var ansval = '';
//console.log($(".dropp img").attr("src"));
	$(".dropp img").each(function(index){

		var imgdata = $(this).attr("src");
		//alert(imgdata);
		if(imgdata == "../img/qmark.png")
		{
		
			ansval = "../img/" + vals[index];
			$(this).attr("src",ansval);
			return false;
		}
		
		
	});
	$(".drag img").each(function(inde){
		var rem = $(this).attr("src");
		if(rem == ansval)
		{
			$(this).parent().remove();
			return false;
		}
	});
	var stopflag = 1;
$(".dropp img").each(function(){
		if($(this).attr("src") == "../img/qmark.png")
		{
			stopflag = 0;
			return false;
		}
		
});
if(stopflag == 1)
{
$("#clap").get(0).play();
$.fn.displayOverlay('<a href="drag_menu.html"><img src="../img/quiz_end1.png" /></a>');
}
	
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


$.fn.dropsound = function() {
$("#dropsound").get(0).play();
}



 
$( "#droppable1" ).droppable({
      accept: "#draggable1",      
     drop: function( event, ui ) {
var item = ui.draggable;
var newsrc = item.find("img").attr("src");
$(this).find("img").attr("src",newsrc);
$(item).find("img").remove();
       var centerX = $(this).width()/2 + $(this).offset().left;
        var centerY = $(this).offset().top+ $(this).height()/2;
 $.fn.dropsound();
makeSprites(centerX, centerY);
var stopflag = 1;
$(".dropp img").each(function(){
		if($(this).attr("src") == "../img/qmark.png")
		{
			stopflag = 0;
			return false;
		}
		
});
if(stopflag == 1)
{
$("#clap").get(0).play();
$.fn.displayOverlay('<a href="drag_menu.html"><img src="../img/quiz_end1.png" /></a>');
}
	
        }
    });
$( "#droppable2" ).droppable({
      accept: "#draggable2",      
     drop: function( event, ui ) {
var item = ui.draggable;
var newsrc = item.find("img").attr("src");
$(this).find("img").attr("src",newsrc);
$(item).find("img").remove();
	var centerX = $(this).width()/2 + $(this).offset().left;
        var centerY = $(this).offset().top+ $(this).height()/2;
$.fn.dropsound();

makeSprites(centerX, centerY);
var stopflag = 1;
$(".dropp img").each(function(){
		if($(this).attr("src") == "../img/qmark.png")
		{
			stopflag = 0;
			return false;
		}
		
});
if(stopflag == 1)
{
$("#clap").get(0).play();
$.fn.displayOverlay('<a href="drag_menu.html"><img src="../img/quiz_end1.png" /></a>');
}
        }
    });
$( "#droppable3" ).droppable({
      accept: "#draggable3",      
     drop: function( event, ui ) {
var item = ui.draggable;
var newsrc = item.find("img").attr("src");
$(this).find("img").attr("src",newsrc);
$(item).find("img").remove();
	var centerX = $(this).width()/2 + $(this).offset().left;
        var centerY = $(this).offset().top+ $(this).height()/2;
$.fn.dropsound();
makeSprites(centerX, centerY);
var stopflag = 1;
$(".dropp img").each(function(){
		if($(this).attr("src") == "../img/qmark.png")
		{
			stopflag = 0;
			return false;
		}
		
});
if(stopflag == 1)
{
$("#clap").get(0).play();
$.fn.displayOverlay('<a href="drag_menu.html"><img src="../img/quiz_end1.png" /></a>');
}
        }
    });
$( "#droppable4" ).droppable({
      accept: "#draggable4",      
     drop: function( event, ui ) {
var item = ui.draggable;
var newsrc = item.find("img").attr("src");
$(this).find("img").attr("src",newsrc);
$(item).find("img").remove();
var centerX = $(this).width()/2 + $(this).offset().left;
        var centerY = $(this).offset().top+ $(this).height()/2;
$.fn.dropsound();
makeSprites(centerX, centerY);
var stopflag = 1;
$(".dropp img").each(function(){
		if($(this).attr("src") == "../img/qmark.png")
		{
			stopflag = 0;
			return false;
		}
		
});
if(stopflag == 1)
{
$("#clap").get(0).play();
$.fn.displayOverlay('<a href="drag_menu.html"><img src="../img/quiz_end1.png" /></a>');
}
        }
    });
$( "#droppable5" ).droppable({
      accept: "#draggable5",      
     drop: function( event, ui ) {
var item = ui.draggable;
var newsrc = item.find("img").attr("src");
$(this).find("img").attr("src",newsrc);
$(item).find("img").remove();
var centerX = $(this).width()/2 + $(this).offset().left;
        var centerY = $(this).offset().top+ $(this).height()/2;
$.fn.dropsound();
makeSprites(centerX, centerY);
var stopflag = 1;
$(".dropp img").each(function(){
		if($(this).attr("src") == "../img/qmark.png")
		{
			stopflag = 0;
			return false;
		}
		
});
if(stopflag == 1)
{
$("#clap").get(0).play();
$.fn.displayOverlay('<a href="drag_menu.html"><img src="../img/quiz_end1.png" /></a>');
}
        }
    });
$( "#droppable6" ).droppable({
      accept: "#draggable6",      
     drop: function( event, ui ) {
var item = ui.draggable;
var newsrc = item.find("img").attr("src");
$(this).find("img").attr("src",newsrc);
$(item).find("img").remove();
var centerX = $(this).width()/2 + $(this).offset().left;
        var centerY = $(this).offset().top+ $(this).height()/2;
$.fn.dropsound();
makeSprites(centerX, centerY);
var stopflag = 1;
$(".dropp img").each(function(){
		if($(this).attr("src") == "../img/qmark.png")
		{
			stopflag = 0;
			return false;
		}
		
});
if(stopflag == 1)
{
$("#clap").get(0).play();
$.fn.displayOverlay('<a href="drag_menu.html"><img src="../img/quiz_end1.png" /></a>');
}
        }
    });
$( "#droppable7" ).droppable({
      accept: "#draggable7",      
     drop: function( event, ui ) {
var item = ui.draggable;
var newsrc = item.find("img").attr("src");
$(this).find("img").attr("src",newsrc);
$(item).find("img").remove();
var centerX = $(this).width()/2 + $(this).offset().left;
        var centerY = $(this).offset().top+ $(this).height()/2;
$.fn.dropsound();
makeSprites(centerX, centerY);
var stopflag = 1;
$(".dropp img").each(function(){
		if($(this).attr("src") == "../img/qmark.png")
		{
			stopflag = 0;
			return false;
		}
		
});
if(stopflag == 1)
{
$("#clap").get(0).play();
$.fn.displayOverlay('<a href="drag_menu.html"><img src="../img/quiz_end1.png" /></a>');
}
        }
    });

$( "#droppable8" ).droppable({
      accept: "#draggable8",      
     drop: function( event, ui ) {
var item = ui.draggable;
var newsrc = item.find("img").attr("src");
$(this).find("img").attr("src",newsrc);
$(item).find("img").remove();
var centerX = $(this).width()/2 + $(this).offset().left;
        var centerY = $(this).offset().top+ $(this).height()/2;
$.fn.dropsound();
makeSprites(centerX, centerY);
var stopflag = 1;
$(".dropp img").each(function(){
		if($(this).attr("src") == "../img/qmark.png")
		{
			stopflag = 0;
			return false;
		}
		
});
if(stopflag == 1)
{
$("#clap").get(0).play();
$.fn.displayOverlay('<a href="drag_menu.html"><img src="../img/quiz_end1.png" /></a>');
}
        }
    });
$( "#droppable9" ).droppable({
      accept: "#draggable9",      
     drop: function( event, ui ) {
var item = ui.draggable;
var newsrc = item.find("img").attr("src");
$(this).find("img").attr("src",newsrc);
$(item).find("img").remove();
var centerX = $(this).width()/2 + $(this).offset().left;
        var centerY = $(this).offset().top+ $(this).height()/2;
$.fn.dropsound();
makeSprites(centerX, centerY);
var stopflag = 1;
$(".dropp img").each(function(){
		if($(this).attr("src") == "../img/qmark.png")
		{
			stopflag = 0;
			return false;
		}
		
});
if(stopflag == 1)
{
$("#clap").get(0).play();
$.fn.displayOverlay('<a href="drag_menu.html"><img src="../img/quiz_end1.png" /></a>');
}
        }
    });

$( "#droppable10" ).droppable({
      accept: "#draggable10",      
     drop: function( event, ui ) {
var item = ui.draggable;
var newsrc = item.find("img").attr("src");
$(this).find("img").attr("src",newsrc);
$(item).find("img").remove();
var centerX = $(this).width()/2 + $(this).offset().left;
        var centerY = $(this).offset().top+ $(this).height()/2;
$.fn.dropsound();
makeSprites(centerX, centerY);
var stopflag = 1;
$(".dropp img").each(function(){
		if($(this).attr("src") == "../img/qmark.png")
		{
			stopflag = 0;
			return false;
		}
		
});
if(stopflag == 1)
{
$("#clap").get(0).play();
$.fn.displayOverlay('<a href="drag_menu.html"><img src="../img/quiz_end1.png" /></a>');
}
        }
    });
$( "#droppable11" ).droppable({
      accept: "#draggable11",      
     drop: function( event, ui ) {
var item = ui.draggable;
var newsrc = item.find("img").attr("src");
$(this).find("img").attr("src",newsrc);
$(item).find("img").remove();
var centerX = $(this).width()/2 + $(this).offset().left;
        var centerY = $(this).offset().top+ $(this).height()/2;
$.fn.dropsound();
makeSprites(centerX, centerY);
var stopflag = 1;
$(".dropp img").each(function(){
		if($(this).attr("src") == "../img/qmark.png")
		{
			stopflag = 0;
			return false;
		}
		
});
if(stopflag == 1)
{
$("#clap").get(0).play();
$.fn.displayOverlay('<a href="drag_menu.html"><img src="../img/quiz_end1.png" /></a>');
}
        }
    });
$( "#droppable12" ).droppable({
      accept: "#draggable12",      
     drop: function( event, ui ) {
var item = ui.draggable;
var newsrc = item.find("img").attr("src");
$(this).find("img").attr("src",newsrc);
$(item).find("img").remove();
var centerX = $(this).width()/2 + $(this).offset().left;
        var centerY = $(this).offset().top+ $(this).height()/2;
$.fn.dropsound();
makeSprites(centerX, centerY);
var stopflag = 1;
$(".dropp img").each(function(){
		if($(this).attr("src") == "../img/qmark.png")
		{
			stopflag = 0;
			return false;
		}
		
});
if(stopflag == 1)
{
$("#clap").get(0).play();
$.fn.displayOverlay('<a href="drag_menu.html"><img src="../img/quiz_end1.png" /></a>');
}

        }
    });





    $( "#droppable" ).droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

});