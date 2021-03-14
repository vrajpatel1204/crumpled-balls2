const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var bin1, bin2, bin3;
var paper;
var ground;
var bg;
var binImg;

function preload() {
	bg = loadImage("cbRoom.png");
	binImg = loadImage("dustbinFinal.png");
}

function setup() {
	createCanvas(1100, 800);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);


	bin1 = new Dustbin(610, 463, 50, 200);
	bin2 = new Dustbin(400, 463, 50, 200);
	bin3 = new Dustbin(505.5, 583, 260, 50);
	ground = new Ground(200, 580, 1000, 50);
	paper = new Paper(65, 540, 75);

}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(bg);
	fill("cyan");
	stroke(0);
	strokeWeight(4);
	textSize(35);
	textStyle("bold");
	text("Press the UP arrow key to throw the trash", 55, 100)
	textSize(27);
	text("Clean the room by throwing the paper crumble inside the dustbin", 25, 135)
	textSize(29.5);

	bin1.display();
	bin2.display()
	bin3.display()
	ground.display();
	paper.display();
	image(binImg,505,430,200,238);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 600, y: -1000 });
	}
}

