//Note that Javascript does not have Liquid template syntax.
//I am actually curious to see if Javascript can even run.

//Hover over the image to start GIF animation.
$(document).ready(function(){
	//ID uses #.
	//Marble Run
	$("#project001").hover(
         //This function is mouseOver. GIF goes here.
         function(){
         	$(this).attr("src", "../assets/proj_marble_run.gif");
         },
         //This function is mouseOut. Static image goes here.
         function(){
         	$(this).attr("src", "../assets/proj_marble_run.png");
         }
 	);
 	//Pixavive Survival
 	$("#project002").hover(
         //This function is mouseOver. GIF goes here.
         function(){
         	$(this).attr("src", "../assets/proj_pixavive.gif");
         },
         //This function is mouseOut. Static image goes here.
         function(){
         	$(this).attr("src", "../assets/proj_pixavive.png");
         }
 	);
 	//Pokemon Walking
 	$("#project003").hover(
         //This function is mouseOver. GIF goes here.
         function(){
         	$(this).attr("src", "../assets/proj_walking.gif");
         },
         //This function is mouseOut. Static image goes here.
         function(){
         	$(this).attr("src", "../assets/proj_walking.png");
         }
 	);
 	//Bluetooth
 	$("#project004").hover(
         //This function is mouseOver. GIF goes here.
         //Note that due to the nature of the project, there is no GIF available.
         function(){
         	$(this).attr("src", "../assets/proj_bluetooth.png");
         },
         //This function is mouseOut. Static image goes here.
         function(){
         	$(this).attr("src", "../assets/proj_bluetooth.png");
         }
 	);
   	//Rotation
   	$("#project011").hover(
         //This function is mouseOver. GIF goes here.
         //Note that due to the nature of the project, there is no GIF available.
         function(){
            $(this).attr("src", "../assets/proj_rotation.gif");
         },
         //This function is mouseOut. Static image goes here.
         function(){
            $(this).attr("src", "../assets/proj_rotation.png");
         }
        $("#project012").hover(
         //This function is mouseOver. GIF goes here.
         //Note that due to the nature of the project, there is no GIF available.
         function(){
            $(this).attr("src", "../assets/proj_getdebt.gif");
         },
         //This function is mouseOut. Static image goes here.
         function(){
            $(this).attr("src", "../assets/proj_getdebt.png");
         }
        );
   );
});
