var player, player_img;
var bg, bg_img;
var mp, mp_img;
var tri, tri_img;
var wood1, wood1_img;
var wood2, wood2_img;
var ground;

function preload(){
    player_img = loadImage("Images/player.png");
    bg_img = loadImage("Images/bg.jpg");
    mp_img = loadImage("Images/mp.jpg");
    tri_img = loadImage("Images/tri.png");
    wood1_img = loadImage("Images/wood1.png");
    wood2_img = loadImage("Images/wood2.png");
}
function setup(){
    var canvas = createCanvas(400,400);
    
    ground = createSprite(200,400,400,50);

    player = createSprite(250,300,5,5);
    player.addImage("player", player_img);
    player.scale = 0.07;

    wood2 = createSprite(250,360,5,5);
    wood2.addImage("wood2", wood2_img);
    wood2.scale = 0.7;

    tri = createSprite(100,310,5,5);
    tri.addImage("tri", tri_img);
    tri.scale = 0.7;

    wood1 = createSprite(230,220,5,5);
    wood1.addImage("wood1", wood1_img);
    wood1.scale = 0.5;

    mp = createSprite(350,130,5,5);
    mp.addImage("mp", mp_img);
    mp.scale = 0.07;
}

function draw(){
    background(bg_img);
    
    player.velocityY = player.velocityY + 0.8

    if(keyDown("space")){
        player.y = player.y - 12;
    }

    if(keyDown("left_arrow")){
        player.x = player.x - 5;
    }

    if(keyDown("right_arrow")){
        player.x = player.x + 5;
    }

    player.collide(wood1);
    player.collide(wood2);
    player.collide(tri);
    player.collide(mp);
    player.collide(ground);

    drawSprites();
    
}   
  
