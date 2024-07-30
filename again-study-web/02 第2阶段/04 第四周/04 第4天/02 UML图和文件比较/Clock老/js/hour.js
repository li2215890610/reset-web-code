//时针
function Hour(color){
	Second.call(this, color || 'black')
}

Hour.prototype = Object.create(Second.prototype)
Hour.prototype.constructor = Hour

Hour.prototype.calcArgs = function(){
	this.duration = 43200
	this.zIndex = 8
	
	var time = new Date(); 
    var s = time.getSeconds() * -1;
    var m = time.getMinutes() * -1;
    var h = time.getHours();
    h = h > 12 ? h - 12 : h;
    h = h * -1;
    this.delay = (h * 60 * 60) - (3 * 60 * 60) + (m * 60) + s
}
Hour.prototype.calcLayoutArgs = function(){
	this.radius = Control.radius * 0.6
	this.width = this.radius * 1.13
	this.height = this.radius * 0.05
}