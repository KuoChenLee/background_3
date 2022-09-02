var colors="d496a7-9d695a-78e0dc-8eedf7-2f2504-594e36-7e846b-a5ae9e-d0ddd7-d496a7--dbf9f4-e6fdff-d9d7dd-b07bac-5f7367-564787-dbcbd8-f2fdff-9ad4d6-101935-c1aba6-533b4d-f564a9-faa4bd-fae3c6-bbdbb4-fcf0cc-4392f1-ece8ef-e3ebff-e7f0ff-dc493a".split("-").map(a=>"#"+a)

function setup() {
	createCanvas(2200, 730);
	background(100);
	changeLightColor()

}


function draw() {
	
	translate(width/2,height/2);
	rectMode(CENTER);
	
	background("#95B8D1")
	push()
	noStroke()
	// strokeWeight(5)
	//text
	fill(255)
	rect(200, -165, 150, 50,20);
	fill(0)
	let s='Different equipment.'
	text(s,150, -165)
	
	fill(255)
	rect(-260, -130, 150, 50,20);
	fill(0)
	let t='Different special effects.'
	text(t,-320, -130)
	
	fill(255)
	rect(200, 130, 130, 50,20);
	fill(0)
	let u='Different colors.'
	text(u,150, 130)
	pop()
	fill(colors[0])
	//head
	rect(-30,-150,150,130,20);
	//eyes
	
	fill(0)
	rect(-70,-150,50,30)
	rect(10,-150,50,30)
	push()
	drawingContext.shadowColor=lightColor;
	drawingContext.shadowBlur=30;
	fill(lightColor)
	
	rect(-70,-150,30,15)
	rect(10,-150,30,15)
	pop()
	rect(-30,-170,160,5)
	// circle(-30,-200,25)
	// circle(30,-200,25)
	// fill(255)
	// circle(-30,-200,15)
	// circle(30,-200,15)
	//眉毛

	push()
			fill(colors[16])
		rotate(0.3+sin(frameCount/30)/10)
		rect(-60,-200,50,10);
	pop()
	push()
			fill(colors[17])
		rotate(-0.25+sin(frameCount/50)/10)
		rect(0,-200,50,10);
	pop()
	//mouth
	// fill(colors[3])
	// rect(0,-150,50,20)
	//ears
	fill(colors[18])
	rect(-115,-150,20,50,10)
	rect(55,-150,20,50,10)
	//neck
	fill(colors[5])
	rect(-30,-80,20,10)
	fill(colors[6])
	rect(-30,-65,20,15)
	//body
	fill(colors[7])
	rect(-30,20,150,150,20)
	//shoulder
	// push()
// 		fill(colors[8])
// 		rotate(0.01+sin(frameCount/50)/10)
			// rotateY(millis() / 1000);
// 		rect(-85,-80,40,10)
// 		fill(colors[9])
// 		circle(-100,-80,25)
// 		fill(colors[10])
// 		circle(-100,-80,15)	
// 		fill(colors[11])
// 		rect(-100,-60,10,20)
// 	fill(colors[12])
// 	rect(-100,-15,20,80,5)
// 	fill(colors[13])
// 	rect(-100,30,10,10)
// 	fill(colors[14])
// 	rect(-90,30,10,10)
// 	rect(-110,30,10,10)
// 	fill(colors[15])
// 	rect(-90,40,10,20)
// 	rect(-110,40,10,20)
		
// 	pop()
// 	push()
// 	fill(colors[8])
// 	rect(85,-80,20,10)
// 	fill(colors[9])
// 	circle(100,-80,25)
// 	pop()
	fill(colors[8])
	rect(-115,-30,20,10)
	rect(55,-30,20,10)
	fill(colors[9])
	circle(-130,-30,25)
	circle(70,-30,25)
	fill(colors[10])
	circle(-130,-30,15)
	circle(70,-30,15)
	fill(colors[11])
	rect(-130,-10,10,20)
	rect(70,-10,10,20)
	fill(colors[12])
	rect(-130,35,20,80,5)
	rect(70,35,20,80,5)
	fill(colors[13])
	rect(-130,80,10,10)
	rect(70,80,10,10)
	fill(colors[14])
	rect(-120,80,10,10)
	rect(-140,80,10,10)
	fill(colors[15])
	rect(-120,90,10,20)
	rect(-140,90,10,20)
	fill(colors[14])
	rect(60,80,10,10)
	rect(80,80,10,10)
	fill(colors[15])
	rect(60,90,10,20)
	rect(80,90,10,20)
	//leg
	fill(colors[16])
	rect(-55,105,10,20)
	rect(-5,105,10,20)
	fill(colors[17])
	rect(-55,180,40,150,10)
	rect(-5,180,40,150,10)
	fill(colors[18])
	rect(-55,260,20,10)
	rect(-5,260,20,10)
	fill(colors[19])
	rect(-55,280,50,30,10)
	rect(-5,280,50,30,10)
	
	//mouth
	stroke(0)
	strokeWeight(5);
	curve(-110,-150,-60,-120,-60,-90,-110,-60)
	stroke(0)
	strokeWeight(5);
	curve(-110,-130,-50,-100,0,-100,50,-130)
	
	//heart
	
	fill(lightColor)
	circle(-30,-20,20)
	
	//line
	push()
	strokeWeight(2)
	fill(0)
	line(120, -165,50,-150)
	line(120, -155,-30,-30)
	line(-180, -130,-80,-150)
	line(-180, -120,-30,-20)
	line(-180, -140,-30,-200)
	line(120,130,-30,80)
	line(120,120,80,100)
	line(120,110,30,-100)
	line(120,140,0,200)
	line(120,155,0,280)
	pop()
	if(frameCount%5==0){
		changeLightColor()
	}
}


function mousePressed(){
	changeLightColor()
}
function changeLightColor(){
	lightColor=color(random([
		"#7FFFD4",
		"#7FFF00",
		"#008B8B",
		"#9932CC",
		"#FFB6C1",
		"#000080",
		"#8B4513"
	]))
}
