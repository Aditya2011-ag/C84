canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;

background_image="mars.jpg";
rover_image="rover.png";

function add(){

    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;
    
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}

function uploadbackground(){

    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){

    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){

    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed =="38"){

        up();
        console.log("up");
    }

    if (keyPressed =="40"){

        down();
        console.log("down");
    }

    if (keyPressed =="37"){

        left();
        console.log("left");
    }

    if (keyPressed =="39"){

        right();
        console.log("right");
    }
}

function up(){

    if(rover_y>=0){
     rover_y=rover_y-10;
     console.log("when up pressed x="+rover_x+"y="+rover_y);
     uploadbackground();
     uploadrover();
    }
}

function down(){

    if(rover_y<=500){
     rover_y=rover_y+10;
     console.log("when down pressed x="+rover_x+"y="+rover_y);
     uploadbackground();
     uploadrover();
    }
}

function right(){

    if(rover_x<=700){
     rover_x=rover_x+10;
     console.log("when right pressed x="+rover_x+"y="+rover_y);
     uploadbackground();
     uploadrover();
    }
}

function left(){

    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left pressed x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();    
    } 
}

nasa_mars_array=["image_1.jpg","image_2.jpg","image_3.jpg"];
random_number=Math.floor(Math.random()*3);
background_image=nasa_mars_array[random_number];
console.log("bg="+background_image);