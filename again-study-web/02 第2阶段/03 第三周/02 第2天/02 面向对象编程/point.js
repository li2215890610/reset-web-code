//将与Point有关的数据和函数全部组合到一个对象中

//构造函数
function Point(x, y){
	this.x = x
	this.y = y
	
	this.color = 'red'
	this.radius = 5
	
	// show用来显示一个点
	this.show = function(){
		var div = document.createElement('div')		
		div.style.width = 2 * this.radius + 'px'
		div.style.height = 2 * this.radius + 'px'
		div.style.backgroundColor = this.color
		div.style.borderRadius = '50%'
		div.style.position = 'absolute'
		div.style.left = (this.x - this.radius) + 'px'
		div.style.top = (this.y - this.radius) + 'px'
		
		document.body.appendChild(div)
	}
	console.log(this)
    console.log('-'.repeat(30))
	// distanceTo用来计算两点之间的距离
	this.distanceTo = function(p){console.log(this)
		var a = this.x - p.x
		var b = this.y - p.y
		
		return Math.sqrt(a * a + b * b)
	}
	
	
	this.arcTo = function(p){
		var a = p.x - this.x
		var b = p.y - this.y
		
		return Math.atan(b/a)
	}
	
	this.degreeTo = function(p){
		var arc = this.arcTo(p)
		return arc * 180 / Math.PI
	}
}