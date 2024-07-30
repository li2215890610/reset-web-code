//分针
function Minute(color){
	Second.call(this, color || 'black')
}

Minute.prototype = Object.create(Second.prototype)
Minute.prototype.constructor = Minute

Minute.prototype.calcArgs = function(){
	this.duration = 3600
	this.zIndex = 8
	
	var time = new Date();
    var s = time.getSeconds() * -1;
    var m = time.getMinutes() * -1;
    this.delay = (m * 60) - (15 * 60) + s;
}
Minute.prototype.calcLayoutArgs = function(){
	this.radius = Control.radius * 0.8
	this.width = this.radius * 1.12
	this.height = this.radius * 0.03
}

