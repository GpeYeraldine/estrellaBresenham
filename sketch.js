const p1 = {x: 0, y:0}
const p2 = {x: this.innerWidth, y: this.innerHeight}

const p3 = {x: (this.innerWidth/2), y: 0}
const p4 = {x: (this.innerWidth/2), y: this.innerHeight}

const p5 = {x: 0, y: (this.innerHeight/2)}
const p6 = {x: this.innerWidth, y: (this.innerHeight/2)}

const p7 = {x: this.innerWidth, y: 0}
const p8 = {x: 0, y: this.innerHeight}

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {

	bresenham(p1, p2)
	bresenham(p3, p4)
	bresenham(p5, p6)
	bresenham(p7, p8)
	noLoop()

}

function bresenham(p1, p2){
	
	let ejeY
	let ejeX
	let x
	let y
	let p
	let incE
	let incNE

	let dx = p2.x - p1.x
	let dy = p2.y - p1.y


	if(dy < 0) {
		dy = -dy
		ejeY = -1
	}else{
		ejeY = 1
	}

	if(dx < 0) {
		dx = -dx
		ejeX = -1
	}else{
		ejeX = 1
	}

	x = p1.x
	y = p1.y
	
	point(x,y)

	if(dx > dy) {

		p = 2 * dy - dx
		incE = 2 * dy
		incNE = 2 * (dy - dx)

		while(x != p2.x) {
			x += ejeX

			if(p < 0) {
				p += incE
			}else {
				y += ejeY
				p += incNE
			}

			point(x,y)
		}
	
	}else{

		p = 2 * dx - dy
		incE = 2 * dx
		incNE = 2 * (dx - dy)

		while(y != p2.y) {
			y += ejeY

			if(p < 0) {
				p += incE
			}else {
				x += ejeX
				p += incNE
			}

			point(x,y)

		}
	}
}