//秒针
function Second(color){
	this.fillColor = color || 'red'
	Control.call(this)
}

Second.prototype = Object.create(Control.prototype)
Second.prototype.constructor = Second

Second.prototype.calcArgs = function(){
	this.duration = 60
	this.zIndex = 9
	
	var time = new Date();
    var s = time.getSeconds() * -1;
    this.delay = s - 15;
}
Second.prototype.calcLayoutArgs = function(){
	this.radius = Control.radius * 0.9
	this.width = this.radius * 1.15
	this.height = this.radius * 0.01
}
Second.prototype.render = function(){
	this.calcArgs()
	
	Control.prototype.render.call(this)
	this.ele.style.backgroundColor = 'initial'
	this.ele.style.animationName = 'rotate'
	this.ele.style.animationTimingFunction = 'linear'
	this.ele.style.animationIterationCount = 'infinite'
	this.ele.style.animationDuration = this.duration + 's'
	this.ele.style.animationDelay = this.delay + 's'
	this.ele.style.zIndex = this.zIndex
	
	this.el = document.createElement('span')
	this.el.style.display = 'block'
	this.el.style.backgroundColor = this.fillColor
	this.ele.appendChild(this.el)
}
Second.prototype.layout = function(){
	this.calcLayoutArgs()
	
	this.ele.style.width = this.radius * 2 + 'px'
	this.ele.style.height = 10 + 'px'
	this.ele.style.top = Control.clientHeight / 2 - 5 + 'px'
	this.ele.style.left = Control.clientWidth / 2 - this.radius + 'px'
	
	this.el.style.width = this.width + 'px'
	this.el.style.height = this.height + 'px'
	this.el.style.marginTop = 5 - this.height / 2 + 'px'
	this.el.style.borderRadius = this.height / 2 + 'px'
}
